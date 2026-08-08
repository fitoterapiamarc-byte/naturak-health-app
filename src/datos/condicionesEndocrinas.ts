import type { Condicion } from "./condiciones";

const enfoqueComun = {
  medicinaChina: {
    titulo: "No mostrado",
    marco: "Módulo no utilizado en la interfaz actual.",
    intervenciones: [],
    nivelEvidencia: "tradicional" as const,
  },
};

export const condicionesEndocrinas: Condicion[] = [
  {
    id: "hiperglucemia-diabetes-compatible",
    nombre: "Hiperglucemia / diabetes compatible",
    descripcion: "Sed intensa, aumento de la orina, hambre, cansancio, visión borrosa o pérdida de peso pueden aparecer cuando la glucosa está elevada. La app no diagnostica diabetes: requiere confirmación analítica.",
    sintomas: [
      { nombre: "Mucha sed", peso: 3 }, { nombre: "Orinar mucha cantidad", peso: 3 },
      { nombre: "Orinar con mucha frecuencia", peso: 2 }, { nombre: "Mucha hambre", peso: 2 },
      { nombre: "Cansancio", peso: 1 }, { nombre: "Visión borrosa", peso: 2 },
      { nombre: "Pérdida de peso sin explicación", peso: 3 }
    ],
    sintomasAlarma: [
      { nombre: "Confusión", gravedad: "urgente" }, { nombre: "Vómitos", gravedad: "alta" },
      { nombre: "Falta de aire intensa", gravedad: "urgente" }
    ],
    sintomasQueContradicen: [],
    preguntas: [{ texto: "¿La sed y el aumento de orina son nuevos o persistentes?", importancia: 2 },{ texto: "¿Hay pérdida de peso, vómitos o deterioro rápido?", importancia: 3 }],
    posiblesCausas: ["Diabetes mellitus", "Hiperglucemia transitoria por enfermedad o medicación", "Otras alteraciones metabólicas"],
    factoresRiesgo: ["Antecedentes familiares", "Sobrepeso u obesidad", "Sedentarismo", "Edad", "Diabetes gestacional previa"],
    nutricion: ["Evitar bebidas azucaradas", "Priorizar alimentos poco procesados y fibra", "No hacer restricciones extremas sin evaluación"],
    fitoterapia: ["No sustituir evaluación, dieta ni medicación antidiabética por suplementos", "Algunos productos pueden potenciar fármacos y causar hipoglucemia"],
    recomendaciones: ["Solicitar valoración y glucemia/HbA1c si los síntomas persisten", "Mantener hidratación adecuada"],
    nivelEvidencia: "alta",
    contraindicaciones: ["No retrasar atención ante confusión, vómitos repetidos o deterioro"],
    interacciones: ["Revisar suplementos hipoglucemiantes si se toman antidiabéticos"],
    pruebasMedicasHabituales: ["Glucemia", "HbA1c", "Orina", "Función renal y otras pruebas según contexto"],
    especialistaRecomendado: ["Atención Primaria", "Endocrinología según resultados"],
    cuandoAcudirMedico: ["Sed y poliuria persistentes", "Pérdida de peso inexplicada", "Confusión o vómitos"],
    bibliografia: ["Guías clínicas de diabetes mellitus"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Confirma la alteración de glucosa y establece el tratamiento según tipo y gravedad.", intervenciones: ["Analítica", "Tratamiento nutricional y farmacológico cuando corresponde", "Control de factores cardiovasculares"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La alimentación es una parte central del manejo metabólico.", intervenciones: ["Control de calidad y cantidad de carbohidratos", "Fibra y alimentos mínimamente procesados", "Plan individualizado"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "Su papel es complementario y la evidencia depende del producto; puede haber interacciones con medicación.", intervenciones: ["No iniciar productos hipoglucemiantes sin revisar medicación y glucosa"], nivelEvidencia: "limitada" },
      ...enfoqueComun,
      estiloVida: { titulo: "Estilo de vida", marco: "Actividad física, sueño y peso corporal influyen en la sensibilidad a la insulina.", intervenciones: ["Actividad física regular adaptada", "Sueño suficiente", "Reducción de sedentarismo"], nivelEvidencia: "alta" }
    }
  },
  {
    id: "hipoglucemia-compatible",
    nombre: "Hipoglucemia compatible",
    descripcion: "Hambre, temblor, sudor, palpitaciones, debilidad o confusión pueden aparecer cuando la glucosa baja, especialmente en personas tratadas con insulina o ciertos antidiabéticos.",
    sintomas: [{ nombre: "Hambre con temblor y sudor", peso: 4 },{ nombre: "Temblor", peso: 2 },{ nombre: "Sudoración excesiva", peso: 2 },{ nombre: "Palpitaciones", peso: 1 },{ nombre: "Debilidad", peso: 2 },{ nombre: "Confusión", peso: 3 }],
    sintomasAlarma: [{ nombre: "Confusión", gravedad: "urgente" },{ nombre: "Desmayo", gravedad: "urgente" }],
    sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Tomas insulina o medicación que reduzca la glucosa?", importancia: 3 },{ texto: "¿Los síntomas aparecen tras ayuno, ejercicio o retrasar una comida?", importancia: 2 }],
    posiblesCausas: ["Tratamiento antidiabético", "Ayuno prolongado", "Ejercicio", "Alcohol u otras causas médicas"],
    factoresRiesgo: ["Insulina", "Sulfonilureas u otros fármacos", "Comidas omitidas", "Ejercicio no compensado"],
    nutricion: ["En personas conscientes con hipoglucemia confirmada, seguir el plan de corrección indicado por su equipo sanitario"],
    fitoterapia: ["Evitar suplementos que puedan bajar más la glucosa sin supervisión"],
    recomendaciones: ["Si es posible medir glucosa durante los síntomas", "Revisar episodios repetidos con un profesional"],
    nivelEvidencia: "alta",
    contraindicaciones: ["No dar alimentos o líquidos por boca a una persona inconsciente"],
    interacciones: ["Suplementos con efecto hipoglucemiante pueden sumarse a fármacos"],
    pruebasMedicasHabituales: ["Glucemia capilar o plasmática durante síntomas", "Revisión de medicación"],
    especialistaRecomendado: ["Atención Primaria", "Endocrinología"],
    cuandoAcudirMedico: ["Confusión", "Desmayo", "Episodios repetidos"],
    bibliografia: ["Guías clínicas de hipoglucemia"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "La prioridad es confirmar y corregir la glucosa baja y determinar su causa.", intervenciones: ["Medición de glucosa", "Corrección según protocolo", "Ajuste de medicación si procede"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La estrategia depende de la causa y del tratamiento de base.", intervenciones: ["Regularidad de comidas cuando esté indicada", "Planificar ejercicio y alimentación en diabetes tratada"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "No es un tratamiento apropiado para una hipoglucemia aguda.", intervenciones: ["Revisar y evitar productos que potencien la bajada de glucosa"], nivelEvidencia: "limitada" },
      ...enfoqueComun,
      estiloVida: { titulo: "Estilo de vida", marco: "Planificar ejercicio, comidas y medicación ayuda a prevenir episodios en personas susceptibles.", intervenciones: ["Evitar saltarse comidas si el tratamiento lo requiere", "Planificar ejercicio"], nivelEvidencia: "alta" }
    }
  },
  {
    id: "hipotiroidismo-compatible",
    nombre: "Hipotiroidismo compatible",
    descripcion: "Cansancio, somnolencia, intolerancia al frío, aumento de peso, estreñimiento, piel seca o caída de cabello pueden justificar estudiar la función tiroidea, aunque son síntomas poco específicos.",
    sintomas: [{ nombre: "Cansancio", peso: 2 },{ nombre: "Somnolencia", peso: 2 },{ nombre: "Intolerancia al frío", peso: 3 },{ nombre: "Aumento de peso", peso: 2 },{ nombre: "Estreñimiento", peso: 2 },{ nombre: "Sequedad de piel", peso: 2 },{ nombre: "Caída de cabello", peso: 1 }],
    sintomasAlarma: [{ nombre: "Confusión", gravedad: "alta" }],
    sintomasQueContradicen: [{ nombre: "Intolerancia al calor", peso: 2 },{ nombre: "Latidos rápidos", peso: 2 }],
    preguntas: [{ texto: "¿Los síntomas han aparecido de forma progresiva durante semanas o meses?", importancia: 2 },{ texto: "¿Existe enfermedad tiroidea previa o familiar?", importancia: 2 }],
    posiblesCausas: ["Tiroiditis autoinmune", "Tratamientos tiroideos previos", "Alteraciones de yodo", "Otras causas tiroideas"],
    factoresRiesgo: ["Antecedentes familiares", "Enfermedad autoinmune", "Cirugía o radioterapia tiroidea"],
    nutricion: ["Dieta equilibrada", "Evitar suplementar yodo en dosis altas sin indicación"],
    fitoterapia: ["No sustituir levotiroxina cuando está indicada", "Separar determinados suplementos de la medicación tiroidea según indicación profesional"],
    recomendaciones: ["Solicitar TSH y T4 libre si el cuadro es persistente"],
    nivelEvidencia: "alta",
    contraindicaciones: ["Evitar productos tiroideos o yodo en altas dosis sin diagnóstico"],
    interacciones: ["Hierro, calcio y otros productos pueden reducir la absorción de levotiroxina si se toman juntos"],
    pruebasMedicasHabituales: ["TSH", "T4 libre", "Anticuerpos tiroideos en casos seleccionados"],
    especialistaRecomendado: ["Atención Primaria", "Endocrinología"],
    cuandoAcudirMedico: ["Síntomas persistentes", "Embarazo con sospecha de alteración tiroidea", "Deterioro marcado"],
    bibliografia: ["Guías clínicas de hipotiroidismo"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "El diagnóstico se basa principalmente en síntomas y pruebas tiroideas.", intervenciones: ["TSH y T4 libre", "Levotiroxina cuando está indicada", "Seguimiento analítico"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La nutrición cubre necesidades normales, pero no reemplaza hormona tiroidea en hipotiroidismo establecido.", intervenciones: ["Aporte nutricional adecuado", "Evitar excesos de yodo"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "No hay un sustituto herbal equivalente a la hormona tiroidea indicada médicamente.", intervenciones: ["Revisar suplementos por yodo y posibles interferencias"], nivelEvidencia: "limitada" },
      ...enfoqueComun,
      estiloVida: { titulo: "Estilo de vida", marco: "Sueño, ejercicio y hábitos saludables ayudan al bienestar general, pero no corrigen por sí solos un déficit hormonal.", intervenciones: ["Actividad física adaptada", "Rutina de sueño"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "hipertiroidismo-compatible",
    nombre: "Hipertiroidismo compatible",
    descripcion: "Palpitaciones, temblor, intolerancia al calor, sudoración, irritabilidad y pérdida de peso pueden justificar estudiar una tiroides hiperactiva.",
    sintomas: [{ nombre: "Palpitaciones", peso: 2 },{ nombre: "Latidos rápidos", peso: 2 },{ nombre: "Temblor", peso: 2 },{ nombre: "Intolerancia al calor", peso: 3 },{ nombre: "Sudoración excesiva", peso: 2 },{ nombre: "Irritabilidad", peso: 1 },{ nombre: "Pérdida de peso sin explicación", peso: 3 }],
    sintomasAlarma: [{ nombre: "Dolor de pecho", gravedad: "urgente" },{ nombre: "Confusión", gravedad: "urgente" },{ nombre: "Desmayo", gravedad: "urgente" }],
    sintomasQueContradicen: [{ nombre: "Intolerancia al frío", peso: 2 },{ nombre: "Aumento de peso", peso: 1 }],
    preguntas: [{ texto: "¿Hay pérdida de peso a pesar de mantener o aumentar el apetito?", importancia: 2 },{ texto: "¿Las palpitaciones son persistentes o el pulso está muy acelerado?", importancia: 3 }],
    posiblesCausas: ["Enfermedad de Graves", "Nódulos tiroideos hiperfuncionantes", "Tiroiditis", "Exceso de hormona tiroidea"],
    factoresRiesgo: ["Antecedentes tiroideos", "Enfermedad autoinmune", "Uso de hormona tiroidea"],
    nutricion: ["Mantener ingesta suficiente si existe pérdida de peso", "Evitar suplementos con yodo en dosis altas sin indicación"],
    fitoterapia: ["No utilizar estimulantes para combatir el cansancio si hay palpitaciones", "No sustituir tratamiento tiroideo indicado"],
    recomendaciones: ["Solicitar valoración y pruebas tiroideas", "Valorar pulso y síntomas cardiovasculares"],
    nivelEvidencia: "alta",
    contraindicaciones: ["Evitar automedicación con productos tiroideos o estimulantes"],
    interacciones: ["Revisar suplementos con yodo o estimulantes"],
    pruebasMedicasHabituales: ["TSH", "T4 libre y T3", "ECG si hay palpitaciones", "Estudio etiológico según resultados"],
    especialistaRecomendado: ["Atención Primaria", "Endocrinología", "Urgencias si hay síntomas graves"],
    cuandoAcudirMedico: ["Palpitaciones persistentes", "Dolor de pecho", "Confusión", "Pérdida de peso importante"],
    bibliografia: ["Guías clínicas de hipertiroidismo"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Confirma el exceso hormonal y determina la causa para seleccionar tratamiento.", intervenciones: ["Analítica tiroidea", "Control de síntomas", "Antitiroideos u otros tratamientos según causa"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Ayuda a mantener un estado nutricional adecuado durante el aumento del gasto metabólico.", intervenciones: ["Aporte energético y proteico adecuado", "Evitar exceso de yodo no indicado"], nivelEvidencia: "moderada" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "No debe sustituir el tratamiento de un hipertiroidismo confirmado.", intervenciones: ["Evitar estimulantes y revisar suplementos con yodo"], nivelEvidencia: "limitada" },
      ...enfoqueComun,
      estiloVida: { titulo: "Estilo de vida", marco: "Reducir estimulantes y adaptar la actividad puede ayudar mientras se controla la enfermedad.", intervenciones: ["Limitar exceso de cafeína si provoca palpitaciones", "Descanso suficiente"], nivelEvidencia: "moderada" }
    }
  }
];