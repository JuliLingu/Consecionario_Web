import { Routes, Route } from "react-router";
import LandingPage from "./features/home/components/LandingPage";
import IndiceCatalogo from "./features/catalogo/components/IndiceCatalogo";
import CrearCatalogo from "./features/catalogo/components/CrearCatalogo";
import EditarCatalogo from "./features/catalogo/components/EditarCatalogo";
import CrearVehiculo from "./features/vehiculos/components/CrearVehiculo";
import EditarVehiculo from "./features/vehiculos/components/EditarVehiculo";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/catalogo" element={<IndiceCatalogo />} />
            <Route path="/catalogo/crear" element={<CrearCatalogo/>} />
            <Route path="/catalogo/editar" element={<EditarCatalogo/>} />
            <Route path="/vehiculo/crear" element={<CrearVehiculo/>}/>
            <Route path="/vehiculo/editar" element={<EditarVehiculo />}/>
        </Routes>
    );
}