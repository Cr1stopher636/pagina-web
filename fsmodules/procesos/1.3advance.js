// const variable = require('./1.2advance.js');
// console.log(variable);



const { rejects } = require('node:assert');
const { error } = require('node:console');
const { resolve } = require('node:dns');
const fs = require('node:fs/promises');

// ASYN AWAIT
// async function init() {
//     const resultado = await fs.readFile('./archivo.txt', 'utf-8')
//     console.log(resultado);
// }

// init();


// PROMESA EXPLÍCITA Y CONSUMIENDOLA
// const files = new Promise((resolve, reject) => {
//     const resultado = true;
//     if (resultado) {
//         resolve('salio bien la promesa');
//     } else {
//         reject('salio mal la promesa');
//     }
// });

// files
//     .then(element => {
//         console.log(element);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// ------------------------------------------------->


// Promise Explícita <----- Manera corta 
// const miPromesa = new Promise((resolve, reject) => {
//     fs.readFile('./1.1proces.js', 'utf-8')
//         .then(file => resolve(file))
//         .catch(err => reject(err));
// });

// miPromesa.then(elemento => {
//     console.log('Este es el resultado: --->', elemento);
// });



// async function init() {
//     const files = await fs.readFile('./archivo.txt', 'utf-8')
//     console.log('Este es el resultado: ---> ', files);
// }

// init();




const files = new Promise((resolve, reject) => {
    fs.readFile('./1.2advance.js', 'utf-8')
    .then(file => resolve(file))
    .catch(err => reject(err));
})

files
    .then(elemento => {
        console.log('Este es el resultado: --->', elemento);
    });
















































































