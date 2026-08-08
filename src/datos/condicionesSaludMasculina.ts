import type { Condicion } from "./condiciones";

const noMostrado = { titulo: "No mostrado", marco: "Módulo no utilizado en la interfaz actual.", intervenciones: [], nivelEvidencia: "tradicional" as const };

export const condicionesSaludMasculina: Condicion[] = [
  {
    id: "hiperplasia-benigna-prostata-compatible",
    nombre: "Síntomas urinarios compatibles con hiperplasia benigna de próstata",
    descripcion: "Chorro débil, dificultad para iniciar la micción, sensación de vaciado incompleto y levantarse varias veces por la noche pueden ser compatibles con crecimiento benigno de la próstata, aunque existen otras causas posibles.",
    sintomas: [
      { nombre: "Chorro urinario débil", peso: 3 },
      { nombre: "Dificultad para empezar a orinar", peso: 3 },
      { nombre: "Sensación de vaciado incompleto", peso: 2 },
      { nombre: "Levantarse por la noche a orinar", peso: 2 },
      { nombre: "Urgencia para orinar", peso: 1 }
    ],
    sintomasAlarma: [
      { nombre: "No puedo orinar", gravedad: "urgente" },
      { nombre: "Sangre en la orina", gravedad: "alta" }
    ],
    sintomasQueContradicen: [{ nombre: "Dolor al orinar", peso: 1 }],
    preguntas: [
      { texto: "¿Los síntomas han progresado durante meses?", importancia: 2 },
      { texto: "¿Puedes orinar o existe retención completa?", importancia: 3 }
    ],
    posiblesCausas: ["Hiperplasia benigna de próstata", "Infección urinaria", "Prostatitis", "Problemas neurológicos o farmacológicos"],
    factoresRiesgo: ["Edad", "Antecedentes de síntomas prostáticos", "Algunos medicamentos"],
    nutricion: ["Mantener hidratación adecuada sin excesos nocturnos si aumentan la nicturia"],
    fitoterapia: ["La evidencia de algunos extractos vegetales es variable y no deben retrasar el estudio de síntomas persistentes"],
    recomendaciones: ["Consultar si los síntomas afectan al sueño o calidad de vida", "Evitar retener la orina durante periodos prolongados"],
    nivelEvidencia: "alta",
    contraindicaciones: ["No intentar tratar una retención urinaria aguda con suplementos"],
    interacciones: ["Revisar descongestionantes y otros medicamentos que puedan empeorar la retención urinaria"],
    pruebasMedicasHabituales: ["Historia clínica", "Exploración", "Análisis de orina", "PSA y otras pruebas según edad y contexto"],
    especialistaRecomendado: ["Atención Primaria", "Urología"],
    cuandoAcudirMedico: ["No poder orinar", "Sangre en la orina", "Empeoramiento progresivo"],
    bibliografia: ["Guías clínicas de síntomas urinarios masculinos e hiperplasia benigna de próstata"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Valora la gravedad de los síntomas y descarta infección, retención u otras causas.", intervenciones: ["Cuestionarios de síntomas", "Tratamiento farmacológico cuando procede", "Derivación urológica según hallazgos"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Los hábitos de líquidos pueden modular algunos síntomas, pero no reducen por sí solos una próstata aumentada.", intervenciones: ["Distribuir líquidos durante el día", "Reducir bebidas irritantes si empeoran síntomas"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "La eficacia de los productos para próstata es desigual y no sustituye la evaluación médica.", intervenciones: ["Revisar evidencia e interacciones antes de utilizar extractos"], nivelEvidencia: "limitada" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Algunos ajustes pueden disminuir síntomas nocturnos o urgencia.", intervenciones: ["Evitar grandes volúmenes de líquido antes de dormir", "Reducir alcohol o cafeína si agravan síntomas"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "prostatitis-compatible",
    nombre: "Prostatitis / síndrome prostático inflamatorio compatible",
    descripcion: "Dolor pélvico o perineal, molestias al orinar y síntomas urinarios pueden aparecer en prostatitis o síndromes de dolor pélvico crónico.",
    sintomas: [
      { nombre: "Dolor perineal", peso: 4 },
      { nombre: "Dolor pélvico", peso: 2 },
      { nombre: "Dolor al orinar", peso: 2 },
      { nombre: "Urgencia para orinar", peso: 1 },
      { nombre: "Dificultad para empezar a orinar", peso: 1 }
    ],
    sintomasAlarma: [
      { nombre: "Fiebre", gravedad: "alta" },
      { nombre: "No puedo orinar", gravedad: "urgente" }
    ],
    sintomasQueContradicen: [],
    preguntas: [
      { texto: "¿Existe fiebre o mal estado general junto con dolor pélvico/perineal?", importancia: 3 },
      { texto: "¿Los síntomas son agudos o llevan semanas/meses?", importancia: 2 }
    ],
    posiblesCausas: ["Prostatitis bacteriana", "Síndrome de dolor pélvico crónico", "Infección urinaria", "Otras causas urológicas"],
    factoresRiesgo: ["Infecciones urinarias", "Instrumentación urinaria", "Antecedentes urológicos"],
    nutricion: ["Mantener hidratación razonable"],
    fitoterapia: ["No retrasar antibióticos cuando exista sospecha de infección bacteriana aguda"],
    recomendaciones: ["Solicitar valoración si hay dolor persistente, fiebre o síntomas urinarios importantes"],
    nivelEvidencia: "alta",
    contraindicaciones: ["No automedicarse con antibióticos ni suplementos como sustituto del diagnóstico"],
    interacciones: ["Revisar medicación urinaria y suplementos con el profesional"],
    pruebasMedicasHabituales: ["Análisis de orina", "Cultivo", "Exploración clínica", "Pruebas adicionales según evolución"],
    especialistaRecomendado: ["Atención Primaria", "Urología"],
    cuandoAcudirMedico: ["Fiebre", "Retención urinaria", "Dolor intenso o deterioro"],
    bibliografia: ["Guías clínicas de prostatitis"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Diferencia infección bacteriana aguda de síndromes de dolor pélvico crónico.", intervenciones: ["Cultivo y antibióticos cuando están indicados", "Tratamiento del dolor", "Estudio urológico si persiste"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Tiene un papel de apoyo general.", intervenciones: ["Hidratación adecuada", "Evitar irritantes si empeoran síntomas"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "Puede considerarse solo como complemento en algunos cuadros crónicos.", intervenciones: ["No sustituir antibióticos cuando exista infección bacteriana"], nivelEvidencia: "limitada" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Algunos pacientes mejoran evitando actividades que agravan el dolor.", intervenciones: ["Evitar presión prolongada sobre el periné si empeora síntomas", "Actividad física adaptada"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "torsion-testicular-alerta",
    nombre: "Alerta de torsión testicular compatible",
    descripcion: "Dolor testicular súbito e intenso, especialmente con hinchazón o náuseas, requiere valoración urgente para descartar torsión testicular.",
    sintomas: [
      { nombre: "Dolor testicular súbito e intenso", peso: 5 },
      { nombre: "Hinchazón testicular", peso: 3 },
      { nombre: "Náuseas", peso: 1 }
    ],
    sintomasAlarma: [
      { nombre: "Dolor testicular súbito e intenso", gravedad: "urgente" },
      { nombre: "Hinchazón testicular", gravedad: "alta" }
    ],
    sintomasQueContradicen: [],
    preguntas: [
      { texto: "¿El dolor apareció de forma brusca?", importancia: 3 },
      { texto: "¿Hay hinchazón o el testículo parece en una posición diferente?", importancia: 3 }
    ],
    posiblesCausas: ["Torsión testicular", "Epididimitis", "Traumatismo", "Hernia u otras causas escrotales"],
    factoresRiesgo: ["Edad joven", "Episodios previos de dolor testicular brusco"],
    nutricion: ["No tiene un papel terapéutico en la situación aguda"],
    fitoterapia: ["No utilizar fitoterapia para retrasar atención"],
    recomendaciones: ["Buscar atención urgente"],
    nivelEvidencia: "alta",
    contraindicaciones: ["No esperar a ver si el dolor desaparece"],
    interacciones: [],
    pruebasMedicasHabituales: ["Exploración urgente", "Ecografía Doppler cuando no retrasa el tratamiento"],
    especialistaRecomendado: ["Urgencias", "Urología"],
    cuandoAcudirMedico: ["De inmediato ante dolor testicular súbito e intenso"],
    bibliografia: ["Guías de dolor escrotal agudo y torsión testicular"],
    enfoques: {
      convencional: { titulo: "Atención médica urgente", marco: "La torsión testicular es una urgencia tiempo-dependiente.", intervenciones: ["Valoración inmediata", "Tratamiento quirúrgico si se confirma"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "No tiene papel en la urgencia.", intervenciones: [], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "No está indicada en esta situación.", intervenciones: [], nivelEvidencia: "alta" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Actuación", marco: "La prioridad es acudir a urgencias.", intervenciones: ["No demorar la valoración"], nivelEvidencia: "alta" }
    }
  },
  {
    id: "disfuncion-erectil-compatible",
    nombre: "Disfunción eréctil compatible",
    descripcion: "La dificultad persistente para conseguir o mantener una erección puede relacionarse con factores vasculares, metabólicos, hormonales, psicológicos o medicamentosos.",
    sintomas: [
      { nombre: "Disfunción eréctil", peso: 4 },
      { nombre: "Disminución del deseo sexual", peso: 2 },
      { nombre: "Cansancio", peso: 1 }
    ],
    sintomasAlarma: [{ nombre: "Dolor de pecho", gravedad: "alta" }],
    sintomasQueContradicen: [],
    preguntas: [
      { texto: "¿La dificultad es persistente y ocurre en la mayoría de relaciones?", importancia: 2 },
      { texto: "¿Existen diabetes, hipertensión, tabaquismo o medicación que pueda influir?", importancia: 2 }
    ],
    posiblesCausas: ["Enfermedad vascular", "Diabetes", "Efectos de medicamentos", "Hipogonadismo", "Ansiedad o factores psicológicos"],
    factoresRiesgo: ["Diabetes", "Hipertensión", "Tabaquismo", "Dislipemia", "Enfermedad cardiovascular"],
    nutricion: ["Patrón alimentario cardioprotector y control metabólico"],
    fitoterapia: ["Evitar productos sexuales no regulados o de composición desconocida", "Revisar interacciones especialmente con nitratos y antihipertensivos"],
    recomendaciones: ["Valorar factores cardiovasculares y metabólicos", "Consultar si el problema es persistente"],
    nivelEvidencia: "alta",
    contraindicaciones: ["No combinar fármacos para erección con nitratos"],
    interacciones: ["Algunos suplementos pueden interactuar con antihipertensivos, anticoagulantes o fármacos para la erección"],
    pruebasMedicasHabituales: ["Historia clínica", "Presión arterial", "Glucosa/HbA1c", "Perfil lipídico", "Hormonas cuando esté indicado"],
    especialistaRecomendado: ["Atención Primaria", "Urología", "Endocrinología según causa"],
    cuandoAcudirMedico: ["Persistencia del problema", "Síntomas cardiovasculares", "Pérdida marcada de libido u otros signos hormonales"],
    bibliografia: ["Guías clínicas de disfunción eréctil"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Busca la causa y valora el riesgo cardiovascular asociado.", intervenciones: ["Tratamiento de factores de riesgo", "Fármacos específicos cuando son seguros", "Estudio hormonal o psicológico si procede"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La salud vascular y metabólica influye en la función eréctil.", intervenciones: ["Patrón mediterráneo", "Control de peso y glucosa cuando corresponda"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "La evidencia es limitada para muchos suplementos y existen riesgos de adulteración en productos sexuales.", intervenciones: ["Evitar productos de origen dudoso", "Revisar interacciones antes de utilizarlos"], nivelEvidencia: "limitada" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Ejercicio, dejar tabaco y mejorar el sueño favorecen la salud vascular.", intervenciones: ["Actividad física regular", "No fumar", "Dormir suficiente"], nivelEvidencia: "alta" }
    }
  }
];