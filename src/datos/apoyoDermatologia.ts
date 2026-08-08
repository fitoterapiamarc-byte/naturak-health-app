import type { ApoyoNutricionFitoterapia } from "./apoyoNutricionFitoterapia";

export const apoyoDermatologia: Record<string, ApoyoNutricionFitoterapia> = {
  "dermatitis-eczema": {
    nutricion: [
      "Mantener una dieta variada con verduras, fruta, legumbres, cereales integrales, pescado, huevos y frutos secos si se toleran.",
      "No eliminar leche, gluten, huevo u otros alimentos solo por tener eczema: las exclusiones sin una alergia demostrada pueden causar déficits.",
      "Pescado azul —sardina, caballa o salmón—, nueces y aceite de oliva encajan en un patrón saludable, pero no sustituyen el tratamiento de la piel."
    ],
    fitoterapia: [
      "Priorizar emolientes simples y sin perfume para proteger la barrera cutánea.",
      "Evitar aceites esenciales y extractos concentrados sobre piel inflamada, agrietada o con heridas.",
      "Los productos vegetales también pueden provocar dermatitis de contacto; suspenderlos si empeoran picor o enrojecimiento."
    ],
    precauciones: ["Fiebre, supuración extensa, dolor intenso o hinchazón de cara/labios requieren valoración médica."]
  },
  "urticaria": {
    nutricion: [
      "No hacer dietas de exclusión amplias sin identificar un alimento desencadenante reproducible.",
      "Registrar alimento, medicamento, picadura o suplemento nuevo si existe una relación temporal clara con las ronchas.",
      "Mantener la alimentación habitual salvo un desencadenante conocido; las dietas muy restrictivas no son un tratamiento rutinario de la urticaria."
    ],
    fitoterapia: [
      "No iniciar plantas o suplementos nuevos durante un episodio porque también pueden desencadenar reacciones.",
      "No existe un remedio vegetal que sustituya el tratamiento de una reacción alérgica grave.",
      "Evitar preparados tópicos irritantes sobre las ronchas."
    ],
    precauciones: ["Dificultad respiratoria, desmayo o hinchazón de lengua/garganta son una urgencia."]
  },
  "psoriasis-compatible": {
    nutricion: [
      "Usar como base un patrón mediterráneo: verduras, fruta, legumbres, cereales integrales, pescado, aceite de oliva y frutos secos.",
      "Si existe exceso de peso, una reducción gradual puede mejorar la salud cardiometabólica y en algunas personas facilitar el control de la psoriasis.",
      "Priorizar pescado azul como sardina, caballa o salmón dentro de una dieta variada y limitar el exceso de alcohol.",
      "No eliminar gluten salvo enfermedad celíaca, sensibilidad diagnosticada u otra indicación concreta."
    ],
    fitoterapia: [
      "No aplicar aceites esenciales o preparados irritantes sobre placas activas.",
      "Revisar cualquier suplemento si se utilizan tratamientos sistémicos o biológicos por posibles interacciones.",
      "La fitoterapia puede ser complementaria, pero no debe sustituir tratamientos eficaces en psoriasis moderada o grave."
    ],
    precauciones: ["Dolor o inflamación articular persistente puede indicar artritis psoriásica y requiere valoración."]
  }
};