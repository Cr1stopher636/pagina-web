// Promesa explícita
// const variable = new Promise((resolve, reject) => {
//     const exito = true;


//     if (exito) {
//         resolve('Se completo la promesa con éxito')
//     } else {
//         reject('No se completo la promesa')
//     }
// });

// const fs = require('node:fs/promises')
// async function init() {
//     const files = await fs.readFile('./1.3promise.js', 'utf-8');
//     console.log('Este es el resultado: --->', files);
// }

// init();


// const fs = require('node:fs')
// const files = fs.readFile('./1.2promise.js', 'utf-8', (err, text) => {
//     if (err) {
//         console.error('Salio mal', err);
//         return;

//     }
//     console.log('Este es el resultado Papi: --->', text);
// });




// const fs = require('node:fs/promises');

// async function init() {
//     const files = await fs.readFile('./1.3promise.js', 'utf-8')
//     console.log(files);
// }

// init();





// variable //Para consumir una promise
//     .then((mensaje) => {
//         console.log(mensaje)
//     })

//     .catch((error) => {
//         console.log(error);
//     });

// console.log(variable);



















