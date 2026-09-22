// 1. Asegúrate de incluir /contacto si esa es tu ruta en el servidor
fetch("http://localhost:3000")
    .then(respuesta => {
        // Verificar si la respuesta fue exitosa (código HTTP 200-299)
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }
        return respuesta.json();
    })
    .then(datos => {
        const nombreEl = document.getElementById("nombre");
        const emailEl = document.getElementById("email");
        const mensajeEl = document.getElementById("mensaje");

        // Validar que los elementos existen antes de asignar contenido
        if (nombreEl) nombreEl.textContent = datos.nombre;
        if (emailEl) emailEl.textContent = `Correo: ${datos.email}`;
        if (mensajeEl) mensajeEl.textContent = datos.mensaje;
    })
    .catch((err) => {
        console.error("Error al consumir la API ❌", err);

        const tarjeta = document.getElementById("tarjeta-contacto");
        if (tarjeta) {
            tarjeta.innerHTML = "<p style='color: red;'>No se pudieron cargar los datos de contacto.</p>";
        }
    });