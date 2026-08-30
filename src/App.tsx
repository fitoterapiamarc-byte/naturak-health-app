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
