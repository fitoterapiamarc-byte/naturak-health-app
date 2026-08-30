import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createServer } from "vite";

let vite;
let motor;
let alarmas;
let opciones;
let seguimiento;

before(async () => {
  vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
  motor = await vite.ssrLoadModule("/src/datos/motorOrientacion.ts");
  alarmas = await vite.ssrLoadModule("/src/evaluacion/senalesAlarmaGlobales.ts");
  opciones = await vite.ssrLoadModule("/src/evaluacion/opcionesEvaluacion.ts");
  seguimiento = await vite.ssrLoadModule("/src/evaluacion/preguntasSeguimiento.ts");
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
