const fs = require('node:fs/promises');

const file = process.argv[2] ?? '.';

async function init(directorio) {
    try {
        const variable = await fs.readdir(directorio)
        console.log(variable);
    } catch (err) {
        console.error('Erro al leer el directorio', err);
    }
}

init(file);






