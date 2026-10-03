// const http = require('node:http');
// const querystring = require('node:querystring');
// const bcrypt = require('bcrypt');
// const mysql = require('mysql2/promise');


// const desirePort = 3000;

// // Configuración de la conexión a la base de datos
// const dbConfig = {
//     host: 'localhost',
//     user: 'root',
//     password: 'tu_password',
//     database: 'tu_base_de_datos'
// }


// const server = http.createServer((req, res) => {
//     // 1. Configurar cabeceras CORS en todas las respuestas
//     // res.setHeader('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde cualquier origen
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permite solicitudes desde ese origen específico
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); //Indica que métodos HTTP están permitidos
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Indica que cabeceras puede enviar el frontend en la petición

//     // Manejo de peticiones Preflight de CORS (método OPTIONS)
//     if (req.method === 'OPTIONS') {
//         res.writeHead(204);
//         return res.end();
//     }



//     if (req.url === '/') {
//         console.log('Solicitud recibida✅');
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         const welcome = { message: 'Está es la página de inicio' }
//         res.end(JSON.stringify(welcome));


//     } else if (req.url === '/login') {
//         console.log('Solicitud recibida en /login');


//         // Si la peticción es POST (envio el formulario de login)
//         if (req.method == 'POST') {
//             let body = '';

//             // Acumular los fragmentos de datos que vienen del formulario
//             req.on('data', chunk => {
//                 body += chunk.toString();
//             });

//             req.on('end', async () => {
//                 res.setHeader('Content-Type', 'application/json; charset=utf-8');

//                 try {
//                     // Si los datos vienen de un formulario HTML tradicional:
//                     const parsedData = querystring.parse(body);

//                     // Si los envías mediante un fetch/AJAX enviando JSON, usa:
//                     // const parsedData = JSON.parse(body);

//                     const { username, password } = parsedData;

//                     if (!username || !password) {
//                         res.writeHead(400);
//                         return res.end(JSON.stringify({ error: 'Faltan campos requeridos' }));
//                     }

//                     // Conexión a la BD
//                     const connection = await mysql.createConnection(dbConfig);
//                     const [rows] = await connection.execute(
//                         'SELECT * FROM usuarios WHERE username = ?',
//                         [username]
//                     );
//                     await connection.end();

//                     // Comprobar si el usuario existe
//                     if (rows.length === 0) {
//                         res.writeHead(401);
//                         return res.end(JSON.stringify({ error: 'Usuario o contraseña incorrectos' }));
//                     }

//                     const user = rows[0];

//                     // Validar la contraseña contra el hash de la BD
//                     const isMatch = await bcrypt.compare(password, user.password);

//                     if (isMatch) {
//                         res.writeHead(200);
//                         res.end(JSON.stringify({
//                             message: 'Inicio de sesión exitoso',
//                             user: { id: user.id, username: user.username }
//                         }));
//                     } else {
//                         res.writeHead(401);
//                         res.end(JSON.stringify({ error: 'Usuario o contraseña incorrectos' }));
//                     }



//                 } catch (error) {
//                     console.error('Error procesando el login:', error);
//                     res.writeHead(500);
//                     res.end(JSON.stringify({ error: 'Error interno del servidor' }));
//                 }
//             });

//         } else {
//             // Petición GET a /login
//             res.setHeader('Content-Type', 'application/json; charset=utf-8')
//             const login = { message: 'Iniciando sesión' }
//             res.end(JSON.stringify(login));
//         }



//     } else if (req.url === '/modelos') {
//         console.log('Está es la página de modelos');
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         const models = { modelo1: 'Cadillac escalade ESV' }
//         res.end(JSON.stringify(models));


//     } else if (req.url === '/contacto') {
//         console.log('Está es la página de contacto');
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         const contact = { contacto1: 5525141137 }
//         res.end(JSON.stringify(contact));


//     } else if (req.url === '/bandeja') {
//         console.log('Está es la bandeja de entrada');
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         const tray = { message: 'En este apartado van las quejas o sugerencias del usuario' }
//         res.end(JSON.stringify(tray));


//     } else if (req.url === '/configurador') {
//         console.log('Está es la página del configurador');
//         res.setHeader('Content-Type', 'application/json; charset=utf-8')
//         const configurator = { message: 'En este apartado va la configuración del auto del cliente' }
//         res.end(JSON.stringify(configurator));

//     } else {
//         res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
//         res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
//     }
// });


// server.listen(desirePort, () => {
//     console.log(`Server escuchando en el puerto: ${desirePort}`);
// });








