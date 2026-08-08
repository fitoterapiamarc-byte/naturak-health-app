export type NivelEjemplo = "alta" | "moderada" | "limitada" | "insuficiente" | "tradicional";

export interface EjemploConEvidencia {
  nombre: string;
  utilidad: string;
  evidencia: NivelEjemplo;
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
      { nombre: "Kiwi", utilidad: "Puede favorecer el tránsito y reducir distensión relacionada con estreñimiento en algunas personas.", evidencia: "moderada" },
      { nombre: "Avena", utilidad: "Su fibra soluble puede ser mejor tolerada que aumentos bruscos de salvado en algunas personas.", evidencia: "limitada" }
    ],
    fitoterapia: [
      { nombre: "Aceite de menta entérico", utilidad: "Puede reducir dolor y distensión en algunos pacientes con síndrome de intestino irritable.", evidencia: "moderada" },
      { nombre: "Hinojo", utilidad: "Se usa como carminativo, pero la evidencia clínica para hinchazón aislada es limitada.", evidencia: "limitada" }
    ]
  },
  "hiperglucemia-diabetes-compatible": {
    nutricion: [
      { nombre: "Legumbres", utilidad: "Su fibra y proteína ayudan a moderar la respuesta glucémica cuando sustituyen alimentos refinados.", evidencia: "alta" },
      { nombre: "Avena", utilidad: "Los beta-glucanos contribuyen a mejorar la respuesta glucémica y el perfil lipídico dentro de una dieta adecuada.", evidencia: "alta" },
      { nombre: "Frutos secos", utilidad: "Pueden mejorar calidad de la dieta y algunos factores cardiometabólicos cuando sustituyen ultraprocesados.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Berberina", utilidad: "Puede reducir glucosa y HbA1c en algunos estudios, pero presenta interacciones y no debe sustituir tratamiento médico.", evidencia: "moderada" },
      { nombre: "Canela", utilidad: "Puede producir pequeñas mejoras de glucosa en algunos estudios, con resultados inconsistentes.", evidencia: "limitada" }
    ]
  },
  "hipotiroidismo-compatible": {
    nutricion: [
      { nombre: "Pescado, huevos y lácteos", utilidad: "Aportan yodo y otros nutrientes relevantes dentro de una dieta equilibrada.", evidencia: "alta" },
      { nombre: "Nueces de Brasil", utilidad: "Aportan selenio, pero su contenido es muy variable y no deben usarse como una dosis terapéutica precisa.", evidencia: "limitada" }
    ],
    fitoterapia: [
      { nombre: "Algas ricas en yodo", utilidad: "No se recomiendan como tratamiento rutinario porque el exceso de yodo puede empeorar alteraciones tiroideas.", evidencia: "alta" }
    ]
  },
  "insomnio-compatible": {
    nutricion: [
      { nombre: "Reducir cafeína", utilidad: "Disminuir café, té, cola y energéticas varias horas antes de dormir puede mejorar el sueño en personas sensibles.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Valeriana (Valeriana officinalis)", utilidad: "Puede mejorar modestamente la calidad subjetiva del sueño en algunas personas, pero los resultados son variables.", evidencia: "limitada" },
      { nombre: "Melatonina", utilidad: "Es útil sobre todo en problemas de ritmo circadiano y jet lag; su efecto en insomnio crónico general es más modesto.", evidencia: "moderada" }
    ]
  },
  "psoriasis-compatible": {
    nutricion: [
      { nombre: "Patrón mediterráneo", utilidad: "Puede ayudar al control del peso y del riesgo cardiometabólico asociado a psoriasis.", evidencia: "moderada" },
      { nombre: "Pescado azul", utilidad: "Aporta omega-3; el posible efecto directo sobre la psoriasis es variable.", evidencia: "limitada" }
    ],
    fitoterapia: [
      { nombre: "Aloe vera tópico", utilidad: "Algunas formulaciones han mostrado mejoría de placas leves, pero la evidencia es limitada y depende del producto.", evidencia: "limitada" },
      { nombre: "Cúrcuma/curcumina", utilidad: "Se estudia como complemento, pero la evidencia clínica todavía es insuficiente para recomendarla como tratamiento estándar.", evidencia: "insuficiente" }
    ]
  },
  "dermatitis-eczema": {
    nutricion: [
      { nombre: "Dieta variada sin exclusiones innecesarias", utilidad: "Evitar restricciones sin alergia demostrada reduce el riesgo de déficits nutricionales.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Avena coloidal tópica", utilidad: "Puede ayudar a aliviar picor y sequedad como complemento del cuidado de la barrera cutánea.", evidencia: "moderada" }
    ]
  },
  "gingivitis-periodontal-compatible": {
    nutricion: [
      { nombre: "Reducir azúcares libres frecuentes", utilidad: "Disminuye uno de los principales factores dietéticos relacionados con caries y favorece salud oral global.", evidencia: "alta" },
      { nombre: "Frutas y verduras ricas en vitamina C", utilidad: "Ayudan a cubrir necesidades de vitamina C; una deficiencia puede empeorar la salud gingival.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Té verde", utilidad: "Algunos colutorios o extractos se han estudiado como complemento para placa y gingivitis, pero no sustituyen higiene profesional.", evidencia: "limitada" }
    ]
  },
  "aftas-orales-compatible": {
    nutricion: [
      { nombre: "Hierro, B12 y folato", utilidad: "Corregir déficits confirmados puede ayudar cuando las aftas recurrentes están asociadas a dichas carencias.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Aloe vera tópico oral", utilidad: "Algunos preparados pueden reducir dolor o tiempo de curación, aunque la evidencia es limitada.", evidencia: "limitada" }
    ]
  },
  "candidiasis-oral-compatible": {
    nutricion: [
      { nombre: "Control glucémico si existe diabetes", utilidad: "Un buen control de glucosa puede reducir factores que favorecen candidiasis recurrente.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Remedios herbales", utilidad: "No hay una planta con evidencia suficiente para sustituir los antifúngicos indicados en candidiasis oral.", evidencia: "insuficiente" }
    ]
  },
  "absceso-dental-compatible": {
    nutricion: [
      { nombre: "Alimentos blandos", utilidad: "Pueden facilitar la ingesta mientras se recibe tratamiento odontológico, pero no tratan la infección.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Clavo / aceite de clavo", utilidad: "Puede producir alivio local transitorio del dolor, pero no cura el absceso y puede irritar la mucosa si se usa mal.", evidencia: "limitada" }
    ]
  }
};