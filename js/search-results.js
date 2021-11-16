const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";

 //Formulario del header 

 let formulario = document.querySelector ("form");
 let input = document.querySelector (".campoBuscador")
 let mensaje = document.querySelector (".mensaje")

formulario.addEventListener(`submit`, function (e){
    e.preventDefault();
    if (input.value == ""){
        mensaje.innerText = "El campo esta vacio"
    }

    else if (input.value.length < 3 ){
        mensaje.innerText = "Ingresar al menos 3 caracteres"
    }
    else { 
        formulario.submit()
    }
    
})

input.addEventListener ("focus", function(e){
   console.log(e);
   mensaje.innerText = "";
     this.value = "";
 })

 //Search results
 console.log(location.search)

let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("Buscador");
console.log(busqueda);

let urlSearch = (`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${busqueda}`)

let searchResults = document.querySelector(".searchresultarticle")

fetch(urlSearch) 

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){
        console.log(datos)
        

        if (datos.results.length > 0) {
            let resultadoBusqueda = document.querySelectorAll(".titulosearch");

            console.log(resultadoBusqueda);

                resultadoBusqueda[0].innerHTML = ` Resultado de busqueda para: ${busqueda}`

                resultadoBusqueda[1].style.display = "none"


            for(let i = 0; i <datos.results.length; i++) {
                if(datos.results[i].media_type == "movie") {

                    fetch (`https://api.themoviedb.org/3/movie/${datos.results[i].id}?api_key=${apiKey}`)

                    .then(function(respuesta){
                        return respuesta.json()
                    })
                
                    .then(function(datosDetalle){
                        console.log(datosDetalle)
                        let generosPelis = ''
                        for(let i = 0;i < datosDetalle.genres.length;i++){
                            generosPelis +=  `<p> <a href="./detail-genres.html?id=${datosDetalle.genres[i].id}&nombreGenero=${datosDetalle.genres[i].name}"> ${datosDetalle.genres[i].name} </a></p>`
                        }
                        //console.log(generosPelis);
                        searchResults.innerHTML += `<article class="navdetalles">
                        <a href="./detail-movie.html?id=${datosDetalle.id}" class="titulodetallepelicula"> ${datosDetalle.title} </a>
                        <div> <img src="https://image.tmdb.org/t/p/w342/${datosDetalle.poster_path}" alt="${datosDetalle.title}" class="portada"> </div>
                    </article>
                    <article class="navdetalles">
                        <p>Calificación: ${datosDetalle.vote_average}</p>
                        <p>Fecha de Estreno:${datosDetalle.release_date}</p>
                        <p>Duración: ${datosDetalle.runtime}</p>
                        <p>${datosDetalle.overview}
                        </p>
                        <p>Género:${generosPelis} </p>
                        <p>Favoritos <i class="icon-star"></i> </p>
                    </article>`

                    })
                    .catch(function (error) {
                        console.log('el error fue ' + error);
                    })
                }
                if(datos.results[i].media_type == "movie") {

                    fetch (`https://api.themoviedb.org/3/movie/${datos.results[i].id}?api_key=${apiKey}`)

                    .then(function(respuesta){
                        return respuesta.json()
                    })
                
                    .then(function(datosDetalle){
                        console.log(datosDetalle)
                        let generosPelis = ''
                        for(let i = 0;i < datosDetalle.genres.length;i++){
                            generosPelis +=  `<p> <a href="./detail-genres.html?id=${datosDetalle.genres[i].id}&nombreGenero=${datosDetalle.genres[i].name}"> ${datosDetalle.genres[i].name} </a></p>`
                        }
                        //console.log(generosPelis);
                        searchResults.innerHTML += `<article class="navdetalles">
                        <a href="./detail-movie.html?id=${datosDetalle.id}" class="titulodetallepelicula"> ${datosDetalle.title} </a>
                        <div> <img src="https://image.tmdb.org/t/p/w342/${datosDetalle.poster_path}" alt="${datosDetalle.title}" class="portada"> </div>
                    </article>
                    <article class="navdetalles">
                        <p>Calificación: ${datosDetalle.vote_average}</p>
                        <p>Fecha de Estreno:${datosDetalle.release_date}</p>
                        <p>Duración: ${datosDetalle.runtime}</p>
                        <p>${datosDetalle.overview}
                        </p>
                        <p>Género:${generosPelis} </p>
                        <p>Favoritos <i class="icon-star"></i> </p>
                    </article>`

                    })
                    .catch(function (error) {
                        console.log('el error fue ' + error);
                    })
                }
            }
        }
})
.catch(function (error) {
    console.log('el error fue ' + error);
})
