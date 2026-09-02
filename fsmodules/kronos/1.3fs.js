
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile)


const fs = require('node:fs/promises');


(async () => {
    const resultado = await fs.readFile('./archivo.txt', 'utf-8')
    console.log(resultado);
})();












// import { readFile } from 'node:fs/promises';

// const resultado = await readFile('./archivo.txt', 'utf-8')
// console.log(resultado);



// const miPromesa = new Promise((resolve, reject) => {

//     console.log('Ejecutando el archivo...')

//     const resultado = true;

//     if (resultado) {
//         resolve('salio bien');
//     } else {
//         reject('salio mal');
//     }
// });

// miPromesa
//     .then(file => {
//         console.log('exito', file);
//     })

//     .catch(err => {
//         console.log('err', err);
//     });











// async function init() {
//     const resultado = await fs.readFile('./archivo.txt', 'utf-8')
//     console.log(resultado)

// }

// init();



// fs.readFile('./archivo.txt', 'utf-8')
//     .then(element => {
//         console.log('salio bien', element);
//     })

//     .catch(err => {
//         console.log('salio mal papi', err);
//     });
















