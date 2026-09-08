const fs = require('node:fs/promises');

// Capturamos el argumento de la terminal
const rutaDirectorio = process.argv[2];

async function init(folderPath) {
    // 1. Validamos que el usuario haya enviado una ruta
    if (folderPath === undefined || folderPath === '') {
        console.error(' Error: Debes proporcionar la ruta de un directorio.');
        console.log('Uso: node app.js <ruta-del-directorio>');
        process.exit(1);
    }

    try {
        // 2. Leemos los archivos con await
        const fileNames = await fs.readdir(folderPath);
        console.log('Archivos encontrados:', fileNames);
    } catch (error) {
        // 3. Capturamos posibles errores (ej. la carpeta no existe)
        if (error.code === 'ENOENT') {
            console.error(` Error: La ruta "${folderPath}" no existe.`);
        } else {
            console.error('Ocurrió un error al leer el directorio:', error.message);
        }
    }
}

// Pasamos la variable como argumento
init(rutaDirectorio);
