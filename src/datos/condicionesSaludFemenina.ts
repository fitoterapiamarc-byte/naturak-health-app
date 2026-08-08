import type { Condicion } from "./condiciones";

const noMostrado = { titulo: "No mostrado", marco: "Módulo no utilizado en la interfaz actual.", intervenciones: [], nivelEvidencia: "tradicional" as const };

export const condicionesSaludFemenina: Condicion[] = [
  {
    id: "dismenorrea", nombre: "Dismenorrea / regla dolorosa compatible",
    descripcion: "Dolor tipo cólico asociado a la menstruación es frecuente, pero un dolor nuevo, muy intenso o progresivo merece valoración para descartar causas secundarias.",
    sintomas: [{ nombre: "Regla dolorosa", peso: 4 },{ nombre: "Dolor pélvico", peso: 2 },{ nombre: "Náuseas", peso: 1 }],
    sintomasAlarma: [{ nombre: "Dolor pélvico intenso de un lado", gravedad: "alta" },{ nombre: "Desmayo", gravedad: "urgente" },{ nombre: "Fiebre", gravedad: "alta" }],
    sintomasQueContradicen: [],
    preguntas: [{ texto: "¿El dolor aparece con la menstruación y mejora al terminar?", importancia: 2 },{ texto: "¿Es un dolor nuevo, progresivo o incapacitante?", importancia: 3 }],
    posiblesCausas: ["Dismenorrea primaria", "Endometriosis", "Adenomiosis", "Miomas u otras causas ginecológicas"],
    factoresRiesgo: ["Antecedentes de menstruaciones dolorosas", "Endometriosis u otras patologías ginecológicas"],
    nutricion: ["Alimentación equilibrada", "Corregir déficits nutricionales si están demostrados"],
    fitoterapia: ["Algunas intervenciones complementarias tienen evidencia limitada o moderada; revisar interacciones y embarazo antes de usarlas"],
    recomendaciones: ["Calor local puede aliviar", "Consultar si el dolor cambia de patrón o limita mucho la actividad"],
    nivelEvidencia: "alta", contraindicaciones: ["Evitar automedicación si existe posible embarazo o contraindicaciones"], interacciones: ["Revisar antiinflamatorios y suplementos con la medicación habitual"],
    pruebasMedicasHabituales: ["Historia clínica", "Exploración ginecológica según caso", "Ecografía si se sospecha causa secundaria"], especialistaRecomendado: ["Atención Primaria", "Ginecología"], cuandoAcudirMedico: ["Dolor muy intenso o nuevo", "Fiebre", "Desmayo", "Sangrado anormal"], bibliografia: ["Guías clínicas de dismenorrea"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Distingue dismenorrea primaria de causas ginecológicas secundarias.", intervenciones: ["Analgésicos/antiinflamatorios cuando son apropiados", "Tratamiento hormonal en casos seleccionados", "Estudio de causas secundarias"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La alimentación apoya la salud general, pero no sustituye el estudio de dolor anormal.", intervenciones: ["Patrón alimentario equilibrado", "Corregir déficits confirmados"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "Puede ser complementaria en casos seleccionados.", intervenciones: ["Revisar evidencia, dosis, embarazo e interacciones antes de recomendar productos"], nivelEvidencia: "limitada" },
      medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "El calor local y la actividad adaptada pueden ayudar a algunas personas.", intervenciones: ["Calor local", "Actividad física regular según tolerancia", "Sueño adecuado"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "sangrado-uterino-anormal", nombre: "Sangrado uterino anormal compatible",
    descripcion: "Reglas muy abundantes, sangrado entre menstruaciones o sangrado después de la menopausia necesitan valorar la causa; el sangrado posmenopáusico debe estudiarse.",
    sintomas: [{ nombre: "Regla muy abundante", peso: 3 },{ nombre: "Sangrado entre reglas", peso: 3 },{ nombre: "Sangrado después de la menopausia", peso: 4 },{ nombre: "Cansancio", peso: 1 },{ nombre: "Mareo", peso: 1 }],
    sintomasAlarma: [{ nombre: "Desmayo", gravedad: "urgente" },{ nombre: "Sangrado durante el embarazo", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿El sangrado obliga a cambiar protección con mucha frecuencia o contiene coágulos grandes?", importancia: 3 },{ texto: "¿El sangrado aparece después de la menopausia?", importancia: 3 }],
    posiblesCausas: ["Alteraciones hormonales", "Miomas o pólipos", "Adenomiosis", "Embarazo", "Alteraciones endometriales", "Medicamentos o trastornos de coagulación"],
    factoresRiesgo: ["Perimenopausia", "Tratamientos hormonales", "Anticoagulantes", "Patología uterina previa"],
    nutricion: ["Valorar hierro y estado nutricional si existe pérdida crónica de sangre"], fitoterapia: ["No intentar frenar un sangrado importante con productos naturales sin conocer la causa"], recomendaciones: ["Registrar cantidad y patrón del sangrado", "Solicitar valoración médica"], nivelEvidencia: "alta",
    contraindicaciones: ["No retrasar el estudio del sangrado posmenopáusico"], interacciones: ["Revisar anticoagulantes, antiagregantes y suplementos que puedan aumentar sangrado"], pruebasMedicasHabituales: ["Hemograma", "Test de embarazo cuando corresponda", "Exploración", "Ecografía y estudio endometrial según edad y contexto"], especialistaRecomendado: ["Ginecología", "Atención Primaria", "Urgencias si sangrado intenso con inestabilidad"], cuandoAcudirMedico: ["Sangrado posmenopáusico", "Sangrado intenso", "Mareo intenso o desmayo", "Posible embarazo"], bibliografia: ["Guías de sangrado uterino anormal"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Busca la causa del sangrado y valora anemia y estabilidad hemodinámica.", intervenciones: ["Analítica", "Ecografía", "Tratamiento médico o quirúrgico según causa"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Puede apoyar la corrección de pérdidas de hierro cuando están presentes.", intervenciones: ["Asegurar hierro dietético", "Suplementar solo cuando esté indicado"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "No debe utilizarse para ocultar un sangrado sin diagnóstico.", intervenciones: ["Revisar productos que aumenten el riesgo de sangrado"], nivelEvidencia: "limitada" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Registrar el patrón ayuda a la valoración clínica.", intervenciones: ["Anotar días y cantidad aproximada de sangrado", "Evitar esfuerzos si existe mareo o debilidad"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "menopausia-climaterio", nombre: "Síntomas de menopausia / climaterio compatibles",
    descripcion: "Sofocos, sudoración nocturna, cambios del sueño, sequedad vaginal y alteraciones del ciclo pueden aparecer durante la transición menopáusica.",
    sintomas: [{ nombre: "Sofocos", peso: 4 },{ nombre: "Sudoración nocturna", peso: 2 },{ nombre: "Sequedad vaginal", peso: 2 },{ nombre: "Reglas irregulares", peso: 2 },{ nombre: "Cambios de ánimo", peso: 1 },{ nombre: "Insomnio", peso: 1 }],
    sintomasAlarma: [{ nombre: "Sangrado después de la menopausia", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Los ciclos se han vuelto irregulares junto con sofocos o sudores nocturnos?", importancia: 2 },{ texto: "¿Ha aparecido sangrado después de llevar 12 meses sin menstruación?", importancia: 3 }],
    posiblesCausas: ["Transición menopáusica", "Menopausia", "Otras causas hormonales que pueden imitar síntomas"], factoresRiesgo: ["Edad compatible con transición menopáusica", "Menopausia quirúrgica o tratamientos que afecten función ovárica"],
    nutricion: ["Asegurar proteína, calcio y vitamina D según necesidades", "Patrón mediterráneo y salud cardiovascular"], fitoterapia: ["Algunos productos para sofocos tienen evidencia variable y pueden tener contraindicaciones hormonales o interacciones"], recomendaciones: ["Valorar intensidad e impacto de los síntomas", "Mantener ejercicio de fuerza y salud ósea"], nivelEvidencia: "alta",
    contraindicaciones: ["No asumir que cualquier sangrado posmenopáusico es normal"], interacciones: ["Revisar fitoestrógenos y extractos vegetales si existen antecedentes hormonodependientes o medicación"], pruebasMedicasHabituales: ["Valoración clínica", "Pruebas dirigidas cuando los síntomas o la edad no son típicos", "Evaluación de riesgo óseo y cardiovascular según perfil"], especialistaRecomendado: ["Atención Primaria", "Ginecología"], cuandoAcudirMedico: ["Sangrado posmenopáusico", "Síntomas muy limitantes", "Dolor pélvico nuevo"], bibliografia: ["Guías clínicas de menopausia"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Valora síntomas, riesgos y opciones hormonales y no hormonales individualizadas.", intervenciones: ["Tratamientos no hormonales", "Terapia hormonal en candidatas apropiadas", "Tratamiento local de síntomas genitourinarios"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Prioriza salud ósea, muscular y cardiovascular.", intervenciones: ["Proteína suficiente", "Calcio y vitamina D adecuados", "Patrón mediterráneo"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "La evidencia varía mucho entre productos y no todos son adecuados para todas las mujeres.", intervenciones: ["Individualizar según antecedentes, medicación y evidencia del producto"], nivelEvidencia: "limitada" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Ejercicio, sueño y control de desencadenantes pueden mejorar salud general y algunos síntomas.", intervenciones: ["Ejercicio de fuerza y aeróbico", "Higiene del sueño", "Evitar desencadenantes personales de sofocos"], nivelEvidencia: "alta" }
    }
  },
  {
    id: "vaginitis-compatible", nombre: "Vaginitis / vulvovaginitis compatible",
    descripcion: "Picor, flujo anormal, irritación o molestias vaginales pueden tener causas infecciosas o no infecciosas y el tratamiento depende de la causa.",
    sintomas: [{ nombre: "Flujo vaginal anormal", peso: 3 },{ nombre: "Picor vaginal", peso: 3 },{ nombre: "Dolor con las relaciones", peso: 1 },{ nombre: "Dolor pélvico", peso: 1 }],
    sintomasAlarma: [{ nombre: "Fiebre", gravedad: "alta" },{ nombre: "Dolor pélvico intenso de un lado", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Ha cambiado el olor, color o cantidad del flujo?", importancia: 2 },{ texto: "¿Existe fiebre o dolor pélvico importante?", importancia: 3 }],
    posiblesCausas: ["Candidiasis", "Vaginosis bacteriana", "Tricomoniasis u otras ITS", "Irritación", "Cambios genitourinarios de la menopausia"], factoresRiesgo: ["Antibióticos recientes", "Diabetes", "Nuevas exposiciones sexuales", "Cambios hormonales"], nutricion: ["No existe una dieta que sustituya el diagnóstico y tratamiento de una infección vaginal"], fitoterapia: ["Evitar duchas vaginales, aceites esenciales o productos irritantes intravaginales"], recomendaciones: ["Consultar si es el primer episodio, recurre o existen síntomas atípicos"], nivelEvidencia: "alta",
    contraindicaciones: ["No aplicar sustancias irritantes en vagina"], interacciones: ["Revisar tratamientos antifúngicos y otros medicamentos según caso"], pruebasMedicasHabituales: ["Exploración", "pH/microscopía o pruebas microbiológicas según contexto", "Pruebas de ITS cuando corresponda"], especialistaRecomendado: ["Atención Primaria", "Ginecología"], cuandoAcudirMedico: ["Fiebre", "Dolor pélvico", "Embarazo", "Síntomas recurrentes"], bibliografia: ["Guías de vaginitis y vulvovaginitis"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Identifica la causa para evitar tratamientos incorrectos.", intervenciones: ["Antifúngico, antibacteriano u otro tratamiento según diagnóstico", "Pruebas de ITS cuando proceda"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "No sustituye el tratamiento etiológico.", intervenciones: ["Mantener alimentación equilibrada y control glucémico si existe diabetes"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "La automedicación local puede irritar o retrasar el diagnóstico.", intervenciones: ["Evitar preparados intravaginales no validados"], nivelEvidencia: "limitada" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Evitar irritantes y mantener cuidados vulvares suaves puede reducir molestias.", intervenciones: ["Evitar duchas vaginales", "Productos de higiene suaves", "Ropa transpirable si resulta cómoda"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "embarazo-ectopico-alerta", nombre: "Alerta de embarazo ectópico compatible",
    descripcion: "Posible embarazo acompañado de dolor pélvico intenso, especialmente unilateral, y/o sangrado puede requerir valoración urgente para descartar embarazo ectópico.",
    sintomas: [{ nombre: "Posible embarazo", peso: 2 },{ nombre: "Dolor pélvico intenso de un lado", peso: 4 },{ nombre: "Sangrado durante el embarazo", peso: 4 },{ nombre: "Mareo", peso: 2 }],
    sintomasAlarma: [{ nombre: "Desmayo", gravedad: "urgente" },{ nombre: "Dolor pélvico intenso de un lado", gravedad: "urgente" },{ nombre: "Sangrado durante el embarazo", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Existe posibilidad o prueba positiva de embarazo?", importancia: 3 },{ texto: "¿El dolor es intenso y predomina en un lado?", importancia: 3 }], posiblesCausas: ["Embarazo ectópico", "Aborto espontáneo", "Otras causas ginecológicas o abdominales"], factoresRiesgo: ["Embarazo ectópico previo", "Cirugía tubárica", "Enfermedad inflamatoria pélvica previa", "Reproducción asistida"], nutricion: ["No es una situación para tratamiento nutricional"], fitoterapia: ["No utilizar fitoterapia para tratar estos síntomas"], recomendaciones: ["Buscar valoración médica urgente"], nivelEvidencia: "alta", contraindicaciones: ["No retrasar atención intentando tratar el dolor en casa"], interacciones: [], pruebasMedicasHabituales: ["Test de embarazo", "Beta-hCG", "Ecografía transvaginal", "Valoración clínica"], especialistaRecomendado: ["Urgencias", "Ginecología"], cuandoAcudirMedico: ["De inmediato ante posible embarazo con dolor intenso unilateral, sangrado, mareo o desmayo"], bibliografia: ["Guías clínicas de embarazo ectópico"],
    enfoques: {
      convencional: { titulo: "Atención médica urgente", marco: "Debe descartarse una causa potencialmente grave.", intervenciones: ["Valoración urgente", "Ecografía y beta-hCG", "Tratamiento según diagnóstico y estabilidad"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "No tiene un papel terapéutico en la situación aguda.", intervenciones: [], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "No está indicada para tratar una sospecha de embarazo ectópico.", intervenciones: [], nivelEvidencia: "alta" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Actuación", marco: "La prioridad es recibir atención médica, no observar la evolución en casa.", intervenciones: ["Solicitar atención urgente"], nivelEvidencia: "alta" }
    }
  }
];