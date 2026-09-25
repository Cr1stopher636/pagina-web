const http = require('node:http');
const desirePort = 3000;

const server = http.createServer((req, res) => {
    // 1. Configurar cabeceras CORS en todas las respuestas
    // res.setHeader('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permite solicitudes desde ese origen específico
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); //Indica que métodos HTTP están permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Indica que cabeceras puede enviar el frontend en la petición

    console.log(`Solicitud recibida: ${req.method} ${req.url}`);

    // // 2. Responder a peticiones Preflight de CORS (OPTIONS)
    // if (req.method === 'OPTIONS') {
    //     res.statusCode = 204;
    //     return res.end();
    // }

    // // 3. Manejo de peticiones POST
    // if (req.method === 'POST' && req.url === '/') {
    //     let body = '';

    //     req.on('data', chunk => { // Escuchando el evento data
    //         body += chunk.toString();
    //     });


    //     req.on('end', () => {
    //         try {
    //             const data = JSON.parse(body);
    //             // Forma correcta: definir estado y luego enviar JSON
    //             res.statusCode = 201;
    //             res.setHeader('Content-Type', 'application/json; charset=utf-8');
    //             res.end(JSON.stringify({ mensaje: 'Usuario creado', data }));
    //         } catch (error) {
    //             res.statusCode = 400;
    //             res.setHeader('Content-Type', 'application/json; charset=utf-8');
    //             res.end(JSON.stringify({ error: 'JSON inválido' }));
    //         }
    //     });
    //     return; // Detiene la ejecución aquí para esperar el evento 'end'
    // }

    // 4. Manejo de peticiones GET
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(`
                <h1>Imperial Luxury cars</h1>
                <p>Este es el Servidor de node.js</p>
                <p>Imperial Luxury Cars</p>
            `);


        if (req.url === '/modelos') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            return res.end(JSON.stringify({ id: 1, nombre: 'ricardo' }));
        }

        if (req.url === '/contacto') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            return res.end(`
                <h2>Segundo contenido de la página de autos de lujo</h2>
                <p>Somos una empresa de autos de reventa de lujo</p>
            `);
        }

        if (req.url === '/bandeja') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            return res.end(JSON.stringify({ id: 2, nombre: 'andrea' }));
        }

        if (req.url === '/configurador') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            return res.end('<h1>este es el configurador de autos</h1>');
        }
    }

    // 5. Manejo de rutas no encontradas (404)
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: '404 - Ruta no encontrada' }));
});

server.listen(desirePort, () => {
    console.log(`Servidor escuchando en http://localhost:${desirePort}`);
});