const fs = require('node:fs/promises');

const readFile = process.argv[2];

if (!readFile) {
    console.error('Favor de ingresar una ruta 🧭');
    process.exit(1);
}


async function init() {

    fs.readdir(readFile)
        .then((element) => {
            //CREAMOS UN ARREGLO DE PROMESAS(una para leer cada archivo)
            const promesasDeLectura = element.map(async (items) => {
                return fs.stat(`${readFile}, ${items}`)
            });
            // Esperamos a que TODAS las lecturas terminen en paralelo
            return Promise.all(promesasDeLectura)


            // .then((contenidos) => {
            // // 'contenidos' es un arreglo con el texto de cada archivo
            // console.log("Contenido de todos los archivos:", contenidos);
        })
        .catch((error) => {
            console.error("Ocurrió un error en el proceso 😔:");
        });
}

init();


// const referencia = file.map(async (elementos) => {
//     const rutaCompleta = path.join(elementos, readFile)
//     const status = await fs.stat(rutaCompleta)
//     return status.size;

// .then(elementos => {
//     console.log('Status de los elementos: ✅', '\n', elementos);
// })
// .catch(err => {
//     console.log('Error al leer el directorio❌❌❌')
// });
// })
// console.log(referencia);




