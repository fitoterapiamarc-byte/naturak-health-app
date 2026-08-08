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

export interface ResultadoOrientacion {
  condicion: Condicion;
  coincidencias: string[];
  contradicciones: string[];
  senalesAlarmaDetectadas: string[];
  puntuacion: number;
  confianza: number;
  requiereValoracionMedica: boolean;
}

function normalizarTexto(texto: string): string {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function hayCoincidencia(textoUsuario: string, textoBase: string): boolean {
  return normalizarTexto(textoUsuario) === normalizarTexto(textoBase);
}

const todasLasCondiciones: Condicion[] = [
  ...condiciones,
  ...condicionesDigestivasExtra,
  ...condicionesNeuroMusculo,
  ...condicionesCardioResp,
  ...condicionesUrinarias,
  ...condicionesAbdominalesUrgentes,
  ...condicionesGenerales,
  ...condicionesMusculoExtra,
  ...condicionesDermatologicas,
  ...condicionesEndocrinas,
  ...condicionesORLVisual,
  ...condicionesSaludFemenina,
  ...condicionesSaludMasculina,
  ...condicionesSangreDeficits,
  ...condicionesRenalesElectrolitos,
  ...condicionesBucodentales,
];

export function orientarPorSintomas(sintomasUsuario: string[]): ResultadoOrientacion[] {
  const datosIntroducidos = sintomasUsuario.map((dato) => dato.trim()).filter(Boolean);
  return todasLasCondiciones
    .map((condicion) => {
      const sintomasCoincidentes = condicion.sintomas.filter((sintoma) => datosIntroducidos.some((datoUsuario) => hayCoincidencia(datoUsuario, sintoma.nombre)));
      const sintomasContradictorios = condicion.sintomasQueContradicen.filter((sintoma) => datosIntroducidos.some((datoUsuario) => hayCoincidencia(datoUsuario, sintoma.nombre)));
      const alarmasDetectadas = condicion.sintomasAlarma.filter((alarma) => datosIntroducidos.some((datoUsuario) => hayCoincidencia(datoUsuario, alarma.nombre)));
      const puntosPositivos = sintomasCoincidentes.reduce((total, sintoma) => total + sintoma.peso, 0);
      const puntosNegativos = sintomasContradictorios.reduce((total, sintoma) => total + sintoma.peso, 0);
      const puntuacion = Math.max(0, puntosPositivos - puntosNegativos);
      const puntuacionMaxima = condicion.sintomas.reduce((total, sintoma) => total + sintoma.peso, 0);
      const confianza = puntuacionMaxima > 0 ? Math.round((puntuacion / puntuacionMaxima) * 100) : 0;
      return { condicion, coincidencias: sintomasCoincidentes.map((sintoma) => sintoma.nombre), contradicciones: sintomasContradictorios.map((sintoma) => sintoma.nombre), senalesAlarmaDetectadas: alarmasDetectadas.map((alarma) => alarma.nombre), puntuacion, confianza, requiereValoracionMedica: sintomasCoincidentes.length > 0 && alarmasDetectadas.length > 0 };
    })
    .filter((resultado) => resultado.coincidencias.length > 0 && resultado.puntuacion > 0)
    .sort((a, b) => {
      if (a.requiereValoracionMedica && !b.requiereValoracionMedica) return -1;
      if (!a.requiereValoracionMedica && b.requiereValoracionMedica) return 1;
      return b.puntuacion - a.puntuacion;
    });
}