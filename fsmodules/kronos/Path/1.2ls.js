
const fs = require('node:fs');


// Con async await
// async function init() {
//     const variable = await fs.readdir('.')
//     console.log(variable);

//     variable.forEach(element => {
//         console.log(element)
//     })
// }

// init();

// Con Callbacks
fs.readdir('./', 'utf-8', (err, text) => {
    if (err) {
        console.error('Error al leer el directorio', err)
    } else {
        console.log(text)
    }
});











