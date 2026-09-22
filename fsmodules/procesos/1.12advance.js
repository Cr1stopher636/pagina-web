const fs = require('node:fs/promises');

const rutaDirectorio = process.argv[2] ?? '.';

async function init(dir) {
    try {
        const files = await fs.readdir(dir)
        files.forEach(element => {
            console.log(`Elementos: ${element}`);
        })

    } catch (err) {
        console.log(`Error al leer el directorio: 😔❌`);
    }

    let stats = await fs.stat(dir)


}

init(rutaDirectorio);








