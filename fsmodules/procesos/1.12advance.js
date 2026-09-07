const fs = require('node:fs/promises');

const rutaDirectorio = process.argv[2] ?? '.';

async function init(directorio) {
    try {
        const files = await fs.readdir(directorio)
        console.log(files);

    } catch (err) {
        console.error('Error al leer el directorio', err)
        console.error(err.message);
        process.exit(1);
    }
}

init(rutaDirectorio);