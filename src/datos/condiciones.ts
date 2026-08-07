export type NivelEvidencia =
  | "alta"
  | "moderada"
  | "limitada"
  | "tradicional";

export interface EnfoqueComparado {
  titulo: string;
  marco: string;
  intervenciones: string[];
  nivelEvidencia: NivelEvidencia;
  nota?: string;
}

export interface Condicion {
  id: string;
  nombre: string;
  descripcion: string;

  sintomas: {
    nombre: string;
    peso: number;
  }[];

  sintomasAlarma: {
    nombre: string;
    gravedad: "moderada" | "alta" | "urgente";
  }[];

  sintomasQueContradicen: {
    nombre: string;
    peso: number;
  }[];

  preguntas: {
    texto: string;
    importancia: number;
  }[];

  posiblesCausas: string[];
  factoresRiesgo: string[];

  nutricion: string[];
  fitoterapia: string[];
  recomendaciones: string[];

  nivelEvidencia: NivelEvidencia;

  contraindicaciones: string[];
  interacciones: string[];

  pruebasMedicasHabituales: string[];
  especialistaRecomendado: string[];

  cuandoAcudirMedico: string[];
  bibliografia: string[];

  enfoques: {
    convencional: EnfoqueComparado;
    nutricion: EnfoqueComparado;
    natural: EnfoqueComparado;
    medicinaChina: EnfoqueComparado;
    estiloVida: EnfoqueComparado;
  };
}

export const condiciones: Condicion[] = [
  {
    id: "estrenimiento",
    nombre: "Estreñimiento funcional",
    descripcion:
      "Disminución de la frecuencia de las deposiciones o dificultad para evacuar sin signos iniciales de alarma.",

    sintomas: [
      { nombre: "Heces duras", peso: 3 },
      { nombre: "Esfuerzo al defecar", peso: 3 },
      { nombre: "Menos de tres deposiciones por semana", peso: 3 },
      { nombre: "Sensación de evacuación incompleta", peso: 2 },
      { nombre: "Hinchazón abdominal", peso: 1 },
    ],

    sintomasAlarma: [
      { nombre: "Sangre en las heces", gravedad: "alta" },
      { nombre: "Fiebre", gravedad: "alta" },
      { nombre: "Dolor abdominal intenso", gravedad: "urgente" },
      { nombre: "Vómitos", gravedad: "alta" },
      { nombre: "Pérdida importante de peso", gravedad: "alta" },
    ],

    sintomasQueContradicen: [
      { nombre: "Diarrea continua", peso: 2 },
      { nombre: "Deposiciones muy frecuentes", peso: 2 },
    ],

    preguntas: [
      {
        texto: "¿Cuántos días llevas estreñido?",
        importancia: 3,
      },
      {
        texto: "¿Bebes suficiente agua?",
        importancia: 2,
      },
      {
        texto: "¿Comes fruta y verdura diariamente?",
        importancia: 2,
      },
      {
        texto: "¿Realizas actividad física?",
        importancia: 1,
      },
      {
        texto: "¿Tomas algún medicamento?",
        importancia: 3,
      },
    ],

    posiblesCausas: [
      "Poca fibra",
      "Deshidratación",
      "Sedentarismo",
      "Efecto secundario de medicamentos",
    ],

    factoresRiesgo: [
      "Edad avanzada",
      "Poca actividad física",
      "Dieta pobre en fibra",
    ],

    nutricion: [
      "Aumentar frutas y verduras",
      "Consumir avena",
      "Consumir legumbres",
      "Beber suficiente agua",
    ],

    fitoterapia: ["Psyllium", "Semillas de lino", "Ciruelas pasas"],

    recomendaciones: [
      "Aumentar progresivamente la fibra",
      "Mantener una buena hidratación",
      "Caminar diariamente",
    ],

    nivelEvidencia: "moderada",

    contraindicaciones: [
      "No utilizar psyllium si existe obstrucción intestinal",
    ],

    interacciones: [
      "Separar el psyllium de otros medicamentos al menos dos horas",
    ],

    pruebasMedicasHabituales: [
      "Historia clínica y exploración física",
      "Revisión de medicación y hábitos",
      "Analítica o pruebas adicionales si existen signos de alarma o estreñimiento persistente",
    ],

    especialistaRecomendado: [
      "Médico de Atención Primaria",
      "Digestólogo",
    ],

    cuandoAcudirMedico: [
      "Dolor intenso",
      "Sangre en las heces",
      "Fiebre",
      "Pérdida de peso",
      "Cambio reciente y persistente del ritmo intestinal sin causa clara",
    ],

    bibliografia: [
      "Guías clínicas de estreñimiento",
      "Revisiones científicas sobre fibra y psyllium",
    ],

    enfoques: {
      convencional: {
        titulo: "Medicina convencional",
        marco:
          "Valora la duración del problema, frecuencia y consistencia de las heces, síntomas de alarma, enfermedades asociadas y medicamentos que puedan favorecer el estreñimiento.",
        intervenciones: [
          "Medidas dietéticas y de estilo de vida como primera línea cuando son apropiadas",
          "Uso de fibra soluble o laxantes según el tipo de estreñimiento y la respuesta clínica",
          "Evaluación médica si el cuadro es persistente, de nueva aparición o presenta señales de alarma",
        ],
        nivelEvidencia: "alta",
      },

      nutricion: {
        titulo: "Nutrición",
        marco:
          "Busca mejorar el volumen y la consistencia de las heces y favorecer un patrón intestinal regular mediante alimentación e hidratación.",
        intervenciones: [
          "Aumentar la fibra de forma progresiva según tolerancia",
          "Priorizar fruta, verdura, legumbres, cereales integrales y otras fuentes de fibra",
          "Mantener una hidratación adecuada, especialmente al aumentar la fibra",
        ],
        nivelEvidencia: "moderada",
      },

      natural: {
        titulo: "Fitoterapia y medicina natural",
        marco:
          "Puede utilizar recursos como fibras formadoras de masa y alimentos o preparados vegetales, siempre revisando contraindicaciones e interacciones.",
        intervenciones: [
          "Psyllium como fibra soluble formadora de masa",
          "Semillas de lino como apoyo dietético si existe buena tolerancia",
          "Ciruelas pasas como recurso alimentario para favorecer el tránsito",
        ],
        nivelEvidencia: "moderada",
        nota:
          "La evidencia depende del recurso concreto. No debe emplearse fitoterapia si existen signos de obstrucción o síntomas de alarma sin valoración médica.",
      },

      medicinaChina: {
        titulo: "Medicina tradicional china",
        marco:
          "Interpreta el estreñimiento mediante patrones propios de la medicina tradicional china, que pueden incluir calor, sequedad, estancamiento o deficiencia según el conjunto de signos.",
        intervenciones: [
          "La elección de puntos de acupuntura depende del patrón identificado por un profesional formado",
          "Las recomendaciones dietéticas tradicionales se individualizan según el patrón",
          "La fitoterapia china requiere valoración profesional por sus posibles interacciones y contraindicaciones",
        ],
        nivelEvidencia: "tradicional",
        nota:
          "Este marco no equivale a un diagnóstico biomédico. La evidencia clínica es variable y debe mostrarse separada de la medicina convencional.",
      },

      estiloVida: {
        titulo: "Estilo de vida",
        marco:
          "Valora hábitos que pueden influir sobre el tránsito intestinal y la regularidad de las deposiciones.",
        intervenciones: [
          "Mantener actividad física regular",
          "Intentar un horario intestinal estable y evitar posponer repetidamente la defecación",
          "Revisar cambios recientes de rutina, estrés, viajes y hábitos sedentarios",
        ],
        nivelEvidencia: "moderada",
      },
    },
  },
];