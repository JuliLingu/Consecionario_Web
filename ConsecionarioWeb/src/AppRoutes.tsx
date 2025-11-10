import { Routes, Route } from "react-router";
import LandingPage from "./features/home/components/LandingPage";
import IndiceCatalogo from "./features/catalogo/components/IndiceCatalogo";
import CrearCatalogo from "./features/catalogo/components/CrearCatalogo";
import EditarCatalogo from "./features/catalogo/components/EditarCatalogo";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/catalogo" element={<IndiceCatalogo />} />
            <Route path="/catalogo/crear" element={<CrearCatalogo/>} />
            <Route path="/catalogo/editar" element={<EditarCatalogo/>} />
        </Routes>
    );
}