import type { ApoyoNutricionFitoterapia } from "./apoyoNutricionFitoterapia";

export const apoyoBucodental: Record<string, ApoyoNutricionFitoterapia> = {
  "gingivitis-periodontal-compatible": {
    nutricion: [
      "Mantener una alimentación variada con verduras, fruta, legumbres, pescado, huevos, lácteos o alternativas enriquecidas y frutos secos según tolerancia.",
      "Reducir la frecuencia de bebidas azucaradas, dulces, caramelos y picoteo azucarado entre comidas ayuda a disminuir la exposición de los dientes a azúcares fermentables.",
      "Alimentos ricos en vitamina C —pimiento, kiwi, cítricos, fresas, brócoli— pueden formar parte de una dieta saludable; una encía que sangra de forma persistente no debe atribuirse automáticamente a falta de vitamina C.",
      "Si existe diabetes, un buen control glucémico forma parte del manejo del riesgo periodontal."
    ],
    fitoterapia: [
      "Los colutorios o extractos vegetales pueden estudiarse como complemento, pero no sustituyen el cepillado, la limpieza interdental ni la eliminación profesional de cálculo.",
      "Evitar aceites esenciales concentrados directamente sobre encías inflamadas por riesgo de irritación.",
      "No usar productos naturales para retrasar una valoración si hay movilidad dental, pus, dolor progresivo o inflamación importante."
    ],
    precauciones: ["El sangrado gingival persistente merece valoración dental; anticoagulantes o antiagregantes no deben suspenderse por cuenta propia."]
  },
  "absceso-dental-compatible": {
    nutricion: [
      "Mientras se recibe atención dental, elegir alimentos blandos y templados como purés, yogur, huevo, pescado blando, arroz o verduras cocidas si masticar resulta doloroso.",
      "Mantener hidratación normal y evitar alimentos extremadamente fríos, calientes o duros si desencadenan dolor.",
      "La dieta no elimina el foco de un absceso dental."
    ],
    fitoterapia: [
      "No intentar curar un absceso con clavo, ajo, aceites esenciales u otros remedios aplicados directamente sobre la encía: pueden irritar o quemar la mucosa.",
      "No sustituir el tratamiento odontológico por plantas o suplementos.",
      "Una infección dental puede necesitar drenaje, endodoncia, extracción u otro tratamiento del foco; los antibióticos solo se utilizan cuando están indicados."
    ],
    precauciones: ["Hinchazón de cara o cuello, fiebre, dificultad para tragar, respirar o abrir la boca requieren atención rápida."]
  },
  "aftas-orales-compatible": {
    nutricion: [
      "Durante el episodio, elegir alimentos blandos y poco irritantes y reducir temporalmente picantes, alcohol, alimentos muy ácidos o muy salados si aumentan el dolor.",
      "Si las aftas son recurrentes, valorar posibles déficits de hierro, vitamina B12 o folato en vez de suplementarlos a ciegas.",
      "Fuentes de hierro incluyen legumbres, marisco y carnes; B12, pescado, huevos, carnes y lácteos; folato, legumbres, hojas verdes, brócoli y espárragos."
    ],
    fitoterapia: [
      "Evitar aceites esenciales sin diluir, alcohol fuerte y productos cáusticos sobre la úlcera.",
      "Los preparados calmantes de mucosa pueden aliviar síntomas en algunos casos, pero no deben ocultar una lesión que persiste.",
      "No atribuir a una simple afta una úlcera que no cura en dos o tres semanas."
    ],
    precauciones: ["Úlceras muy grandes, muy frecuentes, acompañadas de fiebre o que no curan en 2-3 semanas necesitan valoración."]
  },
  "candidiasis-oral-compatible": {
    nutricion: [
      "Mantener una alimentación suficiente y variada; las denominadas dietas 'anticándida' restrictivas no sustituyen el tratamiento antifúngico cuando está indicado.",
      "Si existe diabetes, controlar adecuadamente la glucosa puede reducir un factor predisponente importante.",
      "Yogur y otros fermentados pueden formar parte de la dieta si se toleran, pero no deben presentarse como tratamiento equivalente a un antifúngico."
    ],
    fitoterapia: [
      "No sustituir un antifúngico indicado por aceite de árbol del té, aceites esenciales, bicarbonato concentrado u otros remedios potencialmente irritantes.",
      "Revisar la causa si la candidiasis se repite: antibióticos, corticoides inhalados, prótesis, boca seca, diabetes o inmunosupresión pueden influir.",
      "Enjuagar la boca después de usar corticoides inhalados es una medida preventiva útil."
    ],
    precauciones: ["Dificultad para tragar, fiebre, inmunosupresión o recurrencias frecuentes requieren valoración médica u odontológica."]
  }
};