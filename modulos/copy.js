// const variable = {
//     info:
//     platform,
//     release,
//     arch,
//     cpus,
//     freemem,
//     totalmem,
//     memoryUsage,
//     uptime
// } = require('./fileSystem')

const {
    platform,
    release,
    arch,
    cpus,
    freemem,
    totalmem,
    uptime
} = require("node:os");

function obtenerInfoSistema() {
    console.log("info del sistema operativo");
    console.log("----------->");

    console.log("Nombre del sistema operativo:", platform());
    console.log("Versión del sistema operativo:", release());
    console.log("Arquitectura:", arch());
    console.log("CPUs:", cpus());

    console.log("Memoria libre:", freemem() / 1024 / 1024);
    console.log("Memoria total:", totalmem() / 1024 / 1024);

    console.log("Memoria usada:", process.memoryUsage());

    console.log("Tiempo encendido:", uptime() / 60 / 60);
}

module.exports = obtenerInfoSistema;


