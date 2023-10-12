const fs = require("node:fs")

//aca ya es asincrono, y utilizamos un cb que se ejecuta cuando termina de leer todo

console.log('Leyendo el primer archivo...')

fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <---- ejecutas este callback
  console.log('primer texto:', text)
})

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto:', text)
})

//entender como se ejecuta esto, teniendo en cuenta que es monoproceso!