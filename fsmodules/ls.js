const fs = require('node:fs/promises');
const folder = process.argv;


fs.readdir(folder)
    .then(element => {

        element.forEach(file => {
            console.log(file);
        });
    })
    .catch(err => {
        console.error('Papi hay un Error al leer el directorio', err);
    });
















