export type NivelAlarmaGlobal = "precaucion" | "prioritaria" | "urgente";

export interface SenalAlarmaGlobal {
  id: string;
  activadores: string[];
  nivel: NivelAlarmaGlobal;
  titulo: string;
  mensaje: string;
}

export const senalesAlarmaGlobales: SenalAlarmaGlobal[] = [
  {
    id: "pecho-cardiovascular",
    activadores: [
      "Dolor de pecho",
      "Presión en el pecho",
      "Dolor hacia brazo, espalda o mandíbula",
      "Sudor frío",
      "Desmayo",
    ],
    nivel: "urgente",
    titulo: "Síntomas cardiovasculares de alarma",
    mensaje:
      "El dolor o presión en el pecho, especialmente si se acompaña de falta de aire, sudor frío, desmayo o dolor irradiado, requiere valoración médica urgente.",
  },
  {
    id: "respiratoria",
    activadores: ["Falta de aire", "Dolor al respirar"],
    nivel: "urgente",
    titulo: "Dificultad respiratoria",
    mensaje:
      "La dificultad respiratoria importante o de aparición brusca no debe manejarse únicamente con recomendaciones de autocuidado.",
  },
  {
    id: "neurologica",
    activadores: ["Confusión", "Pérdida de fuerza", "Desmayo"],
    nivel: "urgente",
    titulo: "Síntomas neurológicos de alarma",
    mensaje:
      "La confusión, pérdida de fuerza de aparición reciente o pérdida de conciencia requieren valoración médica rápida.",
  },
  {
    id: "sangrado-digestivo",
    activadores: [
      "Sangre roja en las heces",
      "Sangre en las heces",
      "Heces negras",
    ],
    nivel: "prioritaria",
    titulo: "Posible sangrado digestivo",
    mensaje:
      "La presencia de sangre visible o heces negras necesita valoración clínica para determinar su origen.",
  },
  {
    id: "abdomen-agudo",
    activadores: [
      "Dolor abdominal intenso",
      "Muy intenso",
      "No puedo expulsar gases",
    ],
    nivel: "urgente",
    titulo: "Dolor abdominal de alarma",
    mensaje:
      "El dolor abdominal intenso, especialmente con vómitos, distensión o imposibilidad para expulsar gases, puede requerir valoración urgente.",
  },
  {
    id: "deshidratacion",
    activadores: [
      "No puedo retener líquidos",
      "Vómitos repetidos",
      "Orinar muy poca cantidad",
      "Confusión",
    ],
    nivel: "prioritaria",
    titulo: "Riesgo de deshidratación",
    mensaje:
      "La incapacidad para mantener líquidos, la reducción marcada de la orina o el deterioro general requieren valoración médica.",
  },
  {
    id: "deglucion",
    activadores: ["Dificultad para tragar", "Dolor al tragar"],
    nivel: "prioritaria",
    titulo: "Dificultad para tragar",
    mensaje:
      "La dificultad o el dolor al tragar necesitan valoración médica, especialmente si se acompañan de pérdida de peso, sangrado o empeoramiento progresivo.",
  },
  {
    id: "perdida-peso",
    activadores: ["Pérdida de peso"],
    nivel: "precaucion",
    titulo: "Pérdida de peso no explicada",
    mensaje:
      "Una pérdida de peso involuntaria junto con otros síntomas persistentes debe estudiarse y no atribuirse automáticamente a un problema funcional.",
  },
];

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function detectarAlarmasGlobales(datos: string[]): SenalAlarmaGlobal[] {
  const normalizados = datos.map(normalizar);

  return senalesAlarmaGlobales.filter((senal) =>
    senal.activadores.some((activador) => {
      const base = normalizar(activador);
      return normalizados.some((dato) => dato === base || dato.includes(base));
    })
  );
}