function Header() {
  return (
    <header
      style={{
        background: "#0b8f52",
        color: "white",
        padding: "clamp(14px, 3vw, 20px) clamp(16px, 5vw, 30px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(10px, 3vw, 16px)", minWidth: 0 }}>
        <div
          aria-label="Logotipo MBM"
          style={{
            position: "relative",
            display: "grid",
            placeItems: "center",
            width: "clamp(62px, 13vw, 88px)",
            height: "clamp(62px, 13vw, 88px)",
            flexShrink: 0,
            overflow: "hidden",
            background: "white",
            borderRadius: "14px",
            boxShadow: "0 2px 8px rgba(0,0,0,.16)",
          }}
        >
          <div style={{ color: "#194f32", textAlign: "center", lineHeight: 1 }} aria-hidden="true">
            <span style={{ display: "block", fontSize: "clamp(20px, 5vw, 30px)" }}>🌿</span>
            <strong style={{ display: "block", marginTop: "4px", fontFamily: "Georgia, serif", fontSize: "clamp(19px, 5vw, 28px)", letterSpacing: "0.06em" }}>MBM</strong>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}mbm-logo.png?v=2`}
            alt="Logotipo MBM"
            onError={(event) => { event.currentTarget.style.display = "none"; }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", background: "white" }}
          />
        </div>
        <div style={{ minWidth: 0 }}>
          <h1 style={{ margin: 0, fontSize: "clamp(26px, 6vw, 38px)", lineHeight: 1.05 }}>CuerpoClaro</h1>
          <p style={{ margin: "5px 0 0", fontSize: "clamp(13px, 3vw, 16px)" }}>Escucha las señales de tu cuerpo</p>
          <small style={{ display: "block", marginTop: "5px", fontSize: "clamp(10px, 2.5vw, 12px)", letterSpacing: "0.04em", opacity: 0.92 }}>
            MBM · Complementos naturales para tu bienestar
          </small>
        </div>
      </div>

      <div
        style={{
          background: "white",
          color: "#0b8f52",
          padding: "9px 13px",
          borderRadius: "8px",
          fontWeight: "bold",
          flexShrink: 0,
        }}
      >
        Usuario
      </div>
    </header>
  );
}

export default Header;
