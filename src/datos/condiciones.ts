export type NivelEvidencia =
  | "alta"
  | "moderada"
  | "limitada"
  | "tradicional"
  | "no-establecida";

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
  sintomas: { nombre: string; peso: number }[];
  sintomasAlarma: {
    nombre: string;
    gravedad: "moderada" | "alta" | "urgente";
  }[];
  sintomasQueContradicen: { nombre: string; peso: number }[];
  preguntas: { texto: string; importancia: number }[];
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
      { nombre: "Sangre roja en las heces", gravedad: "alta" },
      { nombre: "Fiebre", gravedad: "alta" },
      { nombre: "Dolor abdominal intenso", gravedad: "urgente" },
      { nombre: "Vómitos", gravedad: "alta" },
      { nombre: "Pérdida de peso", gravedad: "alta" },
    ],
    sintomasQueContradicen: [
      { nombre: "Diarrea continua", peso: 3 },
      { nombre: "Deposiciones muy frecuentes", peso: 2 },
      { nombre: "Heces líquidas", peso: 2 },
    ],
    preguntas: [
      { texto: "¿Cuántos días llevas estreñido?", importancia: 3 },
      { texto: "¿Bebes suficiente agua?", importancia: 2 },
      { texto: "¿Comes fruta y verdura diariamente?", importancia: 2 },
      { texto: "¿Realizas actividad física?", importancia: 1 },
      { texto: "¿Tomas algún medicamento?", importancia: 3 },
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
    especialistaRecomendado: ["Médico de Atención Primaria", "Digestólogo"],
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
          "Priorizar fruta, verdura, legumbres y cereales integrales",
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
          "No debe emplearse fitoterapia si existen signos de obstrucción o síntomas de alarma sin valoración médica.",
      },
      medicinaChina: {
        titulo: "Medicina tradicional china",
        marco:
          "Interpreta el estreñimiento mediante patrones propios que pueden incluir calor, sequedad, estancamiento o deficiencia según el conjunto de signos.",
        intervenciones: [
          "La elección de puntos de acupuntura depende del patrón identificado por un profesional formado",
          "Las recomendaciones dietéticas tradicionales se individualizan según el patrón",
          "La fitoterapia china requiere valoración profesional por sus posibles interacciones y contraindicaciones",
        ],
        nivelEvidencia: "tradicional",
        nota:
          "Este marco no equivale a un diagnóstico biomédico. La evidencia clínica es variable.",
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
  {
    id: "diarrea",
    nombre: "Diarrea aguda no complicada",
    descripcion:
      "Aumento de la frecuencia de las deposiciones con heces blandas o líquidas, habitualmente de inicio reciente, sin señales iniciales de gravedad.",
    sintomas: [
      { nombre: "Diarrea continua", peso: 3 },
      { nombre: "Heces líquidas", peso: 3 },
      { nombre: "Deposiciones muy frecuentes", peso: 3 },
      { nombre: "Heces blandas", peso: 2 },
      { nombre: "Dolor abdominal", peso: 1 },
      { nombre: "Náuseas", peso: 1 },
    ],
    sintomasAlarma: [
      { nombre: "Sangre roja en las heces", gravedad: "alta" },
      { nombre: "Heces negras", gravedad: "alta" },
      { nombre: "Fiebre", gravedad: "alta" },
      { nombre: "Vómitos", gravedad: "alta" },
      { nombre: "Debilidad", gravedad: "moderada" },
      { nombre: "Confusión", gravedad: "urgente" },
    ],
    sintomasQueContradicen: [
      { nombre: "Heces duras", peso: 3 },
      { nombre: "Menos de tres deposiciones por semana", peso: 3 },
      { nombre: "Esfuerzo al defecar", peso: 2 },
    ],
    preguntas: [
      { texto: "¿Desde cuándo tienes diarrea?", importancia: 3 },
      { texto: "¿Has viajado recientemente?", importancia: 2 },
      { texto: "¿Has tomado antibióticos recientemente?", importancia: 3 },
      { texto: "¿Puedes beber y retener líquidos?", importancia: 3 },
      { texto: "¿Hay más personas con síntomas similares?", importancia: 2 },
    ],
    posiblesCausas: [
      "Gastroenteritis infecciosa",
      "Cambios dietéticos o intolerancias",
      "Efectos adversos de medicamentos",
      "Estrés o alteración funcional intestinal",
    ],
    factoresRiesgo: [
      "Viajes recientes",
      "Consumo de alimentos o agua contaminados",
      "Uso reciente de antibióticos",
      "Edad avanzada o fragilidad",
    ],
    nutricion: [
      "Priorizar la reposición de líquidos",
      "Considerar soluciones de rehidratación oral cuando exista riesgo de deshidratación",
      "Reintroducir alimentación habitual según tolerancia",
    ],
    fitoterapia: [
      "No priorizar fitoterapia en cuadros agudos hasta descartar señales de alarma",
      "Algunos recursos tradicionales se estudian como apoyo, pero no sustituyen la rehidratación",
    ],
    recomendaciones: [
      "Vigilar signos de deshidratación",
      "Mantener higiene de manos",
      "Consultar si el cuadro empeora o persiste",
    ],
    nivelEvidencia: "alta",
    contraindicaciones: [
      "Evitar recomendaciones que retrasen la valoración médica cuando existe sangre, fiebre alta, deshidratación o deterioro general",
    ],
    interacciones: [
      "Revisar medicación y suplementos si la diarrea comenzó tras iniciar alguno de ellos",
    ],
    pruebasMedicasHabituales: [
      "Historia clínica, exploración y valoración del estado de hidratación",
      "Analítica o estudio de heces si el cuadro es grave, persistente o presenta factores de riesgo",
      "Investigación específica según viajes, antibióticos recientes o inmunosupresión",
    ],
    especialistaRecomendado: [
      "Médico de Atención Primaria",
      "Urgencias si existen signos de gravedad",
      "Digestólogo en cuadros persistentes o recurrentes",
    ],
    cuandoAcudirMedico: [
      "Sangre en las heces o heces negras",
      "Fiebre alta o deterioro importante",
      "Signos de deshidratación, confusión o debilidad marcada",
      "Vómitos que impiden beber",
      "Diarrea persistente o recurrente sin causa clara",
    ],
    bibliografia: [
      "Guías clínicas sobre diarrea aguda en adultos",
      "Recomendaciones sobre rehidratación oral y gastroenteritis",
    ],
    enfoques: {
      convencional: {
        titulo: "Medicina convencional",
        marco:
          "Prioriza identificar gravedad, deshidratación, duración, exposición a infecciones, uso de antibióticos y presencia de sangre o fiebre.",
        intervenciones: [
          "Rehidratación oral como medida central cuando procede",
          "Tratamiento sintomático seleccionado según el contexto clínico",
          "Pruebas o tratamiento específico si existen señales de alarma, persistencia o factores de riesgo",
        ],
        nivelEvidencia: "alta",
      },
      nutricion: {
        titulo: "Nutrición",
        marco:
          "Se centra en reponer agua y electrolitos y mantener una ingesta tolerable para reducir el riesgo de deshidratación.",
        intervenciones: [
          "Tomar líquidos de forma frecuente en cantidades tolerables",
          "Usar solución de rehidratación oral cuando sea apropiado",
          "Evitar restricciones dietéticas innecesarias y volver progresivamente a la dieta habitual según tolerancia",
        ],
        nivelEvidencia: "alta",
      },
      natural: {
        titulo: "Fitoterapia y medicina natural",
        marco:
          "En un cuadro agudo la prioridad no es la fitoterapia, sino la hidratación y la detección de señales de gravedad.",
        intervenciones: [
          "Valorar probióticos solo en contextos concretos y teniendo en cuenta que los efectos dependen de la cepa y la situación",
          "Evitar plantas astringentes o preparados múltiples si no se conoce la causa",
          "No utilizar productos naturales para enmascarar sangre, fiebre o deterioro general",
        ],
        nivelEvidencia: "limitada",
        nota:
          "La evidencia varía mucho entre productos. La rehidratación tiene prioridad sobre cualquier complemento.",
      },
      medicinaChina: {
        titulo: "Medicina tradicional china",
        marco: "Módulo no mostrado en la interfaz actual.",
        intervenciones: [],
        nivelEvidencia: "tradicional",
      },
      estiloVida: {
        titulo: "Estilo de vida",
        marco:
          "La higiene, el descanso y la vigilancia de la hidratación son las medidas prácticas más importantes durante un episodio agudo.",
        intervenciones: [
          "Lavado de manos frecuente",
          "Descanso suficiente",
          "Evitar preparar alimentos para otras personas si hay sospecha de infección contagiosa",
        ],
        nivelEvidencia: "alta",
      },
    },
  }
];