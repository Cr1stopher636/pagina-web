// Promesa explícita
const fs = require('node:fs/promises');


const variable = new Promise((resolve, reject) => {
    const exito = false;

    if (exito) {
        resolve('se completo la promesa')
    } else {
        reject('no se completo la promesa')
    }
});

console.log(variable);
















