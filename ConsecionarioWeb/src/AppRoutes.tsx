import { Routes, Route } from "react-router";

// Vistas Públicas
import LandingPage from "./features/home/components/LandingPage";
import CatalogoVehiculo from "./features/catalogo/components/CatalogoVehiculo"; // O como hayas nombrado tu catálogo público
import DetalleVehiculo from "./features/catalogo/components/DetalleVehiculo";
import FormularioContacto from "./features/home/components/FormularioContacto";

// Vista Oculta
import Login from "./features/auth/components/Login";

// Vistas Privadas (CRUD)
import CrearVehiculo from "./features/admin/components/CrearVehiculo";
import EditarVehiculo from "./features/admin/components/EditarVehiculo";

// Seguridad
import RutaProtegida from "./features/auth/components/RutaProtegida";

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. ZONA PÚBLICA (Accesible para todos) */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/catalogo" element={<CatalogoVehiculo />} />
      <Route path="/contacto" element={<FormularioContacto />} />
      <Route path="/vehiculos/:id" element={<DetalleVehiculo />} />

      {/* 2. LOGIN OCULTO (Solo quien sepa la URL entra) */}
      <Route path="/login" element={<Login />} />

      {/* 3. ZONA BLINDADA (Requiere Token) */}
      {/* Cualquier ruta dentro de este bloque verificará el token */}
      <Route element={<RutaProtegida />}>
        <Route path="/vehiculo/crear" element={<CrearVehiculo />} />
        <Route path="/vehiculo/editar/:id" element={<EditarVehiculo />} />
      </Route>
    </Routes>
  );
}
