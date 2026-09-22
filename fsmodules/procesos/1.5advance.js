
const fs = require('node:fs/promises');
const path = require('node:path');

const variable = process.argv[2] ?? 'No se encontro la variable de entorno😔';

async function init(variable) {
    try {
        const stat = await fs.readFile('1.4advance.js', 'utf-8');
    } catch (err) {
        console.error('Error al leer el archivo...❌');
    }
}

init(variable);
















