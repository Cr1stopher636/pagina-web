
const fs = require('node:fs/promises')

const variable = process.argv[2] ?? 'No se encontro la variable de entorno';


fs.stat('./1.1proces.js')
.then(file => {
    console.log(file)
})
.catch(error => {
    console.error(error)
});
  














