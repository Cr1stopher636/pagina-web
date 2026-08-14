
const sistema = require ('node:os');

console.log("info del sistema operativo");
console.log("----------->")
console.log("nombre del sistema operativo", sistema.platform());
console.log("version del sistema operativo", sistema.release());
console.log("Arquitectura", sistema.arch());
console.log("CPUs", sistema.cpus()); // Vamos a poder escalar procesos con node 
console.log("Memoria libre", sistema.freemem() / 1024 / 1024);
console.log("Memoria total", sistema.totalmem() / 1024 / 1024);
console.log(process.memoryUsage());
console.log(sistema.uptime() / 60 / 60);
