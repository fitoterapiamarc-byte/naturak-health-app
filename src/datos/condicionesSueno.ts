import type { Condicion } from "./condiciones";

const noMostrado = { titulo: "No mostrado", marco: "Módulo no utilizado en la interfaz actual.", intervenciones: [], nivelEvidencia: "tradicional" as const };

export const condicionesSueno: Condicion[] = [
  {
    id: "insomnio-compatible", nombre: "Insomnio compatible",
    descripcion: "Dificultad para conciliar o mantener el sueño, despertar demasiado pronto o sueño no reparador pueden ser compatibles con insomnio cuando afectan al funcionamiento durante el día.",
    sintomas: [{ nombre: "Insomnio", peso: 4 },{ nombre: "Mal sueño", peso: 3 },{ nombre: "Cansancio", peso: 1 },{ nombre: "Falta de concentración", peso: 1 },{ nombre: "Irritabilidad", peso: 1 }],
    sintomasAlarma: [{ nombre: "Confusión", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Cuántas noches por semana ocurre y desde cuándo?", importancia: 3 },{ texto: "¿Hay cafeína tardía, alcohol, estrés, dolor o medicamentos que interfieran con el sueño?", importancia: 2 }],
    posiblesCausas: ["Insomnio primario", "Estrés o ansiedad", "Hábitos de sueño", "Dolor", "Medicamentos o estimulantes", "Otros trastornos del sueño"], factoresRiesgo: ["Estrés", "Horarios irregulares", "Cafeína tardía", "Pantallas y activación nocturna", "Dolor crónico"],
    nutricion: ["Evitar cafeína cerca de la noche si afecta al sueño", "Evitar comidas muy copiosas justo antes de acostarse si empeoran el descanso"], fitoterapia: ["Algunos productos pueden producir sedación e interaccionar con medicamentos; individualizar y evitar mezclas innecesarias"], recomendaciones: ["Mantener horario regular", "Priorizar terapia cognitivo-conductual para insomnio cuando es persistente"], nivelEvidencia: "alta",
    contraindicaciones: ["Evitar combinar múltiples productos sedantes sin supervisión"], interacciones: ["Alcohol, hipnóticos, antihistamínicos sedantes y algunas plantas pueden sumar sedación"], pruebasMedicasHabituales: ["Historia del sueño", "Diario de sueño", "Estudio adicional si se sospecha apnea u otro trastorno"], especialistaRecomendado: ["Atención Primaria", "Unidad de sueño según caso"], cuandoAcudirMedico: ["Insomnio persistente con deterioro diurno importante", "Somnolencia peligrosa al conducir", "Sospecha de apnea"], bibliografia: ["Guías clínicas de insomnio"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "La terapia cognitivo-conductual para insomnio es una intervención de primera línea en insomnio crónico.", intervenciones: ["Terapia cognitivo-conductual para insomnio", "Revisar causas y medicación", "Fármacos solo cuando estén indicados"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Cafeína, alcohol y horarios de comidas pueden influir en el sueño.", intervenciones: ["Limitar cafeína tardía", "Evitar alcohol como estrategia para dormir"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "La utilidad depende del producto y del caso; natural no significa libre de interacciones.", intervenciones: ["Revisar evidencia e interacciones antes de usar melatonina, plantas u otros suplementos"], nivelEvidencia: "moderada" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "La regularidad y el control de estímulos son pilares del manejo del insomnio.", intervenciones: ["Horario regular", "Luz natural por la mañana", "Reducir activación y pantallas antes de dormir", "Reservar la cama principalmente para dormir"], nivelEvidencia: "alta" }
    }
  },
  {
    id: "apnea-sueno-compatible", nombre: "Apnea obstructiva del sueño compatible",
    descripcion: "Ronquidos fuertes, pausas respiratorias observadas, despertares con ahogo y somnolencia diurna pueden ser compatibles con apnea obstructiva del sueño y requieren valoración.",
    sintomas: [{ nombre: "Ronquidos fuertes", peso: 3 },{ nombre: "Pausas respiratorias al dormir", peso: 4 },{ nombre: "Despertar con sensación de ahogo", peso: 4 },{ nombre: "Somnolencia diurna", peso: 3 },{ nombre: "Dolor de cabeza al despertar", peso: 1 },{ nombre: "Sueño no reparador", peso: 2 }],
    sintomasAlarma: [{ nombre: "Somnolencia al conducir", gravedad: "urgente" },{ nombre: "Despertar con sensación de ahogo", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Alguien ha observado pausas respiratorias mientras duermes?", importancia: 3 },{ texto: "¿Te quedas dormido involuntariamente durante el día o conduciendo?", importancia: 3 }],
    posiblesCausas: ["Apnea obstructiva del sueño", "Obstrucción de vía aérea superior", "Otros trastornos respiratorios del sueño"], factoresRiesgo: ["Sobrepeso u obesidad", "Alcohol nocturno", "Anatomía de vía aérea", "Edad", "Hipertensión"],
    nutricion: ["Si existe exceso de peso, una reducción sostenible puede mejorar la apnea en muchas personas"], fitoterapia: ["Los sedantes y el alcohol pueden empeorar la obstrucción respiratoria nocturna; no tratar una sospecha de apnea solo con productos para dormir"], recomendaciones: ["Solicitar valoración y estudio del sueño", "No conducir si existe somnolencia peligrosa"], nivelEvidencia: "alta",
    contraindicaciones: ["Evitar usar sedantes para ocultar despertares por posible apnea sin valoración"], interacciones: ["Alcohol, benzodiacepinas y otros sedantes pueden agravar la respiración durante el sueño en algunos pacientes"], pruebasMedicasHabituales: ["Cuestionarios de riesgo", "Poligrafía respiratoria", "Polisomnografía según caso"], especialistaRecomendado: ["Atención Primaria", "Neumología o Unidad de sueño"], cuandoAcudirMedico: ["Pausas respiratorias observadas", "Ahogos nocturnos", "Somnolencia diurna marcada", "Somnolencia al conducir"], bibliografia: ["Guías clínicas de apnea obstructiva del sueño"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Confirma el diagnóstico con estudio del sueño y trata según gravedad y características individuales.", intervenciones: ["CPAP cuando está indicada", "Dispositivos de avance mandibular en casos seleccionados", "Tratamiento de factores anatómicos y de riesgo"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La pérdida de peso puede ser terapéutica cuando existe exceso de peso, pero no sustituye otras medidas necesarias.", intervenciones: ["Plan de pérdida de peso sostenible cuando proceda"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "No existe un suplemento que sustituya el diagnóstico y tratamiento de una apnea significativa.", intervenciones: ["Evitar sedantes no necesarios"], nivelEvidencia: "alta" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Reducir alcohol, controlar peso y algunas medidas posicionales pueden ayudar según el caso.", intervenciones: ["Evitar alcohol nocturno", "No fumar", "Dormir de lado en apnea posicional cuando esté indicado"], nivelEvidencia: "alta" }
    }
  }
];