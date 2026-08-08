export type NivelRespaldo = "alta" | "moderada" | "limitada" | "tradicional" | "no_establecida";

export interface FuenteReferencia {
  id: string;
  nombre: string;
  ambito: "medicina" | "nutricion" | "fitoterapia" | "suplementos" | "seguridad";
  descripcion: string;
  url: string;
}

export const fuentesReferencia: FuenteReferencia[] = [
  {
    id: "msd",
    nombre: "Manual MSD",
    ambito: "medicina",
    descripcion: "Referencia clínica general para síntomas, diagnóstico diferencial, señales de alarma y tratamiento convencional.",
    url: "https://www.msdmanuals.com/es"
  },
  {
    id: "ema-hmpc",
    nombre: "EMA / HMPC",
    ambito: "fitoterapia",
    descripcion: "Monografías europeas de plantas medicinales con usos reconocidos, uso tradicional, seguridad, contraindicaciones e interacciones.",
    url: "https://www.ema.europa.eu/en/human-regulatory-overview/herbal-medicinal-products/european-union-monographs-list-entries"
  },
  {
    id: "nih-ods",
    nombre: "NIH Office of Dietary Supplements",
    ambito: "suplementos",
    descripcion: "Fichas basadas en evidencia sobre vitaminas, minerales, botánicos, dosis, seguridad e interacciones.",
    url: "https://ods.od.nih.gov/factsheets/list-all/"
  },
  {
    id: "nccih",
    nombre: "NCCIH",
    ambito: "fitoterapia",
    descripcion: "Evaluación de terapias complementarias, plantas y suplementos con énfasis en evidencia y seguridad.",
    url: "https://www.nccih.nih.gov/health/herbsataglance"
  },
  {
    id: "medlineplus",
    nombre: "MedlinePlus",
    ambito: "seguridad",
    descripcion: "Información sanitaria y de suplementos para contrastar usos, efectos adversos e interacciones.",
    url: "https://medlineplus.gov/spanish/"
  }
];

export const criterioValidacion = {
  medicina: "La orientación clínica debe coincidir con fuentes médicas reconocidas y priorizar señales de alarma, diagnóstico diferencial y derivación cuando corresponda.",
  nutricion: "Las recomendaciones deben usar alimentos concretos como guía cuando exista una relación razonable con el cuadro, evitando dietas de exclusión o suplementos innecesarios.",
  fitoterapia: "Cada planta o suplemento debe diferenciar evidencia clínica, evidencia limitada y uso tradicional, además de revisar contraindicaciones e interacciones.",
  seguridad: "Cuando una intervención natural pueda retrasar atención o empeorar un cuadro, la app debe bloquearla o mostrarla en segundo plano.",
  transparencia: "Si las fuentes discrepan o la evidencia es insuficiente, la app debe indicarlo en lugar de presentar una recomendación como certeza."
};

export const leyendaRespaldo: Record<NivelRespaldo, string> = {
  alta: "Respaldado por guías clínicas, revisiones consistentes o evidencia de alta calidad.",
  moderada: "Existe evidencia útil, pero con limitaciones o efecto variable.",
  limitada: "La evidencia disponible es escasa, heterogénea o no permite conclusiones firmes.",
  tradicional: "Uso tradicional documentado; no equivale a eficacia clínica demostrada.",
  no_establecida: "No se ha establecido un beneficio fiable para esta indicación."
};
