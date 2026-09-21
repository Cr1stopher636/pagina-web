const http = require('node:http');
const desirePort = 3000;

const server = http.createServer((req, res) => {
    console.log('Solicitud aceptada ✅');

    //Cabecera estándar del texto html
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');

        const listaHtml =

        `<h1>Imperial Luxury cars</h1>
        <p>Este es el Servidor de node.js</p>
        <p>Imperial Luxury Cars</p>
        `
        res.end(listaHtml)

    } else if (req.url === '/modelos') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        const primerObjeto = { id: 1, nombre: 'ricardo' }
        res.end(JSON.stringify(primerObjeto))

    } else if (req.url === '/contacto') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        const segundaLista = 
            `<h2>Segundo contenido de la página de autos de lujo</h2>
            <p>Somos una empresa de autos de reventa de lujo</p>`

        res.end(segundaLista)

    } else if (req.url === '/bandeja') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        const segundoObjeto = {id: 2, nombre: 'andrea'};
        res.end(JSON.stringify(segundoObjeto));
        // nombreEl.textContent = datos[0].nombre;
    } else if (req.url === '/configurador') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        const variable = `<h1>este es el configurador de autos</h1>`;
        res.end(variable)
    }
    
    
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('404-Página no encontrada')
    }
});

server.listen(desirePort, () => {
    console.log(`Servidor escuchando ${desirePort}`);
})



