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