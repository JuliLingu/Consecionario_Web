import { useEffect, useState } from "react";
// Usamos react-router para los hooks como pediste
import { useNavigate, useParams } from "react-router";
import Vehiculo from "../../catalogo/modelos/vehiculos.model";
import { vehiculosMock } from "../../catalogo/data/vehiculos.datos";

export default function EditarVehiculo() {
    const navigate = useNavigate();
    const { id } = useParams(); // Obtenemos el ID de la URL

    // Estado inicial null hasta que carguemos los datos
    const [vehiculo, setVehiculo] = useState<Vehiculo | null>(null);

    // Cargar datos al iniciar
    useEffect(() => {
        const idNumero = parseInt(id!, 10);
        const encontrado = vehiculosMock.find(v => v.id === idNumero);

        if (encontrado) {
            // Clonamos el objeto para no modificar el mock directamente hasta guardar
            setVehiculo({ ...encontrado });
        } else {
            alert("Vehículo no encontrado");
            navigate("/catalogo");
        }
    }, [id, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (!vehiculo) return;
        const { name, value, type } = e.target;
        let valorFinal: any = value;

        if (type === 'checkbox') valorFinal = (e.target as HTMLInputElement).checked;
        else if (type === 'number') valorFinal = Number(value);

        setVehiculo({ ...vehiculo, [name]: valorFinal });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!vehiculo) return;
        if (e.target.files && e.target.files.length > 0) {
            const files = Array.from(e.target.files);
            const newImageUrls = files.map(file => URL.createObjectURL(file));

            setVehiculo(prev => prev ? ({
                ...prev,
                imagenesUrl: [...prev.imagenesUrl, ...newImageUrls]
            }) : null);
        }
    };

    const eliminarImagen = (index: number) => {
        if (!vehiculo) return;
        const nuevasImagenes = vehiculo.imagenesUrl.filter((_, i) => i !== index);
        setVehiculo({ ...vehiculo, imagenesUrl: nuevasImagenes });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!vehiculo) return;

        // 1. Buscamos el índice original en el mock
        const index = vehiculosMock.findIndex(v => v.id === vehiculo.id);

        if (index !== -1) {
            // 2. SOBREESCRIBIMOS el vehículo con los datos nuevos
            vehiculosMock[index] = vehiculo;
            alert("Cambios guardados exitosamente.");
            navigate("/catalogo");
        }
    };

    if (!vehiculo) return <div className="p-5 text-center">Cargando datos del vehículo...</div>;

    return (
        <div className="container mt-5 mb-5">
            <div className="card shadow">
                <div className="card-header bg-warning-subtle py-3 d-flex justify-content-between align-items-center">
                    <h2 className="h4 mb-0 text-dark"><i className="bi bi-pencil-square me-2"></i>Editar Vehículo</h2>
                    <span className="badge bg-dark">ID: {vehiculo.id}</span>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        {/* DATOS GENERALES */}
                        <div className="row g-3 mb-4">
                            <div className="col-md-4">
                                <label className="form-label">Marca</label>
                                <input type="text" className="form-control" name="marca" value={vehiculo.marca} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Modelo</label>
                                <input type="text" className="form-control" name="modelo" value={vehiculo.modelo} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Versión</label>
                                <input type="text" className="form-control" name="version" value={vehiculo.version} onChange={handleChange} required />
                            </div>

                            <div className="col-md-3">
                                <label className="form-label">Año</label>
                                <input type="number" className="form-control" name="year" value={vehiculo.year} onChange={handleChange} required />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Precio ($)</label>
                                <input type="number" className="form-control" name="precio" value={vehiculo.precio} onChange={handleChange} required />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Kilómetros</label>
                                <input type="number" className="form-control" name="kilometros" value={vehiculo.kilometros} onChange={handleChange} required />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Color</label>
                                <input type="text" className="form-control" name="color" value={vehiculo.color} onChange={handleChange} required />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Transmisión</label>
                                <select className="form-select" name="transmision" value={vehiculo.transmision} onChange={handleChange}>
                                    <option value="Manual">Manual</option>
                                    <option value="Automatica">Automática</option>
                                </select>
                            </div>
                            <div className="col-md-6 d-flex align-items-end">
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" name="disponible" checked={vehiculo.disponible} onChange={handleChange} id="dispCheck" />
                                    <label className="form-check-label" htmlFor="dispCheck">Disponible para venta</label>
                                </div>
                            </div>
                        </div>

                        {/* GESTIÓN DE IMÁGENES */}
                        <div className="mb-4 border-top pt-3">
                            <h5 className="mb-3">Gestión de Imágenes</h5>

                            <div className="mb-3">
                                <label className="form-label text-muted">Agregar nuevas fotos</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    multiple
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </div>

                            <div className="row g-2">
                                {vehiculo.imagenesUrl.map((url, index) => (
                                    <div className="col-6 col-md-3 col-lg-2 position-relative" key={index}>
                                        <div className="card h-100">
                                            <img src={url} className="card-img-top" style={{ height: '100px', objectFit: 'cover' }} alt="Auto" />
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle"
                                                style={{ width: '24px', height: '24px', padding: 0 }}
                                                onClick={() => eliminarImagen(index)}
                                                title="Eliminar esta foto"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="d-flex gap-2 justify-content-end">
                            <button type="button" className="btn btn-secondary" onClick={() => navigate("/catalogo")}>Cancelar</button>
                            <button type="submit" className="btn btn-primary px-4">Guardar Cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}