// Acceso dinamico
// const persona = {
//     nombre: 'ricardo',
//     edad: 23,
//     profesionalidad: 'Ingeniero en software'
// }

// const clave = persona.profesionalidad;
// console.log(clave);
//console.log(persona.profesionalidad); // BUSCAMOS DESDE EL INDICE 



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



// try {
//     const lista = await fs.readFile(dir, 'utf-8');
//     const contenido = lista.split('\n');

//     contenido.map(files => {
//         console.log('Contenido✅ :--->', files);
//     })

// } catch (err) {
//     console.error('Error al recorrer el array:❌😩 ');
// }
