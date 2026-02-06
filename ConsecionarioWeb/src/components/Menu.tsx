import { NavLink, useNavigate } from "react-router"; // Asegúrate de usar react-router-dom
import { useAuth } from "../context/AuthContext"; // Importamos el contexto

export default function Menu() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Lo mandamos al inicio tras salir
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Concesionario</NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* VISTAS PÚBLICAS */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalogo">Catálogo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            </li>
            
            {/* VISTA PRIVADA (Solo visible si estás logueado) */}
            {isAuthenticated && (
                <li className="nav-item">
                    <NavLink className="nav-link text-warning" to="/vehiculo/crear">Nuevo Vehículo</NavLink>
                </li>
            )}
          </ul>

          {/* BOTÓN DE SALIDA (Solo visible si estás logueado) */}
          {isAuthenticated && (
            <div className="d-flex">
                <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
                    Cerrar Sesión
                </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}