import { buscarFichaVademecum, type NivelInteraccionVademecum } from "../datos/vademecumFitoterapia";

const etiquetaNivel: Record<NivelInteraccionVademecum, string> = {
  seguir: "Sin interacción descrita en la fuente",
  valorar: "Revisar: posible/teórica",
  monitorizar: "Requiere vigilancia o separación",
  evitar: "Hay combinaciones a evitar",
};

const estilosNivel: Record<NivelInteraccionVademecum, React.CSSProperties> = {
  seguir: { background: "#edf8f1", borderColor: "#9bc8ad", color: "#245c3a" },
  valorar: { background: "#fffbe8", borderColor: "#d5bd55", color: "#6f5c00" },
  monitorizar: { background: "#fff4e5", borderColor: "#e0a34d", color: "#804a00" },
  evitar: { background: "#fff0f0", borderColor: "#d98282", color: "#8d1717" },
};

export default function FichaVademecumInline({ texto }: { texto: string }) {
  const ficha = buscarFichaVademecum(texto);

  if (!ficha) {
    return (
      <div style={s.pendiente}>
        <b>Vademécum: pendiente de validación específica.</b>
        <div>No se muestra una dosis ni una interacción automática para este preparado hasta contrastar especie, parte usada y preparación concreta.</div>
      </div>
    );
  }

  return (
    <details style={s.details}>
      <summary style={s.summary}>📚 Ficha contrastada en Vademécum / EMA-ESCOP</summary>
      <div style={s.cuerpo}>
        <div><b>Especie:</b> {ficha.especie}</div>
        <div><b>Parte/preparación:</b> {ficha.drogaVegetal}</div>
        <div><b>Uso respaldado:</b> {ficha.usoRespaldado}</div>
        {ficha.posologiaVerificada && (
          <div style={s.dosis}>
            <b>Posología publicada:</b> {ficha.posologiaVerificada}
            <div style={s.micro}>La dosis solo es aplicable a la droga/preparación descrita; un extracto distinto puede requerir otra pauta.</div>
          </div>
        )}
        {ficha.precauciones.length > 0 && (
          <div>
            <b>Precauciones:</b>
            <ul style={s.lista}>{ficha.precauciones.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        )}
        <div style={{ ...s.nivel, ...estilosNivel[ficha.interaccion.nivel] }}>
          <b>{etiquetaNivel[ficha.interaccion.nivel]}</b>
          <div>{ficha.interaccion.resumen}</div>
        </div>
        <div style={s.fuentes}>
          <a href={ficha.fuenteVademecum} target="_blank" rel="noreferrer">Vademécum de Fitoterapia</a>
          <span> · </span>
          <a href={ficha.fuenteInteracciones} target="_blank" rel="noreferrer">Tabla de interacciones EMA/ESCOP (30/06/2026)</a>
        </div>
      </div>
    </details>
  );
}

const s: Record<string, React.CSSProperties> = {
  details: { marginTop: 10, border: "1px solid #cfe0d7", borderRadius: 10, background: "#fbfdfc", overflow: "hidden" },
  summary: { cursor: "pointer", padding: "10px 12px", fontSize: 13, fontWeight: 800, color: "#214c3b" },
  cuerpo: { display: "grid", gap: 9, padding: "4px 12px 12px", fontSize: 13, lineHeight: 1.5 },
  dosis: { padding: 10, background: "#eef7ff", borderRadius: 8 },
  micro: { marginTop: 5, fontSize: 11, color: "#53665d" },
  lista: { margin: "5px 0 0", paddingLeft: 20 },
  nivel: { display: "grid", gap: 4, padding: 10, border: "1px solid", borderRadius: 8 },
  fuentes: { fontSize: 12, lineHeight: 1.6 },
  pendiente: { marginTop: 10, padding: 10, borderRadius: 8, background: "#fff8e6", border: "1px solid #e0c27a", color: "#704b00", fontSize: 12, lineHeight: 1.45 },
};
