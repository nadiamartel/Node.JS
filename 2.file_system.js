//Modulos Nativos
//File System --> sistema de archivos

const fs = require("fs") //revisar por que no funciona con "node:fs"

const stats = fs.statSync("./archivo.txt")

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size // tamaño en bytes
)