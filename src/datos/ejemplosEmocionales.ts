import type { EjemplosCondicion } from "./ejemplosConEvidencia";

export const ejemplosEmocionales: Record<string, EjemplosCondicion> = {
  "ansiedad-compatible": {
    nutricion: [
      { nombre: "Reducir cafeína", utilidad: "Disminuir café, bebidas energéticas y otros estimulantes puede reducir palpitaciones, nerviosismo e insomnio en personas sensibles.", evidencia: "alta" },
      { nombre: "Patrón mediterráneo", utilidad: "Una alimentación basada en verduras, frutas, legumbres, pescado, frutos secos y aceite de oliva apoya la salud general y puede acompañar el manejo de síntomas emocionales.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Lavanda oral estandarizada", utilidad: "Algunos preparados estandarizados de aceite de lavanda han mostrado reducción de síntomas de ansiedad; no equivale a cualquier aceite esencial y debe revisarse su seguridad.", evidencia: "moderada" },
      { nombre: "Manzanilla (Matricaria chamomilla)", utilidad: "Se ha estudiado como apoyo en ansiedad, pero la evidencia clínica todavía es limitada y puede causar alergia en personas sensibles a las asteráceas.", evidencia: "limitada" }
    ]
  },
  "panico-compatible": {
    nutricion: [
      { nombre: "Evitar exceso de cafeína y energéticas", utilidad: "Los estimulantes pueden aumentar palpitaciones, temblor y sensación de activación y precipitar síntomas en personas susceptibles.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Fitoterapia durante una crisis", utilidad: "No existe una planta de acción rápida con evidencia suficiente para sustituir la valoración y las técnicas psicológicas en una crisis de pánico.", evidencia: "insuficiente" }
    ]
  },
  "animo-bajo-compatible": {
    nutricion: [
      { nombre: "Patrón mediterráneo", utilidad: "Puede formar parte del apoyo al tratamiento de la depresión y mejora además factores cardiometabólicos; no sustituye psicoterapia o medicación cuando están indicadas.", evidencia: "moderada" },
      { nombre: "Pescado azul", utilidad: "Aporta EPA y DHA; algunos estudios de omega-3 sugieren beneficio complementario, aunque el efecto no es uniforme.", evidencia: "limitada" }
    ],
    fitoterapia: [
      { nombre: "Hierba de San Juan (Hypericum perforatum)", utilidad: "Puede mejorar síntomas de depresión leve o moderada en algunos estudios, pero tiene numerosas interacciones medicamentosas y no debe utilizarse sin revisión profesional.", evidencia: "moderada" }
    ]
  }
};