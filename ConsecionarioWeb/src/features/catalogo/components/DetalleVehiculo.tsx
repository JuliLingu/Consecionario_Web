import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"; // Asegúrate de importar Link
import Vehiculo from "../modelos/vehiculos.model";
import { vehiculosMock } from "../data/vehiculos.datos"; // <--- Importamos la MISMA fuente

export default function DetalleVehiculo() {
  const { id } = useParams();
  const [vehiculo, setVehiculo] = useState<Vehiculo | null>(null);

  useEffect(() => {
    const idNumero = parseInt(id!, 10);

    // Buscamos directamente en el array importado
    const encontrado = vehiculosMock.find((v) => v.id === idNumero);

    setVehiculo(encontrado || null);
  }, [id]);

  if (!vehiculo)
    return <div className="container mt-4">Vehículo no encontrado</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={vehiculo.imagenUrl}
              className="img-fluid rounded-start"
              alt={vehiculo.modelo}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">
                {vehiculo.marca} {vehiculo.modelo}
              </h2>
              <h4 className="text-muted">{vehiculo.year}</h4>
              <hr />
              <p className="card-text">
                <strong>Precio:</strong>{" "}
                <span className="fs-4 text-success">${vehiculo.precio}</span>
              </p>
              <p className="card-text">
                <strong>Transmisión:</strong> {vehiculo.transmision.toUpperCase()}
              </p>
              <p className="card-text">
                <strong>Color:</strong> {vehiculo.color}
              </p>
              <p className="card-text">
                <strong>Estado: </strong>
                {vehiculo.disponible ? (
                  <span className="badge bg-success">Disponible</span>
                ) : (
                  <span className="badge bg-danger">Vendido</span>
                )}
              </p>
              <div className="mt-4">
                <button className="btn btn-primary me-2">
                  Consultar por este auto
                </button>
                <Link to="/catalogo" className="btn btn-secondary">
                  Volver al catálogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
