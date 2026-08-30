import { ejemplosConEvidencia, type EjemploConEvidencia, type EjemplosCondicion } from "./ejemplosConEvidencia";
import { ejemplosConEvidenciaExtra } from "./ejemplosConEvidenciaExtra";
import { ejemplosConEvidenciaComplementarios } from "./ejemplosConEvidenciaComplementarios";
import { ejemplosConEvidenciaComunes } from "./ejemplosConEvidenciaComunes";
import { ejemplosAmpliacion } from "./ejemplosAmpliacion";
import { ejemplosTradicionalesAmpliados } from "./ejemplosTradicionalesAmpliados";
import { ejemplosTradicionalesAmpliados2 } from "./ejemplosTradicionalesAmpliados2";
import { ejemplosTradicionalesAmpliados3 } from "./ejemplosTradicionalesAmpliados3";
import { ejemplosEmocionales } from "./ejemplosEmocionales";
import { buscarFichaVademecum } from "./vademecumFitoterapia";

function normalizar(texto: string) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

const stop = new Set(["de", "del", "la", "las", "el", "los", "y", "o", "en", "con", "sin", "para", "por", "un", "una", "que", "se", "puede", "pueden", "como", "al", "a"]);

function tokens(texto: string) {
  return normalizar(texto).split(" ").filter((token) => token.length > 2 && !stop.has(token));
}

function parecido(a: string, b: string) {
  const A = new Set(tokens(a));
  const B = new Set(tokens(b));
  if (!A.size || !B.size) return false;
  let comunes = 0;
  A.forEach((token) => { if (B.has(token)) comunes += 1; });
  const menor = Math.min(A.size, B.size);
  return comunes >= 2 && comunes / menor >= 0.6;
}

function unir(lista: (EjemploConEvidencia[] | undefined)[], compararFicha = false) {
  const salida: EjemploConEvidencia[] = [];
  lista.flatMap((elementos) => elementos ?? []).forEach((ejemplo) => {
    const texto = `${ejemplo.nombre} ${ejemplo.detalle ?? ""}`;
    const ficha = compararFicha ? buscarFichaVademecum(ejemplo.nombre)?.id : undefined;
    const repetido = salida.some((existente) =>
      parecido(texto, `${existente.nombre} ${existente.detalle ?? ""}`)
      || normalizar(existente.nombre) === normalizar(ejemplo.nombre)
      || Boolean(ficha && buscarFichaVademecum(existente.nombre)?.id === ficha));
    if (!repetido) salida.push(ejemplo);
  });
  return salida;
}

export function obtenerEjemplos(id: string): EjemplosCondicion {
  const fuentes = [
    ejemplosConEvidencia[id],
    ejemplosConEvidenciaExtra[id],
    ejemplosConEvidenciaComplementarios[id],
    ejemplosConEvidenciaComunes[id],
    ejemplosAmpliacion[id],
    ejemplosTradicionalesAmpliados[id],
    ejemplosTradicionalesAmpliados2[id],
    ejemplosTradicionalesAmpliados3[id],
    ejemplosEmocionales[id],
  ].filter(Boolean) as EjemplosCondicion[];

  return {
    nutricion: unir(fuentes.map((fuente) => fuente.nutricion)),
    fitoterapia: unir(fuentes.map((fuente) => fuente.fitoterapia), true),
  };
}
