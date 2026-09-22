const http = require('node:http')

const desirePort = 3001;


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log('Solicitud recibida✅')
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        const miObjeto = {id: 1, nombre: 'juan'}
        res.end(JSON.stringify(miObjeto.nombre));
    }
})

server.listen(desirePort, () => {
    console.log('Servidor corriendo en el puerto:', desirePort);
})