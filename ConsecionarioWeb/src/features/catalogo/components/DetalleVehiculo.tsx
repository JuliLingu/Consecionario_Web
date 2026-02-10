import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"; // Usando react-router
import Vehiculo from "../modelos/vehiculos.model";
import { vehiculosMock } from "../data/vehiculos.datos";

export default function DetalleVehiculo() {
  const { id } = useParams();
  const [vehiculo, setVehiculo] = useState<Vehiculo | null>(null);
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string>("");

  useEffect(() => {
    const idNumero = parseInt(id!, 10);
    const encontrado = vehiculosMock.find((v) => v.id === idNumero);

    if (encontrado) {
      setVehiculo(encontrado);
      // Seleccionar primera imagen como portada inicial
      if (encontrado.imagenesUrl && encontrado.imagenesUrl.length > 0) {
        setImagenSeleccionada(encontrado.imagenesUrl[0]);
      }
    }
  }, [id]);

  if (!vehiculo) return <div className="container mt-5 text-center">Cargando vehículo...</div>;

  // --- FORMATO ARGENTINA ---
  const precioAr = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(vehiculo.precio);
  const kmAr = new Intl.NumberFormat('es-AR').format(vehiculo.kilometros);

  return (
    <div className="container mt-4 mb-5">
      <div className="card shadow border-0">
        <div className="row g-0">

          {/* COLUMNA IZQUIERDA: GALERÍA DE FOTOS */}
          <div className="col-lg-8 bg-white p-4">
            {/* Imagen Principal Grande */}
            <div className="d-flex justify-content-center align-items-center mb-3 bg-light rounded" style={{ height: "500px", overflow: "hidden" }}>
              <img
                src={imagenSeleccionada || "https://via.placeholder.com/800x600?text=Sin+Foto"}
                alt={vehiculo.modelo}
                className="img-fluid"
                style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
              />
            </div>

            {/* Tira de Miniaturas */}
            <div className="d-flex gap-2 overflow-auto py-2">
              {vehiculo.imagenesUrl.map((img, index) => (
                <div
                  key={index}
                  className={`rounded overflow-hidden ${imagenSeleccionada === img ? 'border border-primary border-2 shadow-sm' : 'border'}`}
                  style={{ minWidth: "80px", width: "80px", height: "80px", cursor: "pointer" }}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: imagenSeleccionada === img ? 1 : 0.6 }}
                    // Interacción al pasar el mouse (estilo ML)
                    onMouseEnter={() => setImagenSeleccionada(img)}
                    onClick={() => setImagenSeleccionada(img)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN */}
          <div className="col-lg-4 border-start p-4 bg-light">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb small mb-2">
                <li className="breadcrumb-item"><Link to="/catalogo">Catálogo</Link></li>
                <li className="breadcrumb-item active">{vehiculo.marca}</li>
              </ol>
            </nav>

            <span className="text-muted small">
              {vehiculo.year} | {kmAr} km
            </span>

            <h1 className="fw-bold mb-3 mt-1">{vehiculo.marca} {vehiculo.modelo} <span className="fw-normal fs-4 text-muted">{vehiculo.version}</span></h1>

            <div className="mb-4">
              <h2 className="display-6 fw-normal text-dark">{precioAr}</h2>
            </div>

            {/* Botones de acción principales */}
            <div className="d-grid gap-3 mb-4">
              <button className="btn btn-primary btn-lg">Consultar ahora</button>
              <button className="btn btn-outline-primary">Agregar a favoritos</button>
            </div>

            {/* Ficha técnica resumida */}
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white fw-bold py-3">Detalles del Vehículo</div>
              <ul className="list-group list-group-flush small">
                <li className="list-group-item d-flex justify-content-between py-3">
                  <span className="text-muted">Transmisión</span>
                  <span className="fw-bold">{vehiculo.transmision}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between py-3">
                  <span className="text-muted">Color</span>
                  <span className="fw-bold">{vehiculo.color}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between py-3">
                  <span className="text-muted">Estado</span>
                  {vehiculo.disponible
                    ? <span className="badge bg-success">Disponible</span>
                    : <span className="badge bg-danger">Vendido</span>
                  }
                </li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <Link to="/catalogo" className="text-decoration-none">Ver más vehículos similares</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}