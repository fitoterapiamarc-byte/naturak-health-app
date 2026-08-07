import Header from "./components/Header";
import EvaluacionIntegral from "./pages/EvaluacionIntegral";

function App() {
  return (
    <>
      <Header />

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