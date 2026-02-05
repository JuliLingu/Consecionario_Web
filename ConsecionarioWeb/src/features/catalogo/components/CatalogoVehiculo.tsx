import { useEffect, useState } from "react";
import Vehiculo from "../modelos/vehiculos.model";
import ListadoVehiculos from "./ListadoVehiculos";
import { vehiculosMock } from "../data/vehiculos.datos";

export default function LandingPage() {
  const [vehiculo, setVehiculos] = useState<Vehiculo[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setVehiculos(vehiculosMock);
    }, 1000);
  }, []);
  return (
    <>
      <div className="container mt-4">
        <h3>Catálogo de Vehículos Disponibles</h3>
        <ListadoVehiculos vehiculos={vehiculo} />
      </div>
    </>
  );
}
