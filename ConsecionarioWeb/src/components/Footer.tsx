import { Link } from "react-router"; // O react-router-dom según tu versión

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Columna 1: Información de la Empresa */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold text-warning">Agencia</h5>
            <p className="small text-white-50">
              Concesionario oficial en Mar del Plata. Compra y venta de
              vehículos seleccionados. La mejor calidad y garantía para tu
              próximo auto.
            </p>
            <div className="mt-3">
              <a href="#" className="text-white me-3 fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com/autoplayamdq"
                target="_blank"
                className="text-white me-3 fs-5"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold text-warning">Navegación</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-decoration-none text-white-50 hover-white"
                >
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/catalogo"
                  className="text-decoration-none text-white-50 hover-white"
                >
                  Catálogo de Vehículos
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contacto"
                  className="text-decoration-none text-white-50 hover-white"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold text-warning">Contacto</h5>
            <ul className="list-unstyled small text-white-50">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2 text-warning"></i>
                Direccion 1234, Mar del Plata
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2 text-warning"></i>
                ventas@agencia.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2 text-warning"></i>
                (0223) 456-7890
              </li>
              <li className="mb-2">
                <i className="bi bi-clock me-2 text-warning"></i>
                Lun - Vie: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Copyright */}
        <div className="text-center small text-white-50">
          &copy; {new Date().getFullYear()} AutoPlaya Mar del Plata. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
