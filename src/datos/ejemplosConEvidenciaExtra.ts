import type { EjemplosCondicion } from "./ejemplosConEvidencia";

export const ejemplosConEvidenciaExtra: Record<string, EjemplosCondicion> = {
  "migrana": {
    nutricion: [
      { nombre: "Regularidad de comidas e hidratación", utilidad: "Evitar ayunos y deshidratación puede reducir desencadenantes en personas susceptibles.", evidencia: "moderada" },
      { nombre: "Patrón rico en omega-3", utilidad: "Algunos estudios sugieren que una dieta con más omega-3 puede reducir carga de migraña, aunque la evidencia aún es limitada.", evidencia: "limitada" }
    ],
    fitoterapia: [
      { nombre: "Magnesio", utilidad: "Puede ayudar a prevenir migrañas en algunas personas, sobre todo en determinados perfiles.", evidencia: "limitada" },
      { nombre: "Riboflavina (vitamina B2)", utilidad: "Puede reducir la frecuencia de migrañas en algunas personas cuando se usa como prevención.", evidencia: "limitada" },
      { nombre: "Matricaria (feverfew)", utilidad: "Se ha estudiado para prevención de migraña, pero los resultados son variables.", evidencia: "limitada" }
    ]
  },
  "cefalea-tensional": {
    nutricion: [
      { nombre: "Agua y comidas regulares", utilidad: "Corregir deshidratación o ayunos que actúan como desencadenantes puede disminuir episodios en algunas personas.", evidencia: "moderada" }
    ]
  },
  "dolor-articular-degenerativo": {
    nutricion: [
      { nombre: "Pérdida de peso mediante patrón mediterráneo", utilidad: "En personas con exceso de peso puede reducir carga sobre articulaciones y mejorar dolor y función.", evidencia: "alta" },
      { nombre: "Pescado azul, aceite de oliva y frutos secos", utilidad: "Forman parte de un patrón cardiometabólico saludable; su efecto directo sobre la artrosis es más modesto.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Curcumina", utilidad: "Algunos estudios muestran reducción de dolor y rigidez, pero las formulaciones son muy variables y falta evidencia de mayor calidad.", evidencia: "limitada" },
      { nombre: "Boswellia serrata", utilidad: "Puede reducir dolor en algunos estudios pequeños de artrosis; todavía falta evidencia de alta calidad.", evidencia: "insuficiente" }
    ]
  },
  "sobrecarga-muscular": {
    nutricion: [
      { nombre: "Proteína suficiente", utilidad: "Ayuda a la reparación y adaptación muscular tras ejercicio o sobrecarga cuando la ingesta es adecuada.", evidencia: "alta" },
      { nombre: "Agua y electrolitos según pérdidas", utilidad: "La hidratación adecuada favorece la recuperación cuando ha habido sudoración o ejercicio prolongado.", evidencia: "alta" }
    ]
  },
  "insuficiencia-venosa": {
    nutricion: [
      { nombre: "Patrón mediterráneo y control de peso", utilidad: "Ayudan a controlar factores metabólicos y de peso que pueden empeorar la pesadez de piernas.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Castaño de Indias estandarizado (Aesculus hippocastanum)", utilidad: "Extractos estandarizados pueden reducir edema, dolor y pesadez en insuficiencia venosa crónica.", evidencia: "moderada" }
    ]
  },
  "cistitis": {
    nutricion: [
      { nombre: "Hidratación adecuada", utilidad: "Puede ayudar como medida de apoyo y prevención en personas sin restricción de líquidos.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Arándano rojo", utilidad: "Puede reducir recurrencias de infección urinaria en algunas mujeres con episodios repetidos; no trata una infección activa complicada.", evidencia: "moderada" }
    ]
  },
  "colico-renal": {
    nutricion: [
      { nombre: "Agua suficiente en prevención", utilidad: "Una mayor producción de orina reduce el riesgo de recurrencia de cálculos en muchas personas.", evidencia: "alta" },
      { nombre: "Cítricos / citrato dietético", utilidad: "El citrato puede ser útil en prevención de determinados cálculos, según composición y estudio metabólico.", evidencia: "moderada" }
    ]
  },
  "sintomas-urinarios-bajos": {
    nutricion: [
      { nombre: "Reducir cafeína y alcohol si empeoran síntomas", utilidad: "Puede disminuir urgencia, frecuencia y nocturia en algunas personas.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Serenoa repens", utilidad: "Puede considerarse si los síntomas se relacionan con hiperplasia prostática, aunque el efecto es variable y depende del preparado.", evidencia: "limitada" }
    ]
  },
  "rinitis-alergica-compatible": {
    nutricion: [
      { nombre: "Dieta variada sin exclusiones innecesarias", utilidad: "No hay evidencia para eliminar lácteos o gluten de rutina si no existe alergia o intolerancia demostrada.", evidencia: "alta" }
    ]
  },
  "sinusitis-compatible": {
    nutricion: [
      { nombre: "Hidratación adecuada", utilidad: "Ayuda a mantener secreciones menos espesas, aunque no sustituye el tratamiento de la causa.", evidencia: "moderada" }
    ]
  },
  "bronquitis-aguda": {
    nutricion: [
      { nombre: "Miel", utilidad: "Puede reducir la tos aguda en adultos y niños mayores de un año.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Tomillo", utilidad: "Algunos preparados estandarizados se han utilizado para tos productiva, con evidencia clínica limitada.", evidencia: "limitada" }
    ]
  },
  "asma-compatible": {
    nutricion: [
      { nombre: "Patrón mediterráneo y control de peso", utilidad: "Puede mejorar salud general y control del asma en personas con exceso de peso, aunque no sustituye inhaladores.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Boswellia", utilidad: "Se ha estudiado para síntomas de asma, pero la evidencia es insuficiente para recomendarla como tratamiento.", evidencia: "insuficiente" }
    ]
  },
  "cervicalgia": {
    nutricion: [
      { nombre: "Patrón mediterráneo", utilidad: "Apoya salud general, pero no existe un alimento específico demostrado para tratar la cervicalgia mecánica.", evidencia: "limitada" }
    ]
  },
  "lumbalgia": {
    nutricion: [
      { nombre: "Control de peso con alimentación equilibrada", utilidad: "Puede ser útil si existe exceso de peso, aunque la dieta no es un tratamiento directo del dolor lumbar.", evidencia: "moderada" }
    ]
  },
  "ciatica": {
    nutricion: [
      { nombre: "Alimentación equilibrada", utilidad: "No existe un alimento concreto demostrado para resolver una ciática; el tratamiento se centra en la causa mecánica o neurológica.", evidencia: "alta" }
    ]
  },
  "vertigo-posicional": {
    nutricion: [
      { nombre: "Hidratación adecuada", utilidad: "Puede evitar empeoramiento por deshidratación, pero no corrige el vértigo posicional benigno.", evidencia: "moderada" }
    ]
  },
  "otitis-compatible": {
    fitoterapia: [
      { nombre: "Remedios herbales en el oído", utilidad: "No existe una opción herbal segura y demostrada que sustituya la valoración y el tratamiento indicado; evitar preparados no estériles.", evidencia: "insuficiente" }
    ]
  },
  "conjuntivitis-compatible": {
    fitoterapia: [
      { nombre: "Preparados herbales o infusiones oculares", utilidad: "No deben utilizarse como tratamiento porque no son estériles y pueden irritar o contaminar el ojo.", evidencia: "alta" }
    ]
  },
  "desprendimiento-retina-compatible": {
    fitoterapia: [
      { nombre: "Fitoterapia", utilidad: "No existe una planta capaz de reparar un desprendimiento de retina; la atención oftalmológica urgente es imprescindible.", evidencia: "alta" }
    ]
  },
  "pielonefritis": {
    fitoterapia: [
      { nombre: "Fitoterapia", utilidad: "No existe una planta que sustituya el tratamiento de una infección renal; no debe retrasarse la valoración médica.", evidencia: "alta" }
    ]
  },
  "urticaria-compatible": {
    fitoterapia: [
      { nombre: "Fitoterapia", utilidad: "No hay una planta de elección con evidencia suficiente y algunos extractos pueden desencadenar alergia.", evidencia: "insuficiente" }
    ]
  },
  "anafilaxia-posible": {
    fitoterapia: [
      { nombre: "Fitoterapia", utilidad: "No tiene ningún papel como sustituto del tratamiento urgente de una anafilaxia.", evidencia: "alta" }
    ]
  }
};