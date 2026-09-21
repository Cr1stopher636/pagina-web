// CONSUMIENDO UNA API

const info = fetch('http://localhost:3000')
.then((datos) => {
    return datos.json();
})

.then((datos) => {
    console.log(datos);
})

.catch(err => {
    console.error('Error al consumir la API');
})






