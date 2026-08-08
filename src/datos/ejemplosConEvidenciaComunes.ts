import type { EjemplosCondicion } from "./ejemplosConEvidencia";

export const ejemplosConEvidenciaComunes: Record<string, EjemplosCondicion> = {
  "rinosinusitis-aguda-compatible": {
    nutricion: [
      { nombre: "Agua y líquidos", utilidad: "Mantener una buena hidratación ayuda a fluidificar secreciones y prevenir deshidratación, aunque no elimina la infección.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Solución salina nasal", utilidad: "Los lavados nasales con solución salina pueden aliviar congestión y secreciones en algunas personas.", evidencia: "moderada" },
      { nombre: "Aceites esenciales intranasales", utilidad: "No se recomiendan por riesgo de irritación de mucosas y porque no sustituyen la valoración de una sinusitis complicada.", evidencia: "alta" }
    ]
  },
  "bronquitis-aguda-compatible": {
    nutricion: [
      { nombre: "Miel", utilidad: "Puede reducir la intensidad de la tos en adultos y mayores de un año como medida sintomática.", evidencia: "moderada" },
      { nombre: "Agua y bebidas templadas", utilidad: "Ayudan a mantener hidratación y pueden aliviar irritación de garganta asociada a la tos.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Tomillo", utilidad: "Algunos preparados de tomillo se han estudiado para tos aguda, pero la evidencia es limitada y depende de la formulación.", evidencia: "limitada" },
      { nombre: "Hiedra (Hedera helix)", utilidad: "Algunos extractos se usan como expectorantes, aunque la evidencia clínica es moderada o limitada según el preparado.", evidencia: "limitada" }
    ]
  },
  "conjuntivitis-compatible": {
    nutricion: [
      { nombre: "Nutrición", utilidad: "No existe un alimento con efecto demostrado para tratar una conjuntivitis aguda. La prioridad es identificar la causa y proteger el ojo.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Manzanilla o infusiones en el ojo", utilidad: "No se recomiendan porque pueden contaminar, irritar o desencadenar alergia ocular.", evidencia: "alta" }
    ]
  }
};