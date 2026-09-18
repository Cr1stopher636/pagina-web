const http = require('node:http')
const desirePort = process.env.PORT ?? 3000;
const { fineavaliblePort } = require('./freePort')

const processRequest = ((req, res) => {
    console.log('Solicitud aceptada✅', req.url);
    res.end('Hola papiRick')
})

const server = http.createServer(processRequest)

fineavaliblePort(desirePort).then(port => {
    server.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost${port}`);
    })
})



// setTimeout(() => {
//     console.log('Han pasado 2 segundos !');
// }, 2000);



