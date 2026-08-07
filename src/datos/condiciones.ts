export type NivelEvidencia =
  | "alta"
  | "moderada"
  | "limitada"
  | "tradicional";

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

    fitoterapia: [
      "Psyllium",
      "Semillas de lino",
      "Ciruelas pasas",
    ],

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
      "Exploración clínica",
      "Analítica si existen signos de alarma",
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
    ],

    bibliografia: [
      "Guías clínicas de estreñimiento",
      "Revisiones científicas sobre fibra y psyllium",
    ],
  },
];