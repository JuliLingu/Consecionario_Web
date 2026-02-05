import { Routes, Route } from "react-router";
import LandingPage from "./features/home/components/LandingPage";
import CrearVehiculo from "./features/admin/components/CrearVehiculo";
import EditarVehiculo from "./features/admin/components/EditarVehiculo";
import FormularioContacto from "./features/home/components/FormularioContacto";
import CatalogoVehiculo from "./features/catalogo/components/CatalogoVehiculo";
import DetalleVehiculo from "./features/catalogo/components/DetalleVehiculo";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/catalogo" element={<CatalogoVehiculo />} />
            <Route path="/contacto" element={<FormularioContacto />} />
            <Route path="/vehiculos/:id" element={<DetalleVehiculo />} />

            <Route path="/vehiculo/crear" element={<CrearVehiculo/>}/>
            <Route path="/vehiculo/editar" element={<EditarVehiculo />}/>
        </Routes>
    );
}