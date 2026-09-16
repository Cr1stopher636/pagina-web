


// const path = require('node:path'); //MODULO PARA RUTAS DE ARCHIVOS Y DIRECTORIOS

// const ruta = path.join('ricardoyanez', 'Desktop') // UNIR RUTAS CON JOIN
// const nameFile = path.basename(ruta) // OBTIENE EL NOMBRE DEL ARCHIVO
// const extension = path.extname('1.12dvance.js') // OBTIENE EL NOMBRE DE LA EXTENSIÓN
// const readDir = path.dirname('ricardoyanez/desktop/web/fsmodules/procesos') // OBTIENE EL NOMBRE DEL DIRECTORIO



// const path = require('node:path');

const { read } = require('node:fs');
const fs = require('node:fs/promises');
const path = require('node:path');

const folder = './';
const file = 'archivo.txt';

async function init() {

        try {
        console.log('Ejecutando el primer archivo...🥇')
           const readFile = await fs.readFile(file, 'utf-8')
           console.log(readFile);
        console.log('Ejecutando el segundo archivo...🥈')
           const dir = await fs.readdir(folder);
           console.log(dir);
        console.log('Ejecutando la ruta...🧭');
           const rutaCompleta = path.join(folder, file)
           console.log(rutaCompleta);
        }

        catch (err) {
              console.error('Error al leer el directorio');
        }
} 

init();



// CON CALLBACKS
        //  fs.readdir(leer, (err, text) => {
        //     console.log(text);
        //  })

// CON ASYNC/AWAIT
// async function init() {
//     const leer = './';
//     const read = await fs.readdir(leer)
//     console.log(read);
// }


// EJERCICIO1.1

// const fs = require('node:fs/promises');
// const path = require('node:path');

// async function init() {
//     const folder = './';

//     const filePromise = await fs.readdir(folder);
//     const status = await fs.stat(folder);

//    filePromise.map(items => {
//     console.log(items);
//    });

//    console.log(status.isDirectory());
// }

// init();

//     const resultados = await Promise.all(filePromises);

// const archivosValidos = resultados.filter((item) => item !== null);

// console.log('Resultados procesados: ', archivosValidos);
// return archivosValidos;





// Para esperar a que terminen todas las promesas:
// const resultados = await Promise.all(filePromises);

// const archivosValidos = resultados.filter(elemento => elemento !== null);
// console.log(archivosValidos);











// EN PARALELO

// const fs = require('node:fs/promises');

// const file = '1.10advance.js';
// const dir = './';

// Promise.all([
//     fs.readdir(dir),
//     fs.readFile(file, 'utf-8')

// ]).then(([firstText, secondText]) => {
//     console.log('Primera info: ✅ℹ️', firstText45);
//     console.log('Segunda info: ✅ℹ️', secondText);
// })

// .catch(err => {
//     console.error('Error al leer los files papito...😔❌');
//     process.exit(1);
// })





// Promise.all(([
//     fs.readdir(leer),
//     fs.readdir(leer2),
// ])).then(([primerElemento, segundoElemento]) => {
//     console.log(segundoElemento);
// }).catch(err => {
//     console.log('Error Papito😔❌');
// });





      

     




// console.error('Error al leer el directorio❌😔');










// .then(element => {
//     element.forEach(info => {
//         console.log('Salio 👍', info);
//     });
// })

//     .catch(err => {
//         console.error('Salio mal papi❌😔', err);
//     });

// async function init(directorio) {
//     try {
//         const variable = await fs.readdir(directorio)
//         console.log(variable);
//     } catch (err) {
//         console.error('Erro al leer el directorio', err);
//     }
// }

// init(file);
