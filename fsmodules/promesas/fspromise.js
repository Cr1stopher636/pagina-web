// Promesa explícita
const variable = new Promise((resolve, reject) => {
    const exito = true;

    if (exito) {
        resolve('Se completo la promesa con éxito')
    } else {
        reject('No se completo la promesa')
    }
});

// variable //Para consumir una promise
//     .then((mensaje) => {
//         console.log(mensaje)
//     })

//     .catch((error) => {
//         console.log(error);
//     });





















