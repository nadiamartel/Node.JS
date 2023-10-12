//Modulos Nativos
//File System --> sistema de archivos
//esto es lo mas utilizado en node js
// ---> ESTO ES SINCRONO!

const fs = require("node:fs") 

const stats = fs.statSync("./archivo.txt")

console.log(stats.isFile()); // si es un fichero
console.log(stats.isDirectory()); // si es un directorio
console.log(stats.isSymbolicLink()); // si es un enlace simbólico
console.log(stats.size) // tamaño en bytes