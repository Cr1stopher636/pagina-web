// Promesa con Async await
const fs = require('node:fs/promises');

async function init() {
    try {
        const miPromesa = await fs.readFile('./fspromise.js', 'utf-8');
        console.log("Se puedo leer el archivo!");
        console.log(miPromesa);

        } catch (error) {
        console.log("No se pudo leer el archivo !");
        console.error('Error:', error.message);
    }
}

init();

