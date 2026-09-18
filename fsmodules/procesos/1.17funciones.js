// PASAR UNA FUNCION COMO ARGUMENTO

const fs = require('node:fs/promises');
const folder = './archivo.txt'

const init = async () => {
    const file = await fs.readFile(folder)
    console.log(`Elementos del archivo leído✅: ---> ${file}`);
}

init();






