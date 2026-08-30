import { useMemo, useState } from "react";
import EnfoquesComparados from "../components/EnfoquesComparados";
import { orientarPorSintomas, type ResultadoOrientacion } from "../datos/motorOrientacion";
import { obtenerConsejosSintoma, type ConsejoSintoma } from "../evaluacion/consejosSintoma";
import { categoriasEvaluacion, opcionesNormales } from "../evaluacion/opcionesEvaluacion";
import { alternarRespuestaSeguimiento, preguntasSeguimiento, type RespuestasSeguimiento } from "../evaluacion/preguntasSeguimiento";
import { detectarAlarmasGlobales, type SenalAlarmaGlobal } from "../evaluacion/senalesAlarmaGlobales";

function normalizar(texto:string){return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}

function EvaluacionIntegral() {
  const [categoriaAbierta,setCategoriaAbierta]=useState<string|null>(null);
  const [seleccionados,setSeleccionados]=useState<string[]>([]);
  const [respuestasSeguimiento,setRespuestasSeguimiento]=useState<RespuestasSeguimiento>({});
  const [detalles,setDetalles]=useState("");
  const [resultados,setResultados]=useState<ResultadoOrientacion[]>([]);
  const [alarmasGlobales,setAlarmasGlobales]=useState<SenalAlarmaGlobal[]>([]);
  const [consejosGenerales,setConsejosGenerales]=useState<ConsejoSintoma[]>([]);
  const [analizado,setAnalizado]=useState(false);
  const [busqueda,setBusqueda]=useState("");

  const alternarOpcionCategoria=(opcion:string,categoria:(typeof categoriasEvaluacion)[number])=>{
    const opcionesCategoria=categoriasEvaluacion.find(elemento=>elemento.id===categoria.id)?.opciones??categoria.opciones;
    setSeleccionados(actuales=>{
      if(actuales.includes(opcion))return actuales.filter(elemento=>elemento!==opcion);
      const normal=opcionesCategoria.find(elemento=>opcionesNormales.has(elemento));
      if(opcionesNormales.has(opcion))return [...actuales.filter(elemento=>!opcionesCategoria.includes(elemento)),opcion];
      return [...actuales.filter(elemento=>elemento!==normal),opcion];
    });
    setAnalizado(false);
  };
  const limpiarSeleccion=()=>{setSeleccionados([]);setRespuestasSeguimiento({});setDetalles("");setResultados([]);setAlarmasGlobales([]);setConsejosGenerales([]);setAnalizado(false);setBusqueda("");setCategoriaAbierta(null);window.scrollTo({top:0,behavior:"smooth"})};

  const categoriasFiltradas=useMemo(()=>{
    const q=normalizar(busqueda.trim());
    if(!q)return categoriasEvaluacion;
    return categoriasEvaluacion.map(c=>({...c,opciones:c.opciones.filter(o=>normalizar(o).includes(q))})).filter(c=>normalizar(c.titulo).includes(q)||c.opciones.length>0);
  },[busqueda]);
  const coincidenciasBusqueda=busqueda.trim()?categoriasFiltradas.reduce((t,c)=>t+c.opciones.length,0):0;
  const preguntasActivas=preguntasSeguimiento.filter(p=>p.activadores.some(a=>seleccionados.includes(a)));
  const respuestasActivas=preguntasActivas.flatMap(p=>respuestasSeguimiento[p.id]??[]);

  const analizarEvaluacion=()=>{const datosAdicionales=detalles.split(/,|\n/).map(d=>d.trim()).filter(Boolean);const todos=[...seleccionados,...respuestasActivas,...datosAdicionales].filter(dato=>!opcionesNormales.has(dato)&&dato!=="Ninguno");setAlarmasGlobales(detectarAlarmasGlobales(todos));setConsejosGenerales(obtenerConsejosSintoma(todos));setResultados(orientarPorSintomas(todos));setAnalizado(true);setTimeout(()=>document.getElementById("resultados-evaluacion")?.scrollIntoView({behavior:"smooth",block:"start"}),50)};
  const sinDatos=seleccionados.length===0&&respuestasActivas.length===0&&detalles.trim()==="";
  const existeAlarmaPrioritaria=alarmasGlobales.some(a=>a.nivel==="urgente"||a.nivel==="prioritaria");
  const mostrarConsejosGenerales=alarmasGlobales.length===0&&resultados.length===0&&consejosGenerales.length>0;
  const totalMarcados=seleccionados.length+respuestasActivas.length;

  return <section style={estilos.contenedor}>
    <div style={estilos.cabecera}><div><h2 style={estilos.titulo}>Evaluación integral</h2><p style={estilos.intro}>Busca un síntoma o abre una categoría. Marca todo lo que coincida contigo y después pulsa analizar.</p></div><div style={estilos.contador}>{totalMarcados}<small> marcados</small></div></div>

    <div style={estilos.buscadorCaja}><span style={estilos.lupa}>🔎</span><input value={busqueda} onChange={e=>setBusqueda(e.target.value)} placeholder="Buscar síntoma: mareo, dolor, picor..." style={estilos.buscador} aria-label="Buscar síntomas"/>{busqueda&&<button onClick={()=>setBusqueda("")} style={estilos.borrarBusqueda} aria-label="Borrar búsqueda">✕</button>}</div>
    {busqueda&&<div style={estilos.resultadoBusqueda}>{coincidenciasBusqueda>0?`${coincidenciasBusqueda} opciones encontradas`:`No encuentro ese síntoma en las opciones. Puedes escribirlo más abajo en “Añadir detalle”.`}</div>}

    {totalMarcados>0&&<div style={estilos.seleccionBarra}><div style={estilos.chips}>{[...seleccionados,...respuestasActivas].slice(0,8).map((x,i)=><span key={`${x}-${i}`} style={estilos.chip}>✓ {x}</span>)}{totalMarcados>8&&<span style={estilos.chip}>+{totalMarcados-8} más</span>}</div><button onClick={limpiarSeleccion} style={estilos.limpiar}>Limpiar todo</button></div>}

    <div style={estilos.categorias}>{categoriasFiltradas.map(c=>{const abierta=busqueda.trim()?true:categoriaAbierta===c.id;return <div key={c.id} style={estilos.categoriaBloque}><button type="button" onClick={()=>!busqueda.trim()&&setCategoriaAbierta(abierta?null:c.id)} style={{...estilos.botonCategoria,background:abierta?"#0b8f52":"#fff",color:abierta?"#fff":"#183128"}}><span style={estilos.icono}>{c.icono}</span><span>{c.titulo}</span><span>{abierta?"▲":"▼"}</span></button>{abierta&&<div style={estilos.cuadriculaOpciones}>{c.opciones.map(o=><BotonOpcion key={o} texto={o} seleccionado={seleccionados.includes(o)} alPulsar={()=>alternarOpcionCategoria(o,c)}/>)}</div>}</div>})}</div>

    {preguntasActivas.length>0&&<section style={estilos.seguimiento}><h2>Preguntas para afinar</h2><p>Marca solo las respuestas que coincidan contigo.</p>{preguntasActivas.map(p=><div key={p.id} style={{...estilos.pregunta,borderColor:p.esAlarma?"#e0a000":"#cfe5d8"}}><h3>{p.texto}</h3>{p.esAlarma&&<p style={estilos.textoAlarma}>⚠️ Esta pregunta ayuda a detectar señales que pueden requerir valoración médica.</p>}<div style={estilos.cuadriculaOpciones}>{p.opciones.map(o=><BotonOpcion key={`${p.id}-${o}`} texto={o} seleccionado={(respuestasSeguimiento[p.id]??[]).includes(o)} alPulsar={()=>{setRespuestasSeguimiento(actuales=>alternarRespuestaSeguimiento(actuales,p,o));setAnalizado(false)}}/>)}</div></div>)}</section>}

    <div style={estilos.detalleCaja}><label><strong>¿No encuentras algo? Añade un detalle</strong></label><textarea value={detalles} onChange={e=>{setDetalles(e.target.value);setAnalizado(false)}} placeholder="Por ejemplo: empezó ayer, empeora al comer..." rows={3} style={estilos.textarea}/></div>

    <button type="button" onClick={analizarEvaluacion} disabled={sinDatos} style={{...estilos.botonAnalizar,opacity:sinDatos?.5:1}}>🔍 Analizar cuadro completo {totalMarcados>0?`(${totalMarcados})`:""}</button>

    {analizado&&<div id="resultados-evaluacion" style={{marginTop:30}}>
      {alarmasGlobales.length>0&&<section style={estilos.alertaGlobal}><h3>⚠️ Prioridad de seguridad</h3>{alarmasGlobales.map(a=><div key={a.id} style={estilos.alertaGlobalItem}><strong>{a.titulo}</strong><p>{a.mensaje}</p></div>)}{existeAlarmaPrioritaria&&<strong>La orientación de autocuidado queda en segundo plano hasta valorar estas señales.</strong>}</section>}
      {mostrarConsejosGenerales&&consejosGenerales.map(consejo=><ConsejoGeneral key={consejo.id} consejo={consejo}/>)}
      {resultados.length===0?<div style={estilos.avisoAmarillo}>Con los datos marcados no se muestra una enfermedad concreta porque no hay una coincidencia suficientemente sólida. Esto no descarta un problema de salud. {mostrarConsejosGenerales?"Los consejos anteriores son generales.":"Si existe una alerta de seguridad, esa alerta es prioritaria."}</div>:<><div style={estilos.avisoResultados}><strong>Resultados orientativos</strong><p>Se muestran como máximo los seis cuadros con mayor coincidencia. El porcentaje indica cuánto encajan los síntomas marcados con los síntomas incluidos en cada ficha; no es una probabilidad de diagnóstico.</p></div>{resultados.map(resultado=><article key={resultado.condicion.id} style={estilos.resultado}><h3>{resultado.condicion.nombre}</h3>{resultado.requiereValoracionMedica&&<div style={estilos.alarma}><h4>⚠️ Señales de alarma asociadas a este cuadro</h4><Lista elementos={resultado.senalesAlarmaDetectadas}/><strong>Se recomienda valoración médica antes de aplicar fitoterapia o suplementación.</strong></div>}<p>{resultado.condicion.descripcion}</p><p><strong>Datos coincidentes:</strong> {resultado.coincidencias.join(", ")}</p><div style={estilos.confianza}><strong>Coincidencia con la ficha: {resultado.confianza}%</strong><div style={estilos.barraFondo}><div style={{...estilos.barraProgreso,width:`${resultado.confianza}%`}}/></div><small>Este porcentaje no confirma ni calcula la probabilidad de una enfermedad.</small></div>{resultado.contradicciones.length>0&&<div style={estilos.avisoAmarillo}><strong>Datos que reducen la coincidencia:</strong><Lista elementos={resultado.contradicciones}/></div>}<h4>Posibles causas o factores relacionados</h4><Lista elementos={resultado.condicion.posiblesCausas}/><EnfoquesComparados condicion={resultado.condicion} bloquearIntervencionesNaturales={existeAlarmaPrioritaria||resultado.requiereValoracionMedica}/><div style={estilos.bloqueClinico}><h4>Pruebas médicas habituales</h4><Lista elementos={resultado.condicion.pruebasMedicasHabituales}/><h4>Profesionales de referencia</h4><Lista elementos={resultado.condicion.especialistaRecomendado}/><h4>Cuándo acudir al médico</h4><Lista elementos={resultado.condicion.cuandoAcudirMedico}/></div></article>)}</>}
    </div>}
    <p style={estilos.avisoLegal}>Esta herramienta ofrece orientación educativa. No confirma diagnósticos ni sustituye una valoración médica.</p>
  </section>;
}

function BotonOpcion({texto,seleccionado,alPulsar}:{texto:string;seleccionado:boolean;alPulsar:()=>void}){return <button type="button" onClick={alPulsar} style={{...estilos.opcion,background:seleccionado?"#0b8f52":"#fff",color:seleccionado?"#fff":"#183128",borderColor:seleccionado?"#0b8f52":"#cfd8d3"}}><span>{seleccionado?"✓":"○"}</span>{texto}</button>}
function Lista({elementos}:{elementos:string[]}){return <ul>{elementos.map(e=><li key={e}>{e}</li>)}</ul>}
function ConsejoGeneral({consejo}:{consejo:ConsejoSintoma}){return <section style={estilos.consejoGeneral}><h3>✅ {consejo.titulo}</h3><p>{consejo.descripcion}</p><h4>Qué puedes hacer</h4><Lista elementos={consejo.autocuidado}/><h4>Consulta con un profesional</h4><Lista elementos={consejo.consultar}/><div style={estilos.consejoUrgente}><h4>⚠️ Busca atención urgente si aparece</h4><Lista elementos={consejo.urgente}/></div><p style={estilos.fuentesConsejo}><strong>Fuentes:</strong> {consejo.fuentes.map((fuente,i)=><span key={fuente.url}>{i>0?" · ":" "}<a href={fuente.url} target="_blank" rel="noreferrer">{fuente.nombre}</a></span>)}</p></section>}

const estilos:Record<string,React.CSSProperties>={
contenedor:{maxWidth:1100,margin:"30px auto",padding:"clamp(16px,4vw,28px)",background:"white",borderRadius:14,boxShadow:"0 4px 18px rgba(0,0,0,.08)"},cabecera:{display:"flex",justifyContent:"space-between",gap:15,alignItems:"flex-start"},titulo:{marginTop:0,fontSize:"clamp(25px,6vw,32px)"},intro:{lineHeight:1.5,marginBottom:0},contador:{flexShrink:0,minWidth:74,padding:"10px 12px",borderRadius:12,background:"#edf8f2",color:"#216b4d",fontSize:25,fontWeight:900,textAlign:"center"},buscadorCaja:{marginTop:22,display:"flex",alignItems:"center",border:"2px solid #9dbdaf",borderRadius:14,background:"#fff",overflow:"hidden"},lupa:{paddingLeft:13,fontSize:20},buscador:{flex:1,minWidth:0,border:0,outline:"none",padding:"15px 10px",fontSize:16},borrarBusqueda:{border:0,background:"transparent",padding:14,fontSize:17,cursor:"pointer"},resultadoBusqueda:{marginTop:8,fontSize:14,color:"#53665d"},seleccionBarra:{position:"sticky",top:0,zIndex:5,margin:"15px 0",padding:10,border:"1px solid #cfe5d8",borderRadius:12,background:"rgba(244,250,247,.97)",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10},chips:{display:"flex",gap:6,overflowX:"auto",flex:1},chip:{whiteSpace:"nowrap",padding:"6px 9px",borderRadius:999,background:"#e0f2e8",color:"#185b3c",fontSize:12,fontWeight:700},limpiar:{flexShrink:0,border:"1px solid #cfd8d3",background:"#fff",borderRadius:9,padding:"8px 10px",fontWeight:700,cursor:"pointer"},categorias:{display:"grid",gap:12,marginTop:18},categoriaBloque:{border:"1px solid #dce5df",borderRadius:12,overflow:"hidden"},botonCategoria:{width:"100%",minHeight:62,padding:"14px 16px",border:"none",display:"grid",gridTemplateColumns:"42px 1fr 26px",alignItems:"center",textAlign:"left",fontSize:17,fontWeight:800,cursor:"pointer"},icono:{fontSize:24},cuadriculaOpciones:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(210px,100%),1fr))",gap:9,padding:12,background:"#f7faf8"},opcion:{minHeight:54,padding:"11px 12px",border:"2px solid",borderRadius:11,fontSize:15,fontWeight:700,textAlign:"left",cursor:"pointer",display:"flex",gap:9,alignItems:"center"},seguimiento:{marginTop:25,padding:"clamp(13px,3vw,20px)",background:"#f3faf6",borderRadius:14,border:"1px solid #cfe5d8"},pregunta:{marginTop:16,padding:14,background:"#fff",border:"2px solid",borderRadius:12},textoAlarma:{color:"#9b6200",fontWeight:700},detalleCaja:{marginTop:25},textarea:{boxSizing:"border-box",width:"100%",marginTop:9,padding:13,borderRadius:10,border:"1px solid #cfd8d3",fontSize:16,resize:"vertical"},botonAnalizar:{position:"sticky",bottom:10,zIndex:6,marginTop:20,width:"100%",background:"#0b8f52",color:"white",border:"none",borderRadius:13,padding:"17px 20px",fontSize:18,fontWeight:900,cursor:"pointer",boxShadow:"0 5px 16px rgba(11,143,82,.24)"},alertaGlobal:{marginBottom:24,padding:20,background:"#fff0f0",border:"2px solid #b00020",borderRadius:12,color:"#7d0016"},alertaGlobalItem:{margin:"12px 0",paddingBottom:8,borderBottom:"1px solid #efc4ca"},consejoGeneral:{marginBottom:18,padding:"clamp(16px,4vw,22px)",background:"#f3faf6",border:"2px solid #91c9aa",borderRadius:12,lineHeight:1.55},consejoUrgente:{marginTop:18,padding:"12px 15px",background:"#fff4f4",borderLeft:"4px solid #b00020",borderRadius:8,color:"#7d0016"},fuentesConsejo:{marginTop:18,fontSize:13,color:"#53665d"},avisoResultados:{marginBottom:18,padding:16,background:"#eef7ff",borderLeft:"4px solid #4a7fb3",lineHeight:1.5},resultado:{border:"1px solid #dce5df",borderRadius:12,padding:"clamp(16px,4vw,22px)",marginBottom:18},confianza:{margin:"18px 0",padding:16,background:"#f3faf6",borderRadius:10},barraFondo:{width:"100%",height:12,marginTop:10,marginBottom:8,background:"#e4ebe7",borderRadius:10,overflow:"hidden"},barraProgreso:{height:"100%",background:"#0b8f52"},alarma:{marginBottom:20,padding:16,background:"#fff0f0",border:"2px solid #d60000",borderRadius:10,color:"#9b0000"},avisoAmarillo:{marginBottom:18,padding:16,background:"#fff8e6",borderLeft:"4px solid #e0a000"},bloqueClinico:{marginTop:24,padding:18,borderRadius:12,background:"#f7faf8",border:"1px solid #dce5df"},avisoLegal:{marginTop:24,padding:14,background:"#fff4f4",border:"1px solid #e7c6c6",borderRadius:10,color:"#7a2929",fontWeight:700,lineHeight:1.5}
};
export default EvaluacionIntegral;
