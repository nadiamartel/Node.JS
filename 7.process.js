//process es un obj global --> proporciona info y control sobre el proceso actual de ejecucion. Tiene prop y metodos que permiten interactuar con el entorno de node js 
// ver concept de argumentos de entrada

// argumentos de entrada
// console.log(process.argv)

// controlar el proceso y su salida
// process.exit(1)

// podemos controlar eventos del proceso
// process.on('exit', () => {
//   // limpiar los recursos
// })

// current working directory --> desde que carpeta estamos ejecutando el proceso
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)