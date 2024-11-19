// Importa los hooks useEffect y useState desde React
import { useEffect, useState } from "react";
// Importa el componente AllContentWeb
import ContenidoWeb from "./ComponentsWeb";
// Define el componente funcional WebList
function WebList() {
  // Declara el estado 'web' y su función para actualizarlo 'setWeb', inicializado como un array vacío
  const [web, setWeb] = useState([]);
  // Declara el estado 'webSelected' y su función para actualizarlo 'setWebSelected'
  const [webSelected, setWebSelected] = useState();
  // Declara el estado 'cityWeb' y su función para actualizarlo 'setCityWeb', inicializado como una cadena vacía
  const [cityWeb, setCityWeb] = useState('')
  // Declara el estado 'currentWebList' y su función para actualizarlo 'setCurrentWebList', inicializado como un array vacío
  const [currentWebList, setCurrentWebList] = useState([])
  // Utiliza useEffect para ejecutar el código cuando el componente se monta
  useEffect(() => {
    // Realiza una solicitud fetch a la API para obtener datos
    fetch("http://localhost:1234/api/web")
      // Convierte la respuesta a JSON
      .then((response) => response.json())
      // Actualiza los estados 'web' y 'currentWebList' con los datos obtenidos
      .then((data) => {
        setWeb(data)
        setCurrentWebList(data)
      })
      // Maneja cualquier error que ocurra durante la solicitud fetch
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);
  // Define la función 'order' para ordenar la lista de webs por puntuación
  const order = () => {
    // Crea una copia del estado 'web' y la ordena por la puntuación de los usuarios
    const sortedWeb = [...web].sort((a, b) => b.resenas_users.Scoring - a.resenas_users.Scoring);
    // Actualiza el estado 'currentWebList' con la lista ordenada
    setCurrentWebList(sortedWeb);
  };
  // Filtra la lista actual de webs según la ciudad ingresada en 'cityWeb'
  const filter = currentWebList.filter(city =>
    city.Ciudad.toLowerCase().includes(cityWeb.toLowerCase())
  )
  // Mapea la lista filtrada para crear elementos JSX para cada web
  const ListWeb = filter.map(web => (
    // Crea un div para cada web con su título, ciudad y actividad
    <div>
      <h3 onClick={() => setWebSelected(web)}>Titulo: {web.Titulo}</h3>
      <p>Ciudad de la web: {web.Ciudad}</p>
      <p>Actividad de la web: {web.Actividad}</p>
    </div>
  ));
  // Retorna el JSX que se renderizará en la interfaz de usuario
  return (
    <div>
      {/* Condicionalmente renderiza la lista de webs o el contenido de una web seleccionada */}
      {!webSelected ? (
        <div>
          <h1>Lista de las webs</h1>
          {ListWeb}
        </div>
      ) : (
        <div>
          <ContenidoWeb web={webSelected} />
        </div>
      )}
      {/* Campo de entrada para filtrar por ciudad */}
      <input type="text" onChange={(e) => setCityWeb(e.target.value)} />
      <br />
      <br />
      {/* Botón para ordenar la lista de webs */}
      <button onClick={order}>Ordena la pagina</button>
    </div>
  );
}

// Exporta el componente WebList como el valor por defecto
export default WebList;