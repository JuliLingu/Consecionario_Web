import Vehiculo from "../modelos/vehiculos.mode";
import styles from "./VehiculoIndividual.module.css";

export default function VehiculoIndividual(props: VehiculoIndividualProps) {

    const construirUrl = () => `/vehiculos/${props.vehiculo.id}`;

  return (
    <div className={styles.div}>
      <a href={construirUrl()}>
        <img alt="Vehiculo" src={props.vehiculo.imagenUrl} />
      </a>
      <h2>
        {props.vehiculo.marca} {props.vehiculo.modelo} ({props.vehiculo.year})
      </h2>
      <p>Color: {props.vehiculo.color}</p>
      <p>Tipo: {props.vehiculo.tipo}</p>
      <p>Precio: ${props.vehiculo.precio}</p>
      <p>
        Disponibilidad:{" "}
        {props.vehiculo.disponible ? "Disponible" : "No Disponible"}
      </p>
    </div>
  );
}

interface VehiculoIndividualProps {
  vehiculo: Vehiculo;
}
