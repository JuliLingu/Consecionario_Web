import { useEffect, useState } from "react";
import Vehiculo from "../../vehiculos/modelos/vehiculos.model";
import ListadoVehiculos from "../../vehiculos/components/ListadoVehiculos";

export default function LandingPage() {

    const [vehiculo, setVehiculos] = useState<AppState>({});

    useEffect(() => {
        setTimeout(() => {
            const vehiculo: Vehiculo[] = [{

                id: 1,
                marca: "Volkswagen",
                modelo: "Golf",
                year: 2021,
                color: "Gris",
                tipo: 'sedan',
                precio: 25000,
                disponible: true,
                imagenUrl: "https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Small/volkswagen/golf/ar/RT_PU_71db44ecb1a743a9be6c6a95c38c7e18.webp",

            }]
            setVehiculos({ vehiculo });
        }, 1000);
    })
    return (
        <>
            <h3>Vehiculos</h3>
            <ListadoVehiculos vehiculos={vehiculo.vehiculo} />
        </>
    );

}
interface AppState {
    vehiculo?: Vehiculo[];
}