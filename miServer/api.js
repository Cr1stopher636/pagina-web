const http = require('node:http');
const desirePort = 3000;

const server = http.createServer((req, res) => {
    console.log('Solicitud aceptada ✅');

    //Cabecera estandar del texto plano
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Estás en la página principal')
    } else if (req.url === '/contactos') {
        res.statusCode = 200;
        res.end('Estás en la página de contactos')
    } else if (req.url === '/modelos') {
        res.statusCode = 200;
        res.end('Estás en la página de los modelos')
    } else {
        res.statusCode = 404;
        res.end('Página no encontrada')
    }
});


server.listen(desirePort, () => {
    console.log(`Servidor escuchando ${desirePort}`);
})



