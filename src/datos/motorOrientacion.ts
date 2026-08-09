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

export interface ResultadoOrientacion {
  condicion: Condicion;
  coincidencias: string[];
  contradicciones: string[];
  senalesAlarmaDetectadas: string[];
  puntuacion: number;
  confianza: number;
  requiereValoracionMedica: boolean;
}

function normalizarTexto(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const equivalencias: Record<string, string> = {
  "falta de aire al hacer esfuerzo": "falta de aire al esfuerzo",
  "falta de aire haciendo esfuerzo": "falta de aire al esfuerzo",
  "piernas hinchadas": "hinchazon de piernas",
  "hinchazon en las piernas": "hinchazon de piernas",
  "sangre roja en las heces": "sangre roja al defecar",
  "sangre en las heces": "sangre roja al defecar",
  "dolor en la boca del estomago": "dolor en la parte alta del abdomen",
  "ardor de estomago": "ardor en la parte alta del abdomen",
  "pitidos en el oido": "pitidos en los oidos",
  "zumbido en los oidos": "zumbidos en los oidos",
  "orinar muchas veces": "orinar con mucha frecuencia",
  "orinar frecuentemente": "orinar con mucha frecuencia",
  "vision borrosa": "vision borrosa progresiva",
};

function canonizar(texto: string) {
  const normal = normalizarTexto(texto);
  return equivalencias[normal] ?? normal;
}

function hayCoincidencia(a: string, b: string) {
  const x = canonizar(a);
  const y = canonizar(b);
  if (x === y) return true;

  // Permite frases descriptivas más largas, pero evita emparejar palabras genéricas
  // como "dolor", "mareo" o "cansancio" con cualquier cuadro.
  const corta = x.length <= y.length ? x : y;
  const larga = x.length > y.length ? x : y;
  const palabras = corta.split(" ").filter(Boolean);
  return corta.length >= 12 && palabras.length >= 3 && larga.includes(corta);
}

const baseCondiciones: Condicion[] = [
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
  ...condicionesSueno,
  ...condicionesAlergiaInmunidad,
  ...condicionesInfecciosas,
  ...condicionesEmocionales,
  ...condicionesCardiometabolicas,
  ...condicionesComunesExtra,
  ...condicionesAmpliacion,
  ...condicionesAmpliacion2,
  ...condicionesAmpliacion3,
  ...condicionesAmpliacion4,
  ...condicionesAmpliacion5,
  ...condicionesAmpliacion6,
  ...condicionesAmpliacion7,
  ...condicionesAmpliacion8,
  ...condicionesAmpliacion9,
  ...condicionesAmpliacion10,
  ...condicionesAmpliacion11,
  ...condicionesAmpliacion12,
  ...condicionesAmpliacion13,
  ...condicionesAmpliacion14,
];

const idsVistos = new Set<string>();
const nombresVistos = new Set<string>();
export const todasLasCondiciones: Condicion[] = baseCondiciones.filter((c) => {
  const id = normalizarTexto(c.id);
  const nombre = normalizarTexto(c.nombre);
  if (idsVistos.has(id) || nombresVistos.has(nombre)) return false;
  idsVistos.add(id);
  nombresVistos.add(nombre);
  return true;
});

export const totalCondiciones = todasLasCondiciones.length;
export const cifraPortadaCondiciones = Math.max(
  10,
  Math.floor((totalCondiciones - 1) / 10) * 10,
);

export function orientarPorSintomas(sintomasUsuario: string[]): ResultadoOrientacion[] {
  const datos = sintomasUsuario.map((d) => d.trim()).filter(Boolean);

  return todasLasCondiciones
    .map((condicion) => {
      const coinc = condicion.sintomas.filter((s) =>
        datos.some((d) => hayCoincidencia(d, s.nombre)),
      );
      const contra = condicion.sintomasQueContradicen.filter((s) =>
        datos.some((d) => hayCoincidencia(d, s.nombre)),
      );
      const alarmas = condicion.sintomasAlarma.filter((a) =>
        datos.some((d) => hayCoincidencia(d, a.nombre)),
      );
      const positivos = coinc.reduce((t, s) => t + s.peso, 0);
      const negativos = contra.reduce((t, s) => t + s.peso, 0);
      const puntuacion = Math.max(0, positivos - negativos);
      const maxima = condicion.sintomas.reduce((t, s) => t + s.peso, 0);
      const confianza = maxima > 0 ? Math.round((puntuacion / maxima) * 100) : 0;

      return {
        condicion,
        coincidencias: coinc.map((s) => s.nombre),
        contradicciones: contra.map((s) => s.nombre),
        senalesAlarmaDetectadas: alarmas.map((a) => a.nombre),
        puntuacion,
        confianza,
        requiereValoracionMedica: coinc.length > 0 && alarmas.length > 0,
      };
    })
    // Evita mostrar cuadros por una sola coincidencia débil. Una señal muy específica
    // de peso alto sí puede justificar una orientación inicial.
    .filter(
      (r) =>
        r.puntuacion > 0 &&
        (r.coincidencias.length >= 2 || r.puntuacion >= 4 || r.requiereValoracionMedica),
    )
    .sort((a, b) => {
      if (a.requiereValoracionMedica !== b.requiereValoracionMedica) {
        return a.requiereValoracionMedica ? -1 : 1;
      }
      if (b.confianza !== a.confianza) return b.confianza - a.confianza;
      return b.puntuacion - a.puntuacion;
    })
    .slice(0, 6);
}
