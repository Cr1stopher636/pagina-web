// const variable = require('./1.2advance.js');
// console.log(variable);


const fs = require('node:fs/promises');

// ASYN AWAIT
// async function init() {
//     const resultado = await fs.readFile('./archivo.txt', 'utf-8')
//     console.log(resultado);
// }

// init();

// Promise Explícita


const files = fs.readFile('./archivo2.txt', 'utf-8')
files
    .then(element => {
        console.log(element);
    })
    .catch(err => {
        console.log(err);
    });

























// async function init() {
//     const files = await fs.readFile('./archivo.txt', 'utf-8')
//     console.log('Este es el resultado: ---> ', files);
// }

// init();









































































