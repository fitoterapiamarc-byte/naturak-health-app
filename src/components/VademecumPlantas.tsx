import { useMemo, useState } from "react";
import {
  FUENTE_INTERACCIONES_2026,
  vademecumFitoterapia,
  type NivelInteraccionVademecum,
} from "../datos/vademecumFitoterapia";

const niveles: Array<{ valor: "todos" | NivelInteraccionVademecum; etiqueta: string }> = [
  { valor: "todos", etiqueta: "Todos los niveles" },
  { valor: "seguir", etiqueta: "Sin interacción descrita" },
  { valor: "valorar", etiqueta: "Revisión individual" },
  { valor: "monitorizar", etiqueta: "Vigilancia o separación" },
  { valor: "evitar", etiqueta: "Combinaciones a evitar" },
];

const etiquetasNivel: Record<NivelInteraccionVademecum, string> = {
  seguir: "Sin interacción descrita",
  valorar: "Revisión individual",
  monitorizar: "Vigilancia o separación",
  evitar: "Combinaciones a evitar",
};

const coloresNivel: Record<NivelInteraccionVademecum, React.CSSProperties> = {
  seguir: { background: "#edf8f1", borderColor: "#9bc8ad", color: "#245c3a" },
  valorar: { background: "#fffbe8", borderColor: "#d5bd55", color: "#6f5c00" },
  monitorizar: { background: "#fff4e5", borderColor: "#e0a34d", color: "#804a00" },
  evitar: { background: "#fff0f0", borderColor: "#d98282", color: "#8d1717" },
};

function normalizar(texto: string) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function VademecumPlantas() {
  const [busqueda, setBusqueda] = useState("");
  const [nivel, setNivel] = useState<"todos" | NivelInteraccionVademecum>("todos");

  const fichas = useMemo(() => {
    const consulta = normalizar(busqueda.trim());
    return vademecumFitoterapia.filter((ficha) => {
      const coincideNivel = nivel === "todos" || ficha.interaccion.nivel === nivel;
      const texto = normalizar([ficha.nombre, ficha.especie, ficha.drogaVegetal, ...ficha.aliases].join(" "));
      return coincideNivel && (!consulta || texto.includes(consulta));
    });
  }, [busqueda, nivel]);

  return (
    <section style={s.contenedor} aria-labelledby="titulo-vademecum">
      <div style={s.cabecera}>
        <div>
          <div style={s.eyebrow}>Consulta botánica</div>
          <h2 id="titulo-vademecum" style={s.titulo}>Vademécum de plantas</h2>
          <p style={s.intro}>
            {vademecumFitoterapia.length} fichas enlazadas con las recomendaciones de la aplicación. Cada ficha diferencia especie,
            parte usada, preparación, límites de evidencia y posibles interacciones.
          </p>
        </div>
        <div style={s.contador}><strong>{vademecumFitoterapia.length}</strong><span> fichas</span></div>
      </div>

      <div style={s.aviso}>
        Una ficha informa, no prescribe. La ausencia de una interacción descrita no demuestra riesgo cero y las dosis no se extrapolan entre infusiones, extractos y aceites esenciales.
      </div>

      <div style={s.controles}>
        <label style={s.campo}>
          <span>Buscar planta o especie</span>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Ej.: valeriana, tomillo, Hypericum…"
            style={s.input}
          />
        </label>
        <label style={s.campo}>
          <span>Filtrar por seguridad</span>
          <select value={nivel} onChange={(e) => setNivel(e.target.value as typeof nivel)} style={s.select}>
            {niveles.map((opcion) => <option key={opcion.valor} value={opcion.valor}>{opcion.etiqueta}</option>)}
          </select>
        </label>
      </div>

      <div aria-live="polite" style={s.resultadoCuenta}>
        {fichas.length === 1 ? "1 ficha encontrada" : `${fichas.length} fichas encontradas`}
      </div>

      {fichas.length === 0 ? (
        <div style={s.vacio}>No hay una ficha validada que coincida. Prueba con el nombre común o el nombre botánico.</div>
      ) : (
        <div style={s.lista}>
          {fichas.map((ficha) => (
            <details key={ficha.id} style={s.ficha}>
              <summary style={s.resumen}>
                <span><strong>{ficha.nombre}</strong><small>{ficha.especie}</small></span>
                <span style={{ ...s.nivel, ...coloresNivel[ficha.interaccion.nivel] }}>{etiquetasNivel[ficha.interaccion.nivel]}</span>
              </summary>
              <div style={s.cuerpo}>
                <div><b>Parte/preparación:</b> {ficha.drogaVegetal}</div>
                <div><b>Uso respaldado:</b> {ficha.usoRespaldado}</div>
                {ficha.posologiaVerificada && (
                  <div style={s.dosis}><b>Posología publicada:</b> {ficha.posologiaVerificada}<small>Solo para la droga y preparación descritas.</small></div>
                )}
                <div>
                  <b>Precauciones:</b>
                  <ul style={s.precauciones}>{ficha.precauciones.map((precaucion) => <li key={precaucion}>{precaucion}</li>)}</ul>
                </div>
                <div style={{ ...s.interaccion, ...coloresNivel[ficha.interaccion.nivel] }}>
                  <b>{etiquetasNivel[ficha.interaccion.nivel]}:</b> {ficha.interaccion.resumen}
                </div>
                <div style={s.fuentes}>
                  {ficha.fuenteVademecum && <a href={ficha.fuenteVademecum} target="_blank" rel="noreferrer">Vademécum de Fitoterapia</a>}
                  {ficha.fuenteOficial && <a href={ficha.fuenteOficial} target="_blank" rel="noreferrer">{ficha.fuenteOficialEtiqueta ?? (ficha.fuenteOficial.includes("ema.europa.eu") ? "EMA/HMPC" : "NCCIH/NIH")}</a>}
                  <a href={ficha.fuenteInteracciones} target="_blank" rel="noreferrer">
                    {ficha.fuenteInteracciones === FUENTE_INTERACCIONES_2026 ? "Interacciones EMA/ESCOP" : "Seguridad e interacciones"}
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>
      )}
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  contenedor: { maxWidth: 1100, boxSizing: "border-box", margin: "24px auto", padding: "clamp(18px,4vw,28px)", borderRadius: 16, background: "#fff", border: "1px solid #d7e2dc", fontFamily: "Arial, sans-serif" },
  cabecera: { display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 18, alignItems: "flex-start" },
  eyebrow: { color: "#0b7a49", fontWeight: 900, textTransform: "uppercase", letterSpacing: ".08em", fontSize: 12 },
  titulo: { margin: "5px 0 8px", color: "#183f30", fontSize: "clamp(25px,6vw,34px)" },
  intro: { maxWidth: 760, margin: 0, color: "#4d6259", lineHeight: 1.55 },
  contador: { minWidth: 92, padding: "12px 14px", borderRadius: 12, background: "#eaf6ef", color: "#19583b", textAlign: "center" },
  aviso: { marginTop: 18, padding: 13, borderRadius: 10, background: "#fff8e6", border: "1px solid #e4c46d", color: "#654900", lineHeight: 1.5, fontSize: 14 },
  controles: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12, marginTop: 18 },
  campo: { display: "grid", gap: 6, color: "#294b3d", fontWeight: 800, fontSize: 13 },
  input: { width: "100%", boxSizing: "border-box", padding: "12px 13px", border: "1px solid #9fb8ad", borderRadius: 10, fontSize: 16 },
  select: { width: "100%", boxSizing: "border-box", padding: "12px 13px", border: "1px solid #9fb8ad", borderRadius: 10, background: "#fff", fontSize: 16 },
  resultadoCuenta: { margin: "14px 0 9px", color: "#53665d", fontSize: 13, fontWeight: 800 },
  lista: { display: "grid", gap: 9 },
  ficha: { border: "1px solid #d6e2dc", borderRadius: 11, overflow: "hidden", background: "#fbfdfc" },
  resumen: { cursor: "pointer", padding: 13, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 },
  nivel: { padding: "5px 8px", border: "1px solid", borderRadius: 999, fontSize: 11, fontWeight: 900 },
  cuerpo: { display: "grid", gap: 12, padding: "2px 14px 16px", borderTop: "1px solid #e2eae6", lineHeight: 1.5, fontSize: 14 },
  dosis: { display: "grid", gap: 4, padding: 11, borderRadius: 8, background: "#eef7ff" },
  precauciones: { margin: "6px 0 0", paddingLeft: 21 },
  interaccion: { padding: 11, border: "1px solid", borderRadius: 8 },
  fuentes: { display: "flex", flexWrap: "wrap", gap: 12, fontSize: 13 },
  vacio: { padding: 18, borderRadius: 10, background: "#f3f6f4", color: "#53665d", textAlign: "center" },
};
