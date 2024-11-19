// Definición de la función funcional de React llamada ContenidoWeb que recibe un objeto web como prop
function ContenidoWeb({ web }) {
  // Retorna el JSX que se va a renderizar
  return (
    // Contenedor principal div
    <div>
      <h2>Toda la info de la web seleccionada</h2>
      <div>
        <h2>Titulo: {web.Titulo}</h2>
        <p>Ciudad de la web: {web.Ciudad}</p>
        <p>Actividad de la web: {web.Actividad}</p>
        <p>Resumen de la web: {web.Resumen}</p>
        <div>
          Array de textos:
          <ul>
            {web.Array_textos.map((texto) => (
              // Elemento de lista que muestra el texto
              <li>{texto}</li>
            ))}
          </ul>
        </div>
        <div>
          Array de imágenes:
          <ul>
            {web.Array_imagenes.map((imagen) => (
              // Elemento de lista que muestra la imagen
              <li>{imagen}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Exporta la función ContenidoWeb para que pueda ser utilizada en otros archivos
export default ContenidoWeb;