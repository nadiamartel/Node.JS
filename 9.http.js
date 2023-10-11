//ESTO ES LO QUE YA CONOZCO:

// const http = require("node:http")

// const server = http.createServer((req, res)=>{
//     console.log("request received")
//     res.end("Hola mundo again")
// })

// server.listen(3005, ()=>{
//     console.log("Server listening in port 3005");
// })

//si queremos que tome el primer puedo que encuentr libre, lo hacemos de esta manera:
// server.listen(0, () =>{
//    console.log(`server listening on port http://localhost:${server.adress().port}`)
//})

//------ASI QUEDA PARA LA PRUEBA------//
const http = require('node:http') // protocolo HTTP
const { findAvailablePort } = require('./10.free_port.js')

// console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})