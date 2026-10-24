import { useState } from "react";
import { PERFIL_SEGURIDAD_KEY } from "../datos/perfilSeguridad";
import { CLAVE_LECTURAS_TENSION } from "../datos/tensionArterial";

export default function PrivacidadDatos() {
  const [error, setError] = useState("");
  const privacidadUrl = `${import.meta.env.BASE_URL}privacidad.html`;

  const borrarDatosGuardados = () => {
    setError("");
    const aceptado = window.confirm(
      "¿Quieres eliminar el perfil de salud y todas las mediciones de tensión arterial guardadas en ESTE navegador?\n\nEsta acción no se puede deshacer. Si necesitas conservar tus mediciones, expórtalas antes desde el apartado de tensión arterial."
    );
    if (!aceptado) return;

    try {
      window.localStorage.removeItem(PERFIL_SEGURIDAD_KEY);
      window.localStorage.removeItem(CLAVE_LECTURAS_TENSION);
      if (
        window.localStorage.getItem(PERFIL_SEGURIDAD_KEY) !== null ||
        window.localStorage.getItem(CLAVE_LECTURAS_TENSION) !== null
      ) {
        throw new Error("Los datos siguen presentes en el almacenamiento");
      }
      window.alert("Se han eliminado el perfil de salud y el historial de tensión guardados en este navegador. La aplicación se actualizará para mostrar los formularios vacíos.");
      window.location.reload();
    } catch {
      setError("No se han podido borrar los datos. Comprueba los permisos de almacenamiento del navegador y vuelve a intentarlo.");
    }
  };

  return (
    <section
      id="privacidad-datos"
      aria-labelledby="titulo-privacidad"
      style={{
        maxWidth: 1100,
        width: "100%",
        boxSizing: "border-box",
        margin: "14px auto 28px",
        padding: "clamp(16px, 4vw, 24px)",
        background: "#fff",
        border: "1px solid #cfe0d7",
        borderRadius: 14,
        fontFamily: "Arial, sans-serif",
        color: "#214c3b",
        textAlign: "left",
        lineHeight: 1.6,
        scrollMarginTop: 16,
      }}
    >
      <h2 id="titulo-privacidad" style={{ margin: "0 0 8px", color: "#214c3b" }}>
        🔒 Privacidad y control de tus datos
      </h2>
      <p style={{ margin: "0 0 10px" }}>
        CuerpoClaro guarda en este navegador tu perfil de salud (si decides guardarlo) y las
        mediciones de tensión que registres. No necesitas crear una cuenta.
      </p>
      <p style={{ margin: "0 0 12px" }}>
        Los datos quedan en este dispositivo y podrían ser accesibles para otras personas que
        utilicen el mismo navegador. No se sincronizan entre dispositivos. Las selecciones de
        síntomas de la evaluación no se guardan en este historial.
      </p>
      <p style={{ margin: "0 0 16px" }}>
        Puedes borrar todas las mediciones de tensión desde su apartado, o usar este botón
        para eliminar <strong>el perfil y todas las mediciones</strong>. La eliminación se aplica
        solo a este navegador y no se puede deshacer.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <button
          type="button"
          onClick={borrarDatosGuardados}
          style={{
            maxWidth: "100%",
            padding: "13px 18px",
            border: "2px solid #a53939",
            borderRadius: 10,
            background: "#fff4f4",
            color: "#8b1e1e",
            fontWeight: 800,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Borrar mis datos de salud
        </button>
        <a href={privacidadUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#126b48", fontWeight: 700 }}>
          Leer la política de privacidad ↗
        </a>
      </div>
      {error && <p role="alert" style={{ marginTop: 12, color: "#9b0000", fontWeight: 700 }}>{error}</p>}
    </section>
  );
}
