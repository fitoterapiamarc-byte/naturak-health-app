export interface PreguntaSeguimiento {
  id: string;
  activadores: string[];
  texto: string;
  opciones: string[];
  esAlarma?: boolean;
}

export const preguntasSeguimiento: PreguntaSeguimiento[] = [
  {
    id: "dolor-pecho-tipo",
    activadores: ["Dolor de pecho", "Presión en el pecho"],
    texto: "¿Cómo es el dolor o la molestia en el pecho?",
    opciones: [
      "Presión u opresión",
      "Dolor punzante",
      "Quemazón",
      "Dolor al respirar",
      "No sabría describirlo",
    ],
  },
  {
    id: "dolor-pecho-alarma",
    activadores: ["Dolor de pecho", "Presión en el pecho"],
    texto: "¿Tienes alguno de estos síntomas?",
    opciones: [
      "Falta de aire",
      "Sudor frío",
      "Mareo intenso",
      "Náuseas",
      "Dolor hacia brazo, espalda o mandíbula",
      "Ninguno",
    ],
    esAlarma: true,
  },
  {
    id: "dolor-abdominal-zona",
    activadores: ["Dolor abdominal"],
    texto: "¿En qué zona notas el dolor abdominal?",
    opciones: [
      "Parte superior derecha",
      "Parte superior izquierda",
      "Centro",
      "Parte inferior derecha",
      "Parte inferior izquierda",
      "Todo el abdomen",
    ],
  },
  {
    id: "dolor-abdominal-intensidad",
    activadores: ["Dolor abdominal"],
    texto: "¿Qué intensidad tiene el dolor?",
    opciones: ["Leve", "Moderado", "Intenso", "Muy intenso"],
  },
  {
    id: "estrenimiento-duracion",
    activadores: [
      "Heces duras",
      "Esfuerzo al defecar",
      "Menos de tres deposiciones por semana",
      "Estreñimiento",
    ],
    texto: "¿Cuánto tiempo llevas con estreñimiento?",
    opciones: [
      "Uno o dos días",
      "Entre tres días y una semana",
      "Varias semanas",
      "Más de un mes",
    ],
  },
  {
    id: "estrenimiento-alarmas",
    activadores: ["Heces duras", "Esfuerzo al defecar", "Estreñimiento"],
    texto: "¿Aparece alguno de estos signos?",
    opciones: [
      "Sangre en las heces",
      "Vómitos",
      "Fiebre",
      "Dolor abdominal intenso",
      "No puedo expulsar gases",
      "Ninguno",
    ],
    esAlarma: true,
  },
  {
    id: "diarrea-duracion",
    activadores: [
      "Diarrea continua",
      "Heces líquidas",
      "Deposiciones muy frecuentes",
    ],
    texto: "¿Cuánto tiempo llevas con diarrea?",
    opciones: [
      "Menos de 24 horas",
      "Entre uno y tres días",
      "Más de tres días",
      "Varias semanas o episodios repetidos",
    ],
  },
  {
    id: "diarrea-alarmas",
    activadores: [
      "Diarrea continua",
      "Heces líquidas",
      "Deposiciones muy frecuentes",
    ],
    texto: "¿Aparece alguno de estos signos con la diarrea?",
    opciones: [
      "Sangre roja en las heces",
      "Heces negras",
      "Fiebre",
      "Vómitos repetidos",
      "No puedo retener líquidos",
      "Orinar muy poca cantidad",
      "Ninguno",
    ],
    esAlarma: true,
  },
  {
    id: "diarrea-contexto",
    activadores: ["Diarrea continua", "Heces líquidas"],
    texto: "¿Ha ocurrido algo de esto recientemente?",
    opciones: [
      "Viaje reciente",
      "Antibióticos recientes",
      "Cambio importante de alimentación",
      "Otras personas cercanas tienen síntomas similares",
      "Ninguno",
    ],
  },
  {
    id: "orina-oscura",
    activadores: ["Orina oscura"],
    texto: "¿Qué otros cambios has notado?",
    opciones: [
      "Bebo poca agua",
      "Piel u ojos amarillos",
      "Dolor en la parte derecha del abdomen",
      "Fiebre",
      "Orina con olor fuerte",
      "Ninguno",
    ],
  },
  {
    id: "dolor-orinar",
    activadores: ["Dolor al orinar"],
    texto: "¿Tienes alguno de estos síntomas urinarios?",
    opciones: [
      "Necesidad urgente de orinar",
      "Orino muchas veces",
      "Fiebre",
      "Dolor lumbar",
      "Sangre en la orina",
      "Ninguno",
    ],
  },
  {
    id: "mareo",
    activadores: ["Mareo", "Vértigo"],
    texto: "¿Cómo describirías el mareo?",
    opciones: [
      "Todo gira",
      "Sensación de desmayo",
      "Inestabilidad al caminar",
      "Aparece al levantarme",
      "No sabría describirlo",
    ],
  },
];