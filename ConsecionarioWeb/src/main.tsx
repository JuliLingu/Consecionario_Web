import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router"; // Nota: Si usas react-router-dom v6, importa desde 'react-router-dom'
import App from "./App.tsx";

// Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

// Seguridad
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* El AuthProvider debe envolver al Router */}
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
