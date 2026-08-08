import type { EjemplosCondicion } from "./ejemplosConEvidencia";

export const ejemplosConEvidenciaComplementarios: Record<string, EjemplosCondicion> = {
  "sii": {
    nutricion: [
      { nombre: "Psyllium / fibra soluble", utilidad: "Puede mejorar el hábito intestinal y algunos síntomas del síndrome de intestino irritable, especialmente cuando predomina estreñimiento.", evidencia: "moderada" },
      { nombre: "Dieta baja en FODMAP supervisada", utilidad: "Puede reducir dolor, distensión y gases en algunas personas; debe hacerse de forma temporal y con reintroducción para evitar restricciones innecesarias.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Aceite de menta entérico", utilidad: "Puede reducir dolor abdominal y síntomas globales del síndrome de intestino irritable en algunas personas.", evidencia: "moderada" }
    ]
  },
  "hipoglucemia-compatible": {
    nutricion: [
      { nombre: "Glucosa de absorción rápida", utilidad: "En una persona consciente con hipoglucemia confirmada, una cantidad pautada de carbohidrato de absorción rápida es la medida nutricional inmediata habitual.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Fitoterapia", utilidad: "No existe una planta indicada para corregir una hipoglucemia aguda; algunos suplementos incluso pueden bajar más la glucosa.", evidencia: "alta" }
    ]
  },
  "hipertiroidismo-compatible": {
    nutricion: [
      { nombre: "Aporte suficiente de energía y proteína", utilidad: "Ayuda a limitar pérdida de masa corporal cuando existe pérdida de peso asociada al hipertiroidismo, sin sustituir el tratamiento de la causa.", evidencia: "alta" },
      { nombre: "Evitar exceso de yodo", utilidad: "Algas y suplementos con dosis altas de yodo pueden empeorar algunos trastornos tiroideos.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Algas ricas en yodo", utilidad: "No se recomiendan como tratamiento y pueden empeorar la situación por exceso de yodo.", evidencia: "alta" }
    ]
  },
  "sindrome-gripal": {
    nutricion: [
      { nombre: "Agua, caldos y solución de rehidratación cuando procede", utilidad: "Ayudan a reponer líquidos durante fiebre y menor ingesta.", evidencia: "alta" },
      { nombre: "Miel", utilidad: "Puede aliviar la tos asociada en adultos y mayores de un año, aunque no trata el virus.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Equinácea", utilidad: "Algunos preparados se han estudiado para infecciones respiratorias, pero los resultados son heterogéneos y no sustituyen tratamiento antiviral cuando está indicado.", evidencia: "limitada" }
    ]
  },
  "faringitis": {
    nutricion: [
      { nombre: "Miel", utilidad: "Puede aliviar temporalmente la irritación y la tos asociada en mayores de un año.", evidencia: "moderada" },
      { nombre: "Líquidos fríos o templados", utilidad: "Pueden facilitar hidratación y aliviar molestias al tragar según tolerancia.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Salvia en gárgaras", utilidad: "Se usa tradicionalmente para molestias de boca y garganta; la evidencia clínica es limitada y no sustituye el diagnóstico de una faringitis bacteriana.", evidencia: "tradicional" }
    ]
  },
  "deshidratacion-compatible": {
    nutricion: [
      { nombre: "Solución de rehidratación oral", utilidad: "La combinación adecuada de agua, glucosa y sales facilita la reposición de líquidos y electrolitos en pérdidas digestivas leves o moderadas.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Plantas diuréticas", utilidad: "No deben utilizarse para tratar una deshidratación porque pueden aumentar la pérdida de líquidos.", evidencia: "alta" }
    ]
  },
  "apnea-sueno-compatible": {
    nutricion: [
      { nombre: "Pérdida de peso mediante alimentación equilibrada", utilidad: "En personas con exceso de peso puede reducir la gravedad de la apnea obstructiva y mejorar otros factores cardiometabólicos.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Valeriana u otros sedantes vegetales", utilidad: "No tratan la obstrucción respiratoria y la sedación puede ser contraproducente en una apnea no evaluada.", evidencia: "alta" }
    ]
  },
  "palpitaciones": {
    nutricion: [
      { nombre: "Reducir cafeína y bebidas energéticas", utilidad: "Puede disminuir episodios cuando existe una relación clara entre estimulantes y palpitaciones.", evidencia: "moderada" },
      { nombre: "Hidratación adecuada", utilidad: "Puede ayudar si la deshidratación contribuye a los síntomas.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Guaraná y otros estimulantes vegetales", utilidad: "Pueden aumentar frecuencia cardíaca y palpitaciones y conviene evitarlos si desencadenan síntomas.", evidencia: "moderada" }
    ]
  },
  "mareo-ortostatico": {
    nutricion: [
      { nombre: "Agua", utilidad: "Una hidratación adecuada puede mejorar síntomas cuando la causa incluye bajo volumen circulante o deshidratación, siempre que no exista restricción médica.", evidencia: "moderada" }
    ],
    fitoterapia: [
      { nombre: "Regaliz", utilidad: "Puede elevar la presión arterial, pero no debe recomendarse para tratar mareo ortostático por riesgo de hipertensión, alteraciones de potasio e interacciones.", evidencia: "alta" }
    ]
  },
  "vaginitis-compatible": {
    nutricion: [
      { nombre: "Yogur y alimentos fermentados", utilidad: "Pueden formar parte de una dieta saludable, pero no existe evidencia suficiente para usarlos como sustituto del tratamiento de candidiasis, vaginosis u otras infecciones vaginales.", evidencia: "insuficiente" }
    ],
    fitoterapia: [
      { nombre: "Ajo o árbol del té intravaginal", utilidad: "No se recomiendan: pueden irritar mucosas y no sustituyen un diagnóstico y tratamiento adecuados.", evidencia: "alta" }
    ]
  },
  "sangrado-uterino-anormal": {
    nutricion: [
      { nombre: "Almejas, carne, lentejas y garbanzos", utilidad: "Aportan hierro y son útiles para recuperar reservas cuando el sangrado ha producido ferropenia, junto con el tratamiento de la causa.", evidencia: "alta" },
      { nombre: "Kiwi, cítricos y pimiento", utilidad: "Su vitamina C mejora la absorción del hierro vegetal de la comida.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Fitoterapia hemostática", utilidad: "No existe una planta que deba recomendarse para frenar un sangrado uterino anormal sin estudiar primero la causa.", evidencia: "alta" }
    ]
  },
  "embarazo-ectopico-alerta": {
    nutricion: [
      { nombre: "Nutrición", utilidad: "No existe un alimento capaz de tratar esta situación; la prioridad es la valoración médica urgente.", evidencia: "alta" }
    ],
    fitoterapia: [
      { nombre: "Fitoterapia", utilidad: "No tiene papel para tratar un posible embarazo ectópico y no debe retrasar la atención urgente.", evidencia: "alta" }
    ]
  }
};