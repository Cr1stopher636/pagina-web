

// 1forma de ejecutar crear y ejecutar una promesa EXPLICITA

// const miPromesa = new Promise((resolve, reject) => {
//     let variable = true;

//     if (variable) {
//     resolve("¡Todo salió bien!"); // Se cumple
//   } else {
//     reject("Hubo un error"); // Falla
//   }
// })

// console.log(miPromesa);


// 2forma de ejecutar crear y ejecutar una promesa con .THEN / .CATCH 

// fs.readFile('script.js', 'utf-8')
//     .then(items => {
//         console.log('Este es el contenido✅', '\n', items);
//     })

//     .catch(err => {
//         console.error('Error al leer el archivo...');
//     })




// 3era forma de crear y ejecutar promesas ASYNC/AWAIT

// async function init() {
//     try {
//         const file = await fs.readFile('./script.js', 'utf-8');
//         console.log('Contenido:✅', '\n', file);
//     } catch (err) {
//         console.error('Error al leer el archivo');
//     }
// }

// init();




// 4rta forma de crear y ejecutar promesas CALLBACKS

// const fs = require('node:fs');

// fs.readFile('script.js', 'utf-8', (err, text) => {
//     console.log('Contenido:✅', '\n', text);
// })

































