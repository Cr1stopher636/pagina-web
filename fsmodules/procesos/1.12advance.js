const fs = require('node:fs/promises');

const rutaDirectorio = process.argv[2] ?? '.';
fs.readdir(rutaDirectorio)
    .then(file => {
        file.forEach(element => {
            console.log('Salio 👍', element)
        })
    })

    .catch(err => {
        if (err) {
            console.log('Salio mal papi❌😔', err);
            return;
        }
    })

// async function init(directorio) {
//     try {
//         const files = await fs.readdir(directorio)
//         console.log(files);

//     } catch (err) {
//         console.error('Error al leer el directorio', err)
//         console.error(err.message);
//         process.exit(1);
//     }
// }

// init(rutaDirectorio);