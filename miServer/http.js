const { createServer } = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

const hostname = '127.0.0.1';
const port = 3001;

const server = createServer(async (req, res) => {

    try {

        const ruta = path.join(hostname, req.url);

        const archivo = await fs.readFile(ruta);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(archivo);

    } catch (error) {

        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 - Archivo no encontrado');

    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});