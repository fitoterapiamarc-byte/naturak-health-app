import type { Condicion } from "./condiciones";

const noMostrado = { titulo: "No mostrado", marco: "Módulo no utilizado en la interfaz actual.", intervenciones: [], nivelEvidencia: "tradicional" as const };

export const condicionesAlergiaInmunidad: Condicion[] = [
  {
    id: "rinitis-alergica-compatible", nombre: "Rinitis alérgica compatible",
    descripcion: "Estornudos repetidos, picor nasal, congestión y secreción acuosa, especialmente asociados a pólenes, polvo, animales u otros desencadenantes, pueden ser compatibles con rinitis alérgica.",
    sintomas: [{ nombre: "Estornudos", peso: 3 },{ nombre: "Picor nasal", peso: 3 },{ nombre: "Congestión nasal", peso: 2 },{ nombre: "Mucosidad acuosa", peso: 3 },{ nombre: "Picor de ojos", peso: 2 },{ nombre: "Lagrimeo", peso: 2 }],
    sintomasAlarma: [{ nombre: "Falta de aire intensa", gravedad: "urgente" },{ nombre: "Hinchazón de lengua o garganta", gravedad: "urgente" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Aparece al exponerte a polen, polvo, animales u otro desencadenante?", importancia: 3 },{ texto: "¿Predominan picor y estornudos sobre fiebre o dolor?", importancia: 2 }],
    posiblesCausas: ["Polen", "Ácaros", "Epitelios de animales", "Mohos", "Otros alérgenos"], factoresRiesgo: ["Antecedentes de alergia", "Asma", "Dermatitis atópica", "Exposición a alérgenos"],
    nutricion: ["No eliminar grupos de alimentos sin una relación demostrada con los síntomas"], fitoterapia: ["Revisar seguridad e interacciones de cualquier preparado; los productos naturales también pueden causar alergia"], recomendaciones: ["Reducir exposición al desencadenante cuando sea posible", "Lavados nasales con solución salina pueden ayudar"], nivelEvidencia: "alta",
    contraindicaciones: ["No atribuir dificultad respiratoria o edema de garganta a una rinitis simple"], interacciones: ["Algunos antihistamínicos y productos sedantes pueden aumentar somnolencia"], pruebasMedicasHabituales: ["Historia clínica", "Pruebas cutáneas o IgE específica cuando están indicadas"], especialistaRecomendado: ["Atención Primaria", "Alergología según persistencia o gravedad"], cuandoAcudirMedico: ["Síntomas persistentes mal controlados", "Asma asociada", "Dificultad respiratoria"], bibliografia: ["Guías clínicas de rinitis alérgica"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "El manejo combina evitación razonable del alérgeno y tratamiento farmacológico según intensidad.", intervenciones: ["Antihistamínicos", "Corticoides nasales cuando están indicados", "Inmunoterapia en casos seleccionados"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Las restricciones alimentarias no están justificadas salvo alergia alimentaria confirmada.", intervenciones: ["Mantener dieta equilibrada sin exclusiones innecesarias"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "La evidencia varía y algunos extractos pueden provocar reacciones alérgicas.", intervenciones: ["Comprobar composición, evidencia y alergias antes de usar productos"], nivelEvidencia: "limitada" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Reducir exposición al alérgeno puede disminuir síntomas.", intervenciones: ["Ventilación y limpieza adaptadas al desencadenante", "Ducha o cambio de ropa tras exposición intensa a polen"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "urticaria-compatible", nombre: "Urticaria compatible",
    descripcion: "Ronchas elevadas y pruriginosas que aparecen y desaparecen pueden ser compatibles con urticaria. Si se acompañan de hinchazón de lengua o garganta, dificultad respiratoria o desmayo puede tratarse de una reacción grave.",
    sintomas: [{ nombre: "Ronchas", peso: 4 },{ nombre: "Picor", peso: 3 },{ nombre: "Hinchazón de labios o párpados", peso: 2 }],
    sintomasAlarma: [{ nombre: "Hinchazón de lengua o garganta", gravedad: "urgente" },{ nombre: "Falta de aire intensa", gravedad: "urgente" },{ nombre: "Desmayo", gravedad: "urgente" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Las ronchas cambian de lugar o desaparecen en menos de un día?", importancia: 2 },{ texto: "¿Ha habido un alimento, medicamento, picadura o producto nuevo?", importancia: 3 }],
    posiblesCausas: ["Urticaria espontánea", "Medicamentos", "Alimentos", "Picaduras", "Infecciones", "Desencadenantes físicos"], factoresRiesgo: ["Alergias previas", "Nuevos medicamentos", "Picaduras", "Episodios previos"],
    nutricion: ["No hacer dietas de exclusión amplias sin identificar un desencadenante real"], fitoterapia: ["Suspender y revisar cualquier suplemento nuevo sospechoso de desencadenar la reacción"], recomendaciones: ["Fotografiar las lesiones puede ayudar a la valoración", "Buscar atención inmediata si aparecen signos de anafilaxia"], nivelEvidencia: "alta",
    contraindicaciones: ["No esperar en casa si hay compromiso respiratorio o circulatorio"], interacciones: ["Los antihistamínicos sedantes pueden afectar conducción y potenciar otros sedantes"], pruebasMedicasHabituales: ["Historia y exploración", "Estudio dirigido si es recurrente o existe sospecha concreta"], especialistaRecomendado: ["Atención Primaria", "Alergología o Dermatología según caso", "Urgencias ante anafilaxia"], cuandoAcudirMedico: ["Edema de lengua o garganta", "Dificultad respiratoria", "Desmayo", "Urticaria persistente o recurrente"], bibliografia: ["Guías clínicas de urticaria y anafilaxia"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Los antihistamínicos son tratamiento habitual de urticaria; la anafilaxia requiere actuación inmediata.", intervenciones: ["Antihistamínicos según indicación", "Adrenalina intramuscular en anafilaxia según protocolo", "Identificar desencadenantes relevantes"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Solo se eliminan alimentos cuando existe una relación consistente o alergia confirmada.", intervenciones: ["Evitar únicamente desencadenantes identificados"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "Suplementos y plantas también pueden causar urticaria o anafilaxia.", intervenciones: ["Revisar productos nuevos", "No usar remedios naturales para sustituir tratamiento urgente"], nivelEvidencia: "alta" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Cuidados", marco: "Registrar exposiciones y episodios puede ayudar a encontrar desencadenantes.", intervenciones: ["Anotar alimentos, fármacos, picaduras y productos nuevos cuando exista relación temporal"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "anafilaxia-posible", nombre: "Posible anafilaxia",
    descripcion: "Una reacción rápida con dificultad respiratoria, hinchazón de lengua o garganta, desmayo o combinación de síntomas cutáneos y respiratorios/circulatorios es una emergencia médica.",
    sintomas: [{ nombre: "Hinchazón de lengua o garganta", peso: 5 },{ nombre: "Falta de aire intensa", peso: 5 },{ nombre: "Desmayo", peso: 5 },{ nombre: "Ronchas", peso: 2 },{ nombre: "Hinchazón de labios o párpados", peso: 2 }],
    sintomasAlarma: [{ nombre: "Hinchazón de lengua o garganta", gravedad: "urgente" },{ nombre: "Falta de aire intensa", gravedad: "urgente" },{ nombre: "Desmayo", gravedad: "urgente" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Los síntomas comenzaron poco después de un alimento, medicamento, picadura o exposición?", importancia: 3 }],
    posiblesCausas: ["Alimentos", "Medicamentos", "Picaduras de insectos", "Látex", "Otros alérgenos"], factoresRiesgo: ["Anafilaxia previa", "Alergia conocida", "Asma", "Exposición a alérgeno conocido"],
    nutricion: [], fitoterapia: ["No administrar remedios herbales ni suplementos como sustitución del tratamiento de emergencia"], recomendaciones: ["Activar emergencias inmediatamente", "Usar autoinyector de adrenalina si ha sido prescrito y se sabe utilizar"], nivelEvidencia: "alta",
    contraindicaciones: ["No retrasar la atención esperando que antihistamínicos o remedios caseros hagan efecto"], interacciones: [], pruebasMedicasHabituales: ["Evaluación urgente", "Estudio alergológico posterior"], especialistaRecomendado: ["Emergencias", "Alergología posteriormente"], cuandoAcudirMedico: ["Inmediatamente"], bibliografia: ["Guías internacionales de anafilaxia"],
    enfoques: {
      convencional: { titulo: "Emergencias", marco: "La anafilaxia es una emergencia tiempo-dependiente.", intervenciones: ["Adrenalina intramuscular según protocolo", "Atención de vía aérea y circulación", "Observación médica"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "No es una intervención para el episodio agudo.", intervenciones: [], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "No tiene papel como sustituto del tratamiento urgente.", intervenciones: [], nivelEvidencia: "alta" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Prevención", marco: "Tras recuperarse, identificar el desencadenante y disponer de un plan reduce riesgos futuros.", intervenciones: ["Plan de emergencia", "Evitar alérgeno confirmado", "Llevar adrenalina si está prescrita"], nivelEvidencia: "alta" }
    }
  }
];