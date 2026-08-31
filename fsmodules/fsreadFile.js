const { readFile } = require('node:fs')

console.log("leyendo el primer archivo...")
readFile('./archivo2.txt', 'utf-8', (err, text) => {
    if (err) {
        console.log("Error al leer archivo2:", err);
        return;
    }
    console.log("Primero:", text);
});

console.log("leyendo el segundo archivo...")
readFile('./archivo3.txt', 'utf-8', (err, text) => {
    if (err) {
        console.log("error al leer el archivo3", err);
        return;
    } 
    console.log("Segundo:", text);
});






