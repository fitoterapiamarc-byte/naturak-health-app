import Header from "./components/Header";
import EvaluacionIntegral from "./pages/EvaluacionIntegral";

function App() {
  return (
    <>
      <Header />

      <div
        role="status"
        style={{
          maxWidth: "1100px",
          margin: "18px auto 0",
          padding: "12px 18px",
          background: "#fff8e6",
          border: "1px solid #e0a000",
          borderRadius: "10px",
          color: "#704b00",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        🧪 Versión en desarrollo · Uso exclusivo para pruebas · No destinada todavía a uso público
      </div>

      <main
        style={{
          padding: "30px",
          fontFamily: "Arial, sans-serif",
          background: "#f4f8f7",
          minHeight: "100vh",
        }}
      >
        <EvaluacionIntegral />
      </main>
    </>
  );
}

export default App;