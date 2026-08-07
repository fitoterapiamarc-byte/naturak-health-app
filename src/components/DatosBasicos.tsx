interface DatosBasicosProps {
  edad: string;
  cambiarEdad: (valor: string) => void;
  sexo: string;
  cambiarSexo: (valor: string) => void;
  medicacion: string;
  cambiarMedicacion: (valor: string) => void;
  antecedentes: string;
  cambiarAntecedentes: (valor: string) => void;
}

function DatosBasicos({
  edad,
  cambiarEdad,
  sexo,
  cambiarSexo,
  medicacion,
  cambiarMedicacion,
  antecedentes,
  cambiarAntecedentes,
}: DatosBasicosProps) {
  return (
    <section style={estilos.contenedor}>
      <h2>Datos básicos</h2>

      <p>
        Estos datos ayudan a interpretar mejor el conjunto de síntomas.
      </p>

      <div style={estilos.cuadricula}>
        <label style={estilos.campo}>
          <strong>Edad</strong>

          <input
            type="number"
            min="0"
            max="120"
            value={edad}
            onChange={(evento) => cambiarEdad(evento.target.value)}
            placeholder="Ejemplo: 54"
            style={estilos.input}
          />
        </label>

        <label style={estilos.campo}>
          <strong>Sexo biológico</strong>

          <select
            value={sexo}
            onChange={(evento) => cambiarSexo(evento.target.value)}
            style={estilos.input}
          >
            <option value="">Seleccionar</option>
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
            <option value="intersexual">Intersexual</option>
            <option value="prefiero-no-indicar">Prefiero no indicarlo</option>
          </select>
        </label>
      </div>

      <label style={estilos.campo}>
        <strong>Medicamentos y suplementos</strong>

        <textarea
          value={medicacion}
          onChange={(evento) => cambiarMedicacion(evento.target.value)}
          placeholder="Ejemplo: enalapril, metformina, magnesio..."
          rows={3}
          style={estilos.textarea}
        />
      </label>

      <label style={estilos.campo}>
        <strong>Enfermedades o antecedentes conocidos</strong>

        <textarea
          value={antecedentes}
          onChange={(evento) => cambiarAntecedentes(evento.target.value)}
          placeholder="Ejemplo: hipertensión, diabetes, operación de vesícula..."
          rows={3}
          style={estilos.textarea}
        />
      </label>
    </section>
  );
}

const estilos = {
  contenedor: {
    marginBottom: "28px",
    padding: "22px",
    background: "#f3faf6",
    border: "1px solid #cfe5d8",
    borderRadius: "14px",
  },

  cuadricula: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },

  campo: {
    display: "grid",
    gap: "9px",
    marginTop: "18px",
  },

  input: {
    width: "100%",
    padding: "13px",
    border: "1px solid #bdcec4",
    borderRadius: "10px",
    fontSize: "16px",
    background: "white",
  },

  textarea: {
    width: "100%",
    padding: "13px",
    border: "1px solid #bdcec4",
    borderRadius: "10px",
    fontSize: "16px",
    resize: "vertical" as const,
  },
};

export default DatosBasicos;