import { readFile } from 'node:fs/promises';

const [text, secondtext] = await Promise.all([
    readFile('./archivo2.txt', 'utf-8'),
    readFile('./archivo3.txt', 'utf-8')
]);

console.log(text);
console.log(secondtext);

// async function init() {
//     const variable = await readFile('./promesas/1.2promise.js', 'utf-8')
//     console.log(variable);
// };

// init();








//Top Level Await
// const promesa = await readFile('./retorno.js', 'utf-8')
// console.log(promesa);



//IIFE Asyncrona
// (async () => {
//     const promesa = await fs.readFile('./retorno.js', 'utf-8')
//     console.log('Este es el contenido: ---->', promesa);
// })();

























