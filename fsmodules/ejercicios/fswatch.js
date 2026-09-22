const fs = require('node:fs');


console.log("Comenzando a vigilar el archivo...")

fs.watch('./archivo3.txt', (eventType, filename) => {
    console.log(`El archivo ${filename} tuvo un evento: ${eventType}`);
});



