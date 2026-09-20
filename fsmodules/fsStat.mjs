//import { stat } from 'node:fs/promises'; //con promesas
import fs from 'node:fs';

console.log("leyendo el primer archivo") //asíncrono con callbacks
const variable = fs.statSync('./archivo2.txt', 'utf-8')
console.log('Status del primer archivo:✅ ', '\n', variable);

console.log('Hacer cosas mientras leer el archivo');

console.log("leyendo el segundo archivo")
const variable2 = fs.statSync('archivo3.txt', 'utf-8')
console.log('Status del segundo archivo:✅ ', '\n', variable2);


console.log(
    variable.isFile(),
    variable.isDirectory(),
    variable.isSymbolicLink(),
    variable.size
);

