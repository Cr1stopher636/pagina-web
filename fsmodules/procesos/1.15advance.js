const fs = require('node:fs/promises');

const file = process.argv[2];


async function init(directorio) {
    if (!file) {
        console.error(' Error: Debes proporcionar la ruta de un directorio.');
        console.log('Uso: node app.js <ruta-del-directorio>');
        process.exit(1);
    }

    try {
        let stats;

        stats = await fs.stat(directorio)

        if (!stats.isDirectory()) {
             console.error('La ruta proporcionada no es un directorio');
             process.exit(1);
        }

        const variable = await fs.readdir(directorio)
        
        variable.forEach(element => {
            console.log('Todo salio correcto Papi✅', element);
        })


        // Aquí puedes continuar procesando tus archivos...

    } catch (err) {
        console.error('Error al leer el directorio❌❌❌');
        process.exit(1);
    }
};

init(file);