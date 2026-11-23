# CuerpoClaro — auditoría de seguridad y contenido (23/11/2026)

## Estado de publicación
**NO VALIDADO CLÍNICAMENTE. No publicar ni presentar como herramienta diagnóstica.** La revisión del código no equivale a estudios de rendimiento clínico con pacientes reales.

## Alcance inspeccionado
- Motor de orientación de síntomas `src/datos/motorOrientacion.ts`.
- Sistema de alertas `src/evaluacion/senalesAlarmaGlobales.ts`.
- Catálogo de fichas `src/datos/condiciones*.ts` (fichas explícitas y fichas creadas desde los módulos de ampliación).
- Opciones accesibles y preguntas de seguimiento.
- Presentación de resultados y recomendaciones de nutrición y fitoterapia.
- Suite de pruebas de regresión `tests/motorOrientacion.test.mjs`.

## Hallazgos materiales
1. Se identificaron fichas cuyos síntomas específicos no podían seleccionarse directamente; 28 casos de los módulos de ampliación no tenían coincidencia literal con las opciones generales. Se incorporó un buscador de síntomas específicos de las fichas, sin análisis de lenguaje libre.
2. Múltiples fichas de los módulos de ampliación utilizan marcadores bibliográficos genéricos (`Guías clínicas y revisiones sistemáticas aplicables`), sin identificación de fuente concreta. No son prueba de validación clínica.
3. Existían etiquetas de causa demasiado específicas para signos aislados (anafilaxia con desmayo solo, ictus con debilidad inespecífica, infección renal con fiebre y dolor lumbar no específico). Se modificaron estas reglas preservando alertas de seguridad.
4. Se añadieron señales de alerta para hematemesis, sangrado abundante, imposibilidad de tragar saliva, ojo rojo doloroso con lentes de contacto, sospecha de rotura del tendón de Aquiles y somnolencia al conducir.
5. La aplicación no debe presentar porcentajes de coincidencia como probabilidades diagnósticas. Tampoco debe sugerir que la fitoterapia está científicamente validada solo por figurar en la base.
6. El motor sigue siendo un sistema de reglas y coincidencias; no puede descartar enfermedad cuando no reconoce un patrón. Se añadieron advertencias y pruebas automáticas.

## Pruebas automáticas
- El flujo `.github/workflows/comprobar-cuerpoclaro.yml` ejecuta los tests existentes, un examen ficha por ficha y la compilación de React.
- `scripts/auditar-fichas.mjs` genera `auditoria-fichas.json` y `auditoria-fichas.md` como artefactos descargables de la ejecución.
- Se comprueban campos, bibliografía identificable, síntomas disponibles en opciones, alarmas, interacción con el motor y señales urgentes aisladas.
- **Hasta verificar los resultados de GitHub Actions no deben darse los tests por aprobados.**

## Necesario antes de la publicación
- Reemplazar toda bibliografía genérica por referencias verificables específicas de cada ficha.
- Revisar por especialistas la clasificación del nivel de urgencia, contraindicaciones, posibles tratamientos y recomendaciones nutricionales y de plantas.
- Validar con casos positivos y negativos, incluidas presentaciones atípicas, evitando falsas alarmas y omisiones de gravedad.
- Completar matriz de 144 fichas con evidencia de validación individual; un informe automático no demuestra exactitud clínica.
- Verificar la declaración de privacidad y las políticas sanitarias de Google Play para las funciones reales.

## Referencias de seguridad utilizadas para los cambios revisados
- NICE NG59, dolor lumbar y ciática: https://www.nice.org.uk/guidance/ng59
- NICE NG128, sospecha de ictus y FAST: https://www.nice.org.uk/guidance/ng128
- NICE NG258, anafilaxia: https://www.nice.org.uk/guidance/ng258
- NHS, vómitos con sangre: https://www.nhs.uk/symptoms/vomiting-blood/
- NHS, ojo rojo: https://www.nhs.uk/symptoms/red-eye/
- Cambridge University Hospitals, rotura de Aquiles: https://www.cuh.nhs.uk/patient-information/achilles-tendon-rupture-management-and-rehabilitation/
- DGT, seguridad vial y somnolencia: https://www.dgt.es/

**Aviso:** las referencias precedentes respaldan únicamente los asuntos indicados, no todas las patologías ni tratamientos del catálogo.
## Segunda pasada de revisión clínica de seguridad — 23/11/2026

- Se contrastó la ficha de sospecha de sepsis con **NICE NG253** (publicada el 19/11/2025; reemplaza la antigua NG51 para adultos). La ficha ahora señala una fuente específica. En la práctica, la sepsis requiere valoración presencial, constantes vitales y riesgo clínico; la app no puede confirmar ni excluirla.
- Se añadió un filtro de contexto para no sugerir **sepsis** solo por desmayo y confusión sin datos de infección. Los síntomas graves continúan activando avisos urgentes.
- Se contrastaron alertas de **anafilaxia** con las recomendaciones del Resuscitation Council UK y las guías ERC de 2025. Se evita nombrar anafilaxia basándose únicamente en dos signos inespecíficos, sin quitar las alertas de emergencia. La ausencia de manifestaciones cutáneas **no descarta** anafilaxia en atención médica; esta limitación debe tenerse presente.
- Se reforzó la advertencia de atención de emergencia y el teléfono 112 para las señales urgentes, sin convertir el programa en una herramienta de diagnóstico.
- Se añadieron pruebas de regresión para ambas situaciones y se incorporaron referencias de las guías en las fichas correspondientes.
- **Pendiente**: ejecución verificable de tests/compilación y revisión individual documentada de las restantes fichas; la ampliación de reglas no es validación clínica.

### Nuevas fuentes

- NICE NG253: https://www.nice.org.uk/guidance/ng253
- Resuscitation Council UK, anafilaxia: https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment-anaphylactic-reactions
- European Resuscitation Council 2025: https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/special-circumstances-guidelines
- NICE NG228, cefalea en trueno: https://www.nice.org.uk/guidance/ng228/chapter/Recommendations
- NICE NG127, síntomas neurológicos: https://www.nice.org.uk/guidance/ng127/chapter/Recommendations-for-adults-aged-over-16
- NICE CG95, dolor torácico: https://www.nice.org.uk/guidance/cg95/chapter/recommendations

### Ajustes adicionales del motor en la segunda pasada

- El resultado de evaluación ya no muestra porcentajes de «confianza», que podían interpretarse erróneamente como probabilidades de diagnóstico. Muestra el número de síntomas relacionados con cada ficha y recuerda los límites de la comparación.
- El motor elimina repeticiones del mismo síntoma antes de calcular coincidencias, evitando que marcarlo en categorías y preguntas de seguimiento aumente artificialmente el resultado.
- Ante una alerta catalogada como urgente, la interfaz muestra una instrucción explícita de buscar atención urgente y llamar al 112 en España cuando exista riesgo inmediato.
- Las fichas de sepsis y anafilaxia ahora incluyen enlaces bibliográficos identificables; **poner un enlace no valida automáticamente todas las afirmaciones de la ficha**.
- Se añadieron pruebas automatizadas positivas y negativas para patrones de sepsis, anafilaxia y repetición de síntomas.

### Limitaciones clínicas todavía relevantes

- NICE NG253 requiere evaluación presencial y signos vitales para estratificar riesgo de sepsis. Una herramienta con casillas sin constantes vitales no puede excluirla.
- La anafilaxia puede presentarse sin manifestaciones cutáneas: la regla conservadora que evita atribuirla a signos inespecíficos no puede descartar el diagnóstico.
- El ranking de fichas compara coincidencias, no estima probabilidad diagnóstica ni confirma el origen de los síntomas.
- Los resultados del workflow y las referencias de todas las fichas aún deben verificarse antes de cualquier declaración de conformidad.
