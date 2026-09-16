// Acceso dinamico
// const persona = { // OBJETO PERSONA
//     nombre: 'ricardo',
//     edad: 23,
//     profesionalidad: 'Ingeniero en software'
// }

// const clave = persona.profesionalidad;
// console.log(clave);
// console.log(persona.profesionalidad); // BUSCAMOS DESDE EL INDICE 



// EJERCICIO
// function calcularPrecio(precio, cupon) {
//     if (precio <= 0) {
//         return 'Precio invalido';
//     }

//     if (cupon === 'DESCUENTO10') {
//         return precio * 0.90;
//     }

//     return precio;
// };

// console.log('Precio final aplicado con cupón del 10% --> :', calcularPrecio(50, 'DESCUENTO10'));

// const fs = require('node:fs/promises');

// async function init() {
//     const file = process.argv[2];

//     if (file === undefined || file === null) {
//         console.error('Ingresa una ruta');
//         process.exit(1);
//     }
//     try {
//         const status = await fs.stat(file);
//         console.log('Contenido:✅', '\n', status);
       

//     } catch (err) {
//         console.error('Error al recorrer el array:❌😩 ');
//     }
// }

// init();