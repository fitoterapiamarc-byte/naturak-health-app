import type { Condicion } from "./condiciones";

const noMostrado = { titulo: "No mostrado", marco: "Módulo no utilizado en la interfaz actual.", intervenciones: [], nivelEvidencia: "tradicional" as const };

export const condicionesBucodentales: Condicion[] = [
  {
    id: "gingivitis-periodontal-compatible", nombre: "Gingivitis / enfermedad periodontal compatible",
    descripcion: "Encías inflamadas, sangrado al cepillarse y mal aliento pueden relacionarse con inflamación gingival. Si progresa puede afectar los tejidos que sostienen los dientes.",
    sintomas: [{ nombre: "Encías inflamadas", peso: 3 },{ nombre: "Sangrado de encías", peso: 3 },{ nombre: "Mal aliento", peso: 2 },{ nombre: "Dolor al masticar", peso: 1 }],
    sintomasAlarma: [{ nombre: "Hinchazón de cara o mandíbula", gravedad: "alta" },{ nombre: "Fiebre", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Las encías sangran repetidamente al cepillarte o usar hilo dental?", importancia: 2 },{ texto: "¿Hay dientes con movilidad o retracción de encías?", importancia: 3 }],
    posiblesCausas: ["Placa bacteriana", "Gingivitis", "Periodontitis", "Tabaco", "Diabetes mal controlada"], factoresRiesgo: ["Higiene oral insuficiente", "Tabaco", "Diabetes", "Antecedentes periodontales"],
    nutricion: ["Dieta equilibrada y limitar exposición frecuente a azúcares", "Corregir déficits nutricionales demostrados"], fitoterapia: ["Los productos naturales no sustituyen la eliminación profesional de placa y cálculo cuando existe enfermedad periodontal"], recomendaciones: ["Cepillado cuidadoso y limpieza interdental", "Valoración odontológica si el sangrado es persistente"], nivelEvidencia: "alta",
    contraindicaciones: ["No normalizar el sangrado gingival persistente"], interacciones: ["Anticoagulantes y antiagregantes pueden aumentar el sangrado, pero no deben suspenderse sin indicación médica"], pruebasMedicasHabituales: ["Exploración dental y periodontal", "Sondaje periodontal", "Radiografías cuando proceda"], especialistaRecomendado: ["Odontología", "Periodoncia según gravedad"], cuandoAcudirMedico: ["Sangrado persistente", "Movilidad dental", "Dolor o inflamación progresiva"], bibliografia: ["Guías clínicas de salud periodontal"],
    enfoques: {
      convencional: { titulo: "Odontología", marco: "El tratamiento se basa en control de placa, limpieza profesional y tratamiento periodontal según gravedad.", intervenciones: ["Higiene profesional", "Tratamiento periodontal", "Control de factores de riesgo"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La alimentación apoya la salud oral y metabólica, pero no elimina placa o cálculo dental.", intervenciones: ["Limitar azúcares frecuentes", "Patrón alimentario equilibrado"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "Puede ser complementaria, nunca sustituta del tratamiento periodontal necesario.", intervenciones: ["Evitar productos irritantes y revisar evidencia antes de recomendar colutorios o suplementos"], nivelEvidencia: "limitada" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "La higiene oral diaria y no fumar son medidas fundamentales.", intervenciones: ["Cepillado con pasta fluorada", "Limpieza interdental", "No fumar"], nivelEvidencia: "alta" }
    }
  },
  {
    id: "absceso-dental-compatible", nombre: "Infección / absceso dental compatible",
    descripcion: "Dolor dental intenso, dolor al masticar e hinchazón pueden indicar una infección dental. La extensión hacia cara o cuello, fiebre o dificultad para tragar requieren atención rápida.",
    sintomas: [{ nombre: "Dolor dental", peso: 4 },{ nombre: "Dolor al masticar", peso: 2 },{ nombre: "Hinchazón de cara o mandíbula", peso: 3 },{ nombre: "Fiebre", peso: 2 }],
    sintomasAlarma: [{ nombre: "Hinchazón de cara o mandíbula", gravedad: "alta" },{ nombre: "Dificultad para tragar", gravedad: "urgente" },{ nombre: "Dificultad para abrir la boca", gravedad: "alta" },{ nombre: "Fiebre", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Hay hinchazón de la cara, mandíbula o encía cerca del diente?", importancia: 3 },{ texto: "¿Cuesta tragar, respirar o abrir la boca?", importancia: 3 }],
    posiblesCausas: ["Caries profunda", "Infección pulpar", "Absceso periapical", "Infección periodontal"], factoresRiesgo: ["Caries", "Traumatismo dental", "Enfermedad periodontal", "Inmunosupresión"],
    nutricion: ["Elegir alimentos blandos si masticar duele hasta recibir atención"], fitoterapia: ["No intentar tratar una infección dental profunda únicamente con plantas, aceites esenciales o suplementos"], recomendaciones: ["Solicitar valoración odontológica", "Atención urgente si la infección parece extenderse"], nivelEvidencia: "alta",
    contraindicaciones: ["No aplicar sustancias cáusticas sobre encía o diente", "No retrasar atención por tomar antibióticos sobrantes"], interacciones: ["Revisar analgésicos y antibióticos con medicación y alergias"], pruebasMedicasHabituales: ["Exploración dental", "Radiografía dental cuando proceda"], especialistaRecomendado: ["Odontología", "Urgencias si hay extensión o compromiso de vía aérea"], cuandoAcudirMedico: ["Hinchazón facial", "Fiebre", "Dificultad para tragar o respirar", "Dolor intenso persistente"], bibliografia: ["Guías de infecciones odontogénicas"],
    enfoques: {
      convencional: { titulo: "Odontología", marco: "El tratamiento definitivo elimina el foco dental mediante drenaje, endodoncia, extracción u otra intervención según el caso.", intervenciones: ["Tratamiento del foco", "Analgesia", "Antibióticos solo cuando están indicados"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Solo tiene un papel de apoyo mientras se trata la causa.", intervenciones: ["Alimentos blandos y buena hidratación según tolerancia"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "No sustituye el tratamiento de un absceso dental.", intervenciones: ["Evitar automedicación local irritante"], nivelEvidencia: "alta" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Cuidados", marco: "La prevención depende de higiene, flúor y revisiones odontológicas.", intervenciones: ["Higiene oral regular", "Consulta dental temprana ante caries o dolor"], nivelEvidencia: "alta" }
    }
  },
  {
    id: "aftas-orales-compatible", nombre: "Aftas / úlceras orales compatibles",
    descripcion: "Pequeñas úlceras dolorosas dentro de la boca suelen ser benignas y autolimitadas. Una lesión que no cura, es muy grande o se repite mucho debe valorarse.",
    sintomas: [{ nombre: "Úlcera en la boca", peso: 4 },{ nombre: "Dolor al masticar", peso: 1 }],
    sintomasAlarma: [{ nombre: "Dificultad para tragar", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿La lesión lleva más de dos o tres semanas sin curar?", importancia: 3 },{ texto: "¿Las úlceras aparecen repetidamente o son numerosas?", importancia: 2 }],
    posiblesCausas: ["Afta recurrente", "Traumatismo local", "Déficit de hierro, B12 o folato en algunos casos", "Enfermedades sistémicas menos frecuentes"], factoresRiesgo: ["Traumatismo", "Estrés", "Déficits nutricionales", "Algunas enfermedades digestivas o inmunitarias"],
    nutricion: ["Evitar temporalmente alimentos que irriten la lesión", "Valorar déficits si son recurrentes"], fitoterapia: ["Evitar aceites esenciales sin diluir y productos cáusticos sobre mucosa"], recomendaciones: ["Mantener higiene suave", "Consultar si no cura en 2-3 semanas o recurre con frecuencia"], nivelEvidencia: "moderada",
    contraindicaciones: ["No atribuir una úlcera persistente únicamente a aftas"], interacciones: [], pruebasMedicasHabituales: ["Exploración oral", "Analítica de hierro/B12/folato si hay recurrencia y sospecha", "Biopsia o derivación si la lesión es persistente o sospechosa"], especialistaRecomendado: ["Odontología", "Atención Primaria", "Medicina oral según caso"], cuandoAcudirMedico: ["Lesión que no cura en 2-3 semanas", "Úlceras muy extensas", "Dificultad para comer o tragar"], bibliografia: ["Guías clínicas de lesiones orales"],
    enfoques: {
      convencional: { titulo: "Medicina y odontología", marco: "Valora la duración, aspecto y recurrencia para descartar causas secundarias.", intervenciones: ["Tratamiento sintomático", "Buscar déficits o enfermedades asociadas cuando corresponde"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Los déficits deben confirmarse antes de suplementar de forma prolongada.", intervenciones: ["Evitar irritantes durante el episodio", "Corregir déficits confirmados"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "Algunos productos pueden aliviar, pero la mucosa oral es sensible a preparados concentrados.", intervenciones: ["Evitar sustancias irritantes o aceites esenciales directos"], nivelEvidencia: "limitada" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Cuidados", marco: "Reducir traumatismos locales y mantener higiene suave favorece la recuperación.", intervenciones: ["Cepillo suave", "Evitar morder o irritar la lesión"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "candidiasis-oral-compatible", nombre: "Candidiasis oral compatible",
    descripcion: "Placas blancas en boca, molestias o ardor pueden ser compatibles con candidiasis oral, especialmente tras antibióticos, corticoides inhalados o en determinadas enfermedades.",
    sintomas: [{ nombre: "Placas blancas en la boca", peso: 4 },{ nombre: "Boca seca", peso: 1 },{ nombre: "Dolor al masticar", peso: 1 }],
    sintomasAlarma: [{ nombre: "Dificultad para tragar", gravedad: "alta" },{ nombre: "Fiebre", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Has tomado antibióticos o usas corticoides inhalados recientemente?", importancia: 2 },{ texto: "¿Existe diabetes, inmunosupresión o candidiasis recurrente?", importancia: 3 }],
    posiblesCausas: ["Candida oral", "Antibióticos", "Corticoides inhalados", "Diabetes", "Inmunosupresión", "Prótesis dentales"], factoresRiesgo: ["Antibióticos", "Corticoides inhalados", "Diabetes", "Prótesis", "Inmunosupresión"],
    nutricion: ["Mantener alimentación adecuada; las dietas restrictivas antifúngicas no sustituyen el tratamiento indicado"], fitoterapia: ["No sustituir antifúngicos indicados por remedios caseros potencialmente irritantes"], recomendaciones: ["Enjuagar la boca tras corticoides inhalados", "Consultar si persiste o recurre"], nivelEvidencia: "alta",
    contraindicaciones: ["No ignorar candidiasis recurrente sin causa conocida"], interacciones: ["Algunos antifúngicos tienen interacciones farmacológicas"], pruebasMedicasHabituales: ["Exploración oral", "Pruebas adicionales si el aspecto es atípico o recurrente"], especialistaRecomendado: ["Atención Primaria", "Odontología"], cuandoAcudirMedico: ["Dificultad para tragar", "Recurrencia", "Inmunosupresión", "Falta de respuesta"], bibliografia: ["Guías clínicas de candidiasis oral"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Confirma el diagnóstico y trata con antifúngicos cuando corresponde, además de corregir factores predisponentes.", intervenciones: ["Antifúngico indicado", "Revisión de factores predisponentes"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "No hay una dieta que sustituya el tratamiento antifúngico cuando está indicado.", intervenciones: ["Mantener ingesta adecuada", "Control glucémico si existe diabetes"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "La evidencia de remedios naturales es insuficiente para sustituir el tratamiento establecido.", intervenciones: ["Evitar productos irritantes"], nivelEvidencia: "limitada" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Cuidados", marco: "La higiene oral y corregir factores predisponentes reducen recurrencias.", intervenciones: ["Higiene de prótesis", "Enjuague tras corticoides inhalados", "Higiene oral regular"], nivelEvidencia: "alta" }
    }
  }
];