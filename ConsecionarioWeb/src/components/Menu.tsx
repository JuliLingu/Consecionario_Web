import { NavLink } from "react-router";

export default function Menu() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">Concesionario</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/catalogo"}>Catalogo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/detalle"}>Detalle</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}