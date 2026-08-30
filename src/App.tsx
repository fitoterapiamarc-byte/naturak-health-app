import { useEffect, useState } from "react";
import Header from "./components/Header";
import EvaluacionIntegral from "./pages/EvaluacionIntegral";
import ModuloTensionArterial from "./components/ModuloTensionArterial";
import PerfilSalud from "./components/PerfilSalud";
import { cifraPortadaCondiciones, totalCondiciones } from "./datos/motorOrientacion";

function App() {
  const [sesionEvaluacion, setSesionEvaluacion] = useState(0);

  useEffect(() => {
    const reiniciar = () => {
      setSesionEvaluacion((a) => a + 1);
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    // En móvil, pageshow cubre reapertura desde caché y focus cubre regreso a la app.
    const alMostrar = (e: PageTransitionEvent) => {
      if (e.persisted) reiniciar();
    };
    const alFoco = () => reiniciar();
    window.addEventListener("pageshow", alMostrar);
    window.addEventListener("focus", alFoco);
    return () => {
      window.removeEventListener("pageshow", alMostrar);
      window.removeEventListener("focus", alFoco);
    };
  }, []);

  return (
    <>
      <Header />
      <section
        aria-labelledby="titulo-seguridad"
        style={{
          maxWidth: "1100px",
          boxSizing: "border-box",
          margin: "16px auto 0",
          padding: "clamp(16px, 4vw, 22px)",
          borderRadius: "14px",
          background: "#fff8e6",
          border: "2px solid #d39a12",
          color: "#5f4300",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.5,
        }}
      >
        <h2 id="titulo-seguridad" style={{ margin: "0 0 10px", fontSize: "clamp(19px, 4vw, 23px)" }}>
          ⚠️ Información de seguridad
        </h2>
        <ul style={{ margin: 0, paddingLeft: "22px", display: "grid", gap: "7px" }}>
          <li><strong>Herramienta educativa y orientativa:</strong> no confirma diagnósticos ni prescribe tratamientos individualizados.</li>
          <li><strong>No sustituye al profesional sanitario:</strong> ante síntomas persistentes, nuevos o preocupantes, consulta con un médico, farmacéutico u otro profesional cualificado.</li>
          <li><strong>Fitoterapia y suplementos:</strong> pueden tener contraindicaciones e interacciones; revisa siempre tu medicación, enfermedades, embarazo o lactancia antes de utilizarlos.</li>
          <li><strong>Emergencias:</strong> si existe dificultad respiratoria intensa, dolor fuerte en el pecho, pérdida de fuerza, confusión, desmayo u otra situación grave, llama al <strong>112 en España</strong>.</li>
          <li><strong>Privacidad:</strong> la información se guarda localmente en este dispositivo. No introduzcas nombres, documentos, teléfonos, direcciones ni otros datos personales sensibles.</li>
        </ul>
      </section>
      <section
        aria-label="Cobertura de la aplicación"
        style={{
          maxWidth: "1100px",
          margin: "16px auto 0",
          padding: "22px 24px",
          borderRadius: "14px",
          background: "#ffffff",
          border: "1px solid #d7e2dc",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: 800, color: "#214c3b", marginBottom: "6px" }}>
          Más de {cifraPortadaCondiciones} condiciones y problemas de salud comunes
        </div>
        <div style={{ fontSize: "16px", color: "#4d6259", lineHeight: 1.5 }}>
          Actualmente la base incluye {totalCondiciones} cuadros de orientación, con evaluación de síntomas,
          señales de alarma y posibles medidas de apoyo mediante nutrición y fitoterapia.
        </div>
      </section>

      <nav
        aria-label="Accesos principales"
        style={{
          maxWidth: "1100px",
          margin: "14px auto 0",
          padding: "0 18px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "10px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <a href="#tension-arterial" style={estiloAcceso}>❤️ Registrar tensión arterial</a>
        <a href="#evaluacion-sintomas" style={estiloAcceso}>🔎 Introducir síntomas</a>
      </nav>

      <PerfilSalud />

      <div id="tension-arterial" style={{ scrollMarginTop: "16px" }}>
        <ModuloTensionArterial />
      </div>

      <main id="evaluacion-sintomas" style={{ padding: "30px", fontFamily: "Arial, sans-serif", background: "#f4f8f7", minHeight: "100vh", scrollMarginTop: "16px" }}>
        <EvaluacionIntegral key={sesionEvaluacion} />
      </main>
    </>
  );
}

const estiloAcceso: React.CSSProperties = {
  padding: "14px 18px",
  borderRadius: "12px",
  background: "#216b4d",
  color: "#ffffff",
  textAlign: "center",
  textDecoration: "none",
  fontWeight: 800,
};

export default App;
