export default function ListadoGenerico<T>(props : ListadoGenericoProps<T>){
 if (!props.listado) {
        return 'Cargando....';
    }
    else if (props.listado.length === 0) {
        return 'No existen vehiculos para mostrar ';
    } else {

        return props.children;
    }
}

interface ListadoGenericoProps<T>{
    listado?: T[];
    children: React.ReactNode;
}