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

export interface ResultadoOrientacion { condicion: Condicion; coincidencias: string[]; contradicciones: string[]; senalesAlarmaDetectadas: string[]; puntuacion: number; confianza: number; requiereValoracionMedica: boolean; }
function normalizarTexto(texto: string): string { return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim(); }
function hayCoincidencia(textoUsuario: string, textoBase: string): boolean { return normalizarTexto(textoUsuario) === normalizarTexto(textoBase); }
export const todasLasCondiciones: Condicion[] = [...condiciones,...condicionesDigestivasExtra,...condicionesNeuroMusculo,...condicionesCardioResp,...condicionesUrinarias,...condicionesAbdominalesUrgentes,...condicionesGenerales,...condicionesMusculoExtra,...condicionesDermatologicas,...condicionesEndocrinas,...condicionesORLVisual,...condicionesSaludFemenina,...condicionesSaludMasculina,...condicionesSangreDeficits,...condicionesRenalesElectrolitos,...condicionesBucodentales,...condicionesSueno,...condicionesAlergiaInmunidad,...condicionesInfecciosas,...condicionesEmocionales,...condicionesCardiometabolicas];
export const totalCondiciones = todasLasCondiciones.length;
export const cifraPortadaCondiciones = Math.max(10, Math.floor((totalCondiciones - 1) / 10) * 10);
export function orientarPorSintomas(sintomasUsuario: string[]): ResultadoOrientacion[] { const datosIntroducidos=sintomasUsuario.map(d=>d.trim()).filter(Boolean); return todasLasCondiciones.map(condicion=>{ const sintomasCoincidentes=condicion.sintomas.filter(s=>datosIntroducidos.some(d=>hayCoincidencia(d,s.nombre))); const sintomasContradictorios=condicion.sintomasQueContradicen.filter(s=>datosIntroducidos.some(d=>hayCoincidencia(d,s.nombre))); const alarmasDetectadas=condicion.sintomasAlarma.filter(a=>datosIntroducidos.some(d=>hayCoincidencia(d,a.nombre))); const puntosPositivos=sintomasCoincidentes.reduce((t,s)=>t+s.peso,0); const puntosNegativos=sintomasContradictorios.reduce((t,s)=>t+s.peso,0); const puntuacion=Math.max(0,puntosPositivos-puntosNegativos); const puntuacionMaxima=condicion.sintomas.reduce((t,s)=>t+s.peso,0); const confianza=puntuacionMaxima>0?Math.round((puntuacion/puntuacionMaxima)*100):0; return {condicion,coincidencias:sintomasCoincidentes.map(s=>s.nombre),contradicciones:sintomasContradictorios.map(s=>s.nombre),senalesAlarmaDetectadas:alarmasDetectadas.map(a=>a.nombre),puntuacion,confianza,requiereValoracionMedica:sintomasCoincidentes.length>0&&alarmasDetectadas.length>0}; }).filter(r=>r.coincidencias.length>0&&r.puntuacion>0).sort((a,b)=>{if(a.requiereValoracionMedica&&!b.requiereValoracionMedica)return -1;if(!a.requiereValoracionMedica&&b.requiereValoracionMedica)return 1;return b.puntuacion-a.puntuacion;}); }