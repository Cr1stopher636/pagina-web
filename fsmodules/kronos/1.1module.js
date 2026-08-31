const fs = require('node:fs/promises');


fs.readFile('./archivo.txt', 'utf-8')
    .then(element => {
        console.log('salio bien', element);
    })

    .catch(err => {
        console.log('salio mal papiRick', err);
    });
    

   
   


