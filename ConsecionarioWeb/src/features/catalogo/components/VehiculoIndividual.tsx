import { Link } from "react-router"; // Usando react-router como pediste
import { useAuth } from "../../../context/AuthContext";
import Vehiculo from "../modelos/vehiculos.model";
import { vehiculosMock } from "../data/vehiculos.datos";
import styles from "./VehiculoIndividual.module.css";

export default function VehiculoIndividual(props: VehiculoIndividualProps) {
  const { isAuthenticated } = useAuth();
  const urlDetalle = `/vehiculos/${props.vehiculo.id}`;

  // --- FORMATO ARGENTINA ---
  const formatoPlata = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 });
  const formatoKm = new Intl.NumberFormat('es-AR');

  // Imagen de portada
  const imagenPortada = props.vehiculo.imagenesUrl && props.vehiculo.imagenesUrl.length > 0
    ? props.vehiculo.imagenesUrl[0]
    : "https://via.placeholder.com/300?text=Sin+Foto";

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    if (confirm(`¿Estás seguro de eliminar el ${props.vehiculo.marca} ${props.vehiculo.modelo}?`)) {
      const index = vehiculosMock.findIndex(v => v.id === props.vehiculo.id);
      if (index !== -1) {
        vehiculosMock.splice(index, 1);
        window.location.reload();
      }
    }
  };

  return (
    <div className={styles.card}>
      {/* Todo el bloque superior es un link al detalle */}
      <Link to={urlDetalle} className="text-decoration-none text-dark">
        <div className={styles.imagenContainer}>
          <img alt="Vehiculo" src={imagenPortada} className={styles.imagen} />
        </div>
      </Link>

      <div className={styles.info}>
        <div>
          <Link to={urlDetalle} className={styles.titulo}>
            {props.vehiculo.marca} {props.vehiculo.modelo}
          </Link>
          <p className="text-muted small mb-0">
            {props.vehiculo.year} | {formatoKm.format(props.vehiculo.kilometros)} km
          </p>
          <div className={styles.precio}>
            {formatoPlata.format(props.vehiculo.precio)}
          </div>
        </div>

        {/* BOTÓN VER DETALLES (Solicitado) */}
        <Link to={urlDetalle} className="btn btn-primary w-100">
          Ver Detalles
        </Link>
      </div>

      {/* ZONA ADMIN (Solo visible si estás logueado) */}
      {isAuthenticated && (
        <div className="d-flex border-top bg-light">
          <Link
            to={`/vehiculo/editar/${props.vehiculo.id}`}
            className="btn btn-link text-decoration-none flex-fill border-end py-2"
            title="Editar"
          >
            <i className="bi bi-pencil-square"></i> Editar
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-link text-decoration-none flex-fill text-danger py-2"
            title="Eliminar"
          >
            <i className="bi bi-trash"></i> Eliminar
          </button>
        </div>
      )}
    </div>
  );
}

interface VehiculoIndividualProps {
  vehiculo: Vehiculo;
}