import { useEffect, useState } from "react";
import Vehiculo from "../modelos/vehiculos.model";
import ListadoVehiculos from "./ListadoVehiculos";
import { vehiculosMock } from "../data/vehiculos.datos";

export default function CatalogoVehiculo() {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [busqueda, setBusqueda] = useState(""); // 1. Estado para la búsqueda

  useEffect(() => {
    setTimeout(() => {
      setVehiculos(vehiculosMock);
    }, 1000);
  }, []);

  // 2. Lógica de filtrado: Marca O Modelo
  const vehiculosFiltrados = vehiculos.filter((vehiculo) => {
    if (!busqueda) return true; // Si no hay búsqueda, mostramos todo

    const termino = busqueda.toLowerCase();
    const marca = vehiculo.marca.toLowerCase();
    const modelo = vehiculo.modelo.toLowerCase();

    return marca.includes(termino) || modelo.includes(termino);
  });

  return (
    <div className="container mt-4">
      <h3>Catálogo de Vehículos Disponibles</h3>

      {/* 3. Barra de Búsqueda */}
      <div className="row mb-4 mt-3">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-white text-muted">
              <i className="bi bi-search">🔍</i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por marca o modelo..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Pasamos la lista FILTRADA en lugar de la original */}
      <ListadoVehiculos vehiculos={vehiculosFiltrados} />
    </div>
  );
}
