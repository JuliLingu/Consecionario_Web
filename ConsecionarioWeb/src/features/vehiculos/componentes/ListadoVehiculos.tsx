import Vehiculo from "../modelos/vehiculos.model";
import VehiculoIndividual from "./VehiculoIndividual";
import styles from "./ListadoVehiculos.module.css";

export default function ListadoVehiculos(props: ListadoVehiculosProps) {
    return (
        <div className={styles.div}>
            {props.vehiculos.map(vehiculo => <VehiculoIndividual key={vehiculo.id} vehiculo={vehiculo} />)}
        </div>

    )
} 
interface ListadoVehiculosProps {
    vehiculos: Vehiculo[];
}