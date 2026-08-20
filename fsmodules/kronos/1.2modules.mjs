import fs from 'node:fs';

console.log("------> Ejecutando el archivo...");
const burnour = fs.statSync('../readfile.js', 'utf-8')

console.log(
    burnour.isFile(),
    burnour.isDirectory(),
    burnour.isSymbolicLink()
);




