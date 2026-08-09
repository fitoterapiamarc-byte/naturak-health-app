import type { Condicion } from "./condiciones";

const noMostrado = {
  titulo: "No mostrado",
  marco: "Módulo no utilizado en la interfaz actual.",
  intervenciones: [],
  nivelEvidencia: "tradicional" as const,
};

export const condicionesAmpliacion2: Condicion[] = [
  {
    id: "sindrome-tunel-carpiano-compatible",
    nombre: "Síndrome del túnel carpiano compatible",
    descripcion:
      "Hormigueo, adormecimiento o dolor en la mano, con frecuencia peor por la noche, pueden ser compatibles con compresión del nervio mediano en la muñeca. La debilidad progresiva o la pérdida de masa muscular requieren valoración.",
    sintomas: [
      { nombre: "Hormigueo en la mano", peso: 4 },
      { nombre: "Adormecimiento de la mano", peso: 4 },
      { nombre: "Empeora por la noche", peso: 2 },
      { nombre: "Dolor en la mano", peso: 2 },
      { nombre: "Pérdida de fuerza", peso: 1 },
    ],
    sintomasAlarma: [
      { nombre: "Debilidad progresiva de la mano", gravedad: "alta" },
      { nombre: "Pérdida de masa muscular en la mano", gravedad: "alta" },
    ],
    sintomasQueContradicen: [
      { nombre: "Pérdida de fuerza súbita en un brazo", peso: 3 },
      { nombre: "Dificultad para hablar", peso: 3 },
    ],
    preguntas: [
      { texto: "¿El hormigueo o adormecimiento empeora por la noche?", importancia: 3 },
      { texto: "¿Notas pérdida progresiva de fuerza o se te caen objetos de la mano?", importancia: 3 },
      { texto: "¿Realizas trabajos o actividades con flexión repetida de muñeca, agarre fuerte o herramientas vibratorias?", importancia: 2 },
    ],
    posiblesCausas: [
      "Compresión del nervio mediano en el túnel carpiano",
      "Inflamación o reducción del espacio dentro del túnel carpiano",
      "Factores asociados como embarazo, diabetes, artritis o lesión previa de muñeca",
    ],
    factoresRiesgo: [
      "Embarazo",
      "Diabetes",
      "Artritis",
      "Sobrepeso",
      "Trabajo repetitivo de muñeca o uso de herramientas vibratorias",
      "Lesión previa de muñeca",
    ],
    nutricion: [
      "No existe una dieta específica que descomprima el nervio mediano",
      "Mantener un patrón alimentario saludable y controlar factores metabólicos cuando existan",
      "Corregir déficits nutricionales solo cuando estén demostrados",
    ],
    fitoterapia: [
      "No hay una planta que sustituya las medidas mecánicas, la infiltración o la cirugía cuando están indicadas",
      "Evitar dosis altas y prolongadas de vitamina B6 sin indicación profesional, ya que el exceso puede causar neuropatía",
    ],
    recomendaciones: [
      "Reducir temporalmente actividades que obliguen a flexionar repetidamente la muñeca o a realizar agarres fuertes si desencadenan síntomas",
      "Una férula nocturna de muñeca puede formar parte del manejo inicial",
      "Consultar si los síntomas empeoran, persisten o aparece debilidad",
    ],
    nivelEvidencia: "alta",
    contraindicaciones: [
      "No atribuir a túnel carpiano una pérdida súbita de fuerza, alteración del habla u otros signos neurológicos agudos",
    ],
    interacciones: [
      "Revisar medicación y suplementos antes de añadir productos para el dolor o la inflamación",
    ],
    pruebasMedicasHabituales: [
      "Historia clínica y exploración de mano y muñeca",
      "Estudio de conducción nerviosa cuando el diagnóstico no está claro o puede cambiar el manejo",
      "Ecografía u otras pruebas de imagen en situaciones seleccionadas",
    ],
    especialistaRecomendado: [
      "Atención Primaria",
      "Fisioterapia o unidad musculoesquelética según disponibilidad",
      "Traumatología, Neurofisiología o Cirugía de mano si es persistente o grave",
    ],
    cuandoAcudirMedico: [
      "Síntomas que empeoran o no desaparecen",
      "Pérdida progresiva de fuerza",
      "Pérdida de masa muscular en la mano",
      "Falta de respuesta a las medidas iniciales",
    ],
    bibliografia: [
      "NICE NG127 Suspected neurological conditions: recognition and referral",
      "NHS: Carpal tunnel syndrome",
    ],
    enfoques: {
      convencional: {
        titulo: "Medicina convencional",
        marco:
          "Valora la distribución de los síntomas, la fuerza y la función de la mano para confirmar una posible compresión del nervio mediano y decidir el tratamiento según gravedad y persistencia.",
        intervenciones: [
          "Férula nocturna de muñeca como medida inicial en muchos casos",
          "Infiltración con corticoide en casos seleccionados",
          "Cirugía de descompresión cuando el cuadro progresa o no responde a tratamiento conservador",
        ],
        nivelEvidencia: "alta",
      },
      nutricion: {
        titulo: "Nutrición",
        marco:
          "La alimentación no libera una compresión mecánica del nervio; su papel es apoyar la salud general y corregir problemas metabólicos o déficits demostrados.",
        intervenciones: [
          "Patrón alimentario equilibrado",
          "Control de peso si existe exceso de peso y es clínicamente relevante",
          "Corregir déficits únicamente cuando se hayan identificado",
        ],
        nivelEvidencia: "limitada",
      },
      natural: {
        titulo: "Fitoterapia y suplementación",
        marco:
          "Los productos naturales no sustituyen la descompresión del nervio ni las medidas mecánicas con mejor respaldo.",
        intervenciones: [
          "Evitar megadosis de vitamina B6",
          "Revisar interacciones antes de usar suplementos para dolor o inflamación",
        ],
        nivelEvidencia: "limitada",
      },
      medicinaChina: noMostrado,
      estiloVida: {
        titulo: "Estilo de vida y ergonomía",
        marco:
          "Reducir temporalmente las tareas que reproducen los síntomas y ajustar la posición de la muñeca puede disminuir irritación, aunque no siempre resuelve la causa.",
        intervenciones: [
          "Evitar flexión repetida mantenida de muñeca cuando desencadena síntomas",
          "Reducir agarres fuertes y vibración si empeoran el cuadro",
          "Adaptar temporalmente tareas laborales o domésticas",
        ],
        nivelEvidencia: "moderada",
      },
    },
  },
  {
    id: "sequedad-ocular-compatible",
    nombre: "Ojo seco compatible",
    descripcion:
      "Sensación de arenilla, sequedad, escozor, visión borrosa intermitente o incluso lagrimeo excesivo pueden aparecer cuando se producen pocas lágrimas o se evaporan demasiado rápido. El dolor ocular importante, la fotofobia intensa o una pérdida de visión no deben atribuirse sin más a ojo seco.",
    sintomas: [
      { nombre: "Sensación de arenilla en los ojos", peso: 4 },
      { nombre: "Sequedad ocular", peso: 4 },
      { nombre: "Escozor ocular", peso: 3 },
      { nombre: "Lagrimeo", peso: 1 },
      { nombre: "Visión borrosa intermitente", peso: 2 },
      { nombre: "Picor de ojos", peso: 1 },
    ],
    sintomasAlarma: [
      { nombre: "Dolor ocular", gravedad: "alta" },
      { nombre: "Pérdida brusca de visión", gravedad: "urgente" },
      { nombre: "Sensibilidad intensa a la luz", gravedad: "alta" },
      { nombre: "Ojo rojo doloroso con lentes de contacto", gravedad: "alta" },
    ],
    sintomasQueContradicen: [
      { nombre: "Secreción ocular purulenta", peso: 2 },
      { nombre: "Pérdida brusca de visión", peso: 3 },
    ],
    preguntas: [
      { texto: "¿Empeora tras muchas horas de pantalla, aire acondicionado, calefacción, viento o ambientes secos?", importancia: 2 },
      { texto: "¿Usas lentes de contacto?", importancia: 2 },
      { texto: "¿Existe dolor importante, fotofobia intensa o pérdida de visión?", importancia: 3 },
      { texto: "¿Tienes blefaritis, boca seca intensa o una enfermedad autoinmune conocida?", importancia: 2 },
    ],
    posiblesCausas: [
      "Producción insuficiente de lágrimas",
      "Evaporación excesiva de la película lagrimal",
      "Blefaritis o alteración de las glándulas de los párpados",
      "Uso prolongado de pantallas o ambientes secos",
      "Lentes de contacto",
      "Determinados medicamentos",
      "Enfermedades como síndrome de Sjögren u otros trastornos sistémicos",
    ],
    factoresRiesgo: [
      "Edad",
      "Lentes de contacto",
      "Pantallas durante periodos prolongados",
      "Ambientes secos, con calefacción o aire acondicionado",
      "Blefaritis",
      "Determinados medicamentos",
    ],
    nutricion: [
      "Mantener una alimentación equilibrada e hidratación general adecuada",
      "No presentar los suplementos de omega-3 como tratamiento garantizado del ojo seco; la utilidad depende del contexto y la evidencia no es uniforme",
    ],
    fitoterapia: [
      "No aplicar infusiones, aceites esenciales ni preparados caseros no estériles directamente en los ojos",
      "Los suplementos no sustituyen los lubricantes o tratamientos oftalmológicos cuando están indicados",
    ],
    recomendaciones: [
      "Realizar descansos visuales durante el uso prolongado de pantallas",
      "Evitar humo y reducir exposición prolongada a ambientes muy secos cuando sea posible",
      "La higiene palpebral puede ser útil si existe blefaritis",
      "Los lubricantes o lágrimas artificiales pueden aliviar síntomas; los preparados sin conservantes son preferibles en determinados usos frecuentes o con lentes de contacto",
    ],
    nivelEvidencia: "alta",
    contraindicaciones: [
      "No utilizar preparados caseros o no estériles dentro del ojo",
      "No atribuir a ojo seco una pérdida de visión, dolor ocular intenso o fotofobia marcada sin valoración",
    ],
    interacciones: [
      "Revisar otros colirios y tratamientos oculares si se utilizan simultáneamente",
      "No suspender medicación prescrita por sospechar que causa sequedad sin consultar con un profesional",
    ],
    pruebasMedicasHabituales: [
      "Historia clínica y exploración de párpados, conjuntiva y córnea",
      "Valoración de la superficie ocular y película lagrimal",
      "Pruebas específicas de producción o estabilidad lagrimal en casos seleccionados",
    ],
    especialistaRecomendado: [
      "Óptica-optometría o Atención Primaria para valoración inicial según el sistema sanitario",
      "Oftalmología si es persistente, grave, atípico o existen señales de alarma",
    ],
    cuandoAcudirMedico: [
      "Dolor y ojo rojo",
      "Ojo rojo doloroso si se usan lentes de contacto",
      "Pérdida o cambio importante de visión",
      "Fotofobia intensa",
      "Síntomas que no mejoran tras varias semanas de medidas básicas",
    ],
    bibliografia: [
      "NHS: Dry eyes",
      "Moorfields Eye Hospital: Dry eye diagnosis and treatment",
      "Guy's and St Thomas' NHS Foundation Trust: Dry eye syndrome treatment",
    ],
    enfoques: {
      convencional: {
        titulo: "Medicina convencional",
        marco:
          "Busca identificar si existe déficit de lágrima, evaporación excesiva, blefaritis u otra causa ocular o sistémica y escalar el tratamiento según gravedad.",
        intervenciones: [
          "Lágrimas artificiales o lubricantes como tratamiento habitual en cuadros leves o moderados",
          "Higiene palpebral cuando existe blefaritis o disfunción asociada",
          "Tratamientos especializados o tapones lagrimales en casos seleccionados más graves",
        ],
        nivelEvidencia: "alta",
      },
      nutricion: {
        titulo: "Nutrición",
        marco:
          "La alimentación tiene un papel de apoyo general. No existe una dieta que sustituya el tratamiento de la superficie ocular.",
        intervenciones: [
          "Patrón alimentario equilibrado",
          "Hidratación general adecuada",
          "Evitar prometer respuesta clínica a suplementos sin valorar el caso concreto",
        ],
        nivelEvidencia: "limitada",
      },
      natural: {
        titulo: "Fitoterapia y suplementación",
        marco:
          "La prioridad es evitar sustancias no estériles o irritantes en el ojo. Los suplementos deben plantearse con prudencia y sin sustituir el tratamiento ocular.",
        intervenciones: [
          "No aplicar infusiones ni aceites esenciales en el ojo",
          "Revisar evidencia y medicación antes de utilizar suplementos",
        ],
        nivelEvidencia: "limitada",
      },
      medicinaChina: noMostrado,
      estiloVida: {
        titulo: "Estilo de vida y cuidado ocular",
        marco:
          "El entorno y los hábitos visuales pueden aumentar la evaporación de la lágrima o reducir la frecuencia de parpadeo.",
        intervenciones: [
          "Descansos regulares de pantalla",
          "Situar la pantalla ligeramente por debajo del nivel de los ojos cuando sea posible",
          "Humidificar ambientes muy secos",
          "Evitar humo y descansar temporalmente de las lentes de contacto si irritan",
        ],
        nivelEvidencia: "moderada",
      },
    },
  },
];