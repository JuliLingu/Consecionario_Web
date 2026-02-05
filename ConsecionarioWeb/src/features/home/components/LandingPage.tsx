export default function LandingPage() {
    return (
        <div className="text-center">
            <h1>Bienvenido a Nuestra Agencia</h1>
            <p className="lead">Encuentra el auto de tus sueños con la mejor financiación.</p>
            <hr />
            
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>¿Quiénes somos?</h3>
                    <p>Somos una empresa con más de 30 años de trayectoria en el mercado automotor...</p>
                </div>
                <div className="col-md-6">
                    <h3>Nuestra Ubicación</h3>
                    <p>Av. Siempre Viva 123</p>
                    <p>Mar del Plata, Argentina</p>
                </div>
            </div>
        </div>
    );
}