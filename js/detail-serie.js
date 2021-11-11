const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";

console.log(location.search)

const queryString = location.search
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get("id");

let urlSerie = (`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`)

let detallesSeries = document.querySelector(".maindetail")

fetch(urlSerie) 

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){
        console.log (datos)

            detallesSeries.innerHTML +=
            ` 
            <div class="navdetalles">
                <h3 class="titulodetallepelicula">${datos.name}</h3>
                <div> <img src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" alt="${datos.title}" class="portada"> </div>
            </div>
            <div class="navdetalles">
                <p>Calificación: ${datos.vote_average}</p>
                <p>Fecha de Estreno: ${datos.first_air_date}</p> 
                <p>Temporadas: ${datos.number_of_seasons}</p>
                <p>Episodios: ${datos.number_of_episodes}</p>
                <p> ${datos.overview}</p>
                <p>Género: <a href="./detail-genres.html?id=${datos.id}"> ${datos.genres[0].name}</a></p>
                <p>Favoritos <i class="icon-star-empty"> </i> </p>
            </div>
            `
    })

    .catch(function (error) {
        console.log('el error fue ' + error);
    });