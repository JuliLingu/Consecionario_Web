export default interface Vehiculo {
    id: number;
    marca: string;
    modelo: string;
    version: string;
    kilometros: number;
    year: number;
    color: string;
    transmision : string;
    precio: number;
    disponible: boolean;    
    imagenUrl: string;
}