import type { EjemploConEvidencia } from "./ejemplosConEvidencia";
import { buscarFichaVademecum } from "./vademecumFitoterapia";

function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const stop = new Set(["de", "del", "la", "las", "el", "los", "y", "o", "en", "con", "sin", "para", "por", "un", "una", "que", "se", "puede", "pueden", "como", "al", "a"]);

function tokens(texto: string) {
  return normalizar(texto)
    .split(" ")
    .filter((token) => token.length > 2 && !stop.has(token));
}

function parecido(a: string, b: string) {
  const A = new Set(tokens(a));
  const B = new Set(tokens(b));
  if (!A.size || !B.size) return false;
  let comunes = 0;
  A.forEach((token) => {
    if (B.has(token)) comunes += 1;
  });
  const menor = Math.min(A.size, B.size);
  return comunes >= 2 && comunes / menor >= 0.6;
}

export function limpiarElementos(elementos: string[], ejemplos: EjemploConEvidencia[] = []) {
  const salida: string[] = [];
  for (const elemento of elementos) {
    const fichaElemento = buscarFichaVademecum(elemento)?.id;
    const repetidoEjemplo = ejemplos.some(
      (ejemplo) => parecido(elemento, `${ejemplo.nombre} ${ejemplo.detalle ?? ""}`)
        || normalizar(elemento).includes(normalizar(ejemplo.nombre))
        || normalizar(ejemplo.nombre).includes(normalizar(elemento))
        || Boolean(fichaElemento && buscarFichaVademecum(ejemplo.nombre)?.id === fichaElemento),
    );
    const repetidoLista = salida.some(
      (existente) => parecido(elemento, existente)
        || normalizar(elemento) === normalizar(existente)
        || Boolean(fichaElemento && buscarFichaVademecum(existente)?.id === fichaElemento),
    );
    if (!repetidoEjemplo && !repetidoLista) salida.push(elemento);
  }
  return salida;
}
