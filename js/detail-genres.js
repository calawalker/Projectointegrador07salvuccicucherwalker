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

// PAGINA GENERO

console.log(location.search)

const queryString = location.search
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get("id");
let nombreGenero = queryStringObj.get("nombreGenero")

//GENEROS PELICULAS
let urlGeneroPeli = (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`)

let generoPelicula = document.querySelector(".opciones div")

fetch(urlGeneroPeli)
.then(function(response){
    return response.json()
})

.then(function(datos){ 
    console.log(datos);

    //titulo de genero
    let titulo = document.querySelector("h2")
    titulo.innerHTML = nombreGenero;
    
    for (let i = 0; i < datos.results.length; i++){ 
    
    //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

        generoPelicula.innerHTML += `
            
            <article class="divindex" >
                <a href="./detail-movie.html?id=${datos.results[i].id}" class="titulospelicula"> ${datos.results[i].title}</a>

                <div> <a href="./detail-movie.html?id=${datos.results[i].id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}" class="portada"> </a> </div>
            </article>  
           `
        }

        
})
.catch(function (error) {
    console.log('el error fue ' + error);
})



//GENERO SERIES
let urlGeneroSerie = (`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${id}`)
let generoSeries = document.querySelector("#seriesjodon div")

fetch(urlGeneroSerie)
.then(function(response){
    return response.json()
})

.then(function(datos){ 
    console.log(datos);

    let titulo = document.querySelector("h2")
    titulo.innerHTML = nombreGenero;
    
    for (let i = 0; i < datos.results.length; i++){ 
    
    //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

        generoSeries.innerHTML += `
            
        <article class="divindex">
            <a href="./detail-serie.html?id=${datos.results[i].id}" class="titulospelicula">${datos.results[i].name}</a>
        
            <div > <a href="./detail-serie.html?id=${datos.results[i].id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].name}" class="portada"> </a> </div>
        </article>
           `
        }

        
})
.catch(function (error) {
    console.log('el error fue ' + error);
})


