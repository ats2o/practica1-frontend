import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginaWeb = ({ onPaginaSeleccionada }) => {
const [paginas, setPaginas] = useState([]);

useEffect(() => {
    const fetchPaginas = async () => {
        try {
            const response = await axios.get('/api/paginas');
            setPaginas(response.data);
        } catch (error) {
            console.error("Error al obtener las páginas:", error);
        }
    };
    fetchPaginas();
}, []);

return (
    <div>
        <h1>Lista de Páginas Web</h1>
        {paginas.length > 0 ? (
            <ul>
                {paginas.map(pagina => (
                    <li key={pagina.id} onClick={() => onPaginaSeleccionada(pagina)}> {/* Llama a la función al hacer clic */}
                        <h3>{pagina.titulo}</h3>
                        <p>Ciudad: {pagina.ciudad}</p>
                        <p>Actividad: {pagina.actividad}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No hay páginas disponibles.</p>
        )}
    </div>
);
};

export default PaginaWeb;