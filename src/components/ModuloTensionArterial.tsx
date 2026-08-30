import { useMemo, useState } from "react";
import {
  calcularResumenTension,
  CLAVE_LECTURAS_TENSION,
  eliminarLecturasDuplicadas,
  interpretarTension,
  type LecturaTension,
  type NivelTension,
} from "../datos/tensionArterial";

const factoresAlta = {
  causas: [
    "Predisposición familiar, edad, exceso de peso o sedentarismo.",
    "Exceso de sal en personas sensibles, alcohol, tabaco, estrés o sueño insuficiente.",
    "Enfermedad renal, apnea del sueño, trastornos hormonales o algunos medicamentos.",
  ],
  nutricion: [
    "Prioriza verduras, fruta entera, legumbres, cereales integrales y frutos secos sin sal.",
    "Reduce embutidos, aperitivos salados, salsas preparadas, precocinados y quesos muy curados.",
    "No aumentes el potasio por tu cuenta si tienes enfermedad renal o una restricción médica.",
    "Mantén actividad física adaptada, un peso saludable y modera el alcohol.",
  ],
  fitoterapia: [
    "Ajo e hibisco pueden producir reducciones modestas en algunos estudios, pero no sustituyen el tratamiento.",
    "Pueden existir interacciones: revisa cualquier planta si tomas medicación para la tensión, anticoagulantes u otros fármacos.",
    "Evita el regaliz: puede elevar la presión arterial y alterar el potasio.",
  ],
};

const factoresBaja = {
  causas: [
    "Deshidratación, calor, pérdida de líquidos o levantarse rápidamente.",
    "Medicamentos para la tensión, diuréticos y otros fármacos.",
    "Anemia, hemorragia, infección o problemas cardíacos u hormonales en determinados casos.",
  ],
  nutricion: [
    "Bebe líquidos suficientes cuando no exista una restricción médica.",
    "Tras pérdidas importantes de líquidos puede ser preferible una solución de rehidratación oral.",
    "No aumentes la sal por tu cuenta si tienes hipertensión o enfermedad renal o cardíaca.",
  ],
  fitoterapia: [
    "No existe una planta que corrija de forma segura una presión baja sin conocer la causa.",
    "No uses regaliz como remedio: puede causar hipertensión, pérdida de potasio e interacciones.",
    "Evita plantas diuréticas si existe deshidratación o presión baja.",
  ],
};

function ahoraParaInput() {
  const ahora = new Date();
  const local = new Date(ahora.getTime() - ahora.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 16);
}

function leerLecturas(): LecturaTension[] {
  try {
    const guardadas = JSON.parse(localStorage.getItem(CLAVE_LECTURAS_TENSION) ?? "[]");
    if (!Array.isArray(guardadas)) return [];
    return eliminarLecturasDuplicadas(guardadas
      .filter(
        (lectura): lectura is LecturaTension =>
          lectura &&
          typeof lectura.id === "string" &&
          typeof lectura.fecha === "string" &&
          typeof lectura.sistolica === "number" &&
          typeof lectura.diastolica === "number",
      ))
      .sort((a, b) => b.fecha.localeCompare(a.fecha));
  } catch {
    return [];
  }
}

function guardarLecturas(lecturas: LecturaTension[]) {
  try {
    localStorage.setItem(CLAVE_LECTURAS_TENSION, JSON.stringify(lecturas));
  } catch {
    // La orientación sigue funcionando aunque el navegador bloquee el almacenamiento.
  }
}

function colorNivel(nivel: NivelTension) {
  if (nivel === "emergencia") return { fondo: "#8d1717", borde: "#650d0d", texto: "#ffffff" };
  if (nivel === "muy-alta") return { fondo: "#fff0f0", borde: "#c83d3d", texto: "#8d1717" };
  if (nivel === "alta") return { fondo: "#fff4e5", borde: "#d17a12", texto: "#7a4100" };
  if (nivel === "vigilar") return { fondo: "#fffbe8", borde: "#b89c16", texto: "#675500" };
  if (nivel === "baja") return { fondo: "#eef6ff", borde: "#4c83b6", texto: "#234f78" };
  if (nivel === "invalida") return { fondo: "#f5f5f5", borde: "#767676", texto: "#303030" };
  return { fondo: "#edf8f1", borde: "#57926e", texto: "#245c3a" };
}

function Apoyos({ nivel }: { nivel: NivelTension }) {
  if (!["baja", "alta", "vigilar"].includes(nivel)) return null;
  const datos = nivel === "baja" ? factoresBaja : factoresAlta;
  return (
    <div style={s.apoyos}>
      <h3 style={s.apoyoTitulo}>
        {nivel === "baja" ? "Presión baja: causas y medidas de apoyo" : "Presión elevada: causas y medidas de apoyo"}
      </h3>
      <p style={s.avisoApoyo}>Estas medidas son orientativas. Primero hay que valorar la causa y la medicación habitual.</p>
      <div style={s.gridApoyos}>
        <div style={s.bloque}>
          <b>🔎 Posibles causas o factores</b>
          <ul style={s.listaCorta}>{datos.causas.map((texto) => <li key={texto}>{texto}</li>)}</ul>
        </div>
        <div style={s.bloque}>
          <b>🥗 Nutrición y hábitos</b>
          <ul style={s.listaCorta}>{datos.nutricion.map((texto) => <li key={texto}>{texto}</li>)}</ul>
        </div>
        <div style={s.bloque}>
          <b>🌿 Fitoterapia</b>
          <ul style={s.listaCorta}>{datos.fitoterapia.map((texto) => <li key={texto}>{texto}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

export default function ModuloTensionArterial() {
  const [sistolica, setSistolica] = useState("");
  const [diastolica, setDiastolica] = useState("");
  const [pulso, setPulso] = useState("");
  const [fecha, setFecha] = useState(ahoraParaInput);
  const [brazo, setBrazo] = useState<LecturaTension["brazo"]>("");
  const [notas, setNotas] = useState("");
  const [sintomasAlarma, setSintomasAlarma] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [guardada, setGuardada] = useState(false);
  const [lecturas, setLecturas] = useState<LecturaTension[]>(leerLecturas);

  const resultado = interpretarTension(Number(sistolica), Number(diastolica), sintomasAlarma);
  const tema = colorNivel(resultado.nivel);
  const resumen = useMemo(() => calcularResumenTension(lecturas), [lecturas]);
  const resultadoPromedio = resumen
    ? interpretarTension(resumen.sistolicaMedia, resumen.diastolicaMedia)
    : null;

  const cambiarCifra = (valor: string, cambiar: (valor: string) => void) => {
    cambiar(valor.replace(/\D/g, "").slice(0, 3));
    setMostrar(false);
    setGuardada(false);
    setSintomasAlarma(false);
  };

  const nuevaMedicion = () => {
    setSistolica("");
    setDiastolica("");
    setPulso("");
    setFecha(ahoraParaInput());
    setBrazo("");
    setNotas("");
    setSintomasAlarma(false);
    setMostrar(false);
    setGuardada(false);
  };

  const registrar = () => {
    if (!resultado.guardable || guardada) return;
    const pulsoNumero = pulso ? Number(pulso) : undefined;
    if (pulsoNumero !== undefined && (pulsoNumero < 30 || pulsoNumero > 220)) return;

    const lectura: LecturaTension = {
      id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
      fecha: new Date(fecha).toISOString(),
      sistolica: Number(sistolica),
      diastolica: Number(diastolica),
      pulso: pulsoNumero,
      brazo,
      notas: notas.trim(),
      nivel: resultado.nivel,
    };
    const siguientes = eliminarLecturasDuplicadas([lectura, ...lecturas])
      .sort((a, b) => b.fecha.localeCompare(a.fecha));
    setLecturas(siguientes);
    guardarLecturas(siguientes);
    setGuardada(true);
  };

  const borrarLectura = (id: string) => {
    const siguientes = lecturas.filter((lectura) => lectura.id !== id);
    setLecturas(siguientes);
    guardarLecturas(siguientes);
  };

  const borrarTodas = () => {
    if (!window.confirm("¿Quieres borrar todo el historial de tensión guardado en este dispositivo?")) return;
    setLecturas([]);
    guardarLecturas([]);
  };

  const exportarCsv = () => {
    const escapar = (valor: string | number | undefined) => `"${String(valor ?? "").replaceAll('"', '""')}"`;
    const filas = [
      ["Fecha", "Sistólica (mmHg)", "Diastólica (mmHg)", "Pulso (lpm)", "Brazo", "Resultado", "Notas"],
      ...lecturas.map((lectura) => [
        new Date(lectura.fecha).toLocaleString("es-ES"),
        lectura.sistolica,
        lectura.diastolica,
        lectura.pulso,
        lectura.brazo,
        lectura.nivel,
        lectura.notas,
      ]),
    ];
    const csv = `\uFEFF${filas.map((fila) => fila.map(escapar).join(";")).join("\n")}`;
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = `registro-tension-${new Date().toISOString().slice(0, 10)}.csv`;
    enlace.click();
    URL.revokeObjectURL(url);
  };

  const pulsoInvalido = Boolean(pulso) && (Number(pulso) < 30 || Number(pulso) > 220);
  const fechaInvalida = !fecha || !Number.isFinite(new Date(fecha).getTime());

  return (
    <section style={s.card} aria-labelledby="titulo-tension">
      <div style={s.encabezado}>
        <span style={s.icono} aria-hidden="true">🩺</span>
        <div>
          <h2 id="titulo-tension" style={s.h2}>Tensión arterial</h2>
          <p style={s.sub}>Interpreta, guarda y sigue tus mediciones hechas en casa.</p>
        </div>
      </div>

      <div style={s.preparacion}>
        <b>Antes de medir</b>
        <div style={s.pasos}>
          <span>🪑 Reposa 5 min</span>
          <span>🦶 Pies apoyados</span>
          <span>💪 Brazo a la altura del corazón</span>
          <span>🤫 No hables</span>
        </div>
        <p style={s.dosLecturas}>Haz 2 lecturas separadas por al menos 1 minuto y guarda las dos.</p>
      </div>

      <div style={s.medidores}>
        <label style={s.labelCifra}>
          <b>SISTÓLICA</b>
          <span style={s.ayuda}>número de arriba</span>
          <input
            inputMode="numeric"
            autoComplete="off"
            aria-label="Presión sistólica"
            value={sistolica}
            onChange={(evento) => cambiarCifra(evento.target.value, setSistolica)}
            placeholder="120"
            style={s.inputCifra}
          />
          <small>mmHg</small>
        </label>
        <div style={s.barra} aria-hidden="true">/</div>
        <label style={s.labelCifra}>
          <b>DIASTÓLICA</b>
          <span style={s.ayuda}>número de abajo</span>
          <input
            inputMode="numeric"
            autoComplete="off"
            aria-label="Presión diastólica"
            value={diastolica}
            onChange={(evento) => cambiarCifra(evento.target.value, setDiastolica)}
            placeholder="80"
            style={s.inputCifra}
          />
          <small>mmHg</small>
        </label>
      </div>

      <details style={s.datosOpcionales}>
        <summary style={s.summary}>Añadir pulso, fecha, brazo o notas</summary>
        <div style={s.gridDatos}>
          <label style={s.labelDato}>
            <b>Pulso (opcional)</b>
            <input inputMode="numeric" value={pulso} onChange={(e) => setPulso(e.target.value.replace(/\D/g, "").slice(0, 3))} placeholder="70" style={s.inputDato} />
            {pulsoInvalido && <small style={s.error}>Revisa el pulso (30–220 lpm).</small>}
          </label>
          <label style={s.labelDato}>
            <b>Fecha y hora</b>
            <input type="datetime-local" value={fecha} onChange={(e) => setFecha(e.target.value)} style={s.inputDato} />
          </label>
          <label style={s.labelDato}>
            <b>Brazo</b>
            <select value={brazo} onChange={(e) => setBrazo(e.target.value as LecturaTension["brazo"])} style={s.inputDato}>
              <option value="">Sin indicar</option>
              <option value="izquierdo">Izquierdo</option>
              <option value="derecho">Derecho</option>
            </select>
          </label>
          <label style={{ ...s.labelDato, gridColumn: "1 / -1" }}>
            <b>Notas</b>
            <input value={notas} onChange={(e) => setNotas(e.target.value.slice(0, 160))} placeholder="Ej.: antes de medicación, después de caminar…" style={s.inputDato} />
          </label>
        </div>
      </details>

      <button
        type="button"
        style={{ ...s.boton, opacity: !sistolica || !diastolica ? 0.55 : 1 }}
        disabled={!sistolica || !diastolica}
        onClick={() => { setMostrar(true); setGuardada(false); }}
      >
        Ver resultado
      </button>

      {mostrar && (
        <div aria-live="polite">
          <div style={{ ...s.resultado, background: tema.fondo, borderColor: tema.borde, color: tema.texto }}>
            <div style={s.estadoIcono} aria-hidden="true">{resultado.icono}</div>
            <div style={s.cifra}>{sistolica} / {diastolica}<small style={s.unidad}> mmHg</small></div>
            <h3 style={s.tituloResultado}>{resultado.titulo}</h3>
            <strong>{resultado.accion}</strong>
            <p style={s.detalleResultado}>{resultado.detalle}</p>

            {resultado.nivel === "muy-alta" || resultado.nivel === "emergencia" ? (
              <label style={s.sintomas}>
                <input
                  type="checkbox"
                  checked={sintomasAlarma}
                  onChange={(e) => setSintomasAlarma(e.target.checked)}
                />
                Tengo dolor de pecho, falta de aire, debilidad o adormecimiento, dificultad para hablar, confusión o alteración visual importante.
              </label>
            ) : null}

            <div style={s.recordatorio}>
              <b>Importante:</b> una medición aislada no diagnostica hipertensión. No cambies ni suspendas medicación por este resultado.
            </div>
          </div>

          <Apoyos nivel={resultado.nivel} />

          <div style={s.accionesResultado}>
            {resultado.guardable && (
              <button
                type="button"
                onClick={registrar}
                disabled={guardada || pulsoInvalido || fechaInvalida}
                style={{ ...s.guardar, opacity: guardada || pulsoInvalido || fechaInvalida ? 0.6 : 1 }}
              >
                {guardada ? "✓ Medición guardada" : "Guardar medición"}
              </button>
            )}
            <button type="button" onClick={nuevaMedicion} style={s.nueva}>Hacer otra medición</button>
          </div>
        </div>
      )}

      <div style={s.leyenda} aria-label="Leyenda de resultados">
        <span>🔵 Baja</span><span>🟢 Favorable</span><span>🟡 Vigilar</span><span>🟠 Elevada</span><span>🔴 Muy elevada</span>
      </div>

      <details style={s.details}>
        <summary style={s.summary}>Cómo medirla correctamente</summary>
        <ol style={s.listaCorta}>
          <li>Evita ejercicio, tabaco y cafeína durante los 30 minutos previos cuando sea posible.</li>
          <li>Vacía la vejiga y descansa sentado al menos 5 minutos.</li>
          <li>Apoya la espalda, no cruces las piernas y deja los pies planos en el suelo.</li>
          <li>Coloca un manguito adecuado sobre el brazo desnudo y apoya el brazo a la altura del corazón.</li>
          <li>No hables. Haz dos lecturas separadas por al menos un minuto y registra ambas.</li>
        </ol>
      </details>

      <section style={s.historial} aria-labelledby="titulo-historial">
        <div style={s.cabeceraHistorial}>
          <div>
            <h3 id="titulo-historial" style={s.tituloHistorial}>Historial de este dispositivo</h3>
            <p style={s.privacidad}>Se guarda solo en este navegador. La aplicación no envía estos datos.</p>
          </div>
          {lecturas.length > 0 && <button type="button" onClick={exportarCsv} style={s.exportar}>Descargar CSV</button>}
        </div>

        {resumen && resultadoPromedio ? (
          <div style={s.resumen}>
            <span style={s.resumenEtiqueta}>Promedio últimos 7 días</span>
            <strong style={s.resumenCifra}>{resumen.sistolicaMedia} / {resumen.diastolicaMedia} mmHg</strong>
            <span>{resumen.cantidad} {resumen.cantidad === 1 ? "lectura" : "lecturas"}{resumen.pulsoMedio ? ` · Pulso medio ${resumen.pulsoMedio} lpm` : ""}</span>
            <small>Orientación: {resultadoPromedio.titulo.toLowerCase()}. El diagnóstico no se establece solo con este promedio.</small>
          </div>
        ) : (
          <p style={s.vacio}>Aún no hay mediciones guardadas.</p>
        )}

        <div style={s.listaHistorial}>
          {lecturas.slice(0, 20).map((lectura) => {
            const color = colorNivel(lectura.nivel);
            return (
              <article key={lectura.id} style={s.lectura}>
                <div style={s.fechaLectura}>
                  <strong style={s.fecha}>{new Date(lectura.fecha).toLocaleString("es-ES", { dateStyle: "short", timeStyle: "short" })}</strong>
                  <div style={{ ...s.puntoNivel, background: color.borde }} aria-hidden="true" />
                </div>
                <strong style={s.valorLectura}>{lectura.sistolica} / {lectura.diastolica}</strong>
                <span style={s.metaLectura}>
                  mmHg{lectura.pulso ? ` · ${lectura.pulso} lpm` : ""}{lectura.brazo ? ` · brazo ${lectura.brazo}` : ""}
                </span>
                {lectura.notas && <span style={s.notaLectura}>{lectura.notas}</span>}
                <button type="button" onClick={() => borrarLectura(lectura.id)} style={s.borrar} aria-label={`Borrar medición ${lectura.sistolica} sobre ${lectura.diastolica}`}>Borrar</button>
              </article>
            );
          })}
        </div>
        {lecturas.length > 0 && <button type="button" onClick={borrarTodas} style={s.borrarTodas}>Borrar todo el historial</button>}
      </section>

      <details style={s.fuentes}>
        <summary style={s.summary}>Fuentes médicas utilizadas</summary>
        <ul style={s.listaCorta}>
          <li><a href="https://www.escardio.org/news/press/press-releases/New-ESC-Hypertension-Guidelines-recommend-intensified-BP-targets-and-introduce-a-novel-elevated-blood-pressure-category-to-better-identify-people-at-risk-for-heart-attack-and-stroke/" target="_blank" rel="noreferrer">Guía ESC 2024 sobre presión arterial</a></li>
          <li><a href="https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/when-to-call-911-for-high-blood-pressure" target="_blank" rel="noreferrer">American Heart Association: cifras muy elevadas y síntomas de alarma</a></li>
          <li><a href="https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home" target="_blank" rel="noreferrer">American Heart Association: medición domiciliaria</a></li>
        </ul>
      </details>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  card: { maxWidth: 1100, margin: "18px auto 0", padding: "clamp(16px,4vw,24px)", background: "#fff", border: "2px solid #cfe0d7", borderRadius: 18, fontFamily: "Arial,sans-serif", color: "#20372c", boxSizing: "border-box", textAlign: "left" },
  encabezado: { display: "flex", gap: 12, alignItems: "center" },
  icono: { fontSize: 38 },
  h2: { margin: "0 0 4px", fontSize: 27, color: "#214c3b", fontWeight: 800 },
  sub: { margin: 0, color: "#52665d" },
  preparacion: { marginTop: 16, padding: 13, borderRadius: 12, background: "#f4f8f7" },
  pasos: { display: "flex", flexWrap: "wrap", gap: "8px 14px", marginTop: 9, fontSize: 14 },
  dosLecturas: { marginTop: 10, paddingTop: 9, borderTop: "1px solid #d9e5df", color: "#365c4a", fontSize: 14, fontWeight: 700 },
  medidores: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: "22px 0 16px" },
  labelCifra: { display: "flex", flexDirection: "column", alignItems: "center", width: "min(39vw,170px)", color: "#214c3b" },
  ayuda: { fontSize: 11, color: "#66776f", marginBottom: 5 },
  inputCifra: { boxSizing: "border-box", width: "100%", fontSize: "clamp(34px,10vw,44px)", fontWeight: 900, textAlign: "center", padding: "9px 3px", border: "2px solid #8fb3a3", borderRadius: 14, background: "white", color: "#142a20" },
  barra: { fontSize: 34, fontWeight: 800 },
  datosOpcionales: { width: "min(100%,620px)", margin: "0 auto 16px", padding: "10px 12px", border: "1px solid #d7e2dc", borderRadius: 11, background: "#fbfdfc", boxSizing: "border-box" },
  summary: { cursor: "pointer", fontWeight: 800, color: "#214c3b" },
  gridDatos: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 10, marginTop: 12 },
  labelDato: { display: "grid", gap: 6, fontSize: 13, color: "#29483a" },
  inputDato: { boxSizing: "border-box", width: "100%", padding: 10, border: "1px solid #b9cbc2", borderRadius: 9, background: "white", color: "#20372c", fontSize: 14 },
  error: { color: "#9b1c1c", fontWeight: 700 },
  boton: { display: "block", width: "min(100%,420px)", margin: "0 auto", padding: 16, border: 0, borderRadius: 13, background: "#216b4d", color: "white", fontSize: 18, fontWeight: 900, cursor: "pointer" },
  resultado: { marginTop: 20, padding: 18, border: "3px solid", borderRadius: 16, textAlign: "center" },
  estadoIcono: { fontSize: 34 },
  cifra: { fontSize: "clamp(32px,10vw,46px)", lineHeight: 1.15, fontWeight: 900 },
  unidad: { fontSize: 14 },
  tituloResultado: { margin: "8px 0", fontSize: 22 },
  detalleResultado: { margin: "10px auto", maxWidth: 780, lineHeight: 1.5 },
  sintomas: { display: "flex", alignItems: "flex-start", gap: 10, margin: "15px auto", padding: 13, maxWidth: 760, borderRadius: 10, background: "rgba(255,255,255,.92)", color: "#721414", textAlign: "left", fontWeight: 800 },
  recordatorio: { padding: 11, borderRadius: 9, background: "rgba(255,255,255,.82)", color: "#303b35", fontSize: 14 },
  apoyos: { marginTop: 14, padding: 16, border: "1px solid #d7e2dc", borderRadius: 14, background: "#fbfdfc" },
  apoyoTitulo: { margin: "0 0 6px", color: "#214c3b" },
  avisoApoyo: { fontSize: 13, color: "#5d6d65" },
  gridApoyos: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 12, marginTop: 12 },
  bloque: { padding: 13, borderRadius: 10, background: "#f3f7f5", lineHeight: 1.45 },
  listaCorta: { paddingLeft: 20, lineHeight: 1.55 },
  accionesResultado: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10, marginTop: 14 },
  guardar: { padding: "12px 18px", border: 0, borderRadius: 10, background: "#216b4d", color: "white", fontWeight: 800, cursor: "pointer" },
  nueva: { padding: "11px 16px", border: "1px solid #47705e", borderRadius: 10, background: "white", color: "#29483a", fontWeight: 800, cursor: "pointer" },
  leyenda: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginTop: 18, fontSize: 12 },
  details: { marginTop: 17, borderTop: "1px solid #dbe5e0", paddingTop: 14 },
  historial: { marginTop: 22, paddingTop: 20, borderTop: "2px solid #dbe5e0" },
  cabeceraHistorial: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 },
  tituloHistorial: { margin: "0 0 4px", color: "#214c3b", fontSize: 21 },
  privacidad: { color: "#607269", fontSize: 13 },
  exportar: { padding: "9px 12px", border: "1px solid #47705e", borderRadius: 9, background: "white", color: "#29483a", fontWeight: 800, cursor: "pointer" },
  resumen: { display: "grid", gap: 4, marginTop: 14, padding: 15, borderRadius: 12, background: "#eef7f2", border: "1px solid #bcd5c7" },
  resumenEtiqueta: { color: "#496257", fontSize: 13, fontWeight: 800, textTransform: "uppercase" },
  resumenCifra: { color: "#174f36", fontSize: 27 },
  vacio: { marginTop: 14, padding: 15, borderRadius: 10, background: "#f6f8f7", color: "#66776f" },
  listaHistorial: { display: "grid", gap: 9, marginTop: 12 },
  lectura: { display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", alignItems: "center", gap: "7px 12px", padding: "11px 12px", border: "1px solid #d9e3de", borderRadius: 10, background: "#fff" },
  fechaLectura: { minWidth: 0, gridColumn: "1" },
  fecha: { fontSize: 13, color: "#40564b" },
  puntoNivel: { width: 9, height: 9, borderRadius: "50%", display: "inline-block", marginRight: 5 },
  valorLectura: { gridColumn: "2", fontSize: 20, color: "#173e2c", whiteSpace: "nowrap" },
  metaLectura: { gridColumn: "1 / -1", fontSize: 13, color: "#607269" },
  notaLectura: { gridColumn: "1", minWidth: 0, fontSize: 13, color: "#40564b", overflowWrap: "anywhere" },
  borrar: { gridColumn: "2", justifySelf: "end", padding: "7px 9px", border: "1px solid #d2b5b5", borderRadius: 8, background: "white", color: "#842f2f", cursor: "pointer" },
  borrarTodas: { marginTop: 12, padding: 0, border: 0, background: "transparent", color: "#842f2f", textDecoration: "underline", cursor: "pointer" },
  fuentes: { marginTop: 22, paddingTop: 16, borderTop: "1px solid #dbe5e0", fontSize: 14 },
};
