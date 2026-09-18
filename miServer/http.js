const http = require('node:http')
const desirePort = process.env.PORT ?? 3000;
// const { fineavaliblePort } = require('./freePort')

const processRequest = (req, res) => {
    console.log('Solicitud recibida✅');
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.setHeader('Charset', 'utf-8')
        res.end('Bienvenido a la pagina de inicio')
    } else if (req.url === './03-contacto.html') {
        res.statusCode = 200
        res.end('<h1>Contacto</h1>')

    } else {
        res.statusCode = 404;
        res.end('No se encontro el archivo')
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



