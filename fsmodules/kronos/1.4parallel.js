// Asincronía secuencial
// const fs = require('node:fs/promises');

// async function init() {
//     const variableSegunda = await fs.readFile('./archivo.txt', 'utf-8')
//     console.log('Ejecutando el primer archivo')
//     console.log(variableSegunda);

//     const variableTercera = await fs.readFile('./archivo12.txt', 'utf-8')
//     console.log('Ejecutando el segundo archivo')
//     console.log(variableTercera);
// }

// init();

// Asincronía con Callback
const fs = require('node:fs');



fs.readFile('./archivo2.txt', 'utf-8'), (err, text) => {
    if (err) {
        console.log(err)
    } else {
        console.log(text)
    }
};











// const variableTercera = await fs.readFile('./archivo2.txt', 'utf-8')
// console.log('Ejecutando el segundo archivo')
// console.log(variableTercera);


// init();


// Sincronía
// const variable = fs.readFileSync('./archivo.txt', 'utf-8');
// console.log('Ejecutando el primer archivo...')
// console.log('---->', variable);

// const svariable = fs.readFileSync('./archivo2.txt', 'utf-8');
// console.log('Ejecutando el segundo archivo...')
// console.log('---->', svariable);



// En Paralelo
// Promise.all([
//     readFile('./archivo.txt', 'utf-8'),
//     readFile('./archivo2.txt', 'utf-8')
// ]).then(([text, secondtext]) => {
//     console.log('Este es el primer contenido:', text)
//     console.log('Este es el segundo contenido:', secondtext)
// });












// export { init };



// Top Level Await
// const text = await readFile('./archivo.txt', 'utf-8')
// const secondtext = await readFile('./archivo2.txt', 'utf-8');

// console.log(text)
// console.log(secondtext)

// export { text, secondtext };



// Promise.all([
//     readFile('./archivo.txt', 'utf-8'),
//     readFile('./archivo2.txt', 'utf-8')
// ]).then(([text, secondtext]) => {
//     console.log('Este es el primer contenido:', text)
//     console.log('Este es el segundo contenido:', secondtext)
// });

// Asincronía secuencial
// import { readdir } from 'node:fs';

// readdir('./kronos', {encoding: 'utf-8' }, (err, text) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(text);
// });




// await readFile('./archivo.txt', 'utf-8', (err, text) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('Este es el contenido: --->', text)
// });
























































