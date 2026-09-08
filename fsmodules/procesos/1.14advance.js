const fs = require('node:fs/promises');


const archivos = process.argv[2];

async function init(directorio) {

    const filePath = await fs.readdir(directorio);

    console.log(filePath);

}

init(archivos);

