
// const fs = require('node:fs/promises');

// const files = process.argv[2];

// async function init(files) {
//     try {
//         const leer = await fs.readdir(files);

//         console.log(leer);

//     } catch (err) {
//         console.error('Error al leer el directorio❌❌❌');
//         process.exit(1);
//     }
// };

// init(files);

// const fs = require('node:fs/promises');

// const directorio = process.argv[2] || '.';

// async function init(directorio) {
   
//     try {
//         const leer = await fs.readdir(directorio);

//         console.log(leer);

//     } catch (err) {
//         console.error('Error al leer el directorio ❌❌❌');
//         process.exit(1);
//     }
// }

// init(directorio);



const fs = require('node:fs/promises');

// Capturamos el argumento o usamos el directorio actual '.' por defecto
const rutaDirectorio = process.argv[2] ?? '.';

async function init(directorio) {
    try {
        const files = await fs.readdir(directorio);
        console.log(files);

    } catch (err) {
        console.error(`Error al leer el directorio "${directorio}" ❌❌❌`);
        process.exit(1);
        // console.error(err.message); // Imprimir el error original ayuda a depurar
    }
}

init(rutaDirectorio);










