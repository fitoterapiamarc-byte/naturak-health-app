import { createServer } from "vite";
import { writeFileSync } from "node:fs";
const vite = await createServer({server:{middlewareMode:true},appType:"custom"});
try {
 const {todasLasCondiciones,orientarPorSintomas}=await vite.ssrLoadModule("/src/datos/motorOrientacion.ts");
 const {categoriasEvaluacion}=await vite.ssrLoadModule("/src/evaluacion/opcionesEvaluacion.ts");
 const {preguntasSeguimiento}=await vite.ssrLoadModule("/src/evaluacion/preguntasSeguimiento.ts");
 const {detectarAlarmasGlobales}=await vite.ssrLoadModule("/src/evaluacion/senalesAlarmaGlobales.ts");
 const entradasComunes=new Set([...categoriasEvaluacion.flatMap(c=>c.opciones),...preguntasSeguimiento.flatMap(p=>p.opciones)]);
 const informes=todasLasCondiciones.map(c=>{
  const incidencias=[];
  const necesarias=["id","nombre","descripcion"];
  for(const k of necesarias) if(!String(c[k]||"").trim())incidencias.push("Falta el campo "+k);
  if(!c.sintomas?.length)incidencias.push("No hay síntomas");
  const especiales=(c.sintomas||[]).filter(s=>!entradasComunes.has(s.nombre)).map(s=>s.nombre);
  const bibliografia=c.bibliografia||[];
  const fuenteIdentificable = bibliografia.some(x=>/https?:\/\/|doi|pmid|NICE\s+(?:NG|CG|QS)\d+|WHO|ESC\s+\d{4}/i.test(x));
  if(!fuenteIdentificable)incidencias.push("Bibliografía sin fuente verificable: falta una guía específica identificada, URL, DOI o PMID");
  if(!bibliografia.length)incidencias.push("Sin bibliografía");
  if(bibliografia.some(x=>/guías clínicas y revisiones sistemáticas aplicables/i.test(x)))incidencias.push("Referencia bibliográfica genérica");
  if(!Array.isArray(c.interacciones)||!c.interacciones.length)incidencias.push("Falta información de interacciones");
  if(!Array.isArray(c.contraindicaciones)||!c.contraindicaciones.length)incidencias.push("Faltan contraindicaciones");
  if(!Array.isArray(c.pruebasMedicasHabituales)||!c.pruebasMedicasHabituales.length)incidencias.push("Falta evaluación médica habitual");
  if(!c.cuandoAcudirMedico?.length)incidencias.push("Sin criterios para consultar");
  if(!c.especialistaRecomendado?.length)incidencias.push("Sin profesionales de referencia");
  const sintomas=c.sintomas?.map(s=>s.nombre)||[];
  const resultado=orientarPorSintomas(sintomas);
  if(sintomas.length>=2&&!resultado.some(r=>r.condicion.id===c.id))
    incidencias.push("El conjunto completo de síntomas no devuelve esta ficha entre los resultados mostrados: investigar solapamientos, filtros o deduplicación");
  for(const a of c.sintomasAlarma||[]){
    if(!["urgente","alta","moderada"].includes(a.gravedad))incidencias.push("Gravedad no válida: "+a.nombre);
    if(sintomas.length>=2){
      const evaluacion=orientarPorSintomas([...sintomas,a.nombre]);
      const propia=evaluacion.find(x=>x.condicion.id===c.id);
      if(propia&&!propia.requiereValoracionMedica)incidencias.push("No detecta alarma específica: "+a.nombre);
    }
  }
  return {id:c.id,nombre:c.nombre,numeroSintomas:sintomas.length,sintomasFueraDeCategorias:especiales,bibliografia,senalesDeAlarma:(c.sintomasAlarma||[]).length,incidencias,estadoClinico:"NO VALIDADO: requiere cotejo con guías específicas y pruebas con casos clínicos"};
 });
 const resumen={fecha:"2026-11-23",numeroFichas:informes.length,fichasSinFuenteVerificable:informes.filter(f=>f.incidencias.some(s=>s.includes("Bibliografía sin fuente verificable"))).length,fichasSinRespuestaSintetica:informes.filter(f=>f.incidencias.some(s=>s.includes("conjunto completo"))).length,numeroConIncidencias:informes.filter(f=>f.incidencias.length).length,numeroSinIncidenciasTecnicas:informes.filter(f=>!f.incidencias.length).length,estadoGlobal:"NO APTO PARA AFIRMAR VALIDACION CLINICA"};
 const resultado={resumen,fichas:informes};
 writeFileSync("auditoria-fichas.json",JSON.stringify(resultado,null,2));
 const filas=informes.map(f=>"| "+f.id+" | "+f.numeroSintomas+" | "+f.senalesDeAlarma+" | "+(f.incidencias.length?f.incidencias.join("; ").replaceAll("|","/"):"Sin incidencias en controles automáticos")+" |").join("\n");
 const md="# Auditoría automática CuerpoClaro — 23/11/2026\n\n**Estado: NO VALIDADO CLÍNICAMENTE**. Un resultado sin incidencias técnicas no equivale a que la ficha sea médicamente correcta.\n\n## Resumen\n\n"+Object.entries(resumen).map(([k,v])=>"- **"+k+"**: "+v).join("\n")+"\n\n## Revisión individual\n\n| Ficha | Síntomas | Alarmas | Incidencias detectadas |\n|---|---:|---:|---|\n"+filas+"\n\n## Criterios\n\nSe comprueban estructura, trazabilidad bibliográfica, accesibilidad mediante el buscador ampliado y coincidencia en conjuntos sintéticos. No se comprueba la precisión clínica real, la seguridad de todos los consejos ni la exactitud de tratamientos. Cualquier ficha requiere validación de contenido frente a fuentes clínicas específicas.\n";
 writeFileSync("auditoria-fichas.md",md);
 console.log("AUDITORIA_FICHAS",JSON.stringify(resumen));
 if(informes.length<140)process.exitCode=1;
}finally{await vite.close();}
