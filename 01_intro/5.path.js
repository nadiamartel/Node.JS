const path = require('node:path')

// barra separadora de carpetas segun Sistema Operativo
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//de una ruta completa, devuelve el nombre del fichero
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

//devuelve solo el nombre del fichero (sin la extension)
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

//devuelve la extension :)
const extension = path.extname('my.super.image.jpg')
console.log(extension)