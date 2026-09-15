const fs = require('node:fs');
const path = require('node:path');
const { text } = require('node:stream/consumers');

const file = fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('Contenido del archivo:', text);
});





// marcas.forEach(items => {
//     console.log('Elementos:', items);
// })






// async function init() {
//     const file = await fs.readdir('./')
//     file.forEach(items => {
//         console.log('Elementos:✅', items);
//     })
// }

// init();

// .then(items => {
//     console.log(items);
// })
// .catch(err => {
//     console.error('Error al leer el directorio');
// })






