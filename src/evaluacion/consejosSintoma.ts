export interface FuenteConsejoSintoma {
  nombre: string;
  url: string;
}

export interface ConsejoSintoma {
  id: string;
  titulo: string;
  activadores: string[];
  descripcion: string;
  autocuidado: string[];
  consultar: string[];
  urgente: string[];
  fuentes: FuenteConsejoSintoma[];
}

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const consejosSintoma: ConsejoSintoma[] = [
  {
    id: "dolor-espalda-simple",
    titulo: "Consejos generales para un dolor de espalda simple",
    activadores: ["Dolor de espalda", "Dolor lumbar"],
    descripcion:
      "Un dolor de espalda aislado no permite saber la causa. Estas medidas son apropiadas cuando el dolor es leve o moderado, no comenzó tras un accidente importante y no hay señales de alarma.",
    autocuidado: [
      "Mantén una actividad suave y continúa con las tareas habituales hasta donde el dolor lo permita.",
      "Evita permanecer en cama durante periodos prolongados; cambia de postura con frecuencia.",
      "Puedes probar calor o frío local, siempre envuelto en una tela para proteger la piel, y usar lo que te alivie mejor.",
      "Reduce temporalmente las cargas pesadas y los movimientos que empeoren claramente el dolor; recupera la actividad de forma gradual.",
      "Si necesitas un analgésico, consulta antes con un profesional sanitario o farmacéutico para comprobar cuál es adecuado según tu medicación y enfermedades.",
    ],
    consultar: [
      "Si no mejora después de unas semanas, empeora o impide realizar las actividades diarias.",
      "Si aparece fiebre, mal estado general, pérdida de peso sin explicación o dolor que empeora por la noche.",
      "Si el dolor está en la parte alta de la espalda, entre los hombros, o existe una preocupación importante por su causa.",
    ],
    urgente: [
      "Debilidad, hormigueo o pérdida de sensibilidad en ambas piernas.",
      "Pérdida de sensibilidad alrededor de los genitales o del ano.",
      "Dificultad para orinar o pérdida de control de orina o heces.",
      "Dolor de pecho o dolor iniciado tras un accidente importante.",
    ],
    fuentes: [
      { nombre: "NHS · Back pain", url: "https://www.nhs.uk/conditions/back-pain/" },
      {
        nombre: "NICE · Low back pain and sciatica",
        url: "https://www.nice.org.uk/guidance/ng59/ifp/chapter/Exercise-and-physical-activity",
      },
    ],
  },
];

export function obtenerConsejosSintoma(datos: string[]): ConsejoSintoma[] {
  const seleccionados = new Set(datos.map(normalizar));
  return consejosSintoma.filter((consejo) =>
    consejo.activadores.some((activador) => seleccionados.has(normalizar(activador))),
  );
}
