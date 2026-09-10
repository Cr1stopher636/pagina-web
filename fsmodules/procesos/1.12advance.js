const fs = require('node:fs/promises');

const rutaDirectorio = process.argv[2] ?? '.';

fs.readdir(rutaDirectorio)
    .then(file => {
        file.map(element => {
            console.log('Salio 👍', element)
        })
    })

    .catch(err => {
        console.log('Salio mal papi❌😔', err);
        return;
    })

// async function init() {
  

// }

// init();




// console.error('Error al leer el directorio', err)
// console.error(err.message);
// process.exit(1);



// init(rutaDirectorio);