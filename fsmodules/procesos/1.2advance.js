// const VARIABLE = process.env.PEPITO ?? 'No existe la variable de entorno';
// console.log(process.argv[0] ?? 'No existe la variable de entorno');

// const VARIABLE = process.argv[2] ?? 'No existe la variable de entorno';
// console.log(VARIABLE);

// const variable = process.argv[0] ?? '.';
// console.log(variable);


const fs = require('node:fs/promises');

// Exportando con CommonJS
module.exports = { folder: process.argv[2] ?? 'No existe la variable de entorno' };

const folder = process.argv[2] ?? 'No existe la variable de entorno';
console.log(`Leyendo la carpeta: ${folder}`); 

// console.log(process.argv);


// async function init(folder) {
//     if (!folder) {
//         console.warn('Por favor, indica la ruta de una carpeta.');
//         return;
//     }

//     try {
//         const files = await fs.readdir(folder);
//         console.log(files);
//     } catch (error) {
//         console.error(`Error al leer la carpeta "${folder}":`, error.message);
//     }
// }

// init(folder);






























// console.log(process.argv);



