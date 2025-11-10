import Vehiculo from "../modelos/vehiculos.model";
import VehiculoIndividual from "./VehiculoIndividual";
import styles from "./ListadoVehiculos.module.css";
import ListadoGenerico from "../../../components/ListadoGenerico";

export default function ListadoVehiculos(props: ListadoVehiculosProps) {

    return (
        <ListadoGenerico<Vehiculo> listado={props.vehiculos}>

            <div className={styles.div}>
                {props.vehiculos?.map(vehiculo => <VehiculoIndividual key={vehiculo.id} vehiculo={vehiculo} />)}
            </div>

        </ListadoGenerico>
    )

}
interface ListadoVehiculosProps {
    vehiculos?: Vehiculo[];
}