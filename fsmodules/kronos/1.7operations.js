const fs = require('node:fs');
const path = require('node:path');


fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text);
});

console.log('Haciendo cosas...📋');



fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text);
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






