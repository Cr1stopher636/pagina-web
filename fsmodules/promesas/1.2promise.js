// Promesa basada en callbacks
const fs = require('node:fs/promises');

const promesa = fs.readFile('./fspromise.js', 'utf-8');

promesa
    .then((resultado) => {
        console.log('Se leyo el archivo');
        console.log(resultado);
    })

    .catch((error) => {
        console.log('No pudo leerse el archivo');
        console.log(error);
    });

