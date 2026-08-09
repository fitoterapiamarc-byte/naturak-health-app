import { condiciones, type Condicion } from "./condiciones";
import { condicionesDigestivasExtra } from "./condicionesDigestivasExtra";
import { condicionesNeuroMusculo } from "./condicionesNeuroMusculo";
import { condicionesCardioResp } from "./condicionesCardioResp";
import { condicionesUrinarias } from "./condicionesUrinarias";
import { condicionesAbdominalesUrgentes } from "./condicionesAbdominalesUrgentes";
import { condicionesGenerales } from "./condicionesGenerales";
import { condicionesMusculoExtra } from "./condicionesMusculoExtra";
import { condicionesDermatologicas } from "./condicionesDermatologicas";
import { condicionesEndocrinas } from "./condicionesEndocrinas";
import { condicionesORLVisual } from "./condicionesORLVisual";
import { condicionesSaludFemenina } from "./condicionesSaludFemenina";
import { condicionesSaludMasculina } from "./condicionesSaludMasculina";
import { condicionesSangreDeficits } from "./condicionesSangreDeficits";
import { condicionesRenalesElectrolitos } from "./condicionesRenalesElectrolitos";
import { condicionesBucodentales } from "./condicionesBucodentales";
import { condicionesSueno } from "./condicionesSueno";
import { condicionesAlergiaInmunidad } from "./condicionesAlergiaInmunidad";
import { condicionesInfecciosas } from "./condicionesInfecciosas";
import { condicionesEmocionales } from "./condicionesEmocionales";
import { condicionesCardiometabolicas } from "./condicionesCardiometabolicas";
import { condicionesComunesExtra } from "./condicionesComunesExtra";
import { condicionesAmpliacion } from "./condicionesAmpliacion";
import { condicionesAmpliacion2 } from "./condicionesAmpliacion2";
import { condicionesAmpliacion3 } from "./condicionesAmpliacion3";
import { condicionesAmpliacion4 } from "./condicionesAmpliacion4";
import { condicionesAmpliacion5 } from "./condicionesAmpliacion5";
import { condicionesAmpliacion6 } from "./condicionesAmpliacion6";
export interface ResultadoOrientacion{condicion:Condicion;coincidencias:string[];contradicciones:string[];senalesAlarmaDetectadas:string[];puntuacion:number;confianza:number;requiereValoracionMedica:boolean;}
function normalizarTexto(texto:string){return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();}
function hayCoincidencia(a:string,b:string){return normalizarTexto(a)===normalizarTexto(b);}
const baseCondiciones:Condicion[]=[...condiciones,...condicionesDigestivasExtra,...condicionesNeuroMusculo,...condicionesCardioResp,...condicionesUrinarias,...condicionesAbdominalesUrgentes,...condicionesGenerales,...condicionesMusculoExtra,...condicionesDermatologicas,...condicionesEndocrinas,...condicionesORLVisual,...condicionesSaludFemenina,...condicionesSaludMasculina,...condicionesSangreDeficits,...condicionesRenalesElectrolitos,...condicionesBucodentales,...condicionesSueno,...condicionesAlergiaInmunidad,...condicionesInfecciosas,...condicionesEmocionales,...condicionesCardiometabolicas,...condicionesComunesExtra,...condicionesAmpliacion,...condicionesAmpliacion2,...condicionesAmpliacion3,...condicionesAmpliacion4,...condicionesAmpliacion5,...condicionesAmpliacion6];
const idsVistos=new Set<string>();const nombresVistos=new Set<string>();
export const todasLasCondiciones:Condicion[]=baseCondiciones.filter(c=>{const id=normalizarTexto(c.id),nombre=normalizarTexto(c.nombre);if(idsVistos.has(id)||nombresVistos.has(nombre))return false;idsVistos.add(id);nombresVistos.add(nombre);return true;});
export const totalCondiciones=todasLasCondiciones.length;export const cifraPortadaCondiciones=Math.max(10,Math.floor((totalCondiciones-1)/10)*10);
export function orientarPorSintomas(sintomasUsuario:string[]):ResultadoOrientacion[]{const datos=sintomasUsuario.map(d=>d.trim()).filter(Boolean);return todasLasCondiciones.map(condicion=>{const coinc=condicion.sintomas.filter(s=>datos.some(d=>hayCoincidencia(d,s.nombre)));const contra=condicion.sintomasQueContradicen.filter(s=>datos.some(d=>hayCoincidencia(d,s.nombre)));const alarmas=condicion.sintomasAlarma.filter(a=>datos.some(d=>hayCoincidencia(d,a.nombre)));const positivos=coinc.reduce((t,s)=>t+s.peso,0),negativos=contra.reduce((t,s)=>t+s.peso,0),puntuacion=Math.max(0,positivos-negativos),maxima=condicion.sintomas.reduce((t,s)=>t+s.peso,0);return{condicion,coincidencias:coinc.map(s=>s.nombre),contradicciones:contra.map(s=>s.nombre),senalesAlarmaDetectadas:alarmas.map(a=>a.nombre),puntuacion,confianza:maxima>0?Math.round(puntuacion/maxima*100):0,requiereValoracionMedica:coinc.length>0&&alarmas.length>0};}).filter(r=>r.coincidencias.length>0&&r.puntuacion>0).sort((a,b)=>a.requiereValoracionMedica&&!b.requiereValoracionMedica?-1:!a.requiereValoracionMedica&&b.requiereValoracionMedica?1:b.puntuacion-a.puntuacion);}
