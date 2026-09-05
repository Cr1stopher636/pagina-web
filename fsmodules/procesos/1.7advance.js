// CON ECMASCRIPT MODULES
// import { readFile } from 'node:fs/promises';

// console.log('Este es el primer archivo ------');
// const variable = await readFile('./1.1proces.js', 'utf-8')
// console.log(variable);


// console.log('Este es el segundo archivo ------');
// const variable2 = await readFile('./1.1proces.js', 'utf-8')
// console.log(variable2);

// CON COMMONJS

const fs = require('node:fs');

// Sincronía
// console.log('Leyendo el Primer archivo...')
// const variable = fs.readFileSync('./1.3advance.js', 'utf-8')
// console.log(variable);

// console.log('Leyendo el Segundo archivo...')
// const variable2 = fs.readFileSync('./1.4advance.js', 'utf-8')
// console.log(variable2);

// ASINCRONÍA CALLBACKS
// console.log('Leyendo el primer archivo...')
// fs.readFile('./1.3advance.js', 'utf-8', (err, text) => {
//     console.log(text);
// })

// console.log('Leyendo el segundo archivo...')
// fs.readFile('./1.4advance.js', 'utf-8', (err, text) => {
//     console.log(text);
// });





// SECUENCIAL ASYNC/AWAIT
// async function init() {
//     console.log('Leyendo el primer archivo...')
//     const file = await fs.readFile('./1.3advance.js', 'utf-8')
//     console.log(file);

//     console.log('Leyendo el segundo archivo...')
//     const file2 = await fs.readFile('./1.200advance.js', 'utf-8')
//     console.log(file2);
// }

// init();

// EN PARALELO
// Promise.all([
//     console.log('Leyendo el primero...'),
//     fs.readFile('./1.5advance.js', 'utf-8'),
//     console.log('Leyendo el segundo...'),
//     fs.readFile('./1.3advance.js', 'utf-8')
// ]).then(([text, secondText]) => {
//     console.log(text)
//     console.log(secondText)
// })







