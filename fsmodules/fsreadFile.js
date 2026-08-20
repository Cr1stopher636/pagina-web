const { readFile } = require('node:fs')

console.log("leyendo el primer archivo...")
readFile('./archivo2.txt', 'utf-8', (err, text) => {
    if (err) {
        console.log("Error al leer archivo2:", err);
        return;
    }
    console.log("Primer texto:", text);
});

console.log("leyendo el segundo archivo...")
readFile('./archivo3.txt', 'utf-8', (err, text) => {
    if (err) {
        console.log("erro al leer el archivo2", err);
        return;
    } 
    console.log("segundo archivo: ", text);
});






