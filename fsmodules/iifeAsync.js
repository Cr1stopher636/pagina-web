const fs = require('node:fs/promises');


//IIFE Asyncrona
(async () => {
    const text = await fs.readFile('./archivo3.txt', 'utf-8')
    console.log(text);
})();











