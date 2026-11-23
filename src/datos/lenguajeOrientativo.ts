/** Presenta la coincidencia como orientación, nunca como diagnóstico confirmado. */
export function tituloOrientativo(nombre:string):string{
  const limpio=nombre.trim();
  if(/\b(compatible|compatibles|posible|posibles|orientativo|orientativa|alerta|sospecha)\b/i.test(limpio))return limpio;
  return limpio+" — cuadro compatible con los síntomas seleccionados";
}
