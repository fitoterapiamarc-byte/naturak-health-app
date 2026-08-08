import type { Condicion } from "./condiciones";

const noMostrado = { titulo: "No mostrado", marco: "Módulo no utilizado en la interfaz actual.", intervenciones: [], nivelEvidencia: "tradicional" as const };

export const condicionesSangreDeficits: Condicion[] = [
  {
    id: "anemia-compatible",
    nombre: "Anemia compatible",
    descripcion: "Cansancio, palidez, mareo, falta de aire con esfuerzo y palpitaciones pueden aparecer en distintos tipos de anemia. La causa debe estudiarse antes de suplementar de forma prolongada.",
    sintomas: [{ nombre: "Palidez", peso: 3 },{ nombre: "Cansancio", peso: 2 },{ nombre: "Debilidad", peso: 2 },{ nombre: "Mareo", peso: 1 },{ nombre: "Falta de aire con esfuerzo", peso: 2 },{ nombre: "Palpitaciones", peso: 1 }],
    sintomasAlarma: [{ nombre: "Dolor de pecho", gravedad: "urgente" },{ nombre: "Desmayo", gravedad: "urgente" },{ nombre: "Heces negras", gravedad: "alta" },{ nombre: "Sangre roja en las heces", gravedad: "alta" }],
    sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Existe sangrado menstrual abundante, digestivo u otra pérdida de sangre conocida?", importancia: 3 },{ texto: "¿El cansancio se acompaña de palidez o falta de aire con esfuerzos habituales?", importancia: 2 }],
    posiblesCausas: ["Déficit de hierro", "Déficit de vitamina B12 o folato", "Pérdidas de sangre", "Enfermedad crónica", "Otras alteraciones hematológicas"],
    factoresRiesgo: ["Reglas abundantes", "Dietas restrictivas", "Enfermedad digestiva", "Sangrado crónico", "Edad avanzada"],
    nutricion: ["Asegurar hierro, B12, folato y proteína según necesidades", "No asumir que toda anemia es por falta de hierro"],
    fitoterapia: ["No utilizar preparados naturales para sustituir el estudio de la causa", "Revisar suplementos que puedan interferir con absorción de hierro"],
    recomendaciones: ["Solicitar hemograma y estudio dirigido si los síntomas persisten", "Investigar la causa de una anemia confirmada"],
    nivelEvidencia: "alta",
    contraindicaciones: ["No tomar hierro de forma prolongada sin confirmar necesidad"],
    interacciones: ["Hierro puede interferir con levotiroxina y algunos antibióticos; suele requerir separación horaria"],
    pruebasMedicasHabituales: ["Hemograma", "Ferritina", "Hierro/transferrina", "Vitamina B12 y folato según contexto", "Estudio de pérdidas si procede"],
    especialistaRecomendado: ["Atención Primaria", "Hematología según resultados", "Digestivo o Ginecología si se sospechan pérdidas"],
    cuandoAcudirMedico: ["Dolor de pecho", "Desmayo", "Sangrado visible", "Heces negras", "Falta de aire importante"],
    bibliografia: ["Guías clínicas de anemia"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Confirma la anemia, clasifica su tipo y busca la causa.", intervenciones: ["Hemograma y estudios específicos", "Tratamiento de la causa", "Suplementación o tratamiento hematológico cuando corresponde"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La alimentación es relevante cuando existe un déficit nutricional, pero no explica todas las anemias.", intervenciones: ["Hierro dietético", "Vitamina B12 y folato adecuados", "Combinar hierro vegetal con vitamina C cuando sea útil"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "Los suplementos solo son útiles cuando responden a una necesidad concreta y pueden tener interacciones.", intervenciones: ["Suplementar hierro, B12 o folato solo cuando esté indicado"], nivelEvidencia: "moderada" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Adaptar actividad mientras se corrige una anemia sintomática puede reducir mareos o fatiga.", intervenciones: ["Evitar sobreesfuerzo si hay mareo o falta de aire", "Mantener sueño y alimentación suficientes"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "deficit-hierro-compatible",
    nombre: "Déficit de hierro compatible",
    descripcion: "Cansancio, palidez, uñas frágiles y caída de cabello pueden aparecer cuando las reservas de hierro son bajas, incluso antes de una anemia marcada.",
    sintomas: [{ nombre: "Cansancio", peso: 2 },{ nombre: "Palidez", peso: 2 },{ nombre: "Uñas frágiles", peso: 2 },{ nombre: "Caída de cabello", peso: 1 },{ nombre: "Dolor de cabeza", peso: 1 },{ nombre: "Regla muy abundante", peso: 2 }],
    sintomasAlarma: [{ nombre: "Heces negras", gravedad: "alta" },{ nombre: "Sangre roja en las heces", gravedad: "alta" },{ nombre: "Desmayo", gravedad: "urgente" }],
    sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Hay menstruaciones abundantes, donaciones frecuentes o pérdidas de sangre?", importancia: 3 },{ texto: "¿Sigues una dieta muy baja en alimentos ricos en hierro?", importancia: 2 }],
    posiblesCausas: ["Pérdidas menstruales", "Sangrado digestivo", "Aporte insuficiente", "Malabsorción", "Aumento de necesidades"],
    factoresRiesgo: ["Reglas abundantes", "Embarazo", "Dietas restrictivas", "Enfermedad celíaca u otras causas de malabsorción"],
    nutricion: ["Carnes, mariscos, legumbres y otros alimentos ricos en hierro según preferencias", "Vitamina C puede mejorar absorción del hierro no hemo"],
    fitoterapia: ["Evitar asumir que la fatiga requiere hierro sin analítica"],
    recomendaciones: ["Confirmar con ferritina y hemograma", "Buscar la causa si el déficit es importante o recurrente"],
    nivelEvidencia: "alta",
    contraindicaciones: ["Evitar exceso de hierro si no existe déficit"],
    interacciones: ["Separar hierro de levotiroxina y determinados antibióticos según indicación profesional"],
    pruebasMedicasHabituales: ["Ferritina", "Hemograma", "Saturación de transferrina", "Estudio de pérdidas según contexto"],
    especialistaRecomendado: ["Atención Primaria", "Ginecología o Digestivo según causa"],
    cuandoAcudirMedico: ["Sangrado visible", "Heces negras", "Debilidad intensa", "Déficit recurrente sin causa clara"],
    bibliografia: ["Guías clínicas de ferropenia"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Confirma la ferropenia y determina por qué se han reducido las reservas.", intervenciones: ["Ferritina y hemograma", "Hierro oral o intravenoso cuando está indicado", "Tratar la causa de la pérdida"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Puede mejorar el aporte de hierro, especialmente en déficits leves y prevención.", intervenciones: ["Alimentos ricos en hierro", "Vitamina C junto a fuentes vegetales", "Evitar té/café inmediatamente con comidas ricas en hierro si la absorción es un problema"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "El hierro es un suplemento útil solo cuando existe indicación; más cantidad no implica mejor resultado.", intervenciones: ["Ajustar dosis y formulación a tolerancia y analítica"], nivelEvidencia: "alta" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "El objetivo es reducir el impacto de la fatiga mientras se corrige la causa.", intervenciones: ["Actividad adaptada", "Sueño suficiente"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "deficit-b12-folato-compatible",
    nombre: "Déficit de vitamina B12 o folato compatible",
    descripcion: "Cansancio, palidez, lengua dolorida, hormigueos, pérdida de sensibilidad o problemas cognitivos pueden justificar estudiar vitamina B12 y folato. Los síntomas neurológicos son especialmente relevantes en déficit de B12.",
    sintomas: [{ nombre: "Cansancio", peso: 2 },{ nombre: "Palidez", peso: 1 },{ nombre: "Lengua dolorida", peso: 2 },{ nombre: "Hormigueo", peso: 2 },{ nombre: "Pérdida de sensibilidad", peso: 3 },{ nombre: "Problemas de memoria", peso: 1 }],
    sintomasAlarma: [{ nombre: "Pérdida de fuerza", gravedad: "alta" },{ nombre: "Confusión", gravedad: "alta" }],
    sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Existe dieta vegana sin suplementación de B12 o problemas de absorción?", importancia: 2 },{ texto: "¿Hay hormigueos, pérdida de sensibilidad o problemas de equilibrio?", importancia: 3 }],
    posiblesCausas: ["Aporte insuficiente de B12", "Anemia perniciosa", "Malabsorción", "Medicamentos que afectan absorción", "Déficit de folato"],
    factoresRiesgo: ["Veganismo sin B12", "Cirugía digestiva", "Enfermedad intestinal", "Uso prolongado de ciertos medicamentos"],
    nutricion: ["Asegurar fuentes o suplementación fiable de B12 cuando la dieta no la aporta", "Folato en verduras de hoja, legumbres y alimentos fortificados"],
    fitoterapia: ["Las plantas no sustituyen vitamina B12 cuando existe déficit"],
    recomendaciones: ["Solicitar estudio analítico", "No retrasar valoración si hay síntomas neurológicos"],
    nivelEvidencia: "alta",
    contraindicaciones: ["Evitar tratar solo con folato una posible deficiencia de B12 sin haberla valorado, porque puede enmascarar la anemia mientras progresa el daño neurológico"],
    interacciones: ["Revisar medicación asociada a malabsorción de B12"],
    pruebasMedicasHabituales: ["Hemograma", "Vitamina B12", "Folato", "Ácido metilmalónico/homocisteína en casos seleccionados"],
    especialistaRecomendado: ["Atención Primaria", "Neurología o Hematología si hay afectación relevante"],
    cuandoAcudirMedico: ["Pérdida de sensibilidad progresiva", "Problemas de marcha", "Confusión", "Debilidad importante"],
    bibliografia: ["Guías clínicas de déficit de vitamina B12 y folato"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Confirma el déficit y busca su causa, especialmente si existe malabsorción o anemia perniciosa.", intervenciones: ["Analítica", "Reposición oral o inyectable de B12 según caso", "Tratamiento de la causa"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La prevención depende de asegurar una fuente adecuada de B12 y folato.", intervenciones: ["B12 fiable en dietas veganas", "Alimentos ricos en folato", "Revisar adecuación dietética"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "La B12 es un nutriente esencial; los productos vegetales no son una fuente fiable salvo que estén fortificados.", intervenciones: ["Utilizar B12 en dosis adecuadas cuando esté indicada"], nivelEvidencia: "alta" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "No corrige el déficit, pero puede acompañar la recuperación general.", intervenciones: ["Actividad adaptada", "Evitar riesgo de caídas si hay pérdida de sensibilidad o equilibrio"], nivelEvidencia: "moderada" }
    }
  }
];