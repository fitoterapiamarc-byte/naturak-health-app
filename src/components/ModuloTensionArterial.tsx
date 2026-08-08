import { useState } from "react";

type Nivel = "sin-datos" | "orientativo-normal" | "orientativo-elevado" | "orientativo-alto" | "urgente";

function interpretar(sis: number, dia: number): { nivel: Nivel; titulo: string; texto: string } {
  if (!sis || !dia) return { nivel: "sin-datos", titulo: "Introduce las dos cifras", texto: "Necesitamos la presión sistólica y diastólica para orientar la lectura." };
  if (sis >= 180 || dia >= 120) return { nivel: "urgente", titulo: "Cifra muy elevada", texto: "Repite la medición tras unos minutos de reposo. Si persiste, requiere valoración médica; con dolor de pecho, falta de aire, confusión, debilidad o dificultad para hablar, busca atención urgente." };
  if (sis >= 140 || dia >= 90) return { nivel: "orientativo-alto", titulo: "Presión elevada", texto: "Una lectura aislada no diagnostica hipertensión. Conviene repetir mediciones correctamente y comentarlas con un profesional si se mantienen elevadas." };
  if (sis >= 130 || dia >= 85) return { nivel: "orientativo-elevado", titulo: "Por encima del rango óptimo", texto: "Conviene vigilar la tendencia y repetir la medición en condiciones correctas. La interpretación clínica depende de varias mediciones y del riesgo cardiovascular." };
  return { nivel: "orientativo-normal", titulo: "Lectura en rango orientativamente favorable", texto: "La cifra aislada parece favorable, pero no sustituye el seguimiento indicado si existe hipertensión diagnosticada o tratamiento." };
}

export default function ModuloTensionArterial() {
  const [sistolica, setSistolica] = useState("");
  const [diastolica, setDiastolica] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const resultado = interpretar(Number(sistolica), Number(diastolica));
  const fondo = resultado.nivel === "urgente" ? "#fff0f0" : resultado.nivel === "orientativo-alto" ? "#fff5e8" : resultado.nivel === "orientativo-elevado" ? "#fffbe8" : "#eef8f2";
  const borde = resultado.nivel === "urgente" ? "#d9534f" : resultado.nivel === "orientativo-alto" ? "#d88927" : resultado.nivel === "orientativo-elevado" ? "#c4a51b" : "#70a986";

  return <section style={s.card} aria-label="Control visual de tensión arterial">
    <div style={s.encabezado}>
      <div><div style={s.icono}>🩺</div></div>
      <div><h2 style={s.h2}>Comprueba tu tensión arterial</h2><p style={s.sub}>Introduce una medición del tensiómetro. Es una orientación, no un diagnóstico.</p></div>
    </div>

    <div style={s.preparacion}>
      <strong>Antes de medir:</strong>
      <div style={s.pasos}><span>🪑 5 min sentado</span><span>🦶 Pies en el suelo</span><span>💪 Brazo apoyado</span><span>☕ Sin café ni ejercicio justo antes</span></div>
    </div>

    <div style={s.medidores}>
      <label style={s.label}><span style={s.labelTitulo}>SISTÓLICA</span><span style={s.labelAyuda}>la cifra de arriba</span><input inputMode="numeric" pattern="[0-9]*" value={sistolica} onChange={e=>{setSistolica(e.target.value.replace(/\D/g,"").slice(0,3));setMostrar(false)}} placeholder="120" style={s.input}/><span style={s.mmhg}>mmHg</span></label>
      <div style={s.barra}>/</div>
      <label style={s.label}><span style={s.labelTitulo}>DIASTÓLICA</span><span style={s.labelAyuda}>la cifra de abajo</span><input inputMode="numeric" pattern="[0-9]*" value={diastolica} onChange={e=>{setDiastolica(e.target.value.replace(/\D/g,"").slice(0,3));setMostrar(false)}} placeholder="80" style={s.input}/><span style={s.mmhg}>mmHg</span></label>
    </div>

    <button style={s.boton} disabled={!sistolica || !diastolica} onClick={()=>setMostrar(true)}>Interpretar medición</button>

    {mostrar && <div style={{...s.resultado,background:fondo,borderColor:borde}}>
      <div style={s.cifra}>{sistolica} / {diastolica} <small style={{fontSize:16}}>mmHg</small></div>
      <h3 style={s.resultadoTitulo}>{resultado.titulo}</h3><p style={s.resultadoTexto}>{resultado.texto}</p>
      <div style={s.recordatorio}><strong>Importante:</strong> no cambies ni suspendas medicación por esta lectura. Para valorar hipertensión se necesitan mediciones correctas y repetidas.</div>
    </div>}

    <details style={s.details}><summary style={s.summary}>¿Cómo medirla correctamente?</summary><ol style={s.lista}><li>Descansa sentado al menos 5 minutos.</li><li>Espalda apoyada, piernas sin cruzar y pies en el suelo.</li><li>Coloca el manguito adecuado sobre el brazo desnudo y apóyalo a la altura del corazón.</li><li>No hables durante la medición.</li><li>Si vas a controlar la tensión en casa, registra varias mediciones en distintos días según la pauta de tu profesional.</li></ol></details>
  </section>;
}

const s: Record<string, React.CSSProperties> = {
 card:{maxWidth:1100,margin:"18px auto 0",padding:"22px",background:"#fff",border:"2px solid #cfe0d7",borderRadius:18,fontFamily:"Arial, sans-serif",boxShadow:"0 4px 18px rgba(20,70,50,.07)"},
 encabezado:{display:"flex",gap:14,alignItems:"center"},icono:{fontSize:38},h2:{margin:"0 0 5px",fontSize:25,color:"#214c3b"},sub:{margin:0,color:"#52665d",lineHeight:1.45},
 preparacion:{marginTop:18,padding:14,borderRadius:12,background:"#f4f8f7",color:"#334b41"},pasos:{display:"flex",flexWrap:"wrap",gap:10,marginTop:10,fontSize:14},
 medidores:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,margin:"24px 0 18px",flexWrap:"wrap"},label:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:130},labelTitulo:{fontWeight:800,fontSize:13,color:"#214c3b"},labelAyuda:{fontSize:12,color:"#66776f",marginBottom:6},input:{width:125,fontSize:40,fontWeight:800,textAlign:"center",padding:"10px 6px",border:"2px solid #9dbdaf",borderRadius:14,color:"#173c2e",background:"#fbfdfc"},mmhg:{fontSize:12,color:"#66776f",marginTop:4},barra:{fontSize:38,fontWeight:700,color:"#78958a",paddingTop:18},
 boton:{display:"block",width:"min(100%,420px)",margin:"0 auto",padding:"15px 18px",border:0,borderRadius:12,background:"#216b4d",color:"white",fontSize:17,fontWeight:800,cursor:"pointer"},resultado:{marginTop:20,padding:20,border:"2px solid",borderRadius:14,textAlign:"center"},cifra:{fontSize:31,fontWeight:900,color:"#173c2e"},resultadoTitulo:{fontSize:22,margin:"8px 0"},resultadoTexto:{maxWidth:720,margin:"0 auto",lineHeight:1.55},recordatorio:{marginTop:14,padding:11,borderRadius:9,background:"rgba(255,255,255,.65)",fontSize:14,lineHeight:1.45},details:{marginTop:18,borderTop:"1px solid #dbe5e0",paddingTop:14},summary:{cursor:"pointer",fontWeight:800,color:"#214c3b"},lista:{lineHeight:1.65,paddingLeft:22}
};