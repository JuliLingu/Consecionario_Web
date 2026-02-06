import Menu from "./components/Menu";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
