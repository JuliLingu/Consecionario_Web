import Menu from "./components/Menu";
import VehiculoIndividual from "./features/vehiculos/componentes/VehiculoIndividual";
import Vehiculo from "./features/vehiculos/modelos/vehiculos.mode";

function App() {
  const vehiculo : Vehiculo = {
   
    id: 1,
    marca: "Volkswagen",
    modelo: "Golf",
    year: 2021,
    color: "Gris",
    tipo: 'sedan',
    precio: 25000,
    disponible: true,
    imagenUrl:"https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Small/volkswagen/golf/ar/RT_PU_71db44ecb1a743a9be6c6a95c38c7e18.webp",
   
  }
  return (
    <>
      <Menu />
      <VehiculoIndividual vehiculo={vehiculo}/>
    </>
  );
}

export default App;
