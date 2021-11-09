const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";
console.log(location.search)

const queryString = location.search
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get("id");

let urlPelicula = (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)

let detallesPeliculas = document.querySelector(".maindetail")

fetch(urlPelicula) 

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){
        for (let i = 0; i < 0 ; i++){ 
        console.log(datos.results[i])

    ` 
    <div class="navdetalles">
        <h3 class="titulodetallepelicula">${datos.results[i].title}</h3>
        <div> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}" class="portada"> </div>
    </div>
    <div class="navdetalles">
        <p>Calificación: ${datos.results[i].vote_average}</p>
        <p>Fecha de Estreno: ${datos.results[i].release_date}</p> 
        <p>Duración: ${datos.results[i].runtime}</p>
        <p> ${datos.results[i].overview}</p>
        <p>Género: <a href="./detail-genres.html?id=${datos.results[i].id}"> ${datos.results[i].genres}</a></p>
        <p>Favoritos <i class="icon-star-empty"> </i> </p>
    </div>
    `
    }
    })

    .catch(function (error) {
        console.log('el error fue ' + error);
    });