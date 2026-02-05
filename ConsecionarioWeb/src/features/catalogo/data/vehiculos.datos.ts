import Vehiculo from "../modelos/vehiculos.model";

export const vehiculosMock: Vehiculo[] = [
    {
        id: 1,
        marca: "Volkswagen",
        modelo: "Golf",
        version: "GLI",
        year: 2021,
        color: "Gris",
        transmision: 'AT',
        precio: 25000,
        kilometros: 15000,
        disponible: true,
        imagenUrl: "https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Small/volkswagen/golf/ar/RT_PU_71db44ecb1a743a9be6c6a95c38c7e18.webp",
    },
    {
        id: 2,
        marca: "Toyota",
        modelo: "Corolla",
        version: "SEG",
        year: 2022,
        color: "Blanco",
        transmision: 'AT',
        precio: 28000,
        kilometros: 10000,
        disponible: true,
        imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/2020_Toyota_Corolla_Business_Edition_Hybrid_1.8_Front.jpg/1200px-2020_Toyota_Corolla_Business_Edition_Hybrid_1.8_Front.jpg",
    },
    {
        id: 3,
        marca: "Ford",
        modelo: "Ranger",
        version: "XLT",
        year: 2020,
        color: "Azul",
        transmision: 'AT',
        precio: 35000,
        kilometros: 25000,
        disponible: false,
        imagenUrl: "https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/nameplate/ranger/2023/version-features/ford-ranger-raptor-2023-ar-camioneta-4x4-off-road-pick-up.jpg",
    }
];