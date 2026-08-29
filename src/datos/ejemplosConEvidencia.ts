export type NivelEjemplo = "alta" | "moderada" | "limitada" | "insuficiente" | "tradicional";

export interface EjemploConEvidencia {
  nombre: string;
  utilidad: string;
  evidencia: NivelEjemplo;
  /** Campo opcional legado usado por el deduplicador. Los datos actuales usan `utilidad`. */
  detalle?: string;
}

export interface EjemplosCondicion {
  nutricion?: EjemploConEvidencia[];
  fitoterapia?: EjemploConEvidencia[];
}

/**
 * Ejemplos concretos para acompañar las guías generales.
 * Se muestran solo cuando existe respaldo razonable o, si la evidencia es insuficiente,
 * se etiqueta de forma explícita. No sustituyen tratamiento ni individualización clínica.
 */
export const ejemplosConEvidencia: Record<string, EjemplosCondicion> = {
  "estrenimiento": {
    nutricion: [
      { nombre: "Ciruelas pasas", utilidad: "Pueden aumentar la frecuencia de las deposiciones y mejorar la consistencia en estreñimiento funcional.", evidencia: "moderada" },
      { nombre: "Kiwi", utilidad: "Puede favorecer el tránsito intestinal y mejorar síntomas de estreñimiento en algunas personas.", evidencia: "moderada" },
      { nombre: "Avena", utilidad: "Aporta fibra soluble y puede ayudar a aumentar el volumen y la regularidad de las heces.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Psyllium (Plantago ovata)", utilidad: "Fibra formadora de masa útil para mejorar frecuencia y consistencia de las deposiciones.", evidencia: "alta" },
      { nombre: "Semilla de lino", utilidad: "Puede ayudar al tránsito por su contenido en fibra y mucílagos cuando se acompaña de suficiente agua.", evidencia: "moderada" }
    ]
  },
  "dismenorrea": {
    nutricion: [
      { nombre: "Pescado azul", utilidad: "Aporta omega-3; un patrón rico en pescado azul puede ser un apoyo dentro de una dieta antiinflamatoria global.", evidencia: "limitada" },
      { nombre: "Legumbres y alimentos ricos en hierro", utilidad: "Son útiles si el sangrado menstrual ha contribuido a una ferropenia, pero no actúan como analgésicos.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Jengibre (Zingiber officinale)", utilidad: "Puede reducir el dolor menstrual en algunas mujeres.", evidencia: "moderada" }
    ]
  },
  "menopausia-climaterio": {
    nutricion: [
      { nombre: "Soja y derivados", utilidad: "Aportan isoflavonas; pueden producir una reducción modesta de los sofocos en algunas mujeres.", evidencia: "moderada" },
      { nombre: "Lácteos o bebidas enriquecidas con calcio", utilidad: "Ayudan a cubrir necesidades de calcio relevantes para la salud ósea.", evidencia: "alta" },
      { nombre: "Pescado azul y alimentos enriquecidos con vitamina D", utilidad: "Contribuyen al aporte de vitamina D y al mantenimiento de la salud ósea.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Isoflavonas de soja", utilidad: "Pueden disminuir modestamente la frecuencia o intensidad de los sofocos en algunas mujeres.", evidencia: "moderada" },
      { nombre: "Cimicífuga (Actaea racemosa)", utilidad: "Se utiliza para síntomas menopáusicos, pero los resultados de los estudios son inconsistentes.", evidencia: "insuficiente" }
    ]
  },
  "hiperplasia-benigna-prostata-compatible": {
    nutricion: [
      { nombre: "Patrón mediterráneo", utilidad: "Apoya la salud cardiovascular y metabólica, relevante porque obesidad y síndrome metabólico pueden acompañar síntomas urinarios.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Serenoa repens", utilidad: "Se usa para síntomas urinarios de hiperplasia benigna de próstata; el efecto clínico es variable según preparación y estudio.", evidencia: "limitada" }
    ]
  },
  "disfuncion-erectil-compatible": {
    nutricion: [
      { nombre: "Patrón mediterráneo", utilidad: "Puede mejorar factores vasculares asociados a la función eréctil, sobre todo cuando existen obesidad o riesgo cardiovascular.", evidencia: "moderada" },
      { nombre: "Frutos secos y aceite de oliva", utilidad: "Forman parte de un patrón cardioprotector que favorece la salud vascular.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Ginseng (Panax ginseng)", utilidad: "Puede mejorar modestamente algunos parámetros de función eréctil, aunque la evidencia no es sólida.", evidencia: "limitada" }
    ]
  },
  "resfriado-viral": {
    nutricion: [
      { nombre: "Miel", utilidad: "Puede aliviar la tos aguda en adultos y niños mayores de un año.", evidencia: "moderada" },
      { nombre: "Kiwi, cítricos y pimiento", utilidad: "Aportan vitamina C; ayudan a cubrir necesidades nutricionales, aunque no curan el resfriado.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Equinácea", utilidad: "Algunos preparados muestran beneficio modesto, pero la evidencia es heterogénea y depende del producto.", evidencia: "limitada" },
      { nombre: "Saúco", utilidad: "Se usa para síntomas respiratorios, pero la evidencia clínica sigue siendo insuficiente para considerarlo tratamiento probado.", evidencia: "insuficiente" }
    ]
  },
  "anemia-compatible": {
    nutricion: [
      { nombre: "Almejas y otros mariscos", utilidad: "Son fuentes concentradas de hierro y pueden ayudar a cubrir necesidades en dietas con aporte insuficiente.", evidencia: "alta" },
      { nombre: "Lentejas y garbanzos + vitamina C", utilidad: "Aportan hierro no hemo; combinarlo con pimiento, kiwi o cítricos mejora su absorción.", evidencia: "alta" },
      { nombre: "Huevos, pescado, carne y lácteos", utilidad: "Aportan vitamina B12, relevante en anemias por déficit de B12.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Ortiga", utilidad: "Se usa tradicionalmente como reconstituyente, pero no sustituye la reposición de hierro o B12 cuando existe déficit confirmado.", evidencia: "tradicional" }
    ]
  },
  "deficit-hierro-compatible": {
    nutricion: [
      { nombre: "Almejas y marisco", utilidad: "Aportan hierro hemo de buena absorción.", evidencia: "alta" },
      { nombre: "Lentejas, garbanzos y judías", utilidad: "Aportan hierro vegetal; su absorción mejora al combinarlos con vitamina C.", evidencia: "alta" },
      { nombre: "Pimiento, kiwi y cítricos", utilidad: "La vitamina C mejora la absorción del hierro no hemo de la comida.", evidencia: "alta" }
    ]
  },
  "deficit-b12-folato-compatible": {
    nutricion: [
      { nombre: "Pescado, marisco, huevos y lácteos", utilidad: "Son fuentes dietéticas habituales de vitamina B12.", evidencia: "alta" },
      { nombre: "Lentejas, espinaca, espárragos y brócoli", utilidad: "Aportan folato dentro de una dieta variada.", evidencia: "alta" }
    ]
  },
  "reflujo-erge": {
    nutricion: [
      { nombre: "Comidas pequeñas y menos grasas", utilidad: "Reducir el volumen y la grasa de las comidas puede disminuir episodios de reflujo en personas sensibles.", evidencia: "moderada" },
      { nombre: "Avena, arroz, patata y verduras cocidas", utilidad: "Son opciones generalmente bien toleradas cuando se busca una alimentación poco irritante.", evidencia: "limitada" }
    ],
    fitoterapia: [
      { nombre: "Menta", utilidad: "No se recomienda como apoyo rutinario porque puede relajar el esfínter esofágico inferior y empeorar el reflujo.", evidencia: "moderada" }
    ]
  },
  "dispepsia-funcional": {
    nutricion: [
      { nombre: "Comidas pequeñas y bajas en grasa", utilidad: "Pueden reducir plenitud y malestar posprandial en algunas personas.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Jengibre (Zingiber officinale)", utilidad: "Puede ayudar a náuseas y vaciamiento gástrico en algunos contextos, aunque no resuelve todas las causas de dispepsia.", evidencia: "moderada" },
      { nombre: "Menta + alcaravea", utilidad: "Algunas combinaciones estandarizadas han mostrado alivio de síntomas dispépticos.", evidencia: "moderada" }
    ]
  },
  "hinchazon-gases": {
    nutricion: [
      { nombre: "Reducir bebidas con gas", utilidad: "Puede disminuir la distensión por aire ingerido en personas sensibles.", evidencia: "moderada" },
      { nombre: "Comer más despacio", utilidad: "Puede reducir aerofagia y distensión relacionada con la ingesta.", evidencia: "limitada" }
    ],
    fitoterapia: [
      { nombre: "Menta piperita", utilidad: "Algunos preparados pueden aliviar espasmo y dolor abdominal, especialmente en síndrome de intestino irritable.", evidencia: "moderada" }
    ]
  }
};
