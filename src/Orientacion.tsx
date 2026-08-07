import { useState } from "react";
import { orientarPorSintomas } from "./datos/motorOrientacion";

function Orientacion() {
  const [textoSintomas, setTextoSintomas] = useState("");
  const [resultados, setResultados] = useState(
    orientarPorSintomas([])
  );

  const analizarSintomas = () => {
    const sintomas = textoSintomas
      .split(",")
      .map((sintoma) => sintoma.trim())
      .filter(Boolean);

    setResultados(orientarPorSintomas(sintomas));
  };

  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "24px",
        background: "white",
        borderRadius: "14px",
        boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
      }}
    >
      <h2>Orientación por síntomas</h2>

      <p>
        Escribe los síntomas separados por comas. Por ejemplo:
        <strong> heces duras, hinchazón abdominal, esfuerzo al defecar</strong>
      </p>

      <textarea
        value={textoSintomas}
        onChange={(event) => setTextoSintomas(event.target.value)}
        placeholder="Escribe aquí tus síntomas..."
        rows={5}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #cfd8d3",
          fontSize: "16px",
          resize: "vertical",
        }}
      />

      <button
        type="button"
        onClick={analizarSintomas}
        style={{
          marginTop: "16px",
          background: "#0b8f52",
          color: "white",
          border: "none",
          borderRadius: "10px",
          padding: "12px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Analizar síntomas
      </button>

      <div style={{ marginTop: "28px" }}>
        {resultados.length === 0 ? (
          <p>
            Todavía no hay coincidencias suficientes. Prueba a escribir síntomas
            más concretos.
          </p>
        ) : (
          resultados.map((resultado) => (
            <article
              key={resultado.condicion.id}
              style={{
                border: "1px solid #dce5df",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "18px",
              }}
            >
              <h3>{resultado.condicion.nombre}</h3>

              <p>{resultado.condicion.descripcion}</p>

              <p>
                <strong>Coincidencias encontradas:</strong>{" "}
                {resultado.coincidencias.join(", ")}
              </p>

              <h4>Nutrición</h4>
              <ul>
                {resultado.condicion.nutricion.map((consejo) => (
                  <li key={consejo}>{consejo}</li>
                ))}
              </ul>

              <h4>Fitoterapia</h4>
              <ul>
                {resultado.condicion.fitoterapia.map((planta) => (
                  <li key={planta}>{planta}</li>
                ))}
              </ul>

              <h4>Cuándo acudir al médico</h4>
              <ul>
                {resultado.condicion.cuandoAcudirMedico.map((aviso) => (
                  <li key={aviso}>{aviso}</li>
                ))}
              </ul>

              <p
                style={{
                  marginTop: "18px",
                  padding: "12px",
                  background: "#fff4f4",
                  borderLeft: "4px solid #d22",
                }}
              >
                Esta información es orientativa y no sustituye una valoración
                médica.
              </p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default Orientacion;