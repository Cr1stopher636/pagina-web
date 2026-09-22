const fs = require('node:fs/promises');

// EJECUTANDO ARCHIVOS CON ASINCRONÍA EN PARALELO
// Promise.all([
//     fs.readFile('./archivo.txt', 'utf-8'),
//     fs.readFile('./archivo2.txt', 'utf-8')
// ])

// .then(([firsText, secondText]) => {
//     console.log('Ejecutando archivo en PARALELO...', '\n');
//     console.log('Primer archivo:', firsText);
//     console.log('Segundo archivo:', secondText);
// })
// .catch(err => {
//     console.error('Error al leer el archivo❌');
// })

// CON ASYNC/AWAIT
// async function init() {
//     try {
//         console.log('Leyendo el primer archivo');
//         const firstFile = await fs.readFile('./archivo.txt', 'utf-8');
//         console.log(firstFile);

//         console.log('\n');

//         console.log('Leyendo el segundo archivo');
//         const secondFile = await fs.readFile('./archivo2.txt', 'utf-8');
//         console.log(secondFile);
//     } catch {
//         console.error('Error al leer el archivo...❌');
//     }
// }


// init();