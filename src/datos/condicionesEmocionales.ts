import type { Condicion } from "./condiciones";

const noMostrado = { titulo: "No mostrado", marco: "Módulo no utilizado en la interfaz actual.", intervenciones: [], nivelEvidencia: "tradicional" as const };

export const condicionesEmocionales: Condicion[] = [
  {
    id: "ansiedad-compatible",
    nombre: "Ansiedad persistente compatible",
    descripcion: "Preocupación difícil de controlar, tensión, inquietud, irritabilidad, problemas de concentración o sueño pueden ser compatibles con un cuadro de ansiedad cuando se mantienen y afectan al funcionamiento diario.",
    sintomas: [
      { nombre: "Ansiedad", peso: 3 },
      { nombre: "Preocupación excesiva", peso: 4 },
      { nombre: "Estrés", peso: 1 },
      { nombre: "Irritabilidad", peso: 1 },
      { nombre: "Falta de concentración", peso: 1 },
      { nombre: "Mal sueño", peso: 1 },
      { nombre: "Palpitaciones", peso: 1 }
    ],
    sintomasAlarma: [
      { nombre: "Pensamientos de hacerse daño", gravedad: "urgente" },
      { nombre: "Desmayo", gravedad: "alta" },
      { nombre: "Dolor de pecho", gravedad: "urgente" }
    ],
    sintomasQueContradicen: [],
    preguntas: [
      { texto: "¿La preocupación aparece la mayoría de los días y cuesta controlarla?", importancia: 3 },
      { texto: "¿Interfiere con el sueño, el trabajo o las actividades habituales?", importancia: 3 }
    ],
    posiblesCausas: ["Trastorno de ansiedad", "Estrés mantenido", "Problemas de sueño", "Cafeína u otros estimulantes", "Alteraciones médicas que pueden imitar ansiedad"],
    factoresRiesgo: ["Estrés crónico", "Antecedentes personales o familiares", "Insomnio", "Consumo elevado de estimulantes"],
    nutricion: ["Mantener comidas regulares y reducir exceso de cafeína si empeora los síntomas", "Evitar alcohol como estrategia para controlar ansiedad"],
    fitoterapia: ["Algunos preparados vegetales se han estudiado como apoyo, pero pueden producir sedación o interacciones", "No sustituir psicoterapia o tratamiento indicado por productos naturales"],
    recomendaciones: ["Registrar desencadenantes", "Priorizar ejercicio regular, sueño y técnicas psicológicas", "Consultar si persiste o limita la vida diaria"],
    nivelEvidencia: "alta",
    contraindicaciones: ["No atribuir automáticamente palpitaciones, dolor torácico o falta de aire a ansiedad sin valorar señales de alarma"],
    interacciones: ["Plantas sedantes pueden potenciar alcohol, antihistamínicos, hipnóticos y otros sedantes"],
    pruebasMedicasHabituales: ["Historia clínica", "Valoración psicológica", "Analítica o ECG si los síntomas sugieren causas médicas"],
    especialistaRecomendado: ["Atención Primaria", "Psicología", "Psiquiatría según gravedad"],
    cuandoAcudirMedico: ["Ansiedad persistente o incapacitante", "Crisis repetidas", "Pensamientos de hacerse daño", "Dolor de pecho o desmayo"],
    bibliografia: ["Guías clínicas de trastornos de ansiedad"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Valora la gravedad, descarta causas médicas y utiliza intervenciones psicológicas y farmacológicas cuando están indicadas.", intervenciones: ["Terapia cognitivo-conductual", "Tratamiento farmacológico en casos seleccionados", "Seguimiento de evolución"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La alimentación no sustituye el tratamiento, pero la cafeína, el alcohol y la regularidad de comidas pueden influir en síntomas.", intervenciones: ["Reducir exceso de cafeína", "Evitar alcohol como automedicación", "Mantener patrón alimentario equilibrado"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "Puede considerarse únicamente como apoyo en cuadros leves y con revisión de seguridad e interacciones.", intervenciones: ["Usar solo preparados conocidos y bien caracterizados", "Evitar mezclas sedantes", "Suspender si aparecen efectos adversos"], nivelEvidencia: "limitada" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Actividad física, sueño regular y técnicas psicológicas de manejo del estrés pueden reducir síntomas.", intervenciones: ["Ejercicio regular", "Rutina de sueño", "Respiración lenta y relajación", "Reducir estimulantes"], nivelEvidencia: "alta" }
    }
  },
  {
    id: "panico-compatible",
    nombre: "Crisis de pánico compatible",
    descripcion: "Episodios bruscos de miedo intenso con palpitaciones, temblor, sudor, sensación de ahogo, mareo o sensación de peligro pueden ser compatibles con una crisis de pánico, pero algunos problemas cardíacos o respiratorios pueden parecerse.",
    sintomas: [
      { nombre: "Sensación de peligro", peso: 3 },
      { nombre: "Palpitaciones", peso: 2 },
      { nombre: "Latidos rápidos", peso: 2 },
      { nombre: "Temblor", peso: 2 },
      { nombre: "Sudoración excesiva", peso: 1 },
      { nombre: "Respiración rápida", peso: 2 },
      { nombre: "Mareo", peso: 1 },
      { nombre: "Ansiedad", peso: 1 }
    ],
    sintomasAlarma: [
      { nombre: "Dolor de pecho", gravedad: "urgente" },
      { nombre: "Desmayo", gravedad: "urgente" },
      { nombre: "Falta de aire intensa", gravedad: "urgente" },
      { nombre: "Pensamientos de hacerse daño", gravedad: "urgente" }
    ],
    sintomasQueContradicen: [],
    preguntas: [
      { texto: "¿El episodio alcanza intensidad máxima en pocos minutos?", importancia: 3 },
      { texto: "¿Ha ocurrido varias veces sin un peligro externo claro?", importancia: 2 }
    ],
    posiblesCausas: ["Crisis de pánico", "Ansiedad intensa", "Estimulantes", "Arritmia u otras causas médicas que deben diferenciarse"],
    factoresRiesgo: ["Ansiedad previa", "Estrés intenso", "Privación de sueño", "Cafeína u otros estimulantes"],
    nutricion: ["Evitar exceso de cafeína y bebidas energéticas si desencadenan episodios", "Mantener hidratación y comidas regulares"],
    fitoterapia: ["No intentar frenar una crisis intensa con productos herbales de efecto incierto", "Las plantas sedantes no sustituyen la evaluación si hay síntomas nuevos o atípicos"],
    recomendaciones: ["Respirar de forma lenta y controlada si ya se ha descartado una urgencia", "Consultar si los episodios se repiten"],
    nivelEvidencia: "alta",
    contraindicaciones: ["No asumir que un primer episodio con dolor torácico, desmayo o falta de aire intensa es pánico"],
    interacciones: ["Evitar estimulantes y revisar fármacos o suplementos que aumenten frecuencia cardíaca"],
    pruebasMedicasHabituales: ["Historia clínica", "ECG o pruebas dirigidas si es primer episodio o hay dudas médicas"],
    especialistaRecomendado: ["Atención Primaria", "Psicología", "Psiquiatría", "Urgencias si hay señales de alarma"],
    cuandoAcudirMedico: ["Primer episodio intenso con síntomas físicos importantes", "Desmayo", "Dolor de pecho", "Falta de aire intensa", "Episodios recurrentes"],
    bibliografia: ["Guías clínicas de trastorno de pánico"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Diferencia crisis de pánico de causas cardíacas, respiratorias o metabólicas y trata la recurrencia cuando existe.", intervenciones: ["Evaluación médica si el patrón es nuevo o atípico", "Terapia cognitivo-conductual", "Tratamiento farmacológico cuando está indicado"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Los estimulantes pueden precipitar síntomas en personas sensibles.", intervenciones: ["Reducir cafeína y energéticas", "Evitar ayunos prolongados si actúan como desencadenante"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "No existe una planta de acción rápida que deba considerarse sustituto de la evaluación y el tratamiento del pánico.", intervenciones: ["No usar mezclas sedantes durante una crisis sin conocer su seguridad"], nivelEvidencia: "limitada" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Respiración lenta, ejercicio y reducción de estimulantes pueden ayudar como parte del manejo global.", intervenciones: ["Respiración controlada", "Ejercicio regular", "Rutina de sueño"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "animo-bajo-compatible",
    nombre: "Estado de ánimo bajo / depresión compatible",
    descripcion: "Tristeza persistente, pérdida de interés, cansancio, problemas de sueño, falta de concentración o motivación pueden ser compatibles con depresión cuando duran y afectan al funcionamiento habitual.",
    sintomas: [
      { nombre: "Estado de ánimo bajo", peso: 3 },
      { nombre: "Tristeza", peso: 3 },
      { nombre: "Pérdida de interés", peso: 4 },
      { nombre: "Falta de motivación", peso: 2 },
      { nombre: "Cansancio", peso: 1 },
      { nombre: "Mal sueño", peso: 1 },
      { nombre: "Falta de concentración", peso: 1 }
    ],
    sintomasAlarma: [
      { nombre: "Pensamientos de hacerse daño", gravedad: "urgente" },
      { nombre: "Confusión", gravedad: "alta" }
    ],
    sintomasQueContradicen: [],
    preguntas: [
      { texto: "¿El estado de ánimo bajo o la pérdida de interés persisten la mayor parte de los días?", importancia: 3 },
      { texto: "¿Está afectando al trabajo, relaciones o autocuidado?", importancia: 3 }
    ],
    posiblesCausas: ["Episodio depresivo", "Duelo o estrés mantenido", "Problemas de sueño", "Alteraciones médicas o medicamentos"],
    factoresRiesgo: ["Antecedentes personales o familiares", "Estrés mantenido", "Aislamiento", "Enfermedad crónica"],
    nutricion: ["Mantener un patrón mediterráneo, suficiente en energía y proteína", "Corregir déficits de hierro, B12, folato o vitamina D solo cuando estén demostrados"],
    fitoterapia: ["La hierba de San Juan puede interactuar con numerosos medicamentos y no debe usarse sin revisar tratamiento y gravedad", "No utilizar fitoterapia como sustituto de atención profesional en depresión moderada o grave"],
    recomendaciones: ["Mantener contacto social y actividad física adaptada", "Buscar valoración si los síntomas persisten", "Priorizar ayuda inmediata si aparecen pensamientos de hacerse daño"],
    nivelEvidencia: "alta",
    contraindicaciones: ["No usar hierba de San Juan junto a múltiples medicamentos sin supervisión; puede reducir su eficacia o aumentar efectos adversos"],
    interacciones: ["Hierba de San Juan interacciona con antidepresivos, anticonceptivos, anticoagulantes, inmunosupresores y muchos otros medicamentos"],
    pruebasMedicasHabituales: ["Entrevista clínica", "Cuestionarios validados", "Analítica si se sospechan causas médicas"],
    especialistaRecomendado: ["Atención Primaria", "Psicología", "Psiquiatría según gravedad"],
    cuandoAcudirMedico: ["Síntomas persistentes", "Deterioro del autocuidado", "Pensamientos de hacerse daño", "Empeoramiento rápido"],
    bibliografia: ["Guías clínicas de depresión en adultos"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Valora gravedad y riesgo, y utiliza psicoterapia y/o medicación según el caso.", intervenciones: ["Intervenciones psicológicas", "Antidepresivos cuando están indicados", "Seguimiento del riesgo y la respuesta"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Un patrón dietético saludable puede acompañar el tratamiento y ayuda a evitar déficits, pero no sustituye terapia o medicación indicada.", intervenciones: ["Patrón mediterráneo", "Aporte suficiente de proteína y micronutrientes", "Corregir déficits confirmados"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "Algunos preparados tienen evidencia en cuadros leves, pero las interacciones pueden ser importantes.", intervenciones: ["Revisar medicación antes de cualquier preparado", "No usar productos naturales como única intervención si el cuadro es moderado, grave o existe riesgo"], nivelEvidencia: "limitada" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Actividad física, sueño y conexión social pueden formar parte del tratamiento global.", intervenciones: ["Actividad física progresiva", "Rutina de sueño", "Reducir aislamiento", "Objetivos diarios pequeños y realistas"], nivelEvidencia: "alta" }
    }
  }
];