const express = require("express")
const movies = require("./movies.json")
const app = express()

app.disable("x-powered-by") //quita el header x-powered-by: Express

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


const PORT = process.env.PORT ?? 1234

app.listen(PORT, () =>{
    console.log(`server listening on port http://localhost:${PORT}`);
})