import { useState } from "react";
import {
  guardarPerfilSeguridad,
  leerPerfilSeguridad,
  motivosRevisionFitoterapia,
  type PerfilSeguridad,
} from "../datos/perfilSeguridad";

export default function PerfilSalud() {
  const [perfil, setPerfil] = useState<PerfilSeguridad>(() => leerPerfilSeguridad());
  const [guardado, setGuardado] = useState(false);
  const motivos = motivosRevisionFitoterapia(perfil);

  const cambiar = <K extends keyof PerfilSeguridad>(campo: K, valor: PerfilSeguridad[K]) => {
    setPerfil((actual) => ({ ...actual, [campo]: valor }));
    setGuardado(false);
  };

  const guardar = () => {
    guardarPerfilSeguridad(perfil);
    setGuardado(true);
    window.setTimeout(() => setGuardado(false), 2200);
  };

  return (
    <section style={s.card}>
      <details>
        <summary style={s.summary}>
          <span>👤 Perfil de salud y seguridad</span>
          <small style={s.small}>Recomendado antes de consultar fitoterapia</small>
        </summary>

        <div style={s.body}>
          <p style={s.intro}>
            Estos datos se guardan únicamente en este navegador. Se utilizan para aplicar filtros de seguridad y evitar mostrar fitoterapia como apta cuando antes hay que revisar medicación, alergias o situaciones especiales.
          </p>

          <div style={s.grid}>
            <label style={s.label}>
              <b>Edad</b>
              <input type="number" min="0" max="120" value={perfil.edad} onChange={(e) => cambiar("edad", e.target.value)} style={s.input} placeholder="54" />
            </label>
            <label style={s.label}>
              <b>Sexo biológico</b>
              <select value={perfil.sexo} onChange={(e) => cambiar("sexo", e.target.value)} style={s.input}>
                <option value="">Sin indicar</option>
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
                <option value="intersexual">Intersexual</option>
                <option value="prefiero-no-indicar">Prefiero no indicarlo</option>
              </select>
            </label>
          </div>

          <label style={s.label}>
            <b>Medicamentos</b>
            <textarea value={perfil.medicacion} onChange={(e) => cambiar("medicacion", e.target.value)} rows={2} style={s.textarea} placeholder="Ejemplo: enalapril, metformina..." />
          </label>
          <label style={s.label}>
            <b>Suplementos</b>
            <textarea value={perfil.suplementos} onChange={(e) => cambiar("suplementos", e.target.value)} rows={2} style={s.textarea} placeholder="Ejemplo: magnesio, omega-3..." />
          </label>
          <label style={s.label}>
            <b>Alergias</b>
            <textarea value={perfil.alergias} onChange={(e) => cambiar("alergias", e.target.value)} rows={2} style={s.textarea} placeholder="Medicamentos, plantas, alimentos..." />
          </label>
          <label style={s.label}>
            <b>Antecedentes o enfermedades conocidas</b>
            <textarea value={perfil.antecedentes} onChange={(e) => cambiar("antecedentes", e.target.value)} rows={2} style={s.textarea} placeholder="Ejemplo: hipertensión, diabetes..." />
          </label>

          <div style={s.checks}>
            <label style={s.check}><input type="checkbox" checked={perfil.embarazoLactancia} onChange={(e) => cambiar("embarazoLactancia", e.target.checked)} /> Embarazo o lactancia</label>
            <label style={s.check}><input type="checkbox" checked={perfil.enfermedadRenal} onChange={(e) => cambiar("enfermedadRenal", e.target.checked)} /> Enfermedad renal</label>
            <label style={s.check}><input type="checkbox" checked={perfil.enfermedadHepatica} onChange={(e) => cambiar("enfermedadHepatica", e.target.checked)} /> Enfermedad hepática</label>
            <label style={s.check}><input type="checkbox" checked={perfil.anticoagulantes} onChange={(e) => cambiar("anticoagulantes", e.target.checked)} /> Anticoagulantes/antiagregantes</label>
          </div>

          {motivos.length > 0 && (
            <div style={s.warning}>
              <b>Revisión necesaria antes de fitoterapia:</b> {motivos.join(", ")}.
            </div>
          )}

          <button type="button" onClick={guardar} style={s.button}>{guardado ? "✓ Guardado" : "Guardar perfil"}</button>
        </div>
      </details>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  card: { maxWidth: 1100, margin: "18px auto 0", padding: "0 18px", fontFamily: "Arial,sans-serif" },
  summary: { cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", padding: "15px 17px", borderRadius: 14, border: "1px solid #cfe0d7", background: "#f6faf8", color: "#214c3b", fontSize: 17, fontWeight: 800 },
  small: { color: "#5d7067", fontSize: 12, fontWeight: 600, textAlign: "right" },
  body: { marginTop: 10, padding: "18px", border: "1px solid #d7e2dc", borderRadius: 14, background: "white" },
  intro: { marginTop: 0, color: "#53665d", lineHeight: 1.5 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 },
  label: { display: "grid", gap: 7, marginTop: 12, color: "#29483a" },
  input: { boxSizing: "border-box", width: "100%", padding: 11, borderRadius: 9, border: "1px solid #b9cbc2", fontSize: 15, background: "white" },
  textarea: { boxSizing: "border-box", width: "100%", padding: 11, borderRadius: 9, border: "1px solid #b9cbc2", fontSize: 15, resize: "vertical" },
  checks: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 9, marginTop: 16 },
  check: { display: "flex", alignItems: "center", gap: 8, padding: 10, borderRadius: 9, background: "#f6f8f7" },
  warning: { marginTop: 15, padding: 12, borderRadius: 10, border: "1px solid #f0c47b", background: "#fff8e8", color: "#75500a", lineHeight: 1.45 },
  button: { marginTop: 16, padding: "12px 17px", border: 0, borderRadius: 10, background: "#216b4d", color: "white", fontWeight: 800, cursor: "pointer" },
};
