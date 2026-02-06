import { useState } from "react";
import Vehiculo from "../../catalogo/modelos/vehiculos.model";
import { useNavigate } from "react-router";

export default function CrearVehiculo() {
  const navigate = useNavigate();

  // Inicializamos el estado con los campos de tu modelo
  // Omitimos 'id' porque generalmente lo crea la base de datos automáticamente
  const [vehiculo, setVehiculo] = useState<Omit<Vehiculo, "id">>({
    marca: "",
    modelo: "",
    version: "",
    year: new Date().getFullYear(),
    precio: 0,
    kilometros: 0,
    color: "",
    transmision: "Manual",
    disponible: true,
    imagenUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    // Manejo especial para checkboxes y números
    let valorFinal: any = value;
    if (type === "checkbox") {
      valorFinal = (e.target as HTMLInputElement).checked;
    } else if (type === "number") {
      valorFinal = Number(value);
    }

    setVehiculo({ ...vehiculo, [name]: valorFinal });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos a enviar al backend:", vehiculo);
    alert("Vehículo creado exitosamente (Simulación)");
    // Aquí llamarías a tu servicio POST
    navigate("/catalogo"); // Redirigir al catálogo tras crear
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <h2 className="h4 mb-0 text-primary">Nuevo Vehículo</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Fila 1: Marca y Modelo */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Marca</label>
                    <input
                      type="text"
                      className="form-control"
                      name="marca"
                      value={vehiculo.marca}
                      onChange={handleChange}
                      placeholder="Ej: Toyota"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Modelo</label>
                    <input
                      type="text"
                      className="form-control"
                      name="modelo"
                      value={vehiculo.modelo}
                      onChange={handleChange}
                      placeholder="Ej: Corolla"
                      required
                    />
                  </div>
                </div>

                {/* Fila 2: Versión y Año */}
                <div className="row mb-3">
                  <div className="col-md-8">
                    <label className="form-label">Versión</label>
                    <input
                      type="text"
                      className="form-control"
                      name="version"
                      value={vehiculo.version}
                      onChange={handleChange}
                      placeholder="Ej: 1.8 SEG CVT"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Año</label>
                    <input
                      type="number"
                      className="form-control"
                      name="year"
                      value={vehiculo.year}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Fila 3: Precio, Km, Color */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label className="form-label">Precio ($)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="precio"
                      value={vehiculo.precio}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Kilómetros</label>
                    <input
                      type="number"
                      className="form-control"
                      name="kilometros"
                      value={vehiculo.kilometros}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Color</label>
                    <input
                      type="text"
                      className="form-control"
                      name="color"
                      value={vehiculo.color}
                      onChange={handleChange}
                      placeholder="Ej: Blanco Perlado"
                      required
                    />
                  </div>
                </div>

                {/* Fila 4: Transmisión y Disponibilidad */}
                <div className="row mb-3 align-items-end">
                  <div className="col-md-6">
                    <label className="form-label">Transmisión</label>
                    <select
                      className="form-select"
                      name="transmision"
                      value={vehiculo.transmision}
                      onChange={handleChange}
                    >
                      <option value="Manual">Manual</option>
                      <option value="Automatica">Automática</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="disponible"
                        checked={vehiculo.disponible}
                        onChange={handleChange}
                        id="checkDisp"
                      />
                      <label className="form-check-label" htmlFor="checkDisp">
                        Vehículo disponible para la venta
                      </label>
                    </div>
                  </div>
                </div>

                {/* Fila 5: Imagen URL */}
                <div className="mb-4">
                  <label className="form-label">URL de la Imagen</label>
                  <input
                    type="url"
                    className="form-control"
                    name="imagenUrl"
                    value={vehiculo.imagenUrl}
                    onChange={handleChange}
                    placeholder="https://..."
                    required
                  />
                  <div className="form-text">
                    Pega aquí el enlace directo a la foto del vehículo.
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Guardar Vehículo
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/catalogo")}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
