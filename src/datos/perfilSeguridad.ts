export interface PerfilSeguridad {
  edad: string;
  sexo: string;
  medicacion: string;
  suplementos: string;
  alergias: string;
  antecedentes: string;
  embarazoLactancia: boolean;
  enfermedadRenal: boolean;
  enfermedadHepatica: boolean;
  anticoagulantes: boolean;
}

export const PERFIL_SEGURIDAD_KEY = "cuerpoclaro_perfil_salud_v1";
export const PERFIL_SEGURIDAD_EVENT = "cuerpoclaro:perfil-actualizado";

export const perfilSeguridadVacio: PerfilSeguridad = {
  edad: "",
  sexo: "",
  medicacion: "",
  suplementos: "",
  alergias: "",
  antecedentes: "",
  embarazoLactancia: false,
  enfermedadRenal: false,
  enfermedadHepatica: false,
  anticoagulantes: false,
};

export function leerPerfilSeguridad(): PerfilSeguridad {
  if (typeof window === "undefined") return perfilSeguridadVacio;
  try {
    const raw = window.localStorage.getItem(PERFIL_SEGURIDAD_KEY);
    if (!raw) return perfilSeguridadVacio;
    return { ...perfilSeguridadVacio, ...JSON.parse(raw) } as PerfilSeguridad;
  } catch {
    return perfilSeguridadVacio;
  }
}

export function guardarPerfilSeguridad(perfil: PerfilSeguridad) {
  window.localStorage.setItem(PERFIL_SEGURIDAD_KEY, JSON.stringify(perfil));
  window.dispatchEvent(new CustomEvent(PERFIL_SEGURIDAD_EVENT));
}

export function motivosRevisionFitoterapia(perfil: PerfilSeguridad): string[] {
  const motivos: string[] = [];
  if (perfil.medicacion.trim()) motivos.push("medicación habitual");
  if (perfil.anticoagulantes) motivos.push("anticoagulantes o antiagregantes");
  if (perfil.embarazoLactancia) motivos.push("embarazo o lactancia");
  if (perfil.enfermedadRenal) motivos.push("enfermedad renal");
  if (perfil.enfermedadHepatica) motivos.push("enfermedad hepática");
  if (perfil.alergias.trim()) motivos.push("alergias declaradas");
  return motivos;
}
