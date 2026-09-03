const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('respuesta recibida')
    res.end('hola mundo')
})

server.listen(51123, () => {
    console.log(server.address().port)
})