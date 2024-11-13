const PaginaDetalle = ({ pagina, onVolver }) => {
    return (
        <div>
            <h1>{pagina.titulo}</h1>
            <p>Ciudad: {pagina.ciudad}</p>
            <p>Actividad: {pagina.actividad}</p>
            <div>
                <h2>Detalles:</h2>
                <p>{pagina.descripcion}</p>
            </div>
            <button onClick={onVolver}>Volver a la lista</button> {/* Botón para volver */}
        </div>
    );
};

export default PaginaDetalle; // Exporta el componente