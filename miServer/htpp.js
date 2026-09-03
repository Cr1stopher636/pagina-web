const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('respuesta recibida')
    res.end('hola mundo')
})

server.listen(3000, () => {
    console.log('esta escuchando')
})