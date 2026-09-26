const http = require('node:http');
const desirePort = 3000;

const server = http.createServer((req, res) => {
     // 1. Configurar cabeceras CORS en todas las respuestas
    // res.setHeader('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/'); // Permite solicitudes desde ese origen específico
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); //Indica que métodos HTTP están permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Indica que cabeceras puede enviar el frontend en la petición

    if (req.url === '/') {
        console.log('Solicitud recibida✅');
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        const welcome = {message: 'Está es la página de inicio'}
        res.end(JSON.stringify(welcome));

    } else if (req.url === '/modelos') {
        console.log('Está es la página de modelos');
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        const models = {modelo1: 'Cadillac escalade ESV'}
        res.end(JSON.stringify(models));

    } else if (req.url === '/contacto') {
        console.log('Está es la página de contacto');
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        const contact = {contacto1: 5525141137}
        res.end(JSON.stringify(contact));

    } else if (req.url === '/bandeja') {
        console.log('Está es la bandeja de entrada');
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        const tray  = {message: 'En este apartado van las quejas o sugerencias del usuario'}
        res.end(JSON.stringify(tray));

    } else if (req.url === '/configurador') {
        console.log('Está es la página del configurador');
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        const configurator  = {message: 'En este apartado va la configuración del auto del cliente'}
        res.end(JSON.stringify(configurator));
    }
})


server.listen(desirePort, () => {
    console.log(`Server escuchando en el puerto: ${desirePort}`);
})








