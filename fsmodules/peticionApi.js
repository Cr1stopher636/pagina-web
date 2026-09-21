fetch("http://localhost:3000/contacto")
.then((respuesta) => respuesta.json())
.then((datos) => {
    console.log(datos);
})

.catch(err => {
    console.error('Error al consumir la API❌');
})


