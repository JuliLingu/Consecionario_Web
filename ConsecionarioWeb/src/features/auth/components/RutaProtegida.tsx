import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../../context/AuthContext";

export default function RutaProtegida() {
    const { isAuthenticated } = useAuth();

    // Si NO está autenticado, redirigir al Login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Si SÍ está autenticado, mostrar la ruta solicitada (Outlet)
    return <Outlet />;
}