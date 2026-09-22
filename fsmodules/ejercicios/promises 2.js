const { readFile } = require('node:fs/promises')

console.log("leyendo el primer archivo...")
readFile('./archivo2.txt', 'utf-8')
.then(items => {
    console.log(items)
})

console.log('Hacer cosas...');

console.log("leyendo el segundo archivo...")
readFile('./archivo3.txt', 'utf-8')
.then(items => {
    console.log(items)
})






