import { vademecumFitoterapiaAmpliacion } from "./vademecumFitoterapiaAmpliacion";

export type NivelInteraccionVademecum = "seguir" | "valorar" | "monitorizar" | "evitar";

export interface FichaVademecumFitoterapia {
  id: string;
  nombre: string;
  aliases: string[];
  especie: string;
  drogaVegetal: string;
  usoRespaldado: string;
  posologiaVerificada?: string;
  precauciones: string[];
  interaccion: {
    nivel: NivelInteraccionVademecum;
    resumen: string;
  };
  fuenteVademecum?: string;
  fuenteOficial?: string;
  fuenteOficialEtiqueta?: string;
  fuenteInteracciones: string;
}

export const FUENTE_INTERACCIONES_2026 =
  "https://www.fitoterapia.net/publicaciones/documentacion/tabla-interacciones-entre-preparados-vegetales-2047.html";

/**
 * Base de consulta clínica resumida para CuerpoClaro.
 *
 * Criterio de inclusión:
 * - Datos contrastados con el Vademécum de Fitoterapia (Fitoterapia.net).
 * - Interacciones contrastadas con la tabla de Vanaclocha y Cañigueral,
 *   actualizada el 30/06/2026 y elaborada a partir de monografías EMA/ESCOP.
 * - No se inventan dosis ni interacciones. Si un preparado concreto no coincide
 *   con la droga vegetal/preparación descrita, la ficha NO debe extrapolarse.
 *
 * Los niveles son una ayuda de lectura, no una autorización de tratamiento:
 * seguir = no se describen interacciones relevantes en las fuentes consultadas;
 * valorar = interacción teórica/plausible o evidencia clínica insuficiente;
 * monitorizar = requiere separación, vigilancia o supervisión según el caso;
 * evitar = existen combinaciones que las fuentes desaconsejan o contraindican.
 */
export const vademecumFitoterapia: FichaVademecumFitoterapia[] = [
  {
    id: "valeriana-raiz",
    nombre: "Valeriana",
    aliases: ["valeriana", "valeriana officinalis", "raiz de valeriana"],
    especie: "Valeriana officinalis L.",
    drogaVegetal: "Raíz y órganos subterráneos desecados (Valerianae radix)",
    usoRespaldado: "Tensión nerviosa leve y dificultad para conciliar el sueño, según monografías ESCOP/EMA recogidas por el Vademécum.",
    posologiaVerificada: "En adultos, la monografía pública recoge para infusión aproximadamente 1–3 g por toma; la preparación y frecuencia dependen del producto y de la indicación.",
    precauciones: ["Puede afectar a la capacidad para conducir o manejar maquinaria.", "No extrapolar la dosis de raíz a extractos con distinta concentración."],
    interaccion: {
      nivel: "valorar",
      resumen: "No se ha demostrado una interacción CYP clínicamente relevante; la combinación con sedantes de síntesis debe revisarse y, según el preparado, realizarse con supervisión.",
    },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/valeriana.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "pasiflora-parte-aerea",
    nombre: "Pasiflora",
    aliases: ["pasiflora", "pasionaria", "flor de la pasion", "passiflora incarnata"],
    especie: "Passiflora incarnata L.",
    drogaVegetal: "Parte aérea desecada (Passiflorae herba)",
    usoRespaldado: "Uso tradicional reconocido por EMA para estrés mental leve y ayuda para conciliar el sueño.",
    posologiaVerificada: "ESCOP recoge en adultos, entre otras formas, 0,5–2 g de polvo o 2,5 g de droga en infusión por dosis/preparación indicada en la monografía.",
    precauciones: ["No hay datos suficientes de seguridad en embarazo y lactancia.", "EMA desaconseja su uso en menores de 12 años por falta de datos/medicamentos registrados."],
    interaccion: {
      nivel: "seguir",
      resumen: "EMA/ESCOP no describen interacciones en la tabla; el Vademécum aconseja, por prudencia, evitar combinarla con tranquilizantes como benzodiacepinas salvo control médico.",
    },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/pasiflora.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "melisa-hoja",
    nombre: "Melisa",
    aliases: ["melisa", "toronjil", "melissa officinalis", "hoja de melisa"],
    especie: "Melissa officinalis L.",
    drogaVegetal: "Hoja desecada (Melissae folium)",
    usoRespaldado: "ESCOP recoge su empleo en inquietud/irritabilidad y trastornos digestivos espasmódicos; también existen usos tópicos específicos.",
    posologiaVerificada: "La monografía pública recoge para adultos infusión de 1,5–4,5 g de hoja, 2–3 veces al día, según la finalidad y preparación.",
    precauciones: ["La seguridad durante embarazo y lactancia no está establecida."],
    interaccion: { nivel: "seguir", resumen: "No se describen interacciones clínicamente relevantes en las monografías EMA/ESCOP consultadas." },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/melisa.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "menta-piperita-hoja",
    nombre: "Menta piperita — hoja",
    aliases: ["menta", "menta piperita", "mentha x piperita", "hoja de menta", "peppermint leaf"],
    especie: "Mentha × piperita L.",
    drogaVegetal: "Hoja de menta piperita (Menthae piperitae folium)",
    usoRespaldado: "ESCOP recoge la hoja para alivio sintomático de trastornos digestivos como dispepsia y flatulencia.",
    posologiaVerificada: "La monografía pública recoge en adultos/ancianos infusión de 1,5–3 g en unos 150 mL, hasta 3 veces al día.",
    precauciones: ["La ficha de hoja no debe confundirse con la del aceite esencial o cápsulas gastrorresistentes."],
    interaccion: { nivel: "seguir", resumen: "Para la hoja, la tabla EMA/ESCOP no describe interacciones relevantes." },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/menta-piperita.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "menta-piperita-aceite",
    nombre: "Menta piperita — aceite esencial",
    aliases: ["aceite de menta", "aceite esencial de menta", "aceite de menta enterico", "aceite de menta entérico", "peppermint oil"],
    especie: "Mentha × piperita L.",
    drogaVegetal: "Aceite esencial de menta piperita; las cápsulas gastrorresistentes son una preparación específica",
    usoRespaldado: "Preparaciones específicas de aceite de menta se emplean en indicaciones digestivas; no equivalen a la infusión de hoja.",
    precauciones: ["No extrapolar recomendaciones de la hoja al aceite esencial.", "La seguridad en embarazo/lactancia depende de la preparación y debe revisarse."],
    interaccion: {
      nivel: "monitorizar",
      resumen: "Las cápsulas gastrorresistentes no deben tomarse junto con comidas, antiácidos, antagonistas H2 o inhibidores de la bomba de protones si ello favorece una liberación prematura del aceite.",
    },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/menta-piperita.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "ispagula",
    nombre: "Ispágula / Psyllium",
    aliases: ["psyllium", "psyllium plantago ovata", "ispagula", "ispágula", "plantago ovata", "semilla de ispágula", "cuticula de ispágula", "cáscara de psyllium"],
    especie: "Plantago ovata Forssk.",
    drogaVegetal: "Semilla y/o cutícula de la semilla, según la preparación",
    usoRespaldado: "EMA reconoce un uso bien establecido en estreñimiento habitual y situaciones en las que interesa facilitar la defecación.",
    posologiaVerificada: "ESCOP recoge para semilla, como laxante en adultos, un total diario de 7–30 g dividido en varias tomas; la cutícula y los productos comerciales pueden tener pautas distintas.",
    precauciones: ["Requiere líquido suficiente.", "No usar en estenosis u obstrucción gastrointestinal/esofágica sin valoración médica."],
    interaccion: {
      nivel: "monitorizar",
      resumen: "Puede retrasar o modificar la absorción de otros fármacos y nutrientes; las fuentes indican separar la administración y vigilar especialmente tratamientos para diabetes o hormona tiroidea.",
    },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/ispagula.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "jengibre-rizoma",
    nombre: "Jengibre",
    aliases: ["jengibre", "zingiber officinale", "rizoma de jengibre", "ginger"],
    especie: "Zingiber officinale Roscoe",
    drogaVegetal: "Rizoma desecado (Zingiberis rhizoma)",
    usoRespaldado: "ESCOP recoge su uso para prevención de náuseas y vómitos por cinetosis y determinados usos para náuseas bajo supervisión.",
    posologiaVerificada: "Para cinetosis, la monografía pública recoge dosis únicas de rizoma en el rango de 0,5–2 g antes del viaje, según edad y preparación.",
    precauciones: ["Precaución en gastritis, úlcera péptica o reflujo gastroesofágico."],
    interaccion: {
      nivel: "valorar",
      resumen: "La monografía no describe interacciones clínicas confirmadas, pero ESCOP señala riesgos teóricos por mecanismos CYP/P-gp y aconseja cautela con anticoagulantes/antiagregantes y otros tratamientos concretos.",
    },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/jengibre.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "ajo-bulbo",
    nombre: "Ajo",
    aliases: ["ajo", "allium sativum", "ajo envejecido", "extracto de ajo"],
    especie: "Allium sativum L.",
    drogaVegetal: "Bulbo de ajo y preparados definidos en la monografía",
    usoRespaldado: "ESCOP recoge usos cardiovasculares concretos como apoyo en factores lipídicos/ateroscleróticos, dependiendo de la preparación.",
    precauciones: ["El efecto y la seguridad dependen mucho del tipo de preparado y su estandarización."],
    interaccion: {
      nivel: "monitorizar",
      resumen: "Puede aumentar el tiempo de sangrado con anticoagulantes/antiagregantes; además se describen interacciones relevantes con determinados antirretrovirales.",
    },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/ajo.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "ginkgo-hoja",
    nombre: "Ginkgo",
    aliases: ["ginkgo", "ginkgo biloba", "extracto de ginkgo"],
    especie: "Ginkgo biloba L.",
    drogaVegetal: "Hoja; los usos clínicos se refieren habitualmente a extractos definidos/estandarizados",
    usoRespaldado: "ESCOP recoge usos de extractos refinados y estandarizados en determinados trastornos cognitivos/circulatorios; no debe extrapolarse a cualquier producto de hoja.",
    precauciones: ["La seguridad en embarazo/lactancia y en niños no está establecida para uso terapéutico sin control profesional."],
    interaccion: {
      nivel: "monitorizar",
      resumen: "La tabla recomienda precaución con anticoagulantes/antiagregantes y recoge interacciones farmacocinéticas concretas; la evidencia varía según el fármaco y no debe generalizarse.",
    },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/ginkgo.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "ginseng-raiz",
    nombre: "Ginseng",
    aliases: ["ginseng", "panax ginseng", "ginseng coreano", "ginseng asiatico", "ginseng asiático"],
    especie: "Panax ginseng C.A. Mey.",
    drogaVegetal: "Raíz de ginseng",
    usoRespaldado: "Uso fitoterápico de raíz/preparados de Panax ginseng; la indicación y dosis dependen del extracto o droga definidos.",
    precauciones: ["No equiparar Panax ginseng con otras especies comercializadas como ‘ginseng’."],
    interaccion: {
      nivel: "valorar",
      resumen: "EMA no describe interacciones; ESCOP señala posibles efectos modestos sobre glucemia y una interacción con warfarina comunicada pero no demostrada de forma consistente in vivo.",
    },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/ginseng.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "hiperico",
    nombre: "Hipérico",
    aliases: ["hiperico", "hipérico", "hierba de san juan", "hypericum perforatum", "st johns wort", "st. john's wort"],
    especie: "Hypericum perforatum L.",
    drogaVegetal: "Sumidad/parte aérea florida y extractos definidos",
    usoRespaldado: "Determinados extractos estandarizados cuentan con monografías para trastornos depresivos de intensidad concreta; el perfil depende especialmente del contenido en hiperforina.",
    precauciones: ["Es una de las plantas con mayor relevancia clínica por interacciones farmacológicas.", "No debe iniciarse ni retirarse sin revisar la medicación habitual."],
    interaccion: {
      nivel: "evitar",
      resumen: "Preparados con suficiente hiperforina inducen CYP y P-gp y pueden reducir la eficacia de numerosos fármacos; existen combinaciones contraindicadas o a evitar, incluyendo inmunosupresores, varios antirretrovirales, algunos antineoplásicos y anticonceptivos hormonales, además de riesgo serotoninérgico con ciertos antidepresivos.",
    },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/hiperico.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "regaliz-raiz",
    nombre: "Regaliz",
    aliases: ["regaliz", "glycyrrhiza glabra", "licorice", "raiz de regaliz", "raíz de regaliz"],
    especie: "Glycyrrhiza glabra L. y especies admitidas por la monografía",
    drogaVegetal: "Raíz de regaliz",
    usoRespaldado: "ESCOP recoge usos digestivos y expectorantes concretos de la raíz/preparados definidos.",
    precauciones: ["No es apropiado en hipertensión, hipopotasemia y determinadas enfermedades renales/hepáticas sin control profesional."],
    interaccion: {
      nivel: "monitorizar",
      resumen: "Puede antagonizar tratamientos antihipertensivos y aumentar el riesgo de alteraciones de potasio con diuréticos, glucósidos cardiacos, corticoides, laxantes estimulantes y otros fármacos que alteran electrolitos.",
    },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/regaliz.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "equinacea",
    nombre: "Equinácea",
    aliases: ["equinacea", "equinácea", "echinacea", "echinacea purpurea", "echinacea pallida", "echinacea angustifolia"],
    especie: "Echinacea purpurea / E. pallida / E. angustifolia según la preparación",
    drogaVegetal: "Parte aérea o raíz según especie y preparado",
    usoRespaldado: "Las monografías distinguen claramente especies, partes de planta y preparados; no son intercambiables automáticamente.",
    precauciones: ["Contraindicada en hipersensibilidad a Echinacea/Asteraceae; revisar otras contraindicaciones específicas de la preparación."],
    interaccion: { nivel: "seguir", resumen: "La tabla EMA/ESCOP no describe interacciones clínicas relevantes confirmadas; los hallazgos in vitro no se convierten automáticamente en interacción clínica." },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/equinacea.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "curcuma-rizoma",
    nombre: "Cúrcuma",
    aliases: ["curcuma", "cúrcuma", "curcuma longa", "turmeric", "curcumina"],
    especie: "Curcuma longa L.",
    drogaVegetal: "Rizoma de cúrcuma india",
    usoRespaldado: "La monografía del Vademécum diferencia la droga vegetal de extractos/curcuminoides; no deben considerarse equivalentes sin comprobar la preparación.",
    precauciones: ["La composición y biodisponibilidad de extractos comerciales puede diferir mucho de la droga vegetal."],
    interaccion: { nivel: "seguir", resumen: "En la tabla basada en EMA/ESCOP no se describen interacciones para la droga/preparados revisados; no se deben añadir interacciones teóricas como si estuvieran clínicamente demostradas." },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/curcuma-india.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "espino-hoja-flor",
    nombre: "Espino blanco",
    aliases: ["espino blanco", "espino albar", "crataegus", "crataegus monogyna", "hawthorn"],
    especie: "Crataegus spp.",
    drogaVegetal: "Hoja con flor (Crataegi folium cum flore), según preparación",
    usoRespaldado: "ESCOP recoge usos cardiovasculares de determinados extractos/preparados; requieren contexto clínico y no sustituyen tratamiento cardiológico.",
    precauciones: ["Los síntomas cardiovasculares nuevos o importantes requieren valoración médica antes de autocuidado fitoterápico."],
    interaccion: { nivel: "seguir", resumen: "La tabla EMA/ESCOP no describe interacciones para los preparados revisados, sin que esto autorice a sustituir medicación cardiovascular." },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/espino-albar.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "sabal-fruto",
    nombre: "Sabal / Serenoa",
    aliases: ["sabal", "serenoa", "serenoa repens", "saw palmetto"],
    especie: "Serenoa repens (W. Bartram) Small",
    drogaVegetal: "Fruto de sabal",
    usoRespaldado: "Preparados concretos se utilizan para síntomas urinarios del tracto inferior asociados a hiperplasia benigna de próstata; el efecto depende de la preparación.",
    precauciones: ["Los síntomas urinarios masculinos necesitan valoración para descartar otras causas antes de asumir hiperplasia benigna."],
    interaccion: { nivel: "seguir", resumen: "ESCOP no describe interacciones establecidas; existe un caso aislado sospechoso con warfarina que no permite afirmar una interacción general, pero justifica revisión individual si hay anticoagulación." },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/sabal.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "hinojo-fruto",
    nombre: "Hinojo — fruto",
    aliases: ["hinojo", "fruto de hinojo", "foeniculum vulgare", "fennel"],
    especie: "Foeniculum vulgare Mill.",
    drogaVegetal: "Fruto de hinojo",
    usoRespaldado: "Uso fitoterápico digestivo/carminativo tradicional según preparaciones recogidas en monografías.",
    precauciones: ["No confundir el fruto con el aceite esencial de hinojo amargo."],
    interaccion: { nivel: "seguir", resumen: "Para el fruto, la tabla EMA/ESCOP no describe interacciones relevantes." },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/hinojo.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  {
    id: "hinojo-aceite",
    nombre: "Hinojo amargo — aceite esencial",
    aliases: ["aceite de hinojo", "aceite esencial de hinojo", "aceite de hinojo amargo", "bitter fennel oil"],
    especie: "Foeniculum vulgare Mill. subsp. vulgare var. vulgare",
    drogaVegetal: "Aceite esencial de hinojo amargo",
    usoRespaldado: "Preparación distinta del fruto; debe evaluarse con su propia monografía.",
    precauciones: ["No extrapolar la seguridad del fruto al aceite esencial."],
    interaccion: { nivel: "monitorizar", resumen: "La tabla recoge precaución con tratamientos hormonales en determinadas condiciones/dosis y recomienda consulta profesional." },
    fuenteVademecum: "https://www.fitoterapia.net/vademecum/plantas/hinojo.html",
    fuenteInteracciones: FUENTE_INTERACCIONES_2026,
  },
  ...vademecumFitoterapiaAmpliacion,
];

function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const aliasIndex = vademecumFitoterapia
  .flatMap((ficha) => ficha.aliases.map((alias) => ({ ficha, alias: normalizar(alias) })))
  .sort((a, b) => b.alias.length - a.alias.length);

export function buscarFichaVademecum(texto: string): FichaVademecumFitoterapia | undefined {
  const limpio = normalizar(texto);
  if (!limpio) return undefined;
  return aliasIndex.find(({ alias }) => alias === limpio)?.ficha
    ?? aliasIndex.find(({ alias }) => limpio.includes(alias))?.ficha;
}

const TERMINOS_NO_BOTANICOS = [
  "bicarbonato",
  "calcio suplementario",
  "compresas tibias",
  "esteroles vegetales",
  "hierro suplementario",
  "magnesio",
  "melatonina",
  "probióticos",
  "riboflavina",
  "solución salina",
  "vitamina b6",
  "vitamina d",
];

const CATEGORIAS_GENERALES = [
  "fitoterapia",
  "infusiones en el ojo",
  "plantas diuréticas",
  "preparados herbales",
  "remedios herbales",
];

export function tipoConsultaSinFicha(texto: string): "no-botanico" | "categoria-general" | "planta-sin-validar" {
  const limpio = normalizar(texto);
  if (TERMINOS_NO_BOTANICOS.some((termino) => limpio.includes(normalizar(termino)))) return "no-botanico";
  if (CATEGORIAS_GENERALES.some((termino) => limpio.includes(normalizar(termino)))) return "categoria-general";
  return "planta-sin-validar";
}
