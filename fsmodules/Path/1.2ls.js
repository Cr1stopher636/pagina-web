// import { readFile, readdir } from "node:fs/promises";
const fs = require("node:fs/promises"); 

async function init() {
    const variable = await fs.readFile('./1.1path.js', 'utf-8')
    console.log('Ejecutando el primer archivo...')
    console.log(variable);
}

init();



// Top Level Await
// const variableTercera = await readFile('./1.1path.js', 'utf-8')
// console.log('Ejecutando el archivo...')
// console.log(variableTercera);





// ASYNC AWAIT CON TRY CATCH

// const promesa = await readdir('./', 'utf-8');
// console.log(promesa);
























// Con async await
// async function init() {
//     const variable = await fs.readdir('.')
//     console.log(variable);

//     variable.forEach(element => {
//         console.log(element)
//     })
// }

// init();

// Con Callbacks
// fs.readdir('./', 'utf-8', (err, text) => {
//     if (err) {
//         console.error('Error al leer el directorio', err)
//     } else {
//         console.log(text)
//     }
// });











