import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createServer } from "vite";

let vite;
let motor;
let alarmas;
let opciones;
let seguimiento;
let consejos;
let lenguaje;

before(async () => {
  vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
  motor = await vite.ssrLoadModule("/src/datos/motorOrientacion.ts");
  alarmas = await vite.ssrLoadModule("/src/evaluacion/senalesAlarmaGlobales.ts");
  opciones = await vite.ssrLoadModule("/src/evaluacion/opcionesEvaluacion.ts");
  seguimiento = await vite.ssrLoadModule("/src/evaluacion/preguntasSeguimiento.ts");
  consejos = await vite.ssrLoadModule("/src/evaluacion/consejosSintoma.ts");
  lenguaje = await vite.ssrLoadModule("/src/datos/lenguajeOrientativo.ts");
});

after(async () => {
  await vite?.close();
});

test("dolor de cabeza aislado no se convierte en migraña ni en señal de alarma", () => {
  const resultados = motor.orientarPorSintomas(["Dolor de cabeza"]);
  assert.equal(resultados.some((resultado) => resultado.condicion.id.includes("migr")), false);
  assert.equal(resultados.some((resultado) => resultado.requiereValoracionMedica), false);
  assert.equal(alarmas.detectarAlarmasGlobales(["Dolor de cabeza"]).length, 0);
});

test("dos síntomas generales de cefalea no bastan para etiquetar migraña", () => {
  const resultados = motor.orientarPorSintomas(["Dolor de cabeza", "Náuseas"]);
  assert.equal(resultados.some((resultado) => resultado.condicion.id.includes("migr")), false);
});

test("las características expresas sí permiten orientar una migraña", () => {
  const resultados = motor.orientarPorSintomas([
    "Dolor pulsátil",
    "Dolor en un lado de la cabeza",
    "Sensibilidad intensa a la luz",
    "Náuseas",
    "Vómitos",
  ]);
  assert.equal(resultados.some((resultado) => resultado.condicion.id.includes("migr")), true);
});

test("el dolor súbito e intenso sí activa la alarma específica", () => {
  const detectadas = alarmas.detectarAlarmasGlobales(["Dolor de cabeza súbito e intenso"]);
  assert.equal(detectadas.some((alarma) => alarma.id === "cefalea-secundaria"), true);
});

test("sensación de desmayo no se interpreta como pérdida de conciencia", () => {
  const detectadas = alarmas.detectarAlarmasGlobales(["Sensación de desmayo"]);
  assert.equal(detectadas.some((alarma) => alarma.id === "anafilaxia" || alarma.id === "neurologica"), false);
});

test("las opciones normales de heces y orina no generan cuadros ni alarmas", () => {
  for (const opcion of opciones.opcionesNormales) {
    assert.deepEqual(motor.orientarPorSintomas([opcion]), []);
    assert.deepEqual(alarmas.detectarAlarmasGlobales([opcion]), []);
  }
});

test("un único dato inespecífico no genera un cuadro concreto", () => {
  for (const categoria of opciones.categoriasEvaluacion) {
    for (const opcion of categoria.opciones) {
      if (motor.esIndicadorIndividual(opcion)) continue;
      assert.deepEqual(
        motor.orientarPorSintomas([opcion]),
        [],
        `Resultado excesivo con un solo dato: ${opcion}`,
      );
    }
  }
});

test("un conjunto consistente de síntomas generales sí puede orientar", () => {
  const gripe = motor.orientarPorSintomas(["Fiebre", "Escalofríos", "Dolor muscular"]);
  assert.equal(gripe.some((resultado) => resultado.condicion.id === "sindrome-gripal"), true);

  const hierro = motor.orientarPorSintomas(["Palidez", "Uñas frágiles", "Regla muy abundante"]);
  assert.equal(hierro.some((resultado) => resultado.condicion.id === "deficit-hierro-compatible"), true);
});

test("un dato objetivo reconocido puede orientar sin inventar síntomas", () => {
  const casos = [
    ["Hígado graso conocido", "higado-graso-metabolico"],
    ["Ferritina baja en analítica", "deficit-hierro-compatible"],
  ];
  for (const [dato, condicion] of casos) {
    const resultados = motor.orientarPorSintomas([dato]);
    assert.equal(
      resultados.some((resultado) => resultado.condicion.id === condicion),
      true,
      `No se reconoció el dato objetivo: ${dato}`,
    );
  }
});

test("síntomas digestivos genéricos no inventan diverticulosis", () => {
  const resultados = motor.orientarPorSintomas(["Dolor abdominal", "Estreñimiento", "Hinchazón abdominal"]);
  assert.equal(resultados.some((resultado) => resultado.condicion.id === "diverticulosis-compatible"), false);
});

test("Ninguno es excluyente y queda separado entre preguntas", () => {
  const preguntaCefalea = seguimiento.preguntasSeguimiento.find((p) => p.id === "cefalea-alarmas");
  const preguntaVertigo = seguimiento.preguntasSeguimiento.find((p) => p.id === "vertigo-alarmas");
  assert.ok(preguntaCefalea);
  assert.ok(preguntaVertigo);

  let respuestas = seguimiento.alternarRespuestaSeguimiento({}, preguntaCefalea, "Confusión");
  respuestas = seguimiento.alternarRespuestaSeguimiento(respuestas, preguntaCefalea, "Ninguno");
  assert.deepEqual(respuestas[preguntaCefalea.id], ["Ninguno"]);

  respuestas = seguimiento.alternarRespuestaSeguimiento(respuestas, preguntaVertigo, "Ninguno");
  respuestas = seguimiento.alternarRespuestaSeguimiento(respuestas, preguntaCefalea, "Desmayo");
  assert.deepEqual(respuestas[preguntaCefalea.id], ["Desmayo"]);
  assert.deepEqual(respuestas[preguntaVertigo.id], ["Ninguno"]);
});

test("el dolor de espalda aislado recibe autocuidado sin inventar una enfermedad", () => {
  const resultados = motor.orientarPorSintomas(["Dolor de espalda"]);
  const orientaciones = consejos.obtenerConsejosSintoma(["Dolor de espalda", "Ninguno"]);
  assert.deepEqual(resultados, []);
  assert.equal(orientaciones.length, 1);
  assert.equal(orientaciones[0].id, "dolor-espalda-simple");
  assert.equal(orientaciones[0].autocuidado.length > 0, true);
  assert.equal(orientaciones[0].urgente.length > 0, true);
});

test("la orientación general de espalda no se duplica", () => {
  const orientaciones = consejos.obtenerConsejosSintoma(["Dolor de espalda", "Dolor lumbar"]);
  assert.equal(orientaciones.length, 1);
});

test("los síntomas comunes aislados tienen autocuidado educativo", () => {
  const casos = [
    "Dolor de cabeza",
    "Dolor de cuello",
    "Dolor de garganta",
    "Tos seca",
    "Congestión nasal",
    "Náuseas",
    "Acidez",
    "Gases",
    "Estreñimiento",
    "Heces líquidas",
    "Mareo",
    "Cansancio",
    "Insomnio",
    "Picor",
    "Dolor muscular",
    "Dolor articular",
    "Regla dolorosa",
    "Orina oscura",
    "Boca seca",
    "Ansiedad",
  ];
  for (const dato of casos) {
    assert.equal(
      consejos.obtenerConsejosSintoma([dato]).length > 0,
      true,
      `Falta orientación general para: ${dato}`,
    );
  }
});

test("las señales de alarma no reciben una ficha de autocuidado simple", () => {
  const alarmasSinAutocuidado = [
    "Dolor de cabeza súbito e intenso",
    "Dolor lumbar intenso",
    "Dolor de pecho",
    "Falta de aire",
    "Pérdida de fuerza",
    "Desmayo",
    "Sangre roja en las heces",
    "Sangre en la orina",
    "Vómito con sangre",
  ];
  for (const dato of alarmasSinAutocuidado) {
    assert.deepEqual(
      consejos.obtenerConsejosSintoma([dato]),
      [],
      `Una señal de alarma recibió autocuidado simple: ${dato}`,
    );
  }
});

test("todas las fichas de autocuidado tienen seguridad y fuentes", () => {
  assert.equal(consejos.consejosSintoma.length >= 20, true);
  for (const consejo of consejos.consejosSintoma) {
    assert.equal(consejo.autocuidado.length > 0, true, consejo.id);
    assert.equal(consejo.consultar.length > 0, true, consejo.id);
    assert.equal(consejo.urgente.length > 0, true, consejo.id);
    assert.equal(consejo.fuentes.length > 0, true, consejo.id);
    for (const fuente of consejo.fuentes) assert.match(fuente.url, /^https:\/\//);
  }
});

test("dolor lumbar irradiado con hormigueo orienta ciatica sin diagnosticar", () => {
  const datos = ["Dolor lumbar", "Dolor que baja por la pierna", "Hormigueo en una pierna", "Dolor que llega hasta el pie"];
  const resultados = motor.orientarPorSintomas(datos);
  assert.equal(resultados.some((resultado) => resultado.condicion.id === "ciatica"), true);
  assert.equal(alarmas.detectarAlarmasGlobales(datos).some(a => a.id === "cola-caballo"), false);
});

test("dolor lumbar aislado no se etiqueta automaticamente como ciatica", () => {
  assert.equal(motor.orientarPorSintomas(["Dolor lumbar"]).some(r => r.condicion.id === "ciatica"), false);
});

test("alteraciones de esfinteres con dolor lumbar se marcan urgentes", () => {
  const detectadas = alarmas.detectarAlarmasGlobales(["Dolor lumbar", "Pérdida de control de orina o heces"]);
  assert.equal(detectadas.some(a => a.id === "cola-caballo" && a.nivel === "urgente"), true);
});

test("caso de ciatica no activa alertas respiratorias ni de compresion grave", () => {
  const sintomas = ["Dolor lumbar", "Dolor que baja por la pierna", "Hormigueo en una pierna", "Dolor que llega hasta el pie"];
  const alertas = alarmas.detectarAlarmasGlobales(sintomas);
  assert.deepEqual(alertas, []);
  assert.equal(motor.orientarPorSintomas(sintomas).some(r => r.condicion.id === "ciatica"), true);
});

test("una alerta respiratoria exige haber seleccionado un síntoma respiratorio", () => {
  const normales = alarmas.detectarAlarmasGlobales(["Dolor lumbar", "Dolor que baja por la pierna"]);
  assert.equal(normales.some(a => a.id === "respiratoria"), false);
  const respiratorios = alarmas.detectarAlarmasGlobales(["Dolor lumbar", "Falta de aire"]);
  assert.equal(respiratorios.some(a => a.id === "respiratoria"), true);
});


test("auditoria automatica del catalogo completo: estructura, acceso y seguridad", () => {
  const fichas = motor.todasLasCondiciones;
  const opcionesPublicas = new Set(opciones.categoriasEvaluacion.flatMap(c => c.opciones));
  const opcionesSeguimiento = new Set(seguimiento.preguntasSeguimiento.flatMap(p => p.opciones));
  const introducibles = new Set([...opcionesPublicas, ...opcionesSeguimiento]);
  const identidades = new Set();
  const errores = [];
  const advertencias = [];
  for (const ficha of fichas) {
    if (identidades.has(ficha.id)) errores.push("ID duplicado: " + ficha.id);
    identidades.add(ficha.id);
    for (const campo of ["id", "nombre", "descripcion"]) {
      if (!ficha[campo] || !String(ficha[campo]).trim()) errores.push(ficha.id + ": falta " + campo);
    }
    for (const campo of ["sintomas", "sintomasAlarma", "sintomasQueContradicen", "bibliografia", "cuandoAcudirMedico", "especialistaRecomendado", "contraindicaciones", "interacciones"]) {
      if (!Array.isArray(ficha[campo])) errores.push(ficha.id + ": campo sin lista " + campo);
    }
    if (!Array.isArray(ficha.sintomas) || !ficha.sintomas.length) {
      errores.push(ficha.id + ": sin síntomas");
      continue;
    }
    const accesibles = ficha.sintomas.filter(s => introducibles.has(s.nombre));
    if (!accesibles.length) advertencias.push(ficha.id + ": ningun sintoma coincide literalmente con las opciones disponibles");
    if (!ficha.bibliografia?.length) advertencias.push(ficha.id + ": sin fuentes bibliograficas");
    if (!ficha.cuandoAcudirMedico?.length) advertencias.push(ficha.id + ": sin criterios de derivacion");
  }
  console.log("AUDITORIA CATALOGO", JSON.stringify({
    fichas: fichas.length, opcionesPublicas: opcionesPublicas.size,
    opcionesSeguimiento: opcionesSeguimiento.size,
    problemasEstructurales: errores, advertenciasTotal: advertencias.length,
    primerosProblemasDeAcceso: advertencias.slice(0, 35)
  }, null, 2));
  assert.equal(errores.length, 0, "Se encontraron problemas estructurales en fichas clínicas");
});

test("alertas de emergencia no atribuyen anafilaxia o ictus con síntomas inespecíficos aislados", () => {
  for (const dato of ["Desmayo", "Falta de aire intensa"]) {
    const avisos = alarmas.detectarAlarmasGlobales([dato]);
    assert.equal(avisos.some(a => a.id === "anafilaxia"), false, dato);
    assert.equal(avisos.some(a => a.nivel === "urgente"), true, dato);
  }
  const perdidaFuerza = alarmas.detectarAlarmasGlobales(["Pérdida de fuerza"]);
  assert.equal(perdidaFuerza.some(a => a.id === "ictus-compatible"), false);
  assert.equal(perdidaFuerza.some(a => a.nivel === "urgente"), true);
  assert.equal(alarmas.detectarAlarmasGlobales(["Hinchazón de lengua o garganta"]).some(a => a.id === "anafilaxia"), true);
});


test("fiebre y dolor lumbar sin síntomas urinarios no se atribuyen automáticamente a infección renal", () => {
  const avisos = alarmas.detectarAlarmasGlobales(["Fiebre", "Dolor lumbar"]);
  assert.equal(avisos.some(a => a.id === "infeccion-urinaria-alta"), false);
  assert.equal(alarmas.detectarAlarmasGlobales(["Fiebre", "Dolor en el costado"]).some(a => a.id === "infeccion-urinaria-alta"), true);
});

test("sudor frío aislado no atribuye un problema cardiovascular agudo", () => {
  assert.equal(alarmas.detectarAlarmasGlobales(["Sudor frío"]).some(a => a.id === "pecho-cardiovascular"), false);
  assert.equal(alarmas.detectarAlarmasGlobales(["Dolor de pecho", "Sudor frío"]).some(a => a.id === "pecho-cardiovascular"), true);
});


test("batería de alarmas vitales de distintas especialidades", () => {
 const casos=[
  ["Dolor de cabeza súbito e intenso","cefalea-secundaria"],
  ["Falta de aire intensa","respiratoria-grave"],
  ["Dolor testicular súbito e intenso","testiculo-agudo"],
  ["Pérdida brusca de visión","vision-brusca"],
  ["Hinchazón de lengua o garganta","anafilaxia"],
  ["Sangrado durante el embarazo","embarazo-sangrado"],
  ["Pérdida de control de orina o heces","cola-caballo"],
  ["Dificultad para hablar","neurologica"],
  ["No puedo orinar","retencion-urinaria"]
 ];
 for(const [sintoma,id] of casos){
  const alarmasDetectadas=alarmas.detectarAlarmasGlobales([sintoma]);
  assert.equal(alarmasDetectadas.some(a=>a.id===id && a.nivel==="urgente"),true,
    "No se activó la alerta urgente "+id+" con "+sintoma);
 }
});
test("síntomas aislados frecuentes no generan cuadros de alto riesgo ni alarmas erróneas",()=>{
 const casos=["Dolor lumbar","Tos seca","Picor de ojos","Dolor muscular","Insomnio","Dolor articular"];
 for(const sintoma of casos){
  const resultado=motor.orientarPorSintomas([sintoma]);
  assert.equal(resultado.some(r=>r.condicion.id==="sepsis-posible"||r.condicion.id==="anafilaxia-posible"),false,sintoma);
 }
});


test("emergencias específicas y alerta oftalmológica se detectan",()=>{
 const graves=[["Vómito con sangre","hematemesis"],["Sangrado abundante","sangrado-abundante"],["No puedo tragar saliva","deglucion-grave"]];
 for(const [sintoma,id] of graves){
   assert.equal(alarmas.detectarAlarmasGlobales([sintoma]).some(a=>a.id===id&&a.nivel==="urgente"),true,sintoma);
 }
 const ojo=alarmas.detectarAlarmasGlobales(["Ojo rojo doloroso con lentes de contacto"]);
 assert.equal(ojo.some(a=>a.id==="lentes-contacto-ojo-doloroso"&&a.nivel==="prioritaria"),true);
});


test("un cuadro inespecífico grave no se etiqueta como sepsis sin datos de infección",()=>{
 const datos=["Confusión","Desmayo"];
 assert.equal(motor.orientarPorSintomas(datos).some(r=>r.condicion.id==="sepsis-posible"),false);
 assert.equal(alarmas.detectarAlarmasGlobales(datos).some(a=>a.nivel==="urgente"),true);
});

test("sepsis como hipótesis requiere al menos contexto infeccioso y deterioro",()=>{
 const datos=["Fiebre","Escalofríos","Confusión"];
 assert.equal(motor.orientarPorSintomas(datos).some(r=>r.condicion.id==="sepsis-posible"),true);
 assert.equal(alarmas.detectarAlarmasGlobales(datos).some(a=>a.nivel==="urgente"),true);
});

test("desmayo y falta de aire sin alergia no se etiquetan automáticamente como anafilaxia",()=>{
 const datos=["Desmayo","Falta de aire intensa"];
 assert.equal(motor.orientarPorSintomas(datos).some(r=>r.condicion.id==="anafilaxia-posible"),false);
 assert.equal(alarmas.detectarAlarmasGlobales(datos).some(a=>a.nivel==="urgente"),true);
});

test("hinchazón de garganta más dificultad respiratoria es urgencia y posible anafilaxia",()=>{
 const datos=["Hinchazón de lengua o garganta","Falta de aire intensa"];
 assert.equal(motor.orientarPorSintomas(datos).some(r=>r.condicion.id==="anafilaxia-posible"),true);
 assert.equal(alarmas.detectarAlarmasGlobales(datos).some(a=>a.id==="anafilaxia"),true);
});


test("duplicar un síntoma en categorías y seguimiento no aumenta la coincidencia",()=>{
 const una=["Dolor lumbar","Dolor que baja por la pierna","Hormigueo en una pierna"];
 const repetidas=["Dolor lumbar","Dolor que baja por la pierna","Dolor que baja por la pierna","Hormigueo en una pierna","Dolor lumbar"];
 const a=motor.orientarPorSintomas(una).find(r=>r.condicion.id==="ciatica");
 const b=motor.orientarPorSintomas(repetidas).find(r=>r.condicion.id==="ciatica");
 assert.ok(a&&b);
 assert.deepEqual(b.coincidencias,a.coincidencias);
 assert.equal(b.puntuacion,a.puntuacion);
});


test("una frase que contiene el nombre de otro síntoma no se interpreta como selección exacta", () => {
 const datos=["Dolor lumbar sin falta de aire", "Sensación de hormigueo no constante"];
 const resultados=motor.orientarPorSintomas(datos);
 assert.equal(resultados.some(r=>r.condicion.id==="ciatica"),false);
});

test("nombres del catálogo se presentan como orientaciones sin afirmación definitiva",()=>{
 for(const ficha of motor.todasLasCondiciones){
   assert.ok(ficha.id && ficha.nombre && ficha.descripcion);
   assert.ok(Array.isArray(ficha.sintomas) && ficha.sintomas.length>=1,ficha.id);
   assert.ok(ficha.enfoques?.natural && ficha.enfoques?.nutricion,ficha.id);
 }
});

test("las equivalencias explícitas mantienen la correspondencia de migraña",()=>{
 const datos=["Dolor pulsátil","Dolor en un lado de la cabeza","Sensibilidad intensa a la luz","Náuseas"];
 assert.equal(motor.orientarPorSintomas(datos).some(r=>r.condicion.id==="migrana"),true);
});


test("todas las fichas muestran un título prudente sin afirmación de diagnóstico",()=>{
 const fichas=motor.todasLasCondiciones;
 assert.ok(fichas.length>=140);
 for(const ficha of fichas){
  const titulo=lenguaje.tituloOrientativo(ficha.nombre);
  assert.ok(titulo&&/compatible|posible|orientativ|alerta|sospecha/i.test(titulo),
   "Título no orientativo: "+ficha.id+" / "+titulo);
 }
});

test("la lista de duplicados queda visible para auditoría",()=>{
 assert.equal(motor.totalFichasDefinidas,
  motor.todasLasCondiciones.length+motor.fichasOmitidasPorDuplicado.length);
});
