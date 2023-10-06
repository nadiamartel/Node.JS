//Modulos Nativos

const os = require("node:os") //os nos da info de nuestro sistema operativo

console.log("Nombre del sistema operativo", os.platform());
console.log("Version del sistema operativo", os.release());
console.log("Arquitectura", os.arch());
console.log("CPUs", os.cpus());
console.log("Memoria Total", os.totalmem() / 1024 / 1024);
console.log("Memoria libre", os.freemem() / 1024 / 1024);
console.log("uptime", os.uptime() / 60 / 60); //cuantos dias lleva la pc encendida