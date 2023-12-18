//como leer un JSON en ESModules:
//import fs from "node:fs"
//const movies = JSON.parse(fs.readFileSync("./movies.json", "uft-8"))

//como leer un JSON en ESModules >>por ahora<<:
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

export const readJSON = (path) => require(path) //-> Esta línea define una función exportada llamada readJSON. Esta función toma un único argumento path, que es la ruta a un archivo JSON. La función utiliza la función require creada anteriormente para cargar el archivo JSON especificado y luego lo devuelve.