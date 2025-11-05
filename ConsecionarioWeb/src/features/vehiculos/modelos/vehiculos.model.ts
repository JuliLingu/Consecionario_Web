export default interface Vehiculo {
    id: number;
    marca: string;
    modelo: string;
    year: number;
    color: string;
    tipo: 'sedan' | 'suv' | 'camioneta' | 'motocicleta' | 'otro';
    precio: number;
    disponible: boolean;    
    imagenUrl: string;
}