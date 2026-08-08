import type { Condicion, EnfoqueComparado } from "../datos/condiciones";
import { apoyoNutricionFitoterapia } from "../datos/apoyoNutricionFitoterapia";
import { apoyoDermatologia } from "../datos/apoyoDermatologia";
import { apoyoBucodental } from "../datos/apoyoBucodental";
import { ejemplosConEvidencia } from "../datos/ejemplosConEvidencia";
import { ejemplosConEvidenciaExtra } from "../datos/ejemplosConEvidenciaExtra";
import EjemplosEvidencia from "./EjemplosEvidencia";

interface EnfoquesComparadosProps {
  condicion: Condicion;
  bloquearIntervencionesNaturales?: boolean;
}

const etiquetasEvidencia = {
  alta: "Evidencia alta",
  moderada: "Evidencia moderada",
  limitada: "Evidencia limitada",
  tradicional: "Uso tradicional",
  "no-establecida": "Evidencia todavía insuficiente",
};

function TarjetaApoyo({ titulo, descripcion, elementos, ejemplos, bloqueado = false, aviso }: { titulo: string; descripcion: string; elementos: string[]; ejemplos?: Parameters<typeof EjemplosEvidencia>[0]["ejemplos"]; bloqueado?: boolean; aviso?: string }) {
  return (
    <article style={estilos.tarjetaApoyo}>
      <h3 style={estilos.tituloApoyo}>{titulo}</h3>
      <p style={estilos.marco}>{descripcion}</p>
      {bloqueado ? (
        <div style={estilos.bloqueo}>Estas medidas quedan en segundo plano porque se han detectado señales que requieren valoración médica previa.</div>
      ) : (
        <>
          <EjemplosEvidencia ejemplos={ejemplos} />
          {elementos.length > 0 ? <ul style={estilos.listaPrincipal}>{elementos.map((elemento) => <li key={elemento}>{elemento}</li>)}</ul> : <p style={estilos.sinDatos}>No hay una recomendación específica para este cuadro.</p>}
        </>
      )}
      {aviso && !bloqueado && <p style={estilos.nota}>{aviso}</p>}
    </article>
  );
}

function TarjetaEnfoque({ enfoque }: { enfoque: EnfoqueComparado }) {
  return (
    <article style={estilos.tarjeta}>
      <div style={estilos.cabeceraTarjeta}>
        <h4 style={estilos.titulo}>{enfoque.titulo}</h4>
        <span style={estilos.evidencia}>{etiquetasEvidencia[enfoque.nivelEvidencia]}</span>
      </div>
      <p style={estilos.marco}>{enfoque.marco}</p>
      <ul style={estilos.lista}>{enfoque.intervenciones.map((intervencion) => <li key={intervencion}>{intervencion}</li>)}</ul>
      {enfoque.nota && <p style={estilos.nota}>{enfoque.nota}</p>}
    </article>
  );
}

function EnfoquesComparados({ condicion, bloquearIntervencionesNaturales = false }: EnfoquesComparadosProps) {
  const { enfoques } = condicion;
  const apoyoDetallado = apoyoNutricionFitoterapia[condicion.id] ?? apoyoDermatologia[condicion.id] ?? apoyoBucodental[condicion.id];
  const ejemplos = ejemplosConEvidencia[condicion.id] ?? ejemplosConEvidenciaExtra[condicion.id];
  const nutricion = apoyoDetallado?.nutricion ?? condicion.nutricion;
  const fitoterapia = apoyoDetallado?.fitoterapia ?? condicion.fitoterapia;
  const precauciones = [...(apoyoDetallado?.precauciones ?? []), ...condicion.contraindicaciones, ...condicion.interacciones].filter(Boolean).slice(0, 5).join(" · ");

  return (
    <section style={estilos.contenedor}>
      <div style={estilos.introduccion}>
        <h3 style={{ marginTop: 0 }}>Posibles medidas de apoyo</h3>
        <p style={{ marginBottom: 0 }}>Los ejemplos concretos se muestran separados de la guía general e incluyen su nivel de evidencia.</p>
      </div>
      <div style={estilos.rejillaApoyo}>
        <TarjetaApoyo titulo="🥗 Nutrición" descripcion="Alimentos, hidratación y hábitos nutricionales que pueden apoyar este cuadro cuando son apropiados." elementos={nutricion} ejemplos={ejemplos?.nutricion} bloqueado={bloquearIntervencionesNaturales} />
        <TarjetaApoyo titulo="🌿 Fitoterapia y suplementación" descripcion="Plantas, fibras, extractos o suplementos concretos según la evidencia disponible y el contexto personal." elementos={fitoterapia} ejemplos={ejemplos?.fitoterapia} bloqueado={bloquearIntervencionesNaturales} aviso={precauciones ? `Precauciones: ${precauciones}` : undefined} />
      </div>
      <div style={estilos.introduccionSecundaria}>
        <h3 style={{ marginTop: 0 }}>Otros enfoques</h3>
        <p style={{ marginBottom: 0 }}>Aquí se muestran únicamente los enfoques que aportan información diferente, evitando repetir nutrición y fitoterapia.</p>
      </div>
      <div style={estilos.rejilla}>
        <TarjetaEnfoque enfoque={enfoques.convencional} />
        <TarjetaEnfoque enfoque={enfoques.estiloVida} />
      </div>
    </section>
  );
}

const estilos = {
  contenedor: { marginTop: "26px" }, introduccion: { padding: "18px", borderRadius: "12px", background: "#f3f7f5", border: "1px solid #d7e2dc" }, introduccionSecundaria: { marginTop: "24px", padding: "18px", borderRadius: "12px", background: "#f7f8f7", border: "1px solid #e0e4e2" }, rejillaApoyo: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px", marginTop: "16px" }, tarjetaApoyo: { padding: "20px", borderRadius: "14px", border: "2px solid #d7e2dc", background: "#ffffff" }, tituloApoyo: { marginTop: 0, marginBottom: "10px", fontSize: "20px" }, rejilla: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginTop: "16px" }, tarjeta: { padding: "18px", borderRadius: "12px", border: "1px solid #dce5df", background: "#ffffff" }, cabeceraTarjeta: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }, titulo: { margin: 0, fontSize: "18px" }, evidencia: { flexShrink: 0, padding: "5px 8px", borderRadius: "999px", background: "#eef4f1", border: "1px solid #d7e2dc", fontSize: "12px", fontWeight: "bold" }, marco: { lineHeight: 1.55 }, lista: { paddingLeft: "20px", lineHeight: 1.55 }, listaPrincipal: { paddingLeft: "22px", lineHeight: 1.65, fontSize: "16px" }, sinDatos: { fontSize: "14px", opacity: 0.72 }, nota: { marginBottom: 0, padding: "10px", borderRadius: "8px", background: "#fff8e6", fontSize: "14px", lineHeight: 1.45 }, bloqueo: { padding: "12px", borderRadius: "8px", background: "#fff0f0", border: "1px solid #efb8b8", lineHeight: 1.45 },
};

export default EnfoquesComparados;