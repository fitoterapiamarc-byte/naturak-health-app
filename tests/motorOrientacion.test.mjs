import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createServer } from "vite";

let vite;
let motor;
let alarmas;

before(async () => {
  vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
  motor = await vite.ssrLoadModule("/src/datos/motorOrientacion.ts");
  alarmas = await vite.ssrLoadModule("/src/evaluacion/senalesAlarmaGlobales.ts");
});

after(async () => {
  await vite?.close();
});

test("dolor de cabeza aislado no se convierte en migraña ni en señal de alarma", () => {
  const resultados = motor.orientarPorSintomas(["Dolor de cabeza"]);
  assert.equal(resultados.some((resultado) => resultado.condicion.id.includes("migr")), false);
  assert.equal(resultados.some((resultado) => resultado.requiereValoracionMedica), false);
  assert.equal(alarmas.detectarAlarmasGlobales(["Dolor de cabeza"]).length, 0);
});

test("las características expresas sí permiten orientar una migraña", () => {
  const resultados = motor.orientarPorSintomas([
    "Dolor pulsátil",
    "Dolor en un lado de la cabeza",
    "Sensibilidad intensa a la luz",
    "Náuseas",
  ]);
  assert.equal(resultados.some((resultado) => resultado.condicion.id.includes("migr")), true);
});

test("el dolor súbito e intenso sí activa la alarma específica", () => {
  const detectadas = alarmas.detectarAlarmasGlobales(["Dolor de cabeza súbito e intenso"]);
  assert.equal(detectadas.some((alarma) => alarma.id === "cefalea-secundaria"), true);
});
