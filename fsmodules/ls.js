const fs = require('node:fs/promises');



const folder = process.argv[2] ?? '.';

fs.readdir(folder)
    .then(element => {

        element.forEach(file => {
            console.log(file);
        });
    })
    .catch(err => {
        console.error('Error al leer el directorio', err);
    });
















