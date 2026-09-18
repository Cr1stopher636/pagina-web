const http = require('node:http')
const desirePort = process.env.PORT ?? 3000;
// const { fineavaliblePort } = require('./freePort')

const processRequest = (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Bienvenido a la pagina de inicio')
    }
}



const server = http.createServer(processRequest)

server.listen(desirePort, () => {
    console.log(`Servidor escuchando en ${desirePort}`);
})

// const processRequest = ((req, res) => {
//     console.log('Solicitud aceptada✅', req.url);
//     res.end('Hola papiRick')
// })

// const server = http.createServer(processRequest)

// fineavaliblePort(desirePort).then(port => {
//     server.listen(port, () => {
//         console.log(`Servidor escuchando en http://localhost${port}`);
//     })
// })



// setTimeout(() => {
//     console.log('Han pasado 2 segundos !');
// }, 2000);



