const fs = require('node:fs/promises');

async function init() {
    console.log("leyendo el archivo...")
    const text = await fs.readFile('./archivo3.txt', 'utf-8')
    console.log(text);

}

init();













