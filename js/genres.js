const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";

//Formulario del header 

let formulario = document.querySelector ("form");
let input = document.querySelector (".campoBuscador")
let message = document.querySelector (".mensaje")

formulario.addEventListener(`submit`, function (evento){
   evento.preventDefault();
   if (input.value.length < 3 ){
       message.innerText = "Ingresar al menos 3 caracteres"
   }
   else { 
       formulario.submit()
   }
   
})

input.addEventListener ("focus", function(evento){
   console.log(evento);
   message.innerText = "";
   this.value = "";
})

//GENEROS PELICULAS

//declaramos la variable url, que posee el endpoint indicado
let urlGenres = (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)

let generosPeliculas = document.querySelector(" .sectiongenre ")

fetch(urlGenres)

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){ 
        console.log(datos);
        for (let i = 0; i < datos.genres.length; i++){ 

        
        //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

        generosPeliculas.innerHTML += `

            <article class="colorpeligenre">
                <a href="./detail-genres.html?id=${datos.genres[i].id}&nombreGenero=${datos.genres[i].name}"> <h3>${datos.genres[i].name}</h3> </a>
            </article>
               `
    }
    })
    .catch(function (error) {
        console.log('el error fue ' + error);
    })

    //GENEROS SERIES

//declaramos la variable url, que posee el endpoint indicado
let urlGenres2 = (`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)

let generosSeries = document.querySelector(" #genres-serie ")

fetch(urlGenres2)

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){ 
        console.log(datos);
        for (let i = 0; i < datos.genres.length; i++){ 
        
        //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

        generosSeries.innerHTML += `

            <article class="colorpeligenre">
                <a href="./detail-genres.html?id=${datos.genres[i].id}&nombreGenero=${datos.genres[i].name}"> <h3>${datos.genres[i].name}</h3> </a>
            </article>
               `
    }
    })
    .catch(function (error) {
        console.log('el error fue ' + error);
    })