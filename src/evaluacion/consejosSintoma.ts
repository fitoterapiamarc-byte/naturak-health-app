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
  {
    id: "cefalea-simple",
    titulo: "Consejos generales para un dolor de cabeza simple",
    activadores: ["Dolor de cabeza", "Dolor opresivo en la cabeza", "Dolor pulsátil", "Dolor en un lado de la cabeza", "Dolor en ambos lados de la cabeza"],
    descripcion: "Un dolor de cabeza aislado no permite determinar la causa ni significa por sí solo que sea migraña.",
    autocuidado: [
      "Bebe agua con regularidad, descansa y procura mantener comidas y horarios de sueño regulares.",
      "Reduce temporalmente alcohol y el tiempo continuado frente a pantallas si notas que empeoran el dolor.",
      "Anota cuándo aparece, cuánto dura y qué lo acompaña si se repite.",
      "Si necesitas un analgésico, consulta con un profesional sanitario o farmacéutico para comprobar cuál es adecuado para ti.",
    ],
    consultar: ["Si se repite con frecuencia, dura varios días, empeora o interfiere con tu actividad habitual.", "Si aparece después de un golpe o es diferente de tus dolores habituales."],
    urgente: ["Dolor súbito y de intensidad máxima.", "Confusión, pérdida de fuerza, dificultad para hablar, desmayo o alteración visual nueva.", "Fiebre acompañada de rigidez de cuello."],
    fuentes: [{ nombre: "NHS · Headaches", url: "https://www.nhs.uk/symptoms/headaches/" }],
  },
  {
    id: "dolor-cuello-simple",
    titulo: "Consejos generales para una molestia de cuello",
    activadores: ["Dolor de cuello"],
    descripcion: "Una molestia de cuello aislada suele permitir medidas suaves, siempre que no exista un traumatismo importante ni síntomas neurológicos.",
    autocuidado: ["Mantén el cuello en movimiento suave dentro de un rango cómodo.", "Prueba calor o frío local envuelto en una tela para proteger la piel.", "Evita conducir o realizar tareas peligrosas si no puedes girar el cuello con seguridad.", "Revisa posturas mantenidas y haz pausas frecuentes."],
    consultar: ["Si no mejora en unas semanas, se repite o el dolor baja hacia un brazo.", "Si aparece hormigueo persistente, pérdida de sensibilidad o debilidad."],
    urgente: ["Dolor tras un accidente importante.", "Debilidad en brazos o piernas, dificultad para caminar o pérdida de control de esfínteres.", "Fiebre, dolor de cabeza intenso y rigidez marcada de cuello."],
    fuentes: [{ nombre: "NHS · Neck pain", url: "https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/" }],
  },
  {
    id: "garganta-simple",
    titulo: "Consejos generales para una molestia de garganta",
    activadores: ["Dolor de garganta", "Ronquera"],
    descripcion: "El dolor de garganta o la ronquera aislados no permiten saber si la causa es irritativa, viral u otra.",
    autocuidado: ["Bebe agua, descansa la voz y elige alimentos frescos o blandos según tolerancia.", "Evita fumar y los ambientes con humo.", "Un adulto puede hacer gárgaras con agua templada y sal sin tragarla.", "Consulta al farmacéutico antes de usar pastillas, aerosoles o medicamentos."],
    consultar: ["Si dura más de una semana, se repite, hay fiebre persistente o empeora.", "Si aparece un bulto en el cuello, pérdida de peso o ronquera prolongada."],
    urgente: ["Dificultad para respirar o para tragar saliva.", "Babeo, ruido agudo al respirar o empeoramiento rápido."],
    fuentes: [{ nombre: "NHS · Sore throat", url: "https://www.nhs.uk/symptoms/sore-throat/" }],
  },
  {
    id: "tos-simple",
    titulo: "Consejos generales para una tos sin señales de alarma",
    activadores: ["Tos seca", "Tos con mucosidad", "Tos con flemas"],
    descripcion: "Una tos aislada puede tener causas diferentes. Estas medidas sirven únicamente para aliviar mientras se observa la evolución.",
    autocuidado: ["Descansa y bebe líquidos con regularidad; el agua ayuda a que la mucosidad sea menos espesa.", "Una bebida templada con limón y miel puede aliviar la garganta en adultos; la miel nunca debe darse a menores de un año.", "Evita fumar y el humo ambiental.", "Consulta al farmacéutico antes de usar antitusivos, expectorantes o plantas, especialmente si tomas medicación."],
    consultar: ["Si dura más de tres semanas, empeora, hay fiebre persistente o afecta mucho al descanso.", "Si tienes una enfermedad pulmonar, cardíaca o defensas bajas."],
    urgente: ["Dificultad para respirar, dolor de pecho o labios azulados.", "Tos con sangre, desmayo o deterioro rápido."],
    fuentes: [{ nombre: "NHS · Cough", url: "https://www.nhs.uk/symptoms/cough/" }],
  },
  {
    id: "congestion-nasal-simple",
    titulo: "Consejos generales para congestión o mucosidad nasal",
    activadores: ["Congestión nasal", "Mucosidad", "Estornudos", "Picor nasal", "Mucosidad acuosa"],
    descripcion: "La congestión, los estornudos o la mucosidad aislados pueden relacionarse con resfriado, irritación o alergia, pero un solo dato no permite diferenciarlos.",
    autocuidado: ["Descansa y mantén una hidratación adecuada.", "Puedes utilizar solución salina nasal siguiendo las instrucciones del producto.", "Evita humo, polvo u otros desencadenantes que hayas identificado claramente.", "Consulta al farmacéutico antes de usar descongestionantes, especialmente si tienes hipertensión o tomas otros medicamentos."],
    consultar: ["Si dura varias semanas, se repite mucho, aparece dolor facial importante o fiebre persistente."],
    urgente: ["Dificultad para respirar, hinchazón de lengua o garganta o desmayo."],
    fuentes: [{ nombre: "NHS · Common cold", url: "https://www.nhs.uk/conditions/common-cold/" }],
  },
  {
    id: "nauseas-simples",
    titulo: "Consejos generales para náuseas leves",
    activadores: ["Náuseas"],
    descripcion: "Las náuseas aisladas tienen muchas causas posibles y no permiten establecer un diagnóstico.",
    autocuidado: ["Toma pequeños sorbos de bebida fría con frecuencia.", "Prueba comidas pequeñas y frecuentes, y evita olores o alimentos que compruebes que las empeoran.", "Elige alimentos sencillos y evita temporalmente comidas muy grasas si aumentan la molestia.", "No empieces medicamentos o plantas contra las náuseas sin revisar antes embarazo, enfermedades e interacciones."],
    consultar: ["Si persisten varios días, se repiten, hay pérdida de peso o no puedes comer con normalidad."],
    urgente: ["No poder retener líquidos, orinar muy poco, confusión o desmayo.", "Dolor abdominal intenso, dolor de pecho o vómito con sangre."],
    fuentes: [{ nombre: "NHS · Feeling sick", url: "https://www.nhs.uk/symptoms/feeling-sick-nausea/" }],
  },
  {
    id: "reflujo-simple",
    titulo: "Consejos generales para acidez o reflujo ocasional",
    activadores: ["Acidez", "Reflujo", "Regurgitación", "Quemazón retroesternal", "Ardor epigástrico", "Ardor después de comer"],
    descripcion: "La acidez ocasional puede mejorar con hábitos, pero el ardor del pecho no debe atribuirse automáticamente al estómago.",
    autocuidado: ["Haz comidas algo más pequeñas y evita acostarte durante las tres o cuatro horas posteriores a la cena.", "Identifica únicamente los alimentos o bebidas que realmente desencadenen tus síntomas.", "Evita ropa muy ajustada en la cintura y limita alcohol y tabaco.", "Consulta al farmacéutico antes de usar antiácidos y no suspendas medicación prescrita por tu cuenta."],
    consultar: ["Si aparece la mayoría de los días, dura varias semanas, empeora o necesitas tratamiento con frecuencia.", "Si hay pérdida de peso, vómitos repetidos o dificultad al tragar."],
    urgente: ["Presión o dolor de pecho con falta de aire, sudor frío o irradiación al brazo o mandíbula.", "Vómito con sangre o heces negras."],
    fuentes: [{ nombre: "NHS · Heartburn and acid reflux", url: "https://www.nhs.uk/conditions/heartburn-and-acid-reflux/" }],
  },
  {
    id: "gases-hinchazon-simple",
    titulo: "Consejos generales para gases o hinchazón ocasional",
    activadores: ["Gases", "Hinchazón abdominal", "Distensión abdominal", "Eructos"],
    descripcion: "Los gases o la hinchazón aislados son frecuentes, pero no permiten conocer su causa.",
    autocuidado: ["Come despacio, mastica bien y prueba raciones más pequeñas.", "Reduce temporalmente bebidas con gas y chicle si notas que aumentan el aire tragado.", "Mantén actividad física suave y registra los alimentos que realmente coincidan con los síntomas antes de eliminar grupos completos.", "Aumenta la fibra gradualmente si también hay estreñimiento."],
    consultar: ["Si la hinchazón es frecuente, persistente, aumenta o se acompaña de pérdida de peso o cambios intestinales nuevos."],
    urgente: ["Dolor abdominal intenso o repentino, vómitos persistentes o imposibilidad para expulsar gases.", "Sangre en las heces, heces negras o desmayo."],
    fuentes: [{ nombre: "NHS · Flatulence", url: "https://www.nhs.uk/symptoms/flatulence/" }],
  },
  {
    id: "estrenimiento-simple",
    titulo: "Consejos generales para estreñimiento ocasional",
    activadores: ["Estreñimiento", "Heces duras", "Menos de tres deposiciones por semana", "Esfuerzo al defecar", "Sensación de evacuación incompleta"],
    descripcion: "Un cambio ocasional del ritmo intestinal puede mejorar con medidas básicas, pero debe vigilarse si persiste o cambia de forma brusca.",
    autocuidado: ["Bebe suficiente líquido si no tienes una restricción médica.", "Aumenta la fibra gradualmente con fruta, verdura, legumbres y cereales integrales para evitar más gases.", "Camina o realiza actividad física con regularidad.", "No retrases el deseo de evacuar y prueba a apoyar los pies en un pequeño taburete para elevar las rodillas."],
    consultar: ["Si no mejora, se repite con frecuencia o aparece un cambio intestinal repentino.", "Si hay sangre, pérdida de peso, cansancio persistente o dolor abdominal."],
    urgente: ["Dolor abdominal intenso con vómitos, abdomen muy hinchado o imposibilidad para expulsar gases.", "Heces negras, sangrado abundante o desmayo."],
    fuentes: [{ nombre: "NHS · Constipation", url: "https://www.nhs.uk/conditions/constipation/" }],
  },
  {
    id: "diarrea-simple",
    titulo: "Consejos generales para deposiciones líquidas",
    activadores: ["Diarrea continua", "Heces líquidas", "Deposiciones muy frecuentes"],
    descripcion: "La prioridad en una diarrea reciente sin señales de alarma es evitar la deshidratación y observar la evolución.",
    autocuidado: ["Bebe líquidos en pequeños sorbos frecuentes y come cuando te encuentres capaz.", "Un farmacéutico puede recomendar una solución de rehidratación oral si existe riesgo de perder agua y sales.", "Lávate bien las manos y evita preparar comida para otras personas mientras continúe la diarrea.", "No uses antidiarreicos si hay sangre o fiebre sin consultar antes."],
    consultar: ["Si dura varios días, se repite, aparece tras antibióticos o tienes mayor riesgo de deshidratación."],
    urgente: ["Sangre roja, heces negras, dolor abdominal intenso o fiebre con deterioro importante.", "No poder retener líquidos, orinar muy poco, confusión o desmayo."],
    fuentes: [{ nombre: "NHS · Diarrhoea and vomiting", url: "https://www.nhs.uk/symptoms/diarrhoea-and-vomiting/" }],
  },
  {
    id: "mareo-simple",
    titulo: "Consejos generales ante mareo o sensación de giro",
    activadores: ["Mareo", "Vértigo", "Todo gira", "Vértigo al mover la cabeza", "Sensación de desmayo", "Aparece al levantarme"],
    descripcion: "El mareo aislado puede tener causas diferentes. Estas medidas sirven para reducir el riesgo de caída, no para diagnosticarlo.",
    autocuidado: ["Siéntate o túmbate hasta que pase y levántate después lentamente.", "Muévete con cuidado, descansa y bebe agua si no tienes restricción de líquidos.", "Evita alcohol y exceso de cafeína mientras estés mareado.", "No conduzcas, subas escaleras ni uses maquinaria hasta encontrarte estable."],
    consultar: ["Si no desaparece, se repite, empezó tras un medicamento nuevo o se acompaña de pérdida auditiva."],
    urgente: ["Pérdida de fuerza, dificultad para hablar, cara torcida, visión doble nueva o dolor de cabeza súbito.", "Dolor de pecho, falta de aire, desmayo o dificultad marcada para caminar."],
    fuentes: [{ nombre: "NHS · Dizziness", url: "https://www.nhs.uk/symptoms/dizziness/" }],
  },
  {
    id: "cansancio-simple",
    titulo: "Consejos generales para cansancio o poca energía",
    activadores: ["Cansancio", "Poca energía"],
    descripcion: "El cansancio aislado es inespecífico. Si persiste, puede necesitar revisar sueño, alimentación, medicación y posibles causas médicas.",
    autocuidado: ["Mantén horarios de sueño regulares y una alimentación variada con comidas regulares.", "Bebe suficiente agua y realiza actividad suave adaptada a tu energía.", "Alterna las tareas con pausas breves sin permanecer inactivo todo el día.", "Evita depender de bebidas energéticas o suplementos sin conocer la causa."],
    consultar: ["Si dura varias semanas, empeora, afecta a tu vida diaria o no mejora pese a descansar.", "Si hay pérdida de peso, fiebre, palidez, sangrado, ronquidos con pausas o cambios importantes de ánimo."],
    urgente: ["Dolor de pecho, falta de aire intensa, confusión o desmayo."],
    fuentes: [{ nombre: "NHS · Tiredness and fatigue", url: "https://www.nhs.uk/symptoms/tiredness-and-fatigue/" }],
  },
  {
    id: "sueno-simple",
    titulo: "Consejos generales para dificultades de sueño",
    activadores: ["Insomnio", "Mal sueño", "Sueño no reparador"],
    descripcion: "Una mala noche aislada no indica una enfermedad. Si el problema se mantiene, conviene valorar sus desencadenantes.",
    autocuidado: ["Mantén horas regulares para acostarte y levantarte, incluso después de una mala noche.", "Reserva la última parte del día para actividades tranquilas y reduce pantallas justo antes de dormir.", "Evita cafeína, alcohol y nicotina durante las horas previas al sueño.", "Realiza ejercicio durante el día, pero no intenso cerca de acostarte, y evita siestas si dificultan dormir por la noche."],
    consultar: ["Si dura meses, afecta a tu funcionamiento diario o existe somnolencia peligrosa.", "Si hay ronquidos fuertes, pausas respiratorias o despertares con ahogo."],
    urgente: ["No conduzcas si tienes sueño.", "Busca ayuda inmediata si aparecen pensamientos de hacerte daño."],
    fuentes: [{ nombre: "NHS · Insomnia", url: "https://www.nhs.uk/conditions/insomnia/" }],
  },
  {
    id: "piel-seca-picor-simple",
    titulo: "Consejos generales para picor o piel seca",
    activadores: ["Picor", "Sequedad de piel"],
    descripcion: "El picor o la sequedad aislados pueden deberse a irritación, ambiente seco u otras causas; no se puede distinguir solo con este dato.",
    autocuidado: ["Usa una crema emoliente sin perfume varias veces al día, especialmente después de la ducha.", "Prefiere duchas templadas y cortas, seca la piel sin frotar y evita jabones o perfumes que irriten.", "Mantén las uñas cortas y procura no rascarte; una compresa fresca puede aliviar.", "Consulta al farmacéutico antes de usar antihistamínicos o corticoides tópicos."],
    consultar: ["Si dura varias semanas, es intenso, se extiende, aparece una erupción nueva o afecta a todo el cuerpo.", "Si la piel está caliente, dolorosa, supura o aparece fiebre."],
    urgente: ["Hinchazón de lengua o garganta, dificultad para respirar, desmayo o erupción que progresa rápidamente."],
    fuentes: [{ nombre: "NHS · Itchy skin", url: "https://www.nhs.uk/symptoms/itchy-skin/" }, { nombre: "NHS · Contact dermatitis treatment", url: "https://www.nhs.uk/conditions/contact-dermatitis/treatment/" }],
  },
  {
    id: "dolor-muscular-simple",
    titulo: "Consejos generales para dolor muscular leve",
    activadores: ["Dolor muscular"],
    descripcion: "Un dolor muscular aislado puede relacionarse con esfuerzo o tensión, pero no permite asegurar la causa.",
    autocuidado: ["Reduce durante unos días la actividad que desencadenó el dolor, sin mantener reposo completo prolongado.", "Aplica frío protegido si existe una lesión reciente con inflamación; el calor protegido puede aliviar rigidez o contractura.", "Recupera el movimiento y la carga gradualmente según tolerancia.", "Consulta antes de tomar analgésicos o suplementos si tienes enfermedades o medicación habitual."],
    consultar: ["Si el dolor es importante, dura varias semanas, se repite o aparece sin una causa clara.", "Si hay hinchazón, debilidad real, fiebre o dolor después de iniciar un medicamento."],
    urgente: ["Lesión con deformidad, imposibilidad de mover o apoyar, pérdida de fuerza o dolor muy intenso.", "Dolor muscular intenso generalizado con orina muy oscura o poca orina."],
    fuentes: [{ nombre: "NHS · Sprains and strains", url: "https://www.nhs.uk/conditions/sprains-and-strains/" }],
  },
  {
    id: "dolor-articular-simple",
    titulo: "Consejos generales para dolor articular leve",
    activadores: ["Dolor articular", "Rigidez"],
    descripcion: "Un dolor articular aislado no permite diferenciar sobrecarga, lesión, inflamación u otras causas.",
    autocuidado: ["Reduce temporalmente las actividades que aumenten el dolor, pero evita inmovilizar por completo la articulación.", "Puedes aplicar frío envuelto en una tela si hay dolor o hinchazón reciente.", "Retoma movimiento suave y actividad gradualmente según tolerancia.", "Consulta al farmacéutico o profesional sanitario antes de usar analgésicos o antiinflamatorios."],
    consultar: ["Si no mejora en unas semanas, se repite, limita el movimiento o comenzó tras una lesión.", "Si hay varias articulaciones afectadas o rigidez prolongada al despertar."],
    urgente: ["Articulación muy dolorosa, roja, caliente o hinchada de aparición rápida, especialmente con fiebre.", "Deformidad o imposibilidad de apoyar después de un traumatismo."],
    fuentes: [{ nombre: "NHS · Joint pain", url: "https://www.nhs.uk/symptoms/joint-pain/" }],
  },
  {
    id: "dolor-menstrual-simple",
    titulo: "Consejos generales para dolor menstrual",
    activadores: ["Regla dolorosa"],
    descripcion: "El dolor durante la regla es frecuente, pero un dolor nuevo, muy intenso o diferente debe valorarse.",
    autocuidado: ["Prueba una ducha o baño templado o calor local protegido sobre el abdomen.", "La actividad suave, como caminar, puede aliviar a algunas personas.", "Un masaje suave en abdomen o espalda puede ayudar.", "Consulta al farmacéutico o profesional sanitario antes de usar analgésicos, especialmente si tienes problemas gástricos, renales, hepáticos, asma o tomas otros medicamentos."],
    consultar: ["Si el dolor impide las actividades habituales, empeora con el tiempo o cambia tu patrón menstrual.", "Si aparecen reglas más abundantes, irregulares, sangrado entre reglas o dolor con las relaciones."],
    urgente: ["Dolor pélvico intenso de un lado con posible embarazo, desmayo o sangrado durante el embarazo.", "Sangrado muy abundante acompañado de debilidad intensa o desmayo."],
    fuentes: [{ nombre: "NHS · Period pain", url: "https://www.nhs.uk/symptoms/period-pain/" }],
  },
  {
    id: "orina-oscura-olor-simple",
    titulo: "Consejos generales para orina oscura u olor fuerte",
    activadores: ["Orina oscura", "Olor fuerte"],
    descripcion: "Si es el único cambio, puede relacionarse con poca hidratación, alimentos, vitaminas o medicamentos, pero no debe asumirse siempre esa causa.",
    autocuidado: ["Bebe agua de forma regular si ningún profesional te ha indicado restringir líquidos.", "Observa si la orina vuelve a un amarillo pálido y si recuperas una frecuencia habitual.", "Revisa si el cambio coincide con alimentos, vitaminas o medicamentos, sin suspender tratamientos prescritos."],
    consultar: ["Si el cambio persiste pese a hidratarte o aparece dolor al orinar, urgencia, fiebre, dolor lumbar o mal estado general.", "Si la orina es marrón, hay color amarillo en piel u ojos, espuma persistente o hinchazón."],
    urgente: ["Sangre visible en la orina, imposibilidad para orinar, confusión o no haber orinado durante muchas horas con mal estado general."],
    fuentes: [{ nombre: "NHS · Urinary tract infections", url: "https://www.nhs.uk/conditions/urinary-tract-infections-utis/" }],
  },
  {
    id: "boca-seca-simple",
    titulo: "Consejos generales para boca seca",
    activadores: ["Boca seca"],
    descripcion: "La boca seca puede relacionarse con hidratación, respiración bucal o medicamentos, entre otras causas.",
    autocuidado: ["Toma sorbos de agua con regularidad y usa bálsamo labial si lo necesitas.", "Mastica chicle sin azúcar o utiliza caramelos sin azúcar para estimular la saliva.", "Mantén higiene dental con pasta fluorada y evita colutorios con alcohol.", "No suspendas medicamentos: consulta si alguno puede estar contribuyendo."],
    consultar: ["Si persiste varias semanas, dificulta comer o hablar, altera el gusto o aparecen úlceras o caries."],
    urgente: ["Dificultad para tragar o respirar, signos de deshidratación importante, confusión o desmayo."],
    fuentes: [{ nombre: "NHS · Dry mouth", url: "https://www.nhs.uk/symptoms/dry-mouth/" }],
  },
  {
    id: "estres-ansiedad-simple",
    titulo: "Consejos generales ante estrés o ansiedad",
    activadores: ["Estrés", "Ansiedad", "Preocupación excesiva"],
    descripcion: "El estrés o la ansiedad pueden causar síntomas físicos, pero no deben utilizarse para explicar automáticamente cualquier molestia.",
    autocuidado: ["Habla con alguien de confianza y anota las situaciones que desencadenan o empeoran los síntomas.", "Prueba respiración lenta y cómoda: inspira por la nariz y espira suavemente, sin forzar, durante unos minutos.", "Mantén comidas, sueño y actividad física regulares y reduce el exceso de cafeína y alcohol.", "Busca apoyo profesional si te cuesta controlar la preocupación o afecta a tu vida."],
    consultar: ["Si la ansiedad es difícil de controlar, dura varias semanas, provoca crisis repetidas o interfiere con el trabajo, el sueño o las relaciones."],
    urgente: ["Pensamientos de hacerte daño o de no querer vivir.", "Dolor de pecho, desmayo, dificultad respiratoria intensa o síntomas neurológicos nuevos no deben atribuirse automáticamente a ansiedad."],
    fuentes: [{ nombre: "NHS · Anxiety, fear and panic", url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/" }, { nombre: "NHS · Breathing exercises for stress", url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/" }],
  },
];

export function obtenerConsejosSintoma(datos: string[]): ConsejoSintoma[] {
  const seleccionados = new Set(datos.map(normalizar));
  return consejosSintoma.filter((consejo) =>
    consejo.activadores.some((activador) => seleccionados.has(normalizar(activador))),
  );
}
