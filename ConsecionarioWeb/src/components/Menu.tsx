import { NavLink } from "react-router";

export default function Menu() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">Consecionario</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/marcas"}>Vehiculos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
