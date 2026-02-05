export default function FormularioContacto() {
    return (
        <>
            <h3>Contáctanos</h3>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea className="form-control"></textarea>
                </div>
                <button type="button" className="btn btn-primary">Enviar</button>
            </form>
        </>
    );
}