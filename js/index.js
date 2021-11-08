const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";

// //Formulario del header 
// const buscador = document.querySelector("input")

// if (buscador.value.length <= 3) {
//     alert('Debe ingresar mas de tres caracteres');
// } else {
//     this.sumbit()
// };

//Pagina Home del Sitio

// peliculas populares
let url = (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)

let peliculasPopulares = document.querySelector(".opciones div")

fetch(url)

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){ 
        for (let i = 0; i <= 4; i++){ 
        console.log(datos.results[i]);
        
        //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

            peliculasPopulares.innerHTML += `

                <article class="divindex" >
                    <a href="./detail-movie.html" class="titulospelicula"> ${datos.results[i].title}</a>

                    <div> <a href="./detail-movie.html"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}" class="portada"> </a> </div>

                    <p>Fecha de Estreno: ${datos.results[i].release_date}</p>
                </article>  
               `
    }
    })
    .catch(function (error) {
        console.log('el error fue ' + error);
    })


//series populares 

let url2 = (`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)

let seriesPopulares = document.querySelector(".opciones div")

    fetch(url2)

        .then(function(respuesta){
            return respuesta.json()
        })

        .then(function(datos){ 
            for (let i = 0; i <= 4; i++){ 
            console.log(datos.results[i]);
            
            //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

                seriesPopulares.innerHTML += `

                <article class="divindex">
                        <a href="./detail-serie.html" class="titulospelicula">${datos.results[i].name}</a>
                    
                        <div > <a href="./detail-serie.html"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].name}" class="portada"> </a> </div>
                    
                        <p>Fecha de Estreno:  ${datos.results[i].first_air_date}</p>
                </article>
               

                `
        }
        })
        .catch(function (error) {
            console.log('el error fue ' + error);
        })

//peliculas mas valoradas
let url3 = (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)

let peliculasValoradas = document.querySelector(".opciones div")

    fetch(url3)

        .then(function(respuesta){
            return respuesta.json()
        })

        .then(function(datos){ 
            for (let i = 0; i <= 4; i++){ 
            console.log(datos.results[i]);
            
            //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

                peliculasValoradas.innerHTML += `

                <article class="divindex" >
                    <a href="./detail-movie.html" class="titulospelicula"> ${datos.results[i].title}</a>

                    <div> <a href="./detail-movie.html"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}" class="portada"> </a> </div>

                    <p>Fecha de Estreno: ${datos.results[i].release_date}</p>
                </article>
                `
        }
        })
        .catch(function (error) {
            console.log('el error fue ' + error);
        })


   