import Menu from "./components/Menu";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer"; // 1. Importar Footer

function App() {
  return (
    // 2. Usar flexbox para que el footer siempre baje (min-vh-100 ocupa toda la altura)
    <div className="d-flex flex-column min-vh-100">
      <Menu />

      {/* 3. flex-grow-1 hace que este div ocupe todo el espacio disponible empujando el footer */}
      <div className="container flex-grow-1">
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
