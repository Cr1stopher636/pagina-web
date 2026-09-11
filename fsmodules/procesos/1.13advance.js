// const message = 'Hola mundo';

// const devolver = (file) => {
//     return file;
// }

// console.log(devolver(message));

// const path = require('node:path'); //MODULO PARA RUTAS DE ARCHIVOS Y DIRECTORIOS

//const ruta = path.join('ricardoyanez', 'Desktop') // UNIR RUTAS CON JOIN
//const nameFile = path.basename(ruta) // OBTIENE EL NOMBRE DEL ARCHIVO
//const extension = path.extname('1.12dvance.js') // OBTIENE EL NOMBRE DE LA EXTENSIÓN
//const readDir = path.dirname('ricardoyanez/desktop/web/fsmodules/procesos') // OBTIENE EL NOMBRE DEL DIRECTORIO

// const fs = require('node:fs/promises');
// const path = require('node:path');

// const folder = './fsmodules';

// async function init(folder) {
//     try {
//         const files = await fs.readdir(folder);
//         files.forEach(elemento => {
//             const rutaArchivo = path.join(folder, elemento);
//             console.log(rutaArchivo);
//         })
//     } catch (err) {
//         console.log('Error al leer el directorio❌😩❌');
//     }
// }

// init(folder);


// files.forEach(file => {
//     const filePath = path.join(folder, file);

//     console.log(filePath);
// });



// const path = require('node:path');



// const leer2 = process.argv[2] ?? '.';


// CON CALLBACKS
//          fs.readdir(leer, (err, text) => {
//             console.log(text);
//          })

// CON ASYNC/AWAIT


// const path = require('node:path');
const fs = require('node:fs/promises');
const path = require('node:path');
const leer = process.argv[2] ?? 'No hay variable';


async function init(directorio) {
    let archivos;

    try {
        archivos = await fs.readdir(directorio);
        archivos.map(async (directorio) => {
            console.log('Elementos:✅', directorio);
        })

    } catch (err) {
        console.error('Error al leer el directorio❌❌❌');
        return;
    }


const filePromises = archivos.map(async (elemento) => {
        const filePath = path.join(directorio, elemento);

        try {
            const stat = await fs.stat(filePath);
            return { filePath, stat };
        } catch (err) {
            console.error('No se pudo leer el directorio😩🫨❌');
            return null;
        }
    });
    const resultados = await Promise.all(filePromises);

const archivosValidos = resultados.filter((item) => item !== null);

console.log('Resultados procesados: ', archivosValidos);
return archivosValidos;

}

init(leer);







// Para esperar a que terminen todas las promesas:
// const resultados = await Promise.all(filePromises);

// const archivosValidos = resultados.filter(elemento => elemento !== null);
// console.log(archivosValidos);











// EN PARALELO
// Promise.all(([
//     fs.readdir(leer),
//     fs.readdir(leer2),
// ])).then(([primerElemento, segundoElemento]) => {
//     console.log(segundoElemento);
// }).catch(err => {
//     console.log('Error Papito😔❌');
// });





      

     


        //     .then(primerElemento => {
        //         primerElemento.forEach(segundoElemento => {
        //             console.log(segundoElemento);
        //         });
        //     })
   
        // console.error('Error al leer el directorio❌😔');










// .then(element => {
//     element.forEach(info => {
//         console.log('Salio 👍', info);
//     });
// })

// .catch(err => {
//         console.error('Salio mal papi❌😔', err);
// });

// async function init(directorio) {
//     try {
//         const variable = await fs.readdir(directorio)
//         console.log(variable);
//     } catch (err) {
//         console.error('Erro al leer el directorio', err);
//     }
// }

// init(file);
