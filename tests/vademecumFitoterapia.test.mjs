import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createServer } from "vite";

let vite;
let moduloVademecum;

before(async () => {
  vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
  moduloVademecum = await vite.ssrLoadModule("/src/datos/vademecumFitoterapia.ts");
});

after(async () => {
  await vite?.close();
});

test("cada ficha tiene identificador, alias y fuentes sin duplicados", () => {
  const { vademecumFitoterapia } = moduloVademecum;
  const ids = new Set();
  const aliasPorFicha = new Map();

  for (const ficha of vademecumFitoterapia) {
    assert.ok(ficha.id.trim());
    assert.ok(!ids.has(ficha.id), `ID duplicado: ${ficha.id}`);
    ids.add(ficha.id);
    assert.ok(ficha.nombre.trim());
    assert.ok(ficha.especie.trim());
    assert.ok(ficha.drogaVegetal.trim());
    assert.ok(ficha.usoRespaldado.trim());
    assert.ok(ficha.precauciones.length > 0, `Sin precauciones: ${ficha.id}`);
    assert.ok(ficha.fuenteVademecum || ficha.fuenteOficial, `Sin fuente principal: ${ficha.id}`);
    assert.match(ficha.fuenteInteracciones, /^https:\/\//);

    for (const alias of ficha.aliases) {
      const normalizado = alias.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
      const anterior = aliasPorFicha.get(normalizado);
      assert.ok(!anterior || anterior === ficha.id, `Alias compartido por ${anterior} y ${ficha.id}: ${alias}`);
      aliasPorFicha.set(normalizado, ficha.id);
    }
  }
});

test("todos los alias recuperan su propia ficha", () => {
  const { buscarFichaVademecum, vademecumFitoterapia } = moduloVademecum;
  for (const ficha of vademecumFitoterapia) {
    for (const alias of ficha.aliases) {
      assert.equal(buscarFichaVademecum(alias)?.id, ficha.id, `Alias mal enlazado: ${alias}`);
    }
  }
});

test("toda recomendación botánica concreta tiene ficha", async () => {
  const { buscarFichaVademecum, tipoConsultaSinFicha } = moduloVademecum;
  const archivos = [
    "/src/datos/ejemplosConEvidencia.ts",
    "/src/datos/ejemplosConEvidenciaExtra.ts",
    "/src/datos/ejemplosConEvidenciaComplementarios.ts",
    "/src/datos/ejemplosConEvidenciaComunes.ts",
    "/src/datos/ejemplosAmpliacion.ts",
    "/src/datos/ejemplosTradicionalesAmpliados.ts",
    "/src/datos/ejemplosTradicionalesAmpliados2.ts",
    "/src/datos/ejemplosTradicionalesAmpliados3.ts",
    "/src/datos/ejemplosEmocionales.ts",
  ];
  const sinFicha = [];

  for (const archivo of archivos) {
    const modulo = await vite.ssrLoadModule(archivo);
    for (const mapa of Object.values(modulo)) {
      if (!mapa || typeof mapa !== "object") continue;
      for (const bloque of Object.values(mapa)) {
        for (const ejemplo of bloque.fitoterapia ?? []) {
          if (!buscarFichaVademecum(ejemplo.nombre) && tipoConsultaSinFicha(ejemplo.nombre) === "planta-sin-validar") {
            sinFicha.push(ejemplo.nombre);
          }
        }
      }
    }
  }

  assert.deepEqual([...new Set(sinFicha)].sort(), []);
});

test("las respuestas combinadas no repiten la misma planta", async () => {
  const { buscarFichaVademecum } = moduloVademecum;
  const { obtenerEjemplos } = await vite.ssrLoadModule("/src/datos/obtenerEjemplos.ts");
  const archivos = [
    "/src/datos/ejemplosConEvidencia.ts",
    "/src/datos/ejemplosConEvidenciaExtra.ts",
    "/src/datos/ejemplosConEvidenciaComplementarios.ts",
    "/src/datos/ejemplosConEvidenciaComunes.ts",
    "/src/datos/ejemplosAmpliacion.ts",
    "/src/datos/ejemplosTradicionalesAmpliados.ts",
    "/src/datos/ejemplosTradicionalesAmpliados2.ts",
    "/src/datos/ejemplosTradicionalesAmpliados3.ts",
    "/src/datos/ejemplosEmocionales.ts",
  ];
  const idsCondicion = new Set();
  for (const archivo of archivos) {
    const modulo = await vite.ssrLoadModule(archivo);
    for (const mapa of Object.values(modulo)) {
      if (!mapa || typeof mapa !== "object") continue;
      Object.keys(mapa).forEach((id) => idsCondicion.add(id));
    }
  }

  for (const id of idsCondicion) {
    const fichas = (obtenerEjemplos(id).fitoterapia ?? [])
      .map((ejemplo) => buscarFichaVademecum(ejemplo.nombre)?.id)
      .filter(Boolean);
    assert.equal(fichas.length, new Set(fichas).size, `Planta repetida en ${id}`);
  }
});
