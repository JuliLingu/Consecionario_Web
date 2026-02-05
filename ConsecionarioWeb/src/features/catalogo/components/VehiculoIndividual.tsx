import { Link } from "react-router"; // Importamos Link
import Vehiculo from "../modelos/vehiculos.model";
import styles from "./VehiculoIndividual.module.css";

export default function VehiculoIndividual(props: VehiculoIndividualProps) {
  // Usamos el ID para construir la ruta
  const urlDetalle = `/vehiculos/${props.vehiculo.id}`;

  return (
    <div className={styles.div}>
      <Link to={urlDetalle}>
        <img
          alt="Vehiculo"
          src={props.vehiculo.imagenUrl}
          style={{ width: "200px", height: "auto", objectFit: "cover" }}
        />
      </Link>

      <h4>
        <Link
          to={urlDetalle}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {props.vehiculo.marca} {props.vehiculo.modelo}
        </Link>
      </h4>

      <p>{props.vehiculo.year}</p>
      <p className="fw-bold">${props.vehiculo.precio}</p>

      <Link to={urlDetalle} className="btn btn-primary btn-sm">
        Ver Detalles
      </Link>
    </div>
  );
}

interface VehiculoIndividualProps {
  vehiculo: Vehiculo;
}
