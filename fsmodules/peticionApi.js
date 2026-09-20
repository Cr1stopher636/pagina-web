fetch("http://localhost:3000")
  .then(respuesta => respuesta.json()) // 1. Convertimos la respuesta a JSON
  .then((datos) => {
    console.log("Datos recibidos:", datos); // 2. Usamos los datos procesados
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error); // Captura fallos en cualquier punto de la cadena
  });
