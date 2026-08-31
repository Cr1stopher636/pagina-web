// Asincronía en paralelo
import { readFile } from "node:fs/promises";
async function init() {
    try {
        const miPromesa = await readFile('./archivo2.txt', 'utf-8');
        console.log("Se pudo leer el archivo!");
        console.log('Este es el contenido ----> : ', miPromesa);

    } catch (error) {
        console.log("No se pudo leer el archivo !");
        console.error('Error:', error.message);
    }
};


init();

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

// import { readFile } from 'node:fs';

// export async function init() {
//     await readFile('./archivo.txt', 'utf-8', (err, text) => {
//         if (err) {
//             console.log(err)
//         } 
//         console.log(text)
//     });
// }

// init();






















































