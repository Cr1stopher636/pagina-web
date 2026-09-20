const http = require('node:http');
const fs = require('node:fs');
const desirePort = 3000;

const server = http.createServer((req, res) => {
    console.log('Solicitud aceptada ✅');

    //Cabecera estandar del texto plano
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');

        const listaHtml =
            `<h1>Imperial Luxury Cars</h1>
             <p>Este es el Servidor de node.js</p>
             <p>Imperial Luxury Cars</p>`


        res.end(listaHtml)

    } else if (req.url === '/modelos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        const miObjeto = [({id: 1, nombre: 'ricardo'})]
        res.end(JSON.stringify(miObjeto))

    } else if (req.url === '/contacto') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        const segundaLista =
            `   <h2>Segundo contenido de la página de autos de lujo</h2>
            <p>Somos una empresa de autos de reventa de lujo</p>`

        res.end(segundaLista)
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('404-Página no encontrada')
    }
});
// else if (req.url === '/modelos') {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'application/json; charset=utf-8');
//     res.end('Página de modelos')

// } else if (req.url === '/contacto') {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'application/json; charset=utf-8');
//     res.end('Página de contacto')

// }



server.listen(desirePort, () => {
    console.log(`Servidor escuchando ${desirePort}`);
})



