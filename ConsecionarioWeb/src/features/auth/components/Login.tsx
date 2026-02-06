import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple (Simulación de credenciales correctas)
    if (email === "admin@concesionario.com" && password === "123456") {
      login(email);
      // Redirigimos al área de trabajo del dueño
      navigate("/vehiculo/crear");
    } else {
      setError("Credenciales inválidas");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card border-0 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body p-5">
          <h4 className="text-center mb-4 fw-light">Acceso Propietario</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg fs-6"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control form-control-lg fs-6"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="alert alert-danger py-2 small">{error}</div>
            )}

            <button type="submit" className="btn btn-dark w-100">
              Ingresar
            </button>
          </form>

          <div className="text-center mt-4">
            <a href="/" className="text-decoration-none text-muted small">
              ← Volver al sitio público
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
