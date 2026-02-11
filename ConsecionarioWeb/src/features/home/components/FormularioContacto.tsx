import { useState } from "react";

export default function FormularioContacto() {
  // 1. Estado para guardar lo que escribe el usuario
  const [datos, setDatos] = useState({
    nombre: "",
    mensaje: "",
  });

  // Configuración de contacto (¡Cámbialos por los tuyos!)
  const EMAIL_DESTINO = "ventas@tuconcesionaria.com";
  const TELEFONO_WHATSAPP = "5491112345678"; // Formato internacional sin '+'

  const manejarCambio = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // 2. Función para abrir WhatsApp
  const enviarWhatsApp = () => {
    if (!datos.nombre || !datos.mensaje) {
      alert("Por favor completa nombre y mensaje antes de enviar.");
      return;
    }

    const texto = `Hola, soy ${datos.nombre}. ${datos.mensaje}`;
    const url = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(texto)}`;

    // Abre WhatsApp en una nueva pestaña
    window.open(url, "_blank");
  };

  // 3. Función para abrir el cliente de Correo
  const enviarEmail = () => {
    if (!datos.nombre || !datos.mensaje) {
      alert("Por favor completa nombre y mensaje antes de enviar.");
      return;
    }

    const asunto = `Consulta de ${datos.nombre} desde la Web`;
    const cuerpo = `Hola, mi nombre es ${datos.nombre}.\n\nMensaje:\n${datos.mensaje}`;

    // Abre el cliente de correo por defecto
    window.location.href = `mailto:${EMAIL_DESTINO}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  };

  return (
    <>
      <h3>Contáctanos</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={datos.nombre}
            onChange={manejarCambio}
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            name="mensaje"
            value={datos.mensaje}
            onChange={manejarCambio}
            placeholder="Escribe tu consulta aquí..."
            rows={3}
          ></textarea>
        </div>

        {/* Botones de acción */}
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={enviarWhatsApp}
          >
            <i className="bi bi-whatsapp"></i> Enviar por WhatsApp
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={enviarEmail}
          >
            <i className="bi bi-envelope"></i> Enviar por Email
          </button>
        </div>
      </form>
    </>
  );
}
