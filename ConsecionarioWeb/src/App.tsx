import Menu from "./components/Menu";
import ListadoVehiculos from "./features/vehiculos/componentes/ListadoVehiculos";
import Vehiculo from "./features/vehiculos/modelos/vehiculos.model";

function App() {
  const vehiculo: Vehiculo [] = [{
  
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
  return (
    <>
      <Menu />
      <h3>Vehiculos</h3>
      <ListadoVehiculos vehiculos={vehiculo}/>
    </> 
  );
}

export default App;
