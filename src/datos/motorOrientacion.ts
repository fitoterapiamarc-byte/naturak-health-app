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
import { condicionesAmpliacion7 } from "./condicionesAmpliacion7";
import { condicionesAmpliacion8 } from "./condicionesAmpliacion8";
import { condicionesAmpliacion9 } from "./condicionesAmpliacion9";
import { condicionesAmpliacion10 } from "./condicionesAmpliacion10";
import { condicionesAmpliacion11 } from "./condicionesAmpliacion11";
import { condicionesAmpliacion12 } from "./condicionesAmpliacion12";
import { condicionesAmpliacion13 } from "./condicionesAmpliacion13";
import { condicionesAmpliacion14 } from "./condicionesAmpliacion14";
export interface ResultadoOrientacion{condicion:Condicion;coincidencias:string[];contradicciones:string[];senalesAlarmaDetectadas:string[];puntuacion:number;confianza:number;requiereValoracionMedica:boolean;}
function normalizarTexto(texto:string){return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim();}
const equivalencias:Record<string,string>={"dolor pulsatil":"dolor de cabeza pulsatil","dolor en un lado de la cabeza":"dolor de cabeza unilateral","dolor opresivo en la cabeza":"dolor de cabeza opresivo","dolor abdomen superior":"dolor en la parte alta del abdomen","dolor en la boca del estomago":"dolor en la parte alta del abdomen","ardor de estomago":"ardor en la parte alta del abdomen","ardor epigastrico":"ardor en la parte alta del abdomen","quemazon retroesternal":"ardor detras del esternon","acidez":"ardor detras del esternon","reflujo":"regurgitacion acida","regurgitacion":"regurgitacion acida","dolor hacia la ingle":"dolor que baja hacia la ingle","falta de aire al hacer esfuerzo":"falta de aire al esfuerzo","falta de aire haciendo esfuerzo":"falta de aire al esfuerzo","falta de aire con esfuerzo":"falta de aire al esfuerzo","tos con mucosidad":"tos con flemas","flemas frecuentes":"tos con flemas","mucosidad nasal espesa":"secrecion nasal","piernas hinchadas":"hinchazon de piernas","hinchazon en las piernas":"hinchazon de piernas","hinchazon de una sola pierna":"una pierna hinchada","pierna roja y caliente":"pierna caliente","sangre roja en las heces":"sangre roja al defecar","sangre en las heces":"sangre roja al defecar","levantarse por la noche a orinar":"levantarse por la noche para orinar","orinar muchas veces":"orinar con mucha frecuencia","orinar frecuentemente":"orinar con mucha frecuencia","sensacion de vaciado incompleto":"sensacion de no vaciar la vejiga","no puedo orinar":"no poder orinar","vertigo al mover la cabeza":"mareo al mover la cabeza","todo gira":"sensacion de que todo gira","vertigo al darse la vuelta en la cama":"mareo al girarse en la cama","aura visual":"alteracion visual reversible","sensibilidad intensa a la luz":"sensibilidad a la luz","sensibilidad intensa al sonido":"sensibilidad al ruido","pitidos en el oido":"pitidos en los oidos","zumbido en los oidos":"pitidos en los oidos","zumbidos en los oidos":"pitidos en los oidos","regla dolorosa":"dolor menstrual intenso","dolor con las relaciones":"dolor con las relaciones sexuales","regla muy abundante":"sangrado menstrual abundante","sequedad de piel":"piel seca","ronchas":"ronchas en la piel","rigidez":"rigidez articular","inflamacion":"articulaciones hinchadas","somnolencia diurna":"somnolencia durante el dia","pausas respiratorias al dormir":"pausas al respirar durante el sueno","necesidad irresistible de mover las piernas":"necesidad de mover las piernas","empeora al estar en reposo":"molestias en piernas al descansar","mejora al mover las piernas":"alivio al caminar","empeora por la tarde o noche":"sintomas peores por la noche","higado graso conocido":"higado graso en ecografia","obesidad abdominal":"exceso de peso abdominal","dolor en pantorrilla":"dolor en una pantorrilla","pantorrilla dolorida":"dolor en una pantorrilla","una pierna mas grande":"aumento de tamano de una pierna","me falta el aire":"falta de aire","me cuesta respirar":"falta de aire","silbidos en el pecho":"silbidos al respirar","pitos al respirar":"silbidos al respirar","opresion toracica":"opresion en el pecho","tos por la noche":"tos nocturna","urgencia intestinal":"urgencia para defecar","zigzag en la vision":"luces o zigzag antes del dolor de cabeza","luces antes del dolor de cabeza":"luces o zigzag antes del dolor de cabeza","hormigueo pies":"hormigueo en manos o pies","hormigueo manos":"hormigueo en manos o pies","b12 baja":"vitamina b12 baja en analitica","funcion renal alterada":"funcion renal alterada en analitica","proteinas en orina":"proteinas en la orina"};
function canonizar(texto:string){const n=normalizarTexto(texto);return equivalencias[n]??n;}
function hayCoincidencia(datoUsuario:string,sintomaFicha:string){
  const dato=canonizar(datoUsuario),ficha=canonizar(sintomaFicha);
  if(dato===ficha)return true;
  const palabrasFicha=ficha.split(" ").filter(Boolean);
  return dato.length>ficha.length
    && ficha.length>=12
    && palabrasFicha.length>=3
    && ` ${dato} `.includes(` ${ficha} `);
}
const baseCondiciones:Condicion[]=[...condiciones,...condicionesDigestivasExtra,...condicionesNeuroMusculo,...condicionesCardioResp,...condicionesUrinarias,...condicionesAbdominalesUrgentes,...condicionesGenerales,...condicionesMusculoExtra,...condicionesDermatologicas,...condicionesEndocrinas,...condicionesORLVisual,...condicionesSaludFemenina,...condicionesSaludMasculina,...condicionesSangreDeficits,...condicionesRenalesElectrolitos,...condicionesBucodentales,...condicionesSueno,...condicionesAlergiaInmunidad,...condicionesInfecciosas,...condicionesEmocionales,...condicionesCardiometabolicas,...condicionesComunesExtra,...condicionesAmpliacion,...condicionesAmpliacion2,...condicionesAmpliacion3,...condicionesAmpliacion4,...condicionesAmpliacion5,...condicionesAmpliacion6,...condicionesAmpliacion7,...condicionesAmpliacion8,...condicionesAmpliacion9,...condicionesAmpliacion10,...condicionesAmpliacion11,...condicionesAmpliacion12,...condicionesAmpliacion13,...condicionesAmpliacion14];
const idsVistos=new Set<string>(),nombresVistos=new Set<string>();export const todasLasCondiciones:Condicion[]=baseCondiciones.filter(c=>{const id=normalizarTexto(c.id),nombre=normalizarTexto(c.nombre);if(idsVistos.has(id)||nombresVistos.has(nombre))return false;idsVistos.add(id);nombresVistos.add(nombre);return true;});
export const totalCondiciones=todasLasCondiciones.length;export const cifraPortadaCondiciones=Math.max(10,Math.floor((totalCondiciones-1)/10)*10);
const indicadoresIndividuales=new Set([
  "presion arterial elevada medida",
  "colesterol elevado en analitica",
  "trigliceridos elevados en analitica",
  "glucosa elevada en analitica",
  "higado graso conocido",
  "osteopenia u osteoporosis conocida",
  "fractura con traumatismo leve",
  "sangrado despues de la menopausia",
  "disfuncion erectil",
  "ferritina baja en analitica",
].map(canonizar));
export function esIndicadorIndividual(nombre:string){return indicadoresIndividuales.has(canonizar(nombre));}
export function familiaResultado(r:ResultadoOrientacion){
  const n=normalizarTexto(`${r.condicion.id} ${r.condicion.nombre}`);
  if(n.includes("migran"))return "migrana";
  if(n.includes("reflujo"))return "reflujo";
  if(n.includes("vertigo")&&n.includes("posicional"))return "vertigo-posicional";
  if(n.includes("hemorroid"))return "hemorroides";
  if(n.includes("diverticulitis"))return "diverticulitis";
  if(n.includes("fascitis plantar"))return "fascitis-plantar";
  if(n.includes("rosacea"))return "rosacea";
  if(n.includes("estrenimiento"))return "estrenimiento";
  if(n.includes("urticaria"))return "urticaria";
  if(n.includes("ciatica")||n.includes("dolor radicular"))return "ciatica";
  if(n.includes("resfriado")||n.includes("infeccion respiratoria alta"))return "resfriado";
  if(n.includes("bronquitis aguda")||n.includes("tos aguda"))return "bronquitis-aguda";
  if(n.includes("colecistitis")||n.includes("vesicula biliar"))return "colecistitis";
  if(n.includes("insuficiencia venosa"))return "insuficiencia-venosa";
  if(n.includes("rinosinusitis")||n.includes("sinusitis"))return "rinosinusitis";
  if(n.includes("hiperplasia benigna")||n.includes("hiperplasia prostatica"))return "hiperplasia-prostatica";
  if(n.includes("anemia"))return "anemia";
  if(n.includes("tendinopatia")||n.includes("tendinitis"))return "tendinopatia";
  return normalizarTexto(r.condicion.id);
}
export function depurarResultados(resultados:ResultadoOrientacion[]){const vistos=new Set<string>();const salida:ResultadoOrientacion[]=[];for(const r of resultados){const familia=familiaResultado(r);if(vistos.has(familia))continue;vistos.add(familia);salida.push(r);if(salida.length===6)break;}return salida;}
function coincidenciasUnicas(condicion:Condicion,datos:string[]){const usados=new Set<number>();const salida:{nombre:string;peso:number}[]=[];for(const s of [...condicion.sintomas].sort((a,b)=>b.peso-a.peso)){const i=datos.findIndex((d,idx)=>!usados.has(idx)&&hayCoincidencia(d,s.nombre));if(i>=0){usados.add(i);salida.push(s);}}return salida;}
export function orientarPorSintomas(sintomasUsuario:string[]):ResultadoOrientacion[]{const datos=sintomasUsuario.map(d=>d.trim()).filter(Boolean);const ordenados=todasLasCondiciones.map(condicion=>{const coinc=coincidenciasUnicas(condicion,datos),contra=condicion.sintomasQueContradicen.filter(s=>datos.some(d=>hayCoincidencia(d,s.nombre))),alarmas=condicion.sintomasAlarma.filter(a=>datos.some(d=>hayCoincidencia(d,a.nombre))),positivos=coinc.reduce((t,s)=>t+s.peso,0),negativos=contra.reduce((t,s)=>t+s.peso,0),puntuacion=Math.max(0,positivos-negativos),maxima=condicion.sintomas.reduce((t,s)=>t+s.peso,0),confianza=maxima>0?Math.round(puntuacion/maxima*100):0;return{condicion,coincidencias:coinc.map(s=>s.nombre),contradicciones:contra.map(s=>s.nombre),senalesAlarmaDetectadas:alarmas.map(a=>a.nombre),puntuacion,confianza,requiereValoracionMedica:coinc.length>0&&alarmas.length>0};}).filter(r=>{const tieneRasgoCaracteristico=r.coincidencias.some(nombre=>{const sintoma=r.condicion.sintomas.find(s=>s.nombre===nombre);return Boolean(sintoma&&sintoma.peso>=3);});const patronCaracteristico=r.coincidencias.length>=2&&r.puntuacion>=4&&tieneRasgoCaracteristico;const conjuntoConsistente=r.coincidencias.length>=3&&r.puntuacion>=5;const indicadorSuficiente=r.coincidencias.some(esIndicadorIndividual);return r.puntuacion>0&&(patronCaracteristico||conjuntoConsistente||indicadorSuficiente);}).sort((a,b)=>{if(a.requiereValoracionMedica!==b.requiereValoracionMedica)return a.requiereValoracionMedica?-1:1;if(b.coincidencias.length!==a.coincidencias.length)return b.coincidencias.length-a.coincidencias.length;if(b.confianza!==a.confianza)return b.confianza-a.confianza;return b.puntuacion-a.puntuacion;});return depurarResultados(ordenados);}
