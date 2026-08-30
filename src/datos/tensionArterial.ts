export type NivelTension =
  | "sin-datos"
  | "invalida"
  | "baja"
  | "favorable"
  | "vigilar"
  | "alta"
  | "muy-alta"
  | "emergencia";

export type ResultadoTension = {
  nivel: NivelTension;
  titulo: string;
  accion: string;
  detalle: string;
  icono: string;
  guardable: boolean;
};

export type LecturaTension = {
  id: string;
  fecha: string;
  sistolica: number;
  diastolica: number;
  pulso?: number;
  brazo?: "izquierdo" | "derecho" | "";
  notas?: string;
  nivel: NivelTension;
};

export type ResumenTension = {
  cantidad: number;
  sistolicaMedia: number;
  diastolicaMedia: number;
  pulsoMedio?: number;
  desde: string;
};

export const CLAVE_LECTURAS_TENSION = "cuerpoclaro-tension-lecturas-v1";

const sinDatos: ResultadoTension = {
  nivel: "sin-datos",
  titulo: "Introduce las dos cifras",
  accion: "",
  detalle: "Necesitamos la presión sistólica y la diastólica.",
  icono: "🩺",
  guardable: false,
};

export function interpretarTension(
  sistolica: number,
  diastolica: number,
  sintomasAlarma = false,
): ResultadoTension {
  if (!Number.isFinite(sistolica) || !Number.isFinite(diastolica) || !sistolica || !diastolica) {
    return sinDatos;
  }

  if (
    sistolica < 50 ||
    sistolica > 260 ||
    diastolica < 30 ||
    diastolica > 180 ||
    diastolica >= sistolica
  ) {
    return {
      nivel: "invalida",
      titulo: "Revisa las cifras",
      accion: "Comprueba la pantalla del tensiómetro y vuelve a escribirlas.",
      detalle:
        "La sistólica debe ser mayor que la diastólica. La aplicación también descarta valores fuera del intervalo que puede introducirse.",
      icono: "↻",
      guardable: false,
    };
  }

  if (sistolica >= 180 || diastolica >= 120) {
    if (sintomasAlarma) {
      return {
        nivel: "emergencia",
        titulo: "Posible emergencia hipertensiva",
        accion: "Llama al 112 ahora. No esperes a que la presión baje sola.",
        detalle:
          "Las cifras muy elevadas acompañadas de dolor de pecho, falta de aire, debilidad o adormecimiento, dificultad para hablar, confusión o alteración visual importante requieren atención inmediata.",
        icono: "🚑",
        guardable: true,
      };
    }
    return {
      nivel: "muy-alta",
      titulo: "Cifra muy elevada",
      accion: "Espera al menos 1 minuto y repite la medición sin hablar.",
      detalle:
        "Si la segunda lectura sigue alrededor de 180/120 mmHg o más, contacta de inmediato con un profesional sanitario. Si aparece algún síntoma de alarma, llama al 112.",
      icono: "🚨",
      guardable: true,
    };
  }

  if (sistolica < 90 || diastolica < 60) {
    return {
      nivel: "baja",
      titulo: "Lectura baja",
      accion: "Valora cómo te encuentras y repite la medición correctamente.",
      detalle:
        "En algunas personas puede ser habitual. Si aparece con desmayo, confusión, debilidad intensa, dolor de pecho o falta de aire, necesita valoración urgente.",
      icono: "↓",
      guardable: true,
    };
  }

  // En automedida domiciliaria, un promedio repetido de 135/85 mmHg o más
  // se considera por encima del umbral orientativo. Una lectura aislada no diagnostica.
  if (sistolica >= 135 || diastolica >= 85) {
    return {
      nivel: "alta",
      titulo: "Por encima del umbral domiciliario",
      accion: "Repite y registra nuevas mediciones.",
      detalle:
        "Una sola lectura no diagnostica hipertensión. Si el promedio de varios días se mantiene en estas cifras, conviene consultarlo con un profesional sanitario.",
      icono: "⚠️",
      guardable: true,
    };
  }

  if (sistolica >= 130 || diastolica >= 80) {
    return {
      nivel: "vigilar",
      titulo: "Conviene vigilar",
      accion: "Comprueba la tendencia con nuevas mediciones.",
      detalle:
        "Está cerca del umbral domiciliario. La valoración depende del promedio de varias mediciones y de la situación individual.",
      icono: "👀",
      guardable: true,
    };
  }

  return {
    nivel: "favorable",
    titulo: "Lectura orientativamente favorable",
    accion: "Mantén el seguimiento habitual.",
    detalle:
      "Una lectura favorable no permite suspender tratamiento ni descarta hipertensión si ya ha sido diagnosticada.",
    icono: "✓",
    guardable: true,
  };
}

export function calcularResumenTension(
  lecturas: LecturaTension[],
  dias = 7,
  ahora = new Date(),
): ResumenTension | null {
  const limite = new Date(ahora);
  limite.setDate(limite.getDate() - dias);
  const recientes = lecturas.filter((lectura) => {
    const fecha = new Date(lectura.fecha);
    return Number.isFinite(fecha.getTime()) && fecha >= limite && fecha <= ahora;
  });

  if (!recientes.length) return null;

  const pulsos = recientes
    .map((lectura) => lectura.pulso)
    .filter((pulso): pulso is number => typeof pulso === "number" && Number.isFinite(pulso));

  return {
    cantidad: recientes.length,
    sistolicaMedia: Math.round(
      recientes.reduce((total, lectura) => total + lectura.sistolica, 0) / recientes.length,
    ),
    diastolicaMedia: Math.round(
      recientes.reduce((total, lectura) => total + lectura.diastolica, 0) / recientes.length,
    ),
    pulsoMedio: pulsos.length
      ? Math.round(pulsos.reduce((total, pulso) => total + pulso, 0) / pulsos.length)
      : undefined,
    desde: limite.toISOString(),
  };
}

