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

export interface ResultadoOrientacion { condicion: Condicion; coincidencias: string[]; contradicciones: string[]; senalesAlarmaDetectadas: string[]; puntuacion: number; confianza: number; requiereValoracionMedica: boolean; }
function normalizarTexto(texto:string){return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim();}
const equivalencias:Record<string,string>={
"dolor pulsatil":"dolor de cabeza pulsatil","dolor en un lado de la cabeza":"dolor de cabeza unilateral","dolor opresivo en la cabeza":"dolor de cabeza opresivo","dolor abdomen superior":"dolor en la parte alta del abdomen","dolor en la boca del estomago":"dolor en la parte alta del abdomen","ardor de estomago":"ardor en la parte alta del abdomen","ardor epigastrico":"ardor en la parte alta del abdomen","quemazon retroesternal":"ardor detras del esternon","acidez":"ardor detras del esternon","reflujo":"regurgitacion acida","regurgitacion":"regurgitacion acida","dolor hacia la ingle":"dolor que baja hacia la ingle","falta de aire al hacer esfuerzo":"falta de aire al esfuerzo","falta de aire haciendo esfuerzo":"falta de aire al esfuerzo","falta de aire con esfuerzo":"falta de aire al esfuerzo","tos con mucosidad":"tos con flemas","flemas frecuentes":"tos con flemas","mucosidad nasal espesa":"secrecion nasal","piernas hinchadas":"hinchazon de piernas","hinchazon en las piernas":"hinchazon de piernas","hinchazon de una sola pierna":"una pierna hinchada","pierna roja y caliente":"pierna caliente","sangre roja en las heces":"sangre roja al defecar","sangre en las heces":"sangre roja al defecar","levantarse por la noche a orinar":"levantarse por la noche para orinar","orinar muchas veces":"orinar con mucha frecuencia","orinar frecuentemente":"orinar con mucha frecuencia","sensacion de vaciado incompleto":"sensacion de no vaciar la vejiga","no puedo orinar":"no poder orinar","vertigo al mover la cabeza":"mareo al mover la cabeza","todo gira":"sensacion de que todo gira","vertigo al darse la vuelta en la cama":"mareo al girarse en la cama","aura visual":"alteracion visual reversible","sensibilidad intensa a la luz":"sensibilidad a la luz","sensibilidad intensa al sonido":"sensibilidad al ruido","pitidos en el oido":"pitidos en los oidos","zumbido en los oidos":"pitidos en los oidos","zumbidos en los oidos":"pitidos en los oidos","regla dolorosa":"dolor menstrual intenso","dolor con las relaciones":"dolor con las relaciones sexuales","regla muy abundante":"sangrado menstrual abundante","sequedad de piel":"piel seca","ronchas":"ronchas en la piel","rigidez":"rigidez articular","inflamacion":"articulaciones hinchadas","somnolencia diurna":"somnolencia durante el dia","pausas respiratorias al dormir":"pausas al respirar durante el sueno","necesidad irresistible de mover las piernas":"necesidad de mover las piernas","empeora al estar en reposo":"molestias en piernas al descansar","mejora al mover las piernas":"alivio al caminar","empeora por la tarde o noche":"sintomas peores por la noche","higado graso conocido":"higado graso en ecografia","obesidad abdominal":"exceso de peso abdominal",
"dolor en pantorrilla":"dolor en una pantorrilla","pantorrilla dolorida":"dolor en una pantorrilla","una pierna mas grande":"aumento de tamano de una pierna","me falta el aire":"falta de aire","me cuesta respirar":"falta de aire","silbidos en el pecho":"silbidos al respirar","pitos al respirar":"silbidos al respirar","opresion toracica":"opresion en el pecho","tos por la noche":"tos nocturna","diarrea con sangre":"diarrea con sangre","urgencia intestinal":"urgencia para defecar","zigzag en la vision":"luces o zigzag antes del dolor de cabeza","luces antes del dolor de cabeza":"luces o zigzag antes del dolor de cabeza","hormigueo pies":"hormigueo en manos o pies","hormigueo manos":"hormigueo en manos o pies","b12 baja":"vitamina b12 baja en analitica","funcion renal alterada":"funcion renal alterada en analitica","proteinas en orina":"proteinas en la orina"};
function canonizar(texto:string){const normal=normalizarTexto(texto);return equivalencias[normal]??normal;}
function hayCoincidencia(a:string,b:string){const x=canonizar(a),y=canonizar(b);if(x===y)return true;const corta=x.length<=y.length?x:y;const larga=x.length>y.length?x:y;const palabras=corta.split(" ").filter(Boolean);return corta.length>=12&&palabras.length>=3&&larga.includes(corta);}
const baseCondiciones:Condicion[]=[...condiciones,...condicionesDigestivasExtra,...condicionesNeuroMusculo,...condicionesCardioResp,...condicionesUrinarias,...condicionesAbdominalesUrgentes,...condicionesGenerales,...condicionesMusculoExtra,...condicionesDermatologicas,...condicionesEndocrinas,...condicionesORLVisual,...condicionesSaludFemenina,...condicionesSaludMasculina,...condicionesSangreDeficits,...condicionesRenalesElectrolitos,...condicionesBucodentales,...condicionesSueno,...condicionesAlergiaInmunidad,...condicionesInfecciosas,...condicionesEmocionales,...condicionesCardiometabolicas,...condicionesComunesExtra,...condicionesAmpliacion,...condicionesAmpliacion2,...condicionesAmpliacion3,...condicionesAmpliacion4,...condicionesAmpliacion5,...condicionesAmpliacion6,...condicionesAmpliacion7,...condicionesAmpliacion8,...condicionesAmpliacion9,...condicionesAmpliacion10,...condicionesAmpliacion11,...condicionesAmpliacion12,...condicionesAmpliacion13,...condicionesAmpliacion14];
const idsVistos=new Set<string>(),nombresVistos=new Set<string>();
export const todasLasCondiciones:Condicion[]=baseCondiciones.filter(c=>{const id=normalizarTexto(c.id),nombre=normalizarTexto(c.nombre);if(idsVistos.has(id)||nombresVistos.has(nombre))return false;idsVistos.add(id);nombresVistos.add(nombre);return true;});
export const totalCondiciones=todasLasCondiciones.length;
export const cifraPortadaCondiciones=Math.max(10,Math.floor((totalCondiciones-1)/10)*10);
export function orientarPorSintomas(sintomasUsuario:string[]):ResultadoOrientacion[]{const datos=sintomasUsuario.map(d=>d.trim()).filter(Boolean);return todasLasCondiciones.map(condicion=>{const coinc=condicion.sintomas.filter(s=>datos.some(d=>hayCoincidencia(d,s.nombre)));const contra=condicion.sintomasQueContradicen.filter(s=>datos.some(d=>hayCoincidencia(d,s.nombre)));const alarmas=condicion.sintomasAlarma.filter(a=>datos.some(d=>hayCoincidencia(d,a.nombre)));const positivos=coinc.reduce((t,s)=>t+s.peso,0),negativos=contra.reduce((t,s)=>t+s.peso,0),puntuacion=Math.max(0,positivos-negativos),maxima=condicion.sintomas.reduce((t,s)=>t+s.peso,0),confianza=maxima>0?Math.round(puntuacion/maxima*100):0;return{condicion,coincidencias:coinc.map(s=>s.nombre),contradicciones:contra.map(s=>s.nombre),senalesAlarmaDetectadas:alarmas.map(a=>a.nombre),puntuacion,confianza,requiereValoracionMedica:coinc.length>0&&alarmas.length>0};}).filter(r=>r.puntuacion>0&&(r.coincidencias.length>=2||r.puntuacion>=4||r.requiereValoracionMedica)).sort((a,b)=>{if(a.requiereValoracionMedica!==b.requiereValoracionMedica)return a.requiereValoracionMedica?-1:1;if(b.coincidencias.length!==a.coincidencias.length)return b.coincidencias.length-a.coincidencias.length;if(b.confianza!==a.confianza)return b.confianza-a.confianza;return b.puntuacion-a.puntuacion;}).slice(0,6);}
