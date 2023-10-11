const fs = require("node:fs/promises")

//aca reemplazamos las cb por promesas
// --> ASINCRONO SECUENCIAL!

console.log('Leyendo el primer archivo...')

fs.readFile('./archivo.txt', 'utf-8')
    .then(text => { 
        console.log('primer texto:', text)
})

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
         console.log('segundo texto:', text)
})