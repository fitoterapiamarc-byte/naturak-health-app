import { useState } from "react";
import EnfoquesComparados from "../components/EnfoquesComparados";
import {
  orientarPorSintomas,
  type ResultadoOrientacion,
} from "../datos/motorOrientacion";
import { categoriasEvaluacion } from "../evaluacion/opcionesEvaluacion";
import { preguntasSeguimiento } from "../evaluacion/preguntasSeguimiento";

function EvaluacionIntegral() {
  const [categoriaAbierta, setCategoriaAbierta] = useState<string | null>(null);
  const [seleccionados, setSeleccionados] = useState<string[]>([]);
  const [respuestasSeguimiento, setRespuestasSeguimiento] = useState<string[]>([]);
  const [detalles, setDetalles] = useState("");
  const [resultados, setResultados] = useState<ResultadoOrientacion[]>([]);
  const [analizado, setAnalizado] = useState(false);

  const alternar = (
    opcion: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((actuales) =>
      actuales.includes(opcion)
        ? actuales.filter((elemento) => elemento !== opcion)
        : [...actuales, opcion]
    );
    setAnalizado(false);
  };

  const preguntasActivas = preguntasSeguimiento.filter((pregunta) =>
    pregunta.activadores.some((activador) => seleccionados.includes(activador))
  );

  const analizarEvaluacion = () => {
    const datosAdicionales = detalles
      .split(/,|\n/)
      .map((dato) => dato.trim())
      .filter(Boolean);

    setResultados(
      orientarPorSintomas([
        ...seleccionados,
        ...respuestasSeguimiento,
        ...datosAdicionales,
      ])
    );
    setAnalizado(true);
  };

  const sinDatos =
    seleccionados.length === 0 &&
    respuestasSeguimiento.length === 0 &&
    detalles.trim() === "";

  return (
    <section style={estilos.contenedor}>
      <h2>Evaluación integral</h2>
      <p>
        Marca todo lo que coincida con tu situación. La app cruza los datos y,
        cuando encuentra compatibilidad suficiente, compara distintos enfoques
        sin presentarlos como equivalentes.
      </p>

      <div style={estilos.categorias}>
        {categoriasEvaluacion.map((categoria) => {
          const abierta = categoriaAbierta === categoria.id;
          return (
            <div key={categoria.id} style={estilos.categoriaBloque}>
              <button
                type="button"
                onClick={() => setCategoriaAbierta(abierta ? null : categoria.id)}
                style={{
                  ...estilos.botonCategoria,
                  background: abierta ? "#0b8f52" : "#ffffff",
                  color: abierta ? "#ffffff" : "#183128",
                }}
              >
                <span style={estilos.icono}>{categoria.icono}</span>
                <span>{categoria.titulo}</span>
                <span>{abierta ? "▲" : "▼"}</span>
              </button>

              {abierta && (
                <div style={estilos.cuadriculaOpciones}>
                  {categoria.opciones.map((opcion) => (
                    <BotonOpcion
                      key={opcion}
                      texto={opcion}
                      seleccionado={seleccionados.includes(opcion)}
                      alPulsar={() => alternar(opcion, setSeleccionados)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {preguntasActivas.length > 0 && (
        <section style={estilos.seguimiento}>
          <h2>Preguntas para afinar la orientación</h2>
          <p>Marca únicamente las respuestas que coincidan contigo.</p>

          {preguntasActivas.map((pregunta) => (
            <div
              key={pregunta.id}
              style={{
                ...estilos.pregunta,
                borderColor: pregunta.esAlarma ? "#e0a000" : "#cfe5d8",
              }}
            >
              <h3>{pregunta.texto}</h3>
              {pregunta.esAlarma && (
                <p style={estilos.textoAlarma}>
                  ⚠️ Esta pregunta ayuda a detectar señales que pueden requerir
                  valoración médica.
                </p>
              )}
              <div style={estilos.cuadriculaOpciones}>
                {pregunta.opciones.map((opcion) => (
                  <BotonOpcion
                    key={`${pregunta.id}-${opcion}`}
                    texto={opcion}
                    seleccionado={respuestasSeguimiento.includes(opcion)}
                    alPulsar={() => alternar(opcion, setRespuestasSeguimiento)}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      <div style={{ marginTop: "30px" }}>
        <label>
          <strong>¿Quieres añadir algún detalle?</strong>
        </label>
        <textarea
          value={detalles}
          onChange={(event) => {
            setDetalles(event.target.value);
            setAnalizado(false);
          }}
          placeholder="Puedes escribir algo que no aparezca en las opciones..."
          rows={4}
          style={estilos.textarea}
        />
      </div>

      <div style={estilos.resumen}>
        <strong>Datos seleccionados:</strong>
        {seleccionados.length === 0 && respuestasSeguimiento.length === 0 ? (
          <p>Todavía no has seleccionado ninguna opción.</p>
        ) : (
          <Lista elementos={[...seleccionados, ...respuestasSeguimiento]} />
        )}
      </div>

      <button
        type="button"
        onClick={analizarEvaluacion}
        disabled={sinDatos}
        style={{ ...estilos.botonAnalizar, opacity: sinDatos ? 0.5 : 1 }}
      >
        Analizar cuadro completo
      </button>

      {analizado && (
        <div style={{ marginTop: "30px" }}>
          {resultados.length === 0 ? (
            <div style={estilos.avisoAmarillo}>
              Todavía no hay coincidencias suficientes en la base de
              conocimiento. La base se irá ampliando con nuevas patologías y
              cuadros funcionales.
            </div>
          ) : (
            resultados.map((resultado) => (
              <article key={resultado.condicion.id} style={estilos.resultado}>
                <h3>{resultado.condicion.nombre}</h3>

                {resultado.requiereValoracionMedica && (
                  <div style={estilos.alarma}>
                    <h4>⚠️ Señales de alarma detectadas</h4>
                    <Lista elementos={resultado.senalesAlarmaDetectadas} />
                    <strong>
                      Se recomienda valoración médica antes de aplicar
                      fitoterapia o suplementación.
                    </strong>
                  </div>
                )}

                <p>{resultado.condicion.descripcion}</p>
                <p>
                  <strong>Datos coincidentes:</strong>{" "}
                  {resultado.coincidencias.join(", ")}
                </p>

                <div style={estilos.confianza}>
                  <strong>
                    Compatibilidad orientativa: {resultado.confianza}%
                  </strong>
                  <div style={estilos.barraFondo}>
                    <div
                      style={{
                        ...estilos.barraProgreso,
                        width: `${resultado.confianza}%`,
                      }}
                    />
                  </div>
                </div>

                {resultado.contradicciones.length > 0 && (
                  <div style={estilos.avisoAmarillo}>
                    <strong>Datos que reducen la compatibilidad:</strong>
                    <Lista elementos={resultado.contradicciones} />
                  </div>
                )}

                <h4>Posibles causas o factores relacionados</h4>
                <Lista elementos={resultado.condicion.posiblesCausas} />

                <EnfoquesComparados
                  condicion={resultado.condicion}
                  bloquearIntervencionesNaturales={
                    resultado.requiereValoracionMedica
                  }
                />

                <div style={estilos.bloqueClinico}>
                  <h4>Pruebas médicas habituales</h4>
                  <Lista elementos={resultado.condicion.pruebasMedicasHabituales} />

                  <h4>Profesionales de referencia</h4>
                  <Lista elementos={resultado.condicion.especialistaRecomendado} />

                  <h4>Cuándo acudir al médico</h4>
                  <Lista elementos={resultado.condicion.cuandoAcudirMedico} />
                </div>
              </article>
            ))
          )}
        </div>
      )}

      <p style={estilos.avisoLegal}>
        Esta herramienta ofrece orientación educativa y comparación de marcos
        de abordaje. No confirma diagnósticos ni sustituye una valoración
        médica. Los enfoques tradicionales se muestran como marcos propios y no
        como equivalentes a un diagnóstico biomédico.
      </p>
    </section>
  );
}

interface BotonOpcionProps {
  texto: string;
  seleccionado: boolean;
  alPulsar: () => void;
}

function BotonOpcion({ texto, seleccionado, alPulsar }: BotonOpcionProps) {
  return (
    <button
      type="button"
      onClick={alPulsar}
      style={{
        ...estilos.opcion,
        background: seleccionado ? "#0b8f52" : "#ffffff",
        color: seleccionado ? "#ffffff" : "#183128",
        borderColor: seleccionado ? "#0b8f52" : "#cfd8d3",
      }}
    >
      <span>{seleccionado ? "✓" : "○"}</span>
      {texto}
    </button>
  );
}

function Lista({ elementos }: { elementos: string[] }) {
  return (
    <ul>
      {elementos.map((elemento) => (
        <li key={elemento}>{elemento}</li>
      ))}
    </ul>
  );
}

const estilos = {
  contenedor: {
    maxWidth: "1100px",
    margin: "30px auto",
    padding: "28px",
    background: "white",
    borderRadius: "14px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
  },
  categorias: { display: "grid", gap: "14px", marginTop: "26px" },
  categoriaBloque: {
    border: "1px solid #dce5df",
    borderRadius: "12px",
    overflow: "hidden",
  },
  botonCategoria: {
    width: "100%",
    minHeight: "68px",
    padding: "16px 18px",
    border: "none",
    display: "grid",
    gridTemplateColumns: "45px 1fr 30px",
    alignItems: "center",
    textAlign: "left" as const,
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  icono: { fontSize: "26px" },
  cuadriculaOpciones: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "12px",
    padding: "16px",
    background: "#f7faf8",
  },
  opcion: {
    minHeight: "60px",
    padding: "13px",
    border: "2px solid",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "left" as const,
    cursor: "pointer",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  seguimiento: {
    marginTop: "30px",
    padding: "20px",
    background: "#f3faf6",
    borderRadius: "14px",
    border: "1px solid #cfe5d8",
  },
  pregunta: {
    marginTop: "18px",
    padding: "16px",
    background: "#ffffff",
    border: "2px solid",
    borderRadius: "12px",
  },
  textoAlarma: { color: "#9b6200", fontWeight: "bold" },
  textarea: {
    width: "100%",
    marginTop: "10px",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #cfd8d3",
    fontSize: "16px",
    resize: "vertical" as const,
  },
  resumen: {
    marginTop: "24px",
    padding: "18px",
    background: "#f3faf6",
    borderRadius: "10px",
    border: "1px solid #cfe5d8",
  },
  botonAnalizar: {
    marginTop: "24px",
    width: "100%",
    background: "#0b8f52",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "16px 22px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  resultado: {
    border: "1px solid #dce5df",
    borderRadius: "12px",
    padding: "22px",
    marginBottom: "18px",
  },
  confianza: {
    margin: "18px 0",
    padding: "16px",
    background: "#f3faf6",
    borderRadius: "10px",
  },
  barraFondo: {
    width: "100%",
    height: "12px",
    marginTop: "10px",
    background: "#e4ebe7",
    borderRadius: "10px",
    overflow: "hidden",
  },
  barraProgreso: { height: "100%", background: "#0b8f52" },
  alarma: {
    marginBottom: "20px",
    padding: "16px",
    background: "#fff0f0",
    border: "2px solid #d60000",
    borderRadius: "10px",
    color: "#9b0000",
  },
  avisoAmarillo: {
    marginBottom: "18px",
    padding: "16px",
    background: "#fff8e6",
    borderLeft: "4px solid #e0a000",
  },
  bloqueClinico: {
    marginTop: "24px",
    padding: "18px",
    borderRadius: "12px",
    background: "#f7faf8",
    border: "1px solid #dce5df",
  },
  avisoLegal: {
    marginTop: "24px",
    padding: "14px",
    background: "#fff4f4",
    borderLeft: "4px solid #d22",
    lineHeight: 1.5,
  },
};

export default EvaluacionIntegral;