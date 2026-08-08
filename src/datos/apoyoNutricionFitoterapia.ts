export interface ApoyoNutricionFitoterapia {
  nutricion: string[];
  fitoterapia: string[];
  precauciones?: string[];
}

/**
 * Contenido complementario para hacer más prácticos los bloques de Nutrición
 * y Fitoterapia sin convertirlos en prescripciones ni sustituir la valoración
 * clínica. Solo se añaden medidas con un perfil razonable de seguridad y se
 * explicitan límites cuando la evidencia es modesta.
 */
export const apoyoNutricionFitoterapia: Record<string, ApoyoNutricionFitoterapia> = {
  "hiperglucemia-diabetes-compatible": {
    nutricion: [
      "Usar agua como bebida habitual y reducir refrescos, zumos y otras bebidas azucaradas.",
      "Priorizar verduras, legumbres, frutos secos naturales, cereales integrales y fruta entera frente a productos refinados.",
      "Combinar los alimentos ricos en hidratos de carbono con fibra, proteína o grasas insaturadas puede ayudar a moderar la respuesta glucémica.",
      "Repartir la ingesta según el tratamiento y las necesidades personales; no es necesario eliminar todos los hidratos de carbono."
    ],
    fitoterapia: [
      "La fitoterapia no sustituye el diagnóstico ni la medicación antidiabética cuando está indicada.",
      "Canela, berberina y otros productos comercializados para la glucosa tienen evidencia y seguridad variables; deben revisarse especialmente si ya se toman antidiabéticos.",
      "Evitar combinar varios suplementos con efecto hipoglucemiante sin seguimiento de glucosa."
    ],
    precauciones: ["Si existe medicación antidiabética, cualquier producto que reduzca glucosa puede aumentar el riesgo de hipoglucemia."]
  },
  "hipoglucemia-compatible": {
    nutricion: [
      "En una persona consciente con hipoglucemia confirmada, seguir el plan de corrección rápida indicado por su equipo sanitario.",
      "Después de corregir el episodio, revisar si hubo ayuno, retraso de comida, ejercicio o alcohol para prevenir recurrencias.",
      "No dar alimentos ni bebidas por boca a una persona inconsciente o con dificultad para tragar."
    ],
    fitoterapia: [
      "No hay un remedio fitoterápico apropiado para corregir una hipoglucemia aguda.",
      "Revisar y evitar temporalmente productos con posible efecto hipoglucemiante hasta aclarar la causa si los episodios se repiten."
    ],
    precauciones: ["Confusión, convulsiones o pérdida de conciencia requieren atención urgente."]
  },
  "hipotiroidismo-compatible": {
    nutricion: [
      "Mantener un aporte normal de yodo mediante una dieta equilibrada; más yodo no significa mejor función tiroidea.",
      "Asegurar una alimentación suficiente en proteínas, hierro, vitamina B12, selenio y zinc, corrigiendo déficits demostrados.",
      "Si se toma levotiroxina, respetar la pauta de administración y separar hierro o calcio cuando así se haya indicado para evitar problemas de absorción."
    ],
    fitoterapia: [
      "No existe una planta que sustituya de forma equivalente a la hormona tiroidea cuando esta es necesaria.",
      "Evitar algas y preparados con cantidades altas o poco claras de yodo.",
      "Revisar suplementos denominados 'thyroid support': algunos pueden aportar yodo elevado u otros ingredientes no apropiados."
    ],
    precauciones: ["No iniciar yodo a dosis altas basándose únicamente en cansancio, aumento de peso o caída del cabello."]
  },
  "hipertiroidismo-compatible": {
    nutricion: [
      "Si existe pérdida de peso, mantener una ingesta energética y proteica suficiente mientras se estudia y trata la causa.",
      "Evitar suplementos con dosis altas de yodo y revisar el contenido de algas o preparados multiminerales.",
      "Limitar cafeína y bebidas energéticas si aumentan temblor, ansiedad o palpitaciones."
    ],
    fitoterapia: [
      "No utilizar estimulantes vegetales para combatir el cansancio cuando hay taquicardia o palpitaciones.",
      "La fitoterapia no sustituye el tratamiento de un hipertiroidismo confirmado.",
      "Revisar cualquier producto con yodo o ingredientes estimulantes antes de utilizarlo."
    ],
    precauciones: ["Palpitaciones intensas, dolor torácico, desmayo o confusión requieren valoración rápida."]
  },
  "deshidratacion-compatible": {
    nutricion: [
      "Reponer líquidos de forma progresiva y frecuente cuando la persona puede beber con seguridad.",
      "Cuando existen pérdidas relevantes por vómitos o diarrea, una solución de rehidratación oral formulada adecuadamente repone agua y electrolitos mejor que bebidas muy azucaradas.",
      "Mantener alimentos fáciles de tolerar y reintroducir la dieta habitual según mejore el cuadro."
    ],
    fitoterapia: [
      "Evitar plantas diuréticas mientras exista posible deshidratación.",
      "No utilizar preparados laxantes si hay diarrea o pérdidas de líquidos.",
      "La prioridad es reponer líquidos y tratar la causa, no añadir suplementos innecesarios."
    ],
    precauciones: ["En insuficiencia cardiaca o renal con restricción de líquidos, la reposición debe individualizarse."]
  },
  "alteracion-electrolitos-compatible": {
    nutricion: [
      "No intentar corregir potasio, sodio o magnesio únicamente por los síntomas: primero hay que identificar qué electrolito está alterado.",
      "Tras pérdidas digestivas leves, recuperar alimentación e hidratación normales suele aportar electrolitos de forma segura.",
      "En alteraciones confirmadas, la dieta debe adaptarse al electrolito afectado y a la función renal."
    ],
    fitoterapia: [
      "Revisar plantas diuréticas, laxantes y suplementos minerales porque pueden modificar el equilibrio de electrolitos.",
      "No tomar suplementos de potasio sin conocer función renal y medicación.",
      "Los calambres por sí solos no demuestran déficit de magnesio."
    ],
    precauciones: ["IECA, ARA-II y diuréticos ahorradores de potasio pueden aumentar el riesgo de hiperpotasemia si se añade potasio."]
  },
  "enfermedad-renal-compatible": {
    nutricion: [
      "Reducir el exceso de sal puede ser útil, especialmente si hay hipertensión o edema.",
      "No restringir proteína, potasio o fósforo por cuenta propia: las necesidades cambian según la función renal y el tratamiento.",
      "Una alimentación cardioprotectora y el control de diabetes e hipertensión también ayudan a proteger el riñón."
    ],
    fitoterapia: [
      "Evitar preparados de composición desconocida y productos potencialmente nefrotóxicos.",
      "Revisar todos los suplementos porque una función renal reducida puede alterar su eliminación.",
      "No usar plantas diuréticas como tratamiento del edema sin conocer la causa."
    ],
    precauciones: ["La enfermedad renal aumenta el riesgo de acumulación de minerales y de interacciones con medicamentos."]
  },
  "insomnio-compatible": {
    nutricion: [
      "Limitar cafeína desde varias horas antes de dormir si existe sensibilidad; también revisar té, cola, chocolate y bebidas energéticas.",
      "Evitar usar alcohol como ayuda para dormir: puede facilitar el inicio del sueño pero empeorar su calidad y fragmentarlo.",
      "Si el reflujo o la digestión pesada interfieren, evitar cenas muy copiosas inmediatamente antes de acostarse."
    ],
    fitoterapia: [
      "Melatonina puede ser útil en situaciones concretas, especialmente relacionadas con el ritmo circadiano; no es una solución universal para todo insomnio.",
      "Valeriana y otros sedantes vegetales tienen evidencia variable y pueden producir somnolencia.",
      "No mezclar varios productos sedantes ni combinarlos con alcohol, hipnóticos u otros depresores sin revisar seguridad."
    ],
    precauciones: ["El insomnio crónico responde mejor a un abordaje conductual estructurado que a acumular suplementos sedantes."]
  },
  "apnea-sueno-compatible": {
    nutricion: [
      "Cuando existe exceso de peso, una reducción gradual y sostenible puede disminuir la gravedad de la apnea en muchas personas.",
      "Evitar alcohol cerca de la hora de dormir porque puede empeorar el colapso de la vía aérea.",
      "No es necesario seguir dietas extremas: el objetivo es mejorar peso y salud metabólica de forma sostenible cuando proceda."
    ],
    fitoterapia: [
      "No existe una planta o suplemento que sustituya CPAP u otros tratamientos indicados para una apnea significativa.",
      "Evitar utilizar sedantes naturales para 'dormir más profundamente' si hay pausas respiratorias o ahogos nocturnos.",
      "Revisar cualquier producto que aumente la sedación."
    ],
    precauciones: ["La somnolencia al conducir es una señal de riesgo y requiere dejar de conducir hasta estar adecuadamente valorado y controlado."]
  },
  "rinitis-alergica-compatible": {
    nutricion: [
      "Mantener una dieta variada; no eliminar lácteos, gluten u otros grupos de alimentos sin una relación demostrada con los síntomas.",
      "Una alimentación equilibrada apoya la salud general, pero no sustituye el control del alérgeno ni el tratamiento indicado."
    ],
    fitoterapia: [
      "Los lavados nasales con solución salina tienen un perfil de seguridad razonable como medida complementaria.",
      "Los extractos vegetales comercializados para alergia tienen evidencia desigual y también pueden provocar reacciones alérgicas.",
      "Comprobar siempre la composición si existe alergia conocida a plantas de una determinada familia."
    ],
    precauciones: ["Dificultad respiratoria o hinchazón de lengua/garganta no deben tratarse como una rinitis simple."]
  },
  "gastroenteritis-aguda-compatible": {
    nutricion: [
      "Priorizar líquidos y, cuando proceda, solución de rehidratación oral en pequeñas tomas frecuentes.",
      "Reintroducir progresivamente la alimentación habitual según tolerancia; no es necesario mantener ayunos prolongados.",
      "Evitar temporalmente alcohol y comidas que claramente empeoren náuseas o diarrea."
    ],
    fitoterapia: [
      "Evitar plantas laxantes y preparados irritantes.",
      "No utilizar fitoterapia para retrasar atención cuando hay sangre en heces, deshidratación importante, fiebre alta o deterioro.",
      "Cualquier producto antidiarreico o complemento debe valorarse según la causa y la medicación habitual."
    ],
    precauciones: ["Niños, personas mayores y personas frágiles pueden deshidratarse con mayor rapidez."]
  }
};