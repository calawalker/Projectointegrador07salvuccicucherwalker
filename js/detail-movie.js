
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
        console.log (datos)
        
        let listaGeneros = "<p> Géneros:</p>"; 
        for (let i=0; i < datos.genres.length; i++){
        listaGeneros += `<p> <a href="./detail-genres.html?id=${datos.genres[i].id}&nombreGenero=${datos.genres[i].name}"> ${datos.genres[i].name} </a></p>`
        }

        console.log(listaGeneros)
        
            detallesPeliculas.innerHTML +=
            ` 
            <div class="navdetalles">
                <h3 class="titulodetallepelicula">${datos.title}</h3>
                <div> <img src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" alt="${datos.title}" class="portada"> </div>
            </div>
            <div class="navdetalles">
                <p>Calificación: ${datos.vote_average}</p>
                <p>Fecha de Estreno: ${datos.release_date}</p> 
                <p>Duración: ${datos.runtime}</p>
                <p> ${datos.overview}</p>
                ${listaGeneros}
                <p>Favoritos <i class="icon-star-empty"> </i> </p>
            </div>
            `
    })

    .catch(function (error) {
        console.log('el error fue ' + error);
    });

   