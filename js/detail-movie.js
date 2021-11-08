const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";
console.log(location.search)

const queryString = location.search
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get("id");

// let urlPelicula = (`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}`)

let detallesPeliculas = document.querySelector(".maindetail")

fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}`) 

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){
        console.log(datos);
    })
