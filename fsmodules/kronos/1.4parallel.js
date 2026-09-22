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



const fs = require('node:fs/promises');
const path = require('node:path');

const fileRead = process.argv[2];

if (fileRead === undefined || fileRead === null) {
    console.error('Por favor ingrese una ruta...🧭')
    process.exit(1);
}

async function init() {
    try {
        const primerVariable = await fs.readdir(fileRead);

        // Guardamos el arreglo de promesas que genera el .map
        const promisesArray = primerVariable.map(async (elementos) => {
            const rutaCompleta = `${fileRead}/${elementos}`;
            const status = await fs.stat(rutaCompleta)
           
            

            // 1. Usamos 'elementos' para armar la ruta del archivo actual
          
            return {rutaCompleta, status};

        });

        const conjuntoPromises = await Promise.all(promisesArray);
        console.log('los bytes de cada archivo:', conjuntoPromises);

    } catch (error) {
        console.error('Error al leer el directorio❌')
        process.exit(1);
    }
};

init();


// 2. Usamos 'await' porque fs.stat tarda un momento en ir al disco duro
// const info = await fs.stat(rutaCompleta)


// 3. Retornamos el tamaño de este archivo en específico
// return info.size;



// 1. Usamos la ruta completa combinando la carpeta y el archivo
// 2. Usamos 'await' para obtener los datos reales del archivo
// const segundaVariable = await fs.stat(`${read}/${elementos}`);

// Ahora sí imprimirá el objeto de estadísticas (tamaño, fecha, etc.)
// console.log(`Archivo: ${elementos}, Tamaño: ${segundaVariable.size} bytes`);

// return segundaVariable; // Buen hábito: retornar el resultado


// Como usamos async dentro de un map, debemos esperar a que todas terminen
// await Promise.all(promesasDeStats);




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
























































