function Header() {
  return (
    <header
      style={{
        background: "#0b8f52",
        color: "white",
        padding: "20px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>🌿 CuerpoClaro</h1>
        <p style={{ margin: 0 }}>
          Escucha las señales de tu cuerpo
        </p>
      </div>

      <div
        style={{
          background: "white",
          color: "#0b8f52",
          padding: "10px 16px",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Usuario
      </div>
    </header>
  );
}

export default Header;