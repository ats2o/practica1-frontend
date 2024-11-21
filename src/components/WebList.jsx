useEffect(() => {
    fetch("http://localhost:1234/api/ciudades")
        .then((response) => response.json())
        .then((data) => {
            setWeb(data); // Suponiendo que aquí almacenas las ciudades
            setCurrentWebList(data);
        })
        .catch((error) => {
            console.error("Error fetching data", error);
        });
}, []);