import type { Condicion, EnfoqueComparado } from "../datos/condiciones";

interface EnfoquesComparadosProps {
  condicion: Condicion;
  bloquearIntervencionesNaturales?: boolean;
}

const etiquetasEvidencia = {
  alta: "Evidencia alta",
  moderada: "Evidencia moderada",
  limitada: "Evidencia limitada",
  tradicional: "Uso / marco tradicional",
};

function TarjetaEnfoque({
  enfoque,
  bloquearIntervenciones = false,
}: {
  enfoque: EnfoqueComparado;
  bloquearIntervenciones?: boolean;
}) {
  return (
    <article style={estilos.tarjeta}>
      <div style={estilos.cabeceraTarjeta}>
        <h4 style={estilos.titulo}>{enfoque.titulo}</h4>
        <span style={estilos.evidencia}>
          {etiquetasEvidencia[enfoque.nivelEvidencia]}
        </span>
      </div>

      <p style={estilos.marco}>{enfoque.marco}</p>

      {bloquearIntervenciones ? (
        <div style={estilos.bloqueo}>
          Las intervenciones de este enfoque quedan en segundo plano porque se
          han detectado señales que requieren valoración médica previa.
        </div>
      ) : (
        <ul style={estilos.lista}>
          {enfoque.intervenciones.map((intervencion) => (
            <li key={intervencion}>{intervencion}</li>
          ))}
        </ul>
      )}

      {enfoque.nota && <p style={estilos.nota}>{enfoque.nota}</p>}
    </article>
  );
}

function EnfoquesComparados({
  condicion,
  bloquearIntervencionesNaturales = false,
}: EnfoquesComparadosProps) {
  const { enfoques } = condicion;

  return (
    <section style={estilos.contenedor}>
      <div style={estilos.introduccion}>
        <h3 style={{ marginTop: 0 }}>Comparación de enfoques</h3>
        <p style={{ marginBottom: 0 }}>
          Cada sistema se presenta por separado. El nivel de evidencia indica
          el respaldo disponible y evita equiparar enfoques que utilizan marcos
          clínicos diferentes.
        </p>
      </div>

      <div style={estilos.rejilla}>
        <TarjetaEnfoque enfoque={enfoques.convencional} />
        <TarjetaEnfoque enfoque={enfoques.nutricion} />
        <TarjetaEnfoque
          enfoque={enfoques.natural}
          bloquearIntervenciones={bloquearIntervencionesNaturales}
        />
        <TarjetaEnfoque
          enfoque={enfoques.medicinaChina}
          bloquearIntervenciones={bloquearIntervencionesNaturales}
        />
        <TarjetaEnfoque enfoque={enfoques.estiloVida} />
      </div>
    </section>
  );
}

const estilos = {
  contenedor: {
    marginTop: "26px",
  },
  introduccion: {
    padding: "18px",
    borderRadius: "12px",
    background: "#f3f7f5",
    border: "1px solid #d7e2dc",
  },
  rejilla: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px",
    marginTop: "16px",
  },
  tarjeta: {
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #dce5df",
    background: "#ffffff",
  },
  cabeceraTarjeta: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "12px",
  },
  titulo: {
    margin: 0,
    fontSize: "18px",
  },
  evidencia: {
    flexShrink: 0,
    padding: "5px 8px",
    borderRadius: "999px",
    background: "#eef4f1",
    border: "1px solid #d7e2dc",
    fontSize: "12px",
    fontWeight: "bold",
  },
  marco: {
    lineHeight: 1.55,
  },
  lista: {
    paddingLeft: "20px",
    lineHeight: 1.55,
  },
  nota: {
    marginBottom: 0,
    padding: "10px",
    borderRadius: "8px",
    background: "#fff8e6",
    fontSize: "14px",
    lineHeight: 1.45,
  },
  bloqueo: {
    padding: "12px",
    borderRadius: "8px",
    background: "#fff0f0",
    border: "1px solid #efb8b8",
    lineHeight: 1.45,
  },
};

export default EnfoquesComparados;