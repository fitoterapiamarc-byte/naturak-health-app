import type { EjemploConEvidencia } from "../datos/ejemplosConEvidencia";

const etiquetas = {
  alta: "Evidencia alta",
  moderada: "Evidencia moderada",
  limitada: "Evidencia limitada",
  insuficiente: "Evidencia todavía insuficiente",
  tradicional: "Uso tradicional",
};

export default function EjemplosEvidencia({ ejemplos }: { ejemplos?: EjemploConEvidencia[] }) {
  if (!ejemplos || ejemplos.length === 0) {
    return (
      <div style={{ margin: "14px 0 18px", padding: "12px", borderRadius: "10px", background: "#f7f8f7", border: "1px solid #e1e5e2", fontSize: "14px", lineHeight: 1.5 }}>
        No hay un ejemplo concreto con evidencia suficiente para destacar en este apartado. Se mantiene únicamente la guía general segura.
      </div>
    );
  }

  return (
    <div style={{ margin: "14px 0 18px", padding: "14px", borderRadius: "10px", background: "#f7faf8", border: "1px solid #dce8e1" }}>
      <strong>Ejemplos con evidencia</strong>
      <div style={{ display: "grid", gap: "10px", marginTop: "10px" }}>
        {ejemplos.map((ejemplo) => (
          <div key={`${ejemplo.nombre}-${ejemplo.utilidad}`} style={{ paddingBottom: "10px", borderBottom: "1px solid #e5ebe7" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
              <strong>{ejemplo.nombre}</strong>
              <span style={{ flexShrink: 0, padding: "5px 8px", borderRadius: "999px", background: "#eef4f1", border: "1px solid #d7e2dc", fontSize: "12px", fontWeight: "bold" }}>{etiquetas[ejemplo.evidencia]}</span>
            </div>
            <div style={{ marginTop: "5px", lineHeight: 1.5, fontSize: "14px" }}>{ejemplo.utilidad}</div>
          </div>
        ))}
      </div>
    </div>
  );
}