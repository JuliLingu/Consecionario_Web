import { useState } from "react";
import { useNavigate } from "react-router";
// Rutas corregidas para evitar errores de importación
import Vehiculo from "../../catalogo/modelos/vehiculos.model";
import { vehiculosMock } from "../../catalogo/data/vehiculos.datos";

export default function CrearVehiculo() {
  const navigate = useNavigate();

  // Estado del vehículo
  const [vehiculo, setVehiculo] = useState<Omit<Vehiculo, 'id'>>({
    marca: "",
    modelo: "",
    version: "",
    year: new Date().getFullYear(),
    precio: 0,
    kilometros: 0,
    color: "",
    condicion:"",
    transmision: "Manual",
    disponible: true,
    imagenesUrl: []
  });

  // Manejo de inputs de texto/número
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let valorFinal: any = value;

    if (type === 'checkbox') {
      valorFinal = (e.target as HTMLInputElement).checked;
    } else if (type === 'number') {
      valorFinal = Number(value);
    }

    setVehiculo({ ...vehiculo, [name]: valorFinal });
  };

  // --- NUEVA LÓGICA: Manejo de Archivos (Imágenes) ---
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // 1. Convertimos la lista de archivos (FileList) a un Array
      const files = Array.from(e.target.files);

      // 2. Creamos URLs temporales para previsualizar
      // (Esto simula que la imagen ya está "subida" y tiene una dirección)
      const newImageUrls = files.map(file => URL.createObjectURL(file));

      // 3. Agregamos las nuevas URLs al array existente
      setVehiculo(prev => ({
        ...prev,
        imagenesUrl: [...prev.imagenesUrl, ...newImageUrls]
      }));
    }
  };

  const eliminarImagen = (index: number) => {
    const nuevasImagenes = vehiculo.imagenesUrl.filter((_, i) => i !== index);
    setVehiculo({ ...vehiculo, imagenesUrl: nuevasImagenes });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (vehiculo.imagenesUrl.length === 0) {
      alert("Por favor, agrega al menos una imagen del vehículo.");
      return;
    }

    // SIMULACIÓN DE GUARDADO
    const maxId = vehiculosMock.length > 0 ? Math.max(...vehiculosMock.map(v => v.id)) : 0;
    const nuevoVehiculo: Vehiculo = { ...vehiculo, id: maxId + 1 };

    vehiculosMock.push(nuevoVehiculo);

    alert("Vehículo creado exitosamente");
    navigate("/catalogo");
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-sm">
        <div className="card-header bg-white py-3">
          <h2 className="h4 mb-0 text-primary">Cargar Nuevo Vehículo</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* DATOS GENERALES */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label">Marca</label>
                <input type="text" className="form-control" name="marca" value={vehiculo.marca} onChange={handleChange} placeholder="Ej: Toyota" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Modelo</label>
                <input type="text" className="form-control" name="modelo" value={vehiculo.modelo} onChange={handleChange} placeholder="Ej: Corolla" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Versión</label>
                <input type="text" className="form-control" name="version" value={vehiculo.version} onChange={handleChange} placeholder="Ej: SEG CVT" required />
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

            {/* --- ZONA DE CARGA DE IMÁGENES --- */}
            <h5 className="mb-3 border-bottom pb-2">Fotos del Vehículo</h5>

            <div className="mb-4">
              <label className="form-label fw-bold">Subir Imágenes</label>
              <input
                type="file"
                className="form-control form-control-lg"
                multiple // Permite seleccionar varios archivos a la vez
                accept="image/*" // Solo acepta imágenes
                onChange={handleImageUpload}
              />
              <div className="form-text">
                Puedes seleccionar o arrastrar múltiples archivos aquí.
              </div>
            </div>

            {/* PREVISUALIZACIÓN (Galería) */}
            <div className="row g-3 mb-4">
              {vehiculo.imagenesUrl.length === 0 && (
                <div className="col-12 text-center py-4 bg-light rounded border border-dashed">
                  <p className="text-muted mb-0">No has seleccionado ninguna imagen aún.</p>
                </div>
              )}

              {vehiculo.imagenesUrl.map((url, index) => (
                <div className="col-6 col-md-3 col-lg-2 position-relative" key={index}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={url}
                      alt={`Preview ${index}`}
                      className="card-img-top"
                      style={{ height: '120px', objectFit: 'cover' }}
                    />
                    <button
                      type="button"
                      className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle shadow"
                      style={{ width: '24px', height: '24px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      onClick={() => eliminarImagen(index)}
                      title="Eliminar foto"
                    >
                      &times;
                    </button>
                    {index === 0 && (
                      <span className="badge bg-success position-absolute bottom-0 start-0 m-1">Portada</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-lg">
                <i className="bi bi-check-circle me-2"></i>Publicar Vehículo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}