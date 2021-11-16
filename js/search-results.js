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


            for(let i = 0; i < datos.results.length; i++) {
                if(datos.results[i].media_type == "movie") {

                    fetch (`https://api.themoviedb.org/3/movie/${datos.results[i].id}?api_key=${apiKey}`)

                    .then(function(respuesta){
                        return respuesta.json()
                    })
                
                    .then(function(datosDetalle){
                        console.log(datosDetalle)
                
                        searchResults.innerHTML += `
                     
                    <article class="divindex" >
                        <a href="./detail-movie.html?id=${datos.results[i].id}" class="titulospelicula"> ${datos.results[i].title}</a>
    
                        <div> <a href="./detail-movie.html?id=${datos.results[i].id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}" class="portada"> </a> </div>
    
                        <p>Fecha de Estreno: ${datos.results[i].release_date}</p>
                    </article> `

                    })
                    .catch(function (error) {
                        console.log('el error fue ' + error);
                    })
                }
                // comenzamos con search de series

                if(datos.results[i].media_type == "tv") {

                    fetch (`https://api.themoviedb.org/3/tv/${datos.results[i].id}?api_key=${apiKey}`)

                    .then(function(respuesta){
                        return respuesta.json()
                    })
                
                    .then(function(datosDetalleSerie){
                        console.log(datosDetalleSerie)
                    
                        searchResults.innerHTML += `
                        <article class="divindex" >
                        <a href="./detail-serie.html?id=${datos.results[i].id}" class="titulospelicula"> ${datos.results[i].name}</a>
    
                        <div> <a href="./detail-serie.html?id=${datos.results[i].id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].name}" class="portada"> </a> </div>
    
                        <p>Fecha de Estreno: ${datos.results[i].first_air_date}</p>
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
