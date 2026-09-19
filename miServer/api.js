const http = require('node:http');
const desirePort = 3000;


const server = http.createServer((req, res) => {
    console.log('Solicitud aceptada✅');
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    res.end('Este es el mensaje que devuelve')
});


server.listen(desirePort, () => {
    console.log(`Servidor escuchando ${desirePort}`);
})

 // res.end(JSON.stringify({
    //     nombre: 'Ricardo',
    //     edad: 23
    // }));

