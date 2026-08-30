import { useEffect, useState } from "react";
import type { Condicion, EnfoqueComparado } from "../datos/condiciones";
import { apoyoNutricionFitoterapia } from "../datos/apoyoNutricionFitoterapia";
import { apoyoDermatologia } from "../datos/apoyoDermatologia";
import { apoyoBucodental } from "../datos/apoyoBucodental";
import EjemplosEvidencia from "./EjemplosEvidencia";
import FichaVademecumInline from "./FichaVademecumInline";
import { buscarFichaVademecum } from "../datos/vademecumFitoterapia";
import { obtenerEjemplos } from "../datos/obtenerEjemplos";
import type { EjemploConEvidencia } from "../datos/ejemplosConEvidencia";
import {
  leerPerfilSeguridad,
  motivosRevisionFitoterapia,
  PERFIL_SEGURIDAD_EVENT,
} from "../datos/perfilSeguridad";

interface EnfoquesComparadosProps {
  condicion: Condicion;
  bloquearIntervencionesNaturales?: boolean;
}

const etiquetasEvidencia = {
  alta: "Evidencia alta",
  moderada: "Evidencia moderada",
  limitada: "Evidencia limitada",
  tradicional: "Uso tradicional",
  "no-establecida": "Evidencia todavía insuficiente",
};

function normalizar(t: string) {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const stop = new Set(["de", "del", "la", "las", "el", "los", "y", "o", "en", "con", "sin", "para", "por", "un", "una", "que", "se", "puede", "pueden", "como", "al", "a"]);

function tokens(t: string) {
  return normalizar(t)
    .split(" ")
    .filter((x) => x.length > 2 && !stop.has(x));
}

function parecido(a: string, b: string) {
  const A = new Set(tokens(a));
  const B = new Set(tokens(b));
  if (!A.size || !B.size) return false;
  let comunes = 0;
  A.forEach((x) => {
    if (B.has(x)) comunes++;
  });
  const menor = Math.min(A.size, B.size);
  return comunes >= 2 && comunes / menor >= 0.6;
}

function limpiarElementos(elementos: string[], ejemplos: EjemploConEvidencia[] = []) {
  const salida: string[] = [];
  for (const e of elementos) {
    const fichaElemento = buscarFichaVademecum(e)?.id;
    const repetidoEjemplo = ejemplos.some(
      (x) => parecido(e, `${x.nombre} ${x.detalle ?? ""}`)
        || normalizar(e).includes(normalizar(x.nombre))
        || normalizar(x.nombre).includes(normalizar(e))
        || Boolean(fichaElemento && buscarFichaVademecum(x.nombre)?.id === fichaElemento),
    );
    const repetidoLista = salida.some((x) => parecido(e, x) || normalizar(e) === normalizar(x));
    if (!repetidoEjemplo && !repetidoLista) salida.push(e);
  }
  return salida;
}

function TarjetaApoyo({
  titulo,
  descripcion,
  elementos,
  ejemplos,
  bloqueado = false,
  aviso,
  mensajeBloqueo,
  mensajeRevision,
  tipo = "general",
}: {
  titulo: string;
  descripcion: string;
  elementos: string[];
  ejemplos?: Parameters<typeof EjemplosEvidencia>[0]["ejemplos"];
  bloqueado?: boolean;
  aviso?: string;
  mensajeBloqueo?: string;
  mensajeRevision?: string;
  tipo?: "general" | "fitoterapia";
}) {
  const ejemplosLimpios = (ejemplos ?? []) as EjemploConEvidencia[];
  const elementosLimpios = limpiarElementos(elementos, ejemplosLimpios);
  return (
    <article style={estilos.tarjetaApoyo}>
      <h3 style={estilos.tituloApoyo}>{titulo}</h3>
      <p style={estilos.marco}>{descripcion}</p>
      {bloqueado ? (
        <div style={estilos.bloqueo}>
          {mensajeBloqueo ?? "Estas medidas quedan en segundo plano porque se han detectado señales que requieren valoración médica previa."}
        </div>
      ) : (
        <>
          {mensajeRevision && <div style={estilos.revision}>{mensajeRevision}</div>}
          <EjemplosEvidencia ejemplos={ejemplosLimpios} tipo={tipo} />
          {elementosLimpios.length > 0 ? (
            <ul style={estilos.listaPrincipal}>
              {elementosLimpios.map((e) => (
                <li key={e} style={tipo === "fitoterapia" ? estilos.itemFitoterapia : undefined}>
                  <div>{e}</div>
                  {tipo === "fitoterapia" && <FichaVademecumInline texto={e} />}
                </li>
              ))}
            </ul>
          ) : null}
        </>
      )}
      {aviso && !bloqueado && <p style={estilos.nota}>{aviso}</p>}
    </article>
  );
}

function TarjetaEnfoque({ enfoque }: { enfoque: EnfoqueComparado }) {
  const intervenciones = limpiarElementos(enfoque.intervenciones);
  return (
    <article style={estilos.tarjeta}>
      <div style={estilos.cabeceraTarjeta}>
        <h4 style={estilos.titulo}>{enfoque.titulo}</h4>
        <span style={estilos.evidencia}>{etiquetasEvidencia[enfoque.nivelEvidencia]}</span>
      </div>
      <p style={estilos.marco}>{enfoque.marco}</p>
      {intervenciones.length > 0 && (
        <ul style={estilos.lista}>
          {intervenciones.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      )}
      {enfoque.nota && <p style={estilos.nota}>{enfoque.nota}</p>}
    </article>
  );
}

function EnfoquesComparados({ condicion, bloquearIntervencionesNaturales = false }: EnfoquesComparadosProps) {
  const { enfoques } = condicion;
  const [perfil, setPerfil] = useState(() => leerPerfilSeguridad());

  useEffect(() => {
    const actualizar = () => setPerfil(leerPerfilSeguridad());
    window.addEventListener(PERFIL_SEGURIDAD_EVENT, actualizar);
    window.addEventListener("storage", actualizar);
    return () => {
      window.removeEventListener(PERFIL_SEGURIDAD_EVENT, actualizar);
      window.removeEventListener("storage", actualizar);
    };
  }, []);

  const apoyoDetallado = apoyoNutricionFitoterapia[condicion.id] ?? apoyoDermatologia[condicion.id] ?? apoyoBucodental[condicion.id];
  const ejemplos = obtenerEjemplos(condicion.id);
  const nutricion = apoyoDetallado?.nutricion ?? condicion.nutricion;
  const fitoterapia = apoyoDetallado?.fitoterapia ?? condicion.fitoterapia;
  const precauciones = limpiarElementos([
    ...(apoyoDetallado?.precauciones ?? []),
    ...condicion.contraindicaciones,
    ...condicion.interacciones,
  ]).slice(0, 5).join(" · ");

  const motivosPerfil = motivosRevisionFitoterapia(perfil);
  const mensajeRevisionFitoterapia = motivosPerfil.length > 0
    ? `Información para revisar, no recomendación automática: el perfil contiene ${motivosPerfil.join(", ")}. Comprueba cada planta y preparado frente a la medicación y antecedentes antes de usarlo.`
    : "Las fichas de Vademécum sirven para comprobar especie, parte usada, preparación e interacciones. Aun sin factores de riesgo declarados, no sustituyen la revisión individual.";

  return (
    <section style={estilos.contenedor}>
      <div style={estilos.introduccion}>
        <h3 style={{ marginTop: 0 }}>Posibles medidas de apoyo</h3>
        <p style={{ marginBottom: 0 }}>
          Cada ejemplo indica qué respaldo tiene. <b>Uso tradicional</b> describe utilización histórica o naturopática y no significa eficacia clínica demostrada. En fitoterapia, CuerpoClaro contrasta las plantas incorporadas con el Vademécum de Fitoterapia y la tabla EMA/ESCOP; si una ficha aún no está validada, la aplicación lo indica y no inventa dosis ni interacciones.
        </p>
      </div>

      <div style={estilos.rejillaApoyo}>
        <TarjetaApoyo
          titulo="🥗 Nutrición"
          descripcion="Alimentos, hidratación y hábitos nutricionales. Se distingue entre evidencia clínica, datos limitados y uso tradicional."
          elementos={nutricion}
          ejemplos={ejemplos.nutricion}
          bloqueado={bloquearIntervencionesNaturales}
        />
        <TarjetaApoyo
          titulo="🌿 Fitoterapia y suplementación"
          descripcion="Plantas y preparados concretos. La especie, parte utilizada y forma farmacéutica importan: una infusión, un extracto y un aceite esencial no se consideran automáticamente equivalentes."
          elementos={fitoterapia}
          ejemplos={ejemplos.fitoterapia}
          tipo="fitoterapia"
          bloqueado={bloquearIntervencionesNaturales}
          mensajeBloqueo="La fitoterapia queda en segundo plano porque se han detectado señales que requieren valoración médica previa."
          mensajeRevision={mensajeRevisionFitoterapia}
          aviso={precauciones ? `Precauciones de la ficha del cuadro: ${precauciones}` : undefined}
        />
      </div>

      <div style={estilos.introduccionSecundaria}>
        <h3 style={{ marginTop: 0 }}>Enfoques comparados</h3>
        <p style={{ marginBottom: 0 }}>
          Se separa el enfoque biomédico del marco de medicina tradicional china y del estilo de vida. La medicina china se muestra como marco tradicional y no como diagnóstico biomédico.
        </p>
      </div>
      <div style={estilos.rejilla}>
        <TarjetaEnfoque enfoque={enfoques.convencional} />
        <TarjetaEnfoque enfoque={enfoques.medicinaChina} />
        <TarjetaEnfoque enfoque={enfoques.estiloVida} />
      </div>
    </section>
  );
}

const estilos = {
  contenedor: { marginTop: "26px" },
  introduccion: { padding: "18px", borderRadius: "12px", background: "#f3f7f5", border: "1px solid #d7e2dc" },
  introduccionSecundaria: { marginTop: "24px", padding: "18px", borderRadius: "12px", background: "#f7f8f7", border: "1px solid #e0e4e2" },
  rejillaApoyo: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px", marginTop: "16px" },
  tarjetaApoyo: { padding: "20px", borderRadius: "14px", border: "2px solid #d7e2dc", background: "#ffffff" },
  tituloApoyo: { marginTop: 0, marginBottom: "10px", fontSize: "20px" },
  rejilla: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginTop: "16px" },
  tarjeta: { padding: "18px", borderRadius: "12px", border: "1px solid #dce5df", background: "#ffffff" },
  cabeceraTarjeta: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" },
  titulo: { margin: 0, fontSize: "18px" },
  evidencia: { flexShrink: 0, padding: "5px 8px", borderRadius: "999px", background: "#eef4f1", border: "1px solid #d7e2dc", fontSize: "12px", fontWeight: "bold" },
  marco: { lineHeight: 1.55 },
  lista: { paddingLeft: "20px", lineHeight: 1.55 },
  listaPrincipal: { paddingLeft: "22px", lineHeight: 1.65, fontSize: "16px" },
  itemFitoterapia: { marginBottom: 14 },
  nota: { marginBottom: 0, padding: "10px", borderRadius: "8px", background: "#fff8e6", fontSize: "14px", lineHeight: 1.45 },
  revision: { margin: "12px 0", padding: "12px", borderRadius: "9px", background: "#eef7ff", border: "1px solid #b7d2e8", color: "#214f70", fontSize: "14px", lineHeight: 1.5 },
  bloqueo: { padding: "12px", borderRadius: "8px", background: "#fff0f0", border: "1px solid #efb8b8", lineHeight: 1.45 },
};

export default EnfoquesComparados;
