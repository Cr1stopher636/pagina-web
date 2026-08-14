
import os from 'node:os';

console.log("info del sistema operativo");
console.log("----------->")
console.log("nombre del sistema operativo", platform());
console.log("version del sistema operativo", release());
console.log("Arquitectura", arch());
console.log("CPUs", cpus()); // Vamos a poder escalar procesos con node 
console.log("Memoria libre", freemem() / 1024 / 1024);
console.log("Memoria total", totalmem() / 1024 / 1024);
console.log(process.memoryUsage());
console.log(uptime() / 60 / 60);
