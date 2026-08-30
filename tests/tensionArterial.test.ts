import assert from "node:assert/strict";
import test from "node:test";
import {
  calcularResumenTension,
  eliminarLecturasDuplicadas,
  interpretarTension,
  type LecturaTension,
} from "../src/datos/tensionArterial.ts";

test("clasifica lecturas domiciliarias representativas", () => {
  assert.equal(interpretarTension(120, 75).nivel, "favorable");
  assert.equal(interpretarTension(132, 82).nivel, "vigilar");
  assert.equal(interpretarTension(135, 84).nivel, "alta");
  assert.equal(interpretarTension(128, 85).nivel, "alta");
  assert.equal(interpretarTension(88, 58).nivel, "baja");
});

test("prioriza el valor más preocupante", () => {
  assert.equal(interpretarTension(181, 70).nivel, "muy-alta");
  assert.equal(interpretarTension(130, 121).nivel, "muy-alta");
  assert.equal(interpretarTension(181, 70, true).nivel, "emergencia");
});

test("rechaza cifras incompletas o incoherentes", () => {
  assert.equal(interpretarTension(0, 0).guardable, false);
  assert.equal(interpretarTension(80, 120).nivel, "invalida");
  assert.equal(interpretarTension(300, 90).nivel, "invalida");
});

test("calcula el promedio de los últimos siete días", () => {
  const lecturas: LecturaTension[] = [
    { id: "1", fecha: "2026-08-29T08:00:00.000Z", sistolica: 120, diastolica: 80, pulso: 60, nivel: "vigilar" },
    { id: "2", fecha: "2026-08-30T08:00:00.000Z", sistolica: 130, diastolica: 84, pulso: 70, nivel: "vigilar" },
    { id: "3", fecha: "2026-08-01T08:00:00.000Z", sistolica: 200, diastolica: 100, nivel: "alta" },
  ];

  assert.deepEqual(calcularResumenTension(lecturas, 7, new Date("2026-08-30T12:00:00.000Z")), {
    cantidad: 2,
    sistolicaMedia: 125,
    diastolicaMedia: 82,
    pulsoMedio: 65,
    desde: "2026-08-23T12:00:00.000Z",
  });
});

test("no muestra ni guarda dos veces la misma medición", () => {
  const base: LecturaTension = {
    id: "lectura-1",
    fecha: "2026-08-30T08:00:00.000Z",
    sistolica: 128,
    diastolica: 79,
    pulso: 66,
    brazo: "izquierdo",
    notas: "antes del desayuno",
    nivel: "favorable",
  };

  const repetidaConOtroId = { ...base, id: "lectura-2" };
  const segundaReal = {
    ...base,
    id: "lectura-3",
    fecha: "2026-08-30T08:01:00.000Z",
  };

  assert.deepEqual(
    eliminarLecturasDuplicadas([base, base, repetidaConOtroId, segundaReal]).map((lectura) => lectura.id),
    ["lectura-1", "lectura-3"],
  );
});
