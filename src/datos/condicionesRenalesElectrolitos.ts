import type { Condicion } from "./condiciones";

const noMostrado = { titulo: "No mostrado", marco: "Módulo no utilizado en la interfaz actual.", intervenciones: [], nivelEvidencia: "tradicional" as const };

export const condicionesRenalesElectrolitos: Condicion[] = [
  {
    id: "deshidratacion-compatible", nombre: "Deshidratación compatible",
    descripcion: "Sed, boca seca, orina oscura o escasa, mareo y debilidad pueden aparecer cuando la pérdida de líquidos supera la reposición. Vómitos, diarrea, fiebre y calor aumentan el riesgo.",
    sintomas: [{ nombre: "Poca hidratación", peso: 2 },{ nombre: "Mucha sed", peso: 2 },{ nombre: "Boca seca", peso: 2 },{ nombre: "Orina oscura", peso: 2 },{ nombre: "Orinar muy poca cantidad", peso: 3 },{ nombre: "Mareo al levantarme", peso: 2 },{ nombre: "Debilidad", peso: 1 }],
    sintomasAlarma: [{ nombre: "Confusión", gravedad: "urgente" },{ nombre: "Desmayo", gravedad: "urgente" },{ nombre: "No puedo orinar", gravedad: "alta" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Ha habido vómitos, diarrea, fiebre, calor intenso o poca ingesta de líquidos?", importancia: 2 },{ texto: "¿La cantidad de orina ha disminuido claramente?", importancia: 3 }],
    posiblesCausas: ["Pérdidas digestivas", "Calor y sudoración", "Fiebre", "Ingesta insuficiente", "Diuréticos u otras causas"], factoresRiesgo: ["Edad avanzada", "Vómitos o diarrea", "Calor", "Diuréticos", "Enfermedad renal o cardiaca"],
    nutricion: ["Reponer líquidos de forma progresiva cuando sea seguro", "En pérdidas digestivas importantes puede ser útil una solución de rehidratación oral adecuada"], fitoterapia: ["Evitar plantas diuréticas durante una posible deshidratación"], recomendaciones: ["Vigilar orina y tolerancia a líquidos", "Buscar atención si no se pueden retener líquidos o hay deterioro"], nivelEvidencia: "alta",
    contraindicaciones: ["No forzar grandes cantidades de líquido si existe insuficiencia cardiaca o renal con restricción indicada"], interacciones: ["Diuréticos y algunos antihipertensivos pueden requerir revisión durante pérdidas importantes de líquidos"], pruebasMedicasHabituales: ["Exploración", "Función renal", "Sodio y potasio según gravedad"], especialistaRecomendado: ["Atención Primaria", "Urgencias si es grave"], cuandoAcudirMedico: ["Confusión", "Desmayo", "Orina muy escasa", "Vómitos persistentes"], bibliografia: ["Guías clínicas de hidratación y alteraciones hidroelectrolíticas"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Valora gravedad, causa y necesidad de reposición oral o intravenosa.", intervenciones: ["Rehidratación", "Analítica cuando está indicada", "Tratar la causa de las pérdidas"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La reposición de agua y electrolitos debe adaptarse al tipo y magnitud de las pérdidas.", intervenciones: ["Agua en pérdidas leves", "Solución de rehidratación oral en situaciones apropiadas"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "Los diuréticos vegetales pueden empeorar el déficit de volumen.", intervenciones: ["Evitar diuréticos herbales hasta recuperar hidratación y conocer la causa"], nivelEvidencia: "moderada" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Prevenir pérdidas excesivas y beber según necesidades reduce el riesgo.", intervenciones: ["Aumentar precauciones con calor y ejercicio", "Reponer pérdidas de forma regular"], nivelEvidencia: "alta" }
    }
  },
  {
    id: "alteracion-electrolitos-compatible", nombre: "Alteración de electrolitos compatible",
    descripcion: "Calambres, debilidad muscular, náuseas, confusión o alteraciones del ritmo cardiaco pueden aparecer con cambios importantes de sodio, potasio, magnesio u otros electrolitos. Los síntomas por sí solos no permiten saber cuál está alterado.",
    sintomas: [{ nombre: "Calambres", peso: 1 },{ nombre: "Debilidad muscular", peso: 2 },{ nombre: "Palpitaciones", peso: 2 },{ nombre: "Latidos irregulares", peso: 3 },{ nombre: "Náuseas", peso: 1 },{ nombre: "Confusión", peso: 3 }],
    sintomasAlarma: [{ nombre: "Latidos irregulares", gravedad: "alta" },{ nombre: "Confusión", gravedad: "urgente" },{ nombre: "Desmayo", gravedad: "urgente" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿Tomas diuréticos, laxantes o has tenido vómitos o diarrea importantes?", importancia: 3 },{ texto: "¿Hay enfermedad renal, cardiaca o cambios recientes de medicación?", importancia: 3 }],
    posiblesCausas: ["Vómitos o diarrea", "Diuréticos", "Enfermedad renal", "Alteraciones hormonales", "Exceso o déficit de suplementos", "Cambios de hidratación"], factoresRiesgo: ["Diuréticos", "Enfermedad renal", "Pérdidas digestivas", "Suplementación no controlada"],
    nutricion: ["No corregir potasio o sodio a ciegas con grandes cantidades de alimentos, sales o suplementos"], fitoterapia: ["Revisar plantas diuréticas, laxantes y suplementos minerales"], recomendaciones: ["Solicitar analítica si los síntomas son relevantes o existen factores de riesgo"], nivelEvidencia: "alta",
    contraindicaciones: ["No tomar potasio en suplementos sin conocer función renal y medicación"], interacciones: ["IECA, ARA-II, diuréticos ahorradores de potasio y suplementos de potasio pueden elevar demasiado el potasio"], pruebasMedicasHabituales: ["Sodio", "Potasio", "Magnesio", "Calcio", "Función renal", "ECG si hay palpitaciones o alteraciones del ritmo"], especialistaRecomendado: ["Atención Primaria", "Urgencias si hay arritmia, síncope o confusión"], cuandoAcudirMedico: ["Latidos irregulares", "Desmayo", "Confusión", "Debilidad marcada"], bibliografia: ["Guías clínicas de trastornos electrolíticos"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "Identifica qué electrolito está alterado y corrige la causa y la concentración de forma segura.", intervenciones: ["Analítica", "ECG cuando procede", "Corrección dirigida"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "La corrección depende del electrolito, la causa y la función renal.", intervenciones: ["Ajustar ingesta solo tras identificar el problema"], nivelEvidencia: "alta" },
      natural: { titulo: "Suplementación", marco: "Los minerales no deben suplementarse a dosis altas basándose solo en síntomas inespecíficos.", intervenciones: ["Confirmar déficit y revisar medicación antes de suplementar"], nivelEvidencia: "alta" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Hidratación adecuada y uso responsable de suplementos ayudan a prevenir algunas alteraciones.", intervenciones: ["Evitar abuso de laxantes o diuréticos", "Ajustar hidratación a pérdidas reales"], nivelEvidencia: "moderada" }
    }
  },
  {
    id: "enfermedad-renal-compatible", nombre: "Alteración de función renal compatible",
    descripcion: "Orina espumosa persistente, sangre en orina, disminución de la cantidad de orina o hinchazón pueden justificar estudiar la función renal. Muchas enfermedades renales tempranas no producen síntomas.",
    sintomas: [{ nombre: "Espuma en la orina", peso: 2 },{ nombre: "Hinchazón de piernas", peso: 2 },{ nombre: "Hinchazón alrededor de los ojos", peso: 3 },{ nombre: "Orinar muy poca cantidad", peso: 3 },{ nombre: "Sangre en la orina", peso: 3 },{ nombre: "Cansancio", peso: 1 }],
    sintomasAlarma: [{ nombre: "No puedo orinar", gravedad: "urgente" },{ nombre: "Falta de aire intensa", gravedad: "urgente" },{ nombre: "Confusión", gravedad: "urgente" }], sintomasQueContradicen: [],
    preguntas: [{ texto: "¿La espuma en la orina es persistente y aparece repetidamente?", importancia: 2 },{ texto: "¿Existe hipertensión, diabetes o enfermedad renal previa?", importancia: 3 }],
    posiblesCausas: ["Proteinuria", "Enfermedad renal aguda o crónica", "Alteraciones glomerulares", "Obstrucción urinaria", "Otras causas urinarias"], factoresRiesgo: ["Hipertensión", "Diabetes", "Edad", "Enfermedad cardiovascular", "Antecedentes renales", "Uso de fármacos nefrotóxicos"],
    nutricion: ["No imponer dietas bajas en proteína, potasio o fósforo sin conocer el estado renal", "Controlar exceso de sal cuando esté indicado"], fitoterapia: ["Evitar productos de composición desconocida o potencialmente nefrotóxicos", "Revisar suplementos minerales si existe enfermedad renal"], recomendaciones: ["Solicitar función renal y análisis de orina ante síntomas persistentes"], nivelEvidencia: "alta",
    contraindicaciones: ["Evitar antiinflamatorios y suplementos innecesarios si existe sospecha de lesión renal hasta recibir orientación profesional"], interacciones: ["Muchos medicamentos y suplementos requieren ajuste o precaución en enfermedad renal"], pruebasMedicasHabituales: ["Creatinina y filtrado glomerular estimado", "Orina y cociente albúmina/creatinina", "Electrolitos", "Ecografía según contexto"], especialistaRecomendado: ["Atención Primaria", "Nefrología según resultados", "Urgencias si hay deterioro agudo"], cuandoAcudirMedico: ["Sangre visible en orina", "Orina muy escasa", "Edema progresivo", "Falta de aire", "Confusión"], bibliografia: ["Guías clínicas de enfermedad renal crónica y lesión renal aguda"],
    enfoques: {
      convencional: { titulo: "Medicina convencional", marco: "La enfermedad renal se confirma con análisis de sangre, orina y pruebas dirigidas, no por síntomas aislados.", intervenciones: ["Función renal y orina", "Control de presión arterial y diabetes", "Tratamiento de la causa"], nivelEvidencia: "alta" },
      nutricion: { titulo: "Nutrición", marco: "Las restricciones nutricionales dependen de la fase y del tipo de enfermedad renal.", intervenciones: ["Reducir exceso de sodio cuando esté indicado", "Individualizar proteína, potasio y fósforo"], nivelEvidencia: "alta" },
      natural: { titulo: "Fitoterapia y suplementación", marco: "La función renal altera la eliminación de muchos compuestos y aumenta el riesgo de toxicidad.", intervenciones: ["Revisar todos los suplementos", "Evitar productos potencialmente nefrotóxicos"], nivelEvidencia: "alta" }, medicinaChina: noMostrado,
      estiloVida: { titulo: "Estilo de vida", marco: "Controlar factores cardiovasculares protege la función renal.", intervenciones: ["No fumar", "Actividad física adaptada", "Control de presión arterial y peso"], nivelEvidencia: "alta" }
    }
  }
];