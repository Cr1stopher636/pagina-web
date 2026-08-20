const { readFile } = require('node:fs/promises');

const variable = await readFile('./archivo3.txt', 'utf-8', (err, text) => {
    console.log(variable);
});






// (async () => {
//     const variable = await readFile('./archivo3.txt', 'utf-8')
//     console.log(variable)
// })();



// (async () => {
//     const variable = await fs.readFile('./archivo3.txt')
//     console.log(variable)
// }
// )();

















