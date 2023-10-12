const fs = require('node:fs/promises')

fs.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    if (err) {
      console.error('Error al leer el directorio: ', err)
      return;
    }
  })

  //esto mismo se ouede hacer sin promises y manjejando el error con un cb:
  //fs.readdir(".", (err, text) =>
  //if(err){
  //console.log("Error....")  
  //})