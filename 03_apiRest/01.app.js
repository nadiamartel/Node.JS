const express = require("express")
const movies = require("./movies.json")
const crypto = require("node:crypto")
const { validateMovie } = require("./schemas/movies")
const app = express()

app.disable("x-powered-by") //quita el header x-powered-by: Express
app.use(express.json())

app.get("/", (req, res) =>{
    res.json({ message: "Hola Mundo" })
})

//Todos los recurso que sean Movies se identifican con /movies
app.get("/movies", (req, res) =>{
    const { genre } = req.query
    if(genre){
        const moviesFiltered = movies.filter(movie => movie.genre.some(g => g.toLocaleLowerCase() === genre.toLocaleLowerCase()))
        return res.json(moviesFiltered)
    }
    res.json(movies)
})

app.get("/movies/:id", (req, res) =>{
    const { id } = req.params
    const movie = movies.find(movie => movie.id === id)
    if(movie) return res.json(movie)

    res.status(404).json({ message: "Movie not found" })
})

app.post("/movies", (req, res) =>{
    const result = validateMovie(req.body)

    if(result.error){
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newMovie = {
        id: crypto.randomUUID(),
        ...result.data
        // title,
        // genre,
        // year,
        // director,
        // duration,
        // rate: rate ?? 0,
        // poster
    }
    
    //esto no seria REST porq queda guardado en el estado de aplicacion en memoria:
    movies.push(newMovie)
    
    res.status(201).json(newMovie)
})
    

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () =>{
    console.log(`server listening on port http://localhost:${PORT}`);
})