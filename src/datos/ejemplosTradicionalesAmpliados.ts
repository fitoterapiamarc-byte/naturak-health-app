import type { EjemplosCondicion } from "./ejemplosConEvidencia";

/** Opciones adicionales procedentes de uso tradicional de plantas y naturopatía.
 * La etiqueta "tradicional" significa exactamente eso: uso histórico/tradicional,
 * no eficacia clínica demostrada. Las opciones con datos insuficientes se etiquetan
 * como "insuficiente" o "limitada".
 */
export const ejemplosTradicionalesAmpliados: Record<string, EjemplosCondicion> = {
  "resfriado-viral": { nutricion:[
    {nombre:"Caldo o sopa",utilidad:"Puede facilitar la ingesta de líquidos y alimentos cuando hay poco apetito; es apoyo sintomático, no antiviral.",evidencia:"tradicional"},
    {nombre:"Ajo como alimento",utilidad:"Se utiliza tradicionalmente durante procesos respiratorios; no está demostrado que cure el resfriado.",evidencia:"tradicional"}
  ], fitoterapia:[
    {nombre:"Tomillo (Thymus vulgaris)",utilidad:"Uso tradicional para tos asociada a resfriados y como expectorante suave; no elimina la infección viral.",evidencia:"tradicional"},
    {nombre:"Malva (Malva sylvestris)",utilidad:"Sus mucílagos se usan tradicionalmente para suavizar garganta irritada y tos seca.",evidencia:"tradicional"},
    {nombre:"Pelargonium sidoides",utilidad:"Algunos extractos se han estudiado para infecciones respiratorias agudas, pero los resultados dependen del preparado.",evidencia:"limitada"}
  ]},
  "sindrome-gripal": { nutricion:[
    {nombre:"Sopas y caldos",utilidad:"Ayudan a mantener líquidos, sodio y energía cuando la ingesta disminuye; no tratan el virus.",evidencia:"tradicional"},
    {nombre:"Frutas y verduras",utilidad:"Ayudan a mantener el aporte de micronutrientes durante la recuperación, sin considerarse tratamiento de la gripe.",evidencia:"alta"}
  ], fitoterapia:[
    {nombre:"Saúco (Sambucus nigra)",utilidad:"Se ha usado tradicionalmente para síntomas de resfriado y gripe; la evidencia clínica es insuficiente para considerarlo tratamiento demostrado.",evidencia:"insuficiente"},
    {nombre:"Tilo",utilidad:"Uso tradicional como bebida caliente y diaforética durante cuadros catarrales; no hay demostración de que acorte la gripe.",evidencia:"tradicional"},
    {nombre:"Tomillo",utilidad:"Uso tradicional para tos y secreciones respiratorias asociadas.",evidencia:"tradicional"}
  ]},
  "faringitis": { nutricion:[
    {nombre:"Caldo templado",utilidad:"Puede facilitar hidratación y alimentación cuando tragar molesta.",evidencia:"tradicional"},
    {nombre:"Yogur u otros alimentos blandos",utilidad:"Pueden facilitar la ingesta por su textura si se toleran; no tratan la causa de la faringitis.",evidencia:"tradicional"}
  ], fitoterapia:[
    {nombre:"Malvavisco (Althaea officinalis)",utilidad:"Sus mucílagos se usan tradicionalmente para aliviar irritación de boca y garganta.",evidencia:"tradicional"},
    {nombre:"Malva",utilidad:"Uso tradicional como demulcente para garganta irritada.",evidencia:"tradicional"},
    {nombre:"Tomillo",utilidad:"Se utiliza tradicionalmente en molestias respiratorias y tos asociada.",evidencia:"tradicional"}
  ]},
  "hinchazon-gases": { nutricion:[
    {nombre:"Arroz",utilidad:"Alimento generalmente fácil de integrar cuando se busca simplificar temporalmente la dieta y observar tolerancia individual.",evidencia:"tradicional"},
    {nombre:"Yogur fermentado",utilidad:"Puede tolerarse bien en algunas personas; el beneficio depende de la causa de la hinchazón y de la tolerancia a lácteos.",evidencia:"limitada"}
  ], fitoterapia:[
    {nombre:"Anís verde (Pimpinella anisum)",utilidad:"Uso tradicional como carminativo para gases y molestias digestivas leves.",evidencia:"tradicional"},
    {nombre:"Alcaravea (Carum carvi)",utilidad:"Uso tradicional como carminativo; algunas combinaciones estandarizadas tienen estudios en dispepsia.",evidencia:"tradicional"},
    {nombre:"Manzanilla",utilidad:"Uso tradicional para molestias digestivas leves y espasmos; la evidencia clínica específica para hinchazón es limitada.",evidencia:"tradicional"}
  ]},
  "dispepsia-funcional": { nutricion:[
    {nombre:"Arroz, patata y verduras cocidas",utilidad:"Opciones que muchas personas toleran bien durante periodos de malestar, aunque la tolerancia es individual.",evidencia:"tradicional"},
    {nombre:"Reducir comidas muy grasas",utilidad:"Puede disminuir plenitud y malestar después de comer en algunas personas.",evidencia:"moderada"}
  ], fitoterapia:[
    {nombre:"Manzanilla",utilidad:"Uso tradicional para molestias digestivas leves y sensación de espasmo.",evidencia:"tradicional"},
    {nombre:"Melisa",utilidad:"Uso tradicional para molestias gastrointestinales leves, especialmente cuando se acompañan de nerviosismo.",evidencia:"tradicional"},
    {nombre:"Alcachofa (hoja)",utilidad:"Algunos extractos se han utilizado para dispepsia y digestiones pesadas; el respaldo clínico es limitado.",evidencia:"limitada"}
  ]},
  "estrenimiento": { nutricion:[
    {nombre:"Pera",utilidad:"Aporta agua, fibra y sorbitol, por lo que puede favorecer heces más blandas dentro de una dieta rica en fibra.",evidencia:"moderada"},
    {nombre:"Legumbres",utilidad:"Aportan cantidades importantes de fibra; conviene aumentarlas gradualmente si producen gases.",evidencia:"alta"}
  ], fitoterapia:[
    {nombre:"Lino (Linum usitatissimum)",utilidad:"Las semillas y sus mucílagos se utilizan como formadores de masa; necesitan suficiente líquido.",evidencia:"moderada"},
    {nombre:"Sen",utilidad:"Laxante estimulante de uso reconocido a corto plazo; no debe presentarse como solución cotidiana ni prolongada sin valoración.",evidencia:"alta"},
    {nombre:"Frángula",utilidad:"Laxante estimulante de uso tradicional para estreñimiento ocasional; no es adecuada para uso crónico indiscriminado.",evidencia:"tradicional"}
  ]},
  "insomnio-compatible": { nutricion:[
    {nombre:"Kiwi",utilidad:"Pequeños estudios han explorado su relación con el sueño, pero la evidencia todavía es limitada.",evidencia:"limitada"},
    {nombre:"Cereza ácida",utilidad:"Se ha estudiado por su contenido natural de melatonina y polifenoles; los datos para insomnio son todavía limitados.",evidencia:"limitada"}
  ], fitoterapia:[
    {nombre:"Pasiflora",utilidad:"Uso tradicional para nerviosismo leve y facilitar el descanso; la evidencia clínica para insomnio es limitada.",evidencia:"tradicional"},
    {nombre:"Melisa",utilidad:"Uso tradicional para estrés leve y ayuda al sueño; puede potenciar otros sedantes.",evidencia:"tradicional"},
    {nombre:"Lúpulo",utilidad:"Uso tradicional como sedante suave, a menudo combinado con valeriana; evidencia clínica limitada.",evidencia:"tradicional"},
    {nombre:"Lavanda",utilidad:"El aroma y determinados preparados se han estudiado para ansiedad y sueño; el efecto depende de la preparación.",evidencia:"limitada"}
  ]},
  "ansiedad-persistente-compatible": { nutricion:[
    {nombre:"Reducir cafeína y energéticas",utilidad:"Puede reducir palpitaciones, inquietud e insomnio cuando los estimulantes agravan la ansiedad.",evidencia:"alta"},
    {nombre:"Patrón mediterráneo",utilidad:"Es una base dietética saludable; su efecto directo como tratamiento de ansiedad no debe exagerarse.",evidencia:"limitada"}
  ], fitoterapia:[
    {nombre:"Pasiflora",utilidad:"Uso tradicional para síntomas leves de estrés y nerviosismo; no sustituye tratamiento de trastornos de ansiedad importantes.",evidencia:"tradicional"},
    {nombre:"Melisa",utilidad:"Uso tradicional para nerviosismo leve y molestias digestivas relacionadas con estrés.",evidencia:"tradicional"},
    {nombre:"Valeriana",utilidad:"Se utiliza tradicionalmente cuando nerviosismo y dificultad para dormir aparecen juntos; puede causar somnolencia.",evidencia:"tradicional"}
  ]},
  "reflujo-erge": { nutricion:[
    {nombre:"Plátano, avena, arroz o patata",utilidad:"Son alimentos frecuentemente bien tolerados, pero no existe una lista universal de alimentos que cure el reflujo.",evidencia:"tradicional"},
    {nombre:"Evitar cenas copiosas",utilidad:"Reducir volumen de comida cerca de acostarse puede disminuir episodios nocturnos.",evidencia:"moderada"}
  ], fitoterapia:[
    {nombre:"Malvavisco",utilidad:"Se usa tradicionalmente por sus mucílagos para calmar irritación de mucosas; no está demostrado como tratamiento del reflujo.",evidencia:"tradicional"},
    {nombre:"Regaliz DGL",utilidad:"Se comercializa para molestias digestivas, pero la evidencia clínica para reflujo es insuficiente. El regaliz convencional puede elevar la presión y causar interacciones.",evidencia:"insuficiente"}
  ]},
  "artrosis-compatible": { nutricion:[
    {nombre:"Aceite de oliva virgen extra",utilidad:"Forma parte del patrón mediterráneo y sustituye grasas menos favorables; no regenera el cartílago.",evidencia:"moderada"},
    {nombre:"Pescado azul",utilidad:"Aporta omega-3 y puede integrarse en un patrón saludable; el efecto directo sobre dolor de artrosis es limitado.",evidencia:"limitada"}
  ], fitoterapia:[
    {nombre:"Boswellia serrata",utilidad:"Algunos extractos han mostrado posibles mejoras modestas del dolor y función, pero existe heterogeneidad entre productos.",evidencia:"limitada"},
    {nombre:"Harpagofito",utilidad:"Uso tradicional para dolor articular y musculoesquelético; algunos preparados tienen estudios, pero la evidencia global es limitada.",evidencia:"limitada"},
    {nombre:"Ortiga",utilidad:"Uso tradicional en molestias articulares; no existe evidencia sólida de que modifique la artrosis.",evidencia:"tradicional"}
  ]},
  "gota-compatible": { nutricion:[
    {nombre:"Lácteos bajos en grasa",utilidad:"Su consumo se asocia con menor riesgo de gota y puede formar parte de un patrón dietético adecuado.",evidencia:"moderada"},
    {nombre:"Verduras y legumbres",utilidad:"No es necesario evitar de forma general las verduras ricas en purinas; forman parte de una alimentación saludable.",evidencia:"moderada"}
  ], fitoterapia:[
    {nombre:"Ortiga",utilidad:"Se ha usado tradicionalmente como diurética y para molestias articulares, pero no sustituye el control del ácido úrico.",evidencia:"tradicional"},
    {nombre:"Diente de león",utilidad:"Uso tradicional como diurético; no existe evidencia de que trate un ataque de gota o normalice por sí solo el urato.",evidencia:"tradicional"}
  ]},
  "dermatitis-atopica-compatible": { nutricion:[
    {nombre:"Pescado, legumbres, frutas y verduras",utilidad:"Ayudan a mantener una dieta variada; no se debe prometer que un alimento concreto cure el eccema.",evidencia:"alta"}
  ], fitoterapia:[
    {nombre:"Caléndula tópica",utilidad:"Uso tradicional para irritaciones cutáneas leves; la evidencia específica en dermatitis atópica es insuficiente.",evidencia:"tradicional"},
    {nombre:"Aloe vera tópico",utilidad:"Se usa tradicionalmente como calmante cutáneo, pero la evidencia específica para dermatitis atópica es insuficiente.",evidencia:"insuficiente"}
  ]},
  "hemorroides-compatible": { nutricion:[
    {nombre:"Kiwi, pera y ciruelas",utilidad:"Aportan fibra y pueden ayudar a mantener heces blandas, reduciendo el esfuerzo al defecar.",evidencia:"moderada"},
    {nombre:"Legumbres",utilidad:"Aportan fibra y ayudan a alcanzar el consumo diario recomendado cuando se toleran.",evidencia:"alta"}
  ], fitoterapia:[
    {nombre:"Hamamelis tópico",utilidad:"Uso tradicional como astringente para molestias hemorroidales externas; la evidencia clínica es limitada.",evidencia:"tradicional"},
    {nombre:"Castaño de Indias",utilidad:"Se utiliza tradicionalmente para síntomas venosos; no debe ingerirse en preparados no estandarizados y no sustituye la valoración del sangrado rectal.",evidencia:"tradicional"}
  ]},
  "cefalea-tensional-compatible": { nutricion:[
    {nombre:"Agua",utilidad:"Corregir una ingesta insuficiente de líquidos puede ayudar cuando la deshidratación actúa como desencadenante.",evidencia:"moderada"},
    {nombre:"Comidas regulares",utilidad:"Evitar ayunos prolongados puede ser útil cuando saltarse comidas desencadena cefalea.",evidencia:"tradicional"}
  ], fitoterapia:[
    {nombre:"Menta tópica",utilidad:"Algunas preparaciones tópicas de mentol se han estudiado para cefalea tensional, con evidencia limitada.",evidencia:"limitada"},
    {nombre:"Lavanda aromática",utilidad:"Se utiliza tradicionalmente para relajación; no debe presentarse como tratamiento demostrado de cefalea tensional.",evidencia:"tradicional"}
  ]}
};