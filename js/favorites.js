window.addEventListener("load", function () {
const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";

//Formulario del header 

//Declaramos variables con sus respectivos Query Selectors 
let formulario = document.querySelector("form");
let input = document.querySelector(".campoBuscador")
let mensaje = document.querySelector(".mensaje")

//Evento de sumbit para el boton del buscador del header
formulario.addEventListener(`submit`, function (e) {
    e.preventDefault();
    if (input.value == "") {
        mensaje.innerText = "El campo esta vacio"
    }

    else if (input.value.length < 3) {
        mensaje.innerText = "Ingresar al menos 3 caracteres"
    }
    else {
        formulario.submit()
    }

})

//Evento de focus, para quitar la leyenda de restriccion
input.addEventListener("focus", function (e) {
    console.log(e);
    mensaje.innerText = "";
    this.value = "";
})

//Comenzamos con favoritos
// LOCAL STORAGE PELICULAS

//Declaramos arrays vacios
let favoritos = []
let favoritosSerie = []

//Condicional del LocalStorage
if (localStorage.getItem("favoritos")) {

    console.log(localStorage);

    let recuperoStorage = localStorage.getItem("favoritos")

    favoritos = JSON.parse(recuperoStorage);

    console.log(favoritos);
}

let seccion = document.querySelector("#peliFav")

//Si no hay favoritos en el Local
if (favoritos.length == 0) {

    seccion.innerHTML +=
        `
    <article>
        <h3> No hay peliculas en tu lista de favoritos </h3>
        <a id="boton" href="./index.html"> Volver </a>
    </article>
    `
}
else {

    for (let i = 0; i < favoritos.length; i++) {

        busquedaYmuestraFavoritosMovie(favoritos[i]);
    }

}
//Hacemos una funcion para Peliculas
function busquedaYmuestraFavoritosMovie(id) {

    let urlFavpeli = (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)

    fetch(urlFavpeli)

        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            console.log(datos)

            seccion.innerHTML +=
                `
                <article class="divindex" >
                     <a href="./detail-movie.html?id=${datos.id}" class="titulospelicula"> ${datos.title}</a>

                     <div> <a href="./detail-movie.html?id=${datos.id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" alt="${datos.title}" class="portada"> </a> </div>

                    <p>Fecha de Estreno: ${datos.release_date}</p>
                </article> `
        })
}

// LOCAL STORAGE SERIES

//Condicional del LocalStorage
if (localStorage.getItem("favoritosSeries")) {

    console.log(localStorage);

    let recuperoStorageSerie = localStorage.getItem("favoritosSeries")

    favoritosSerie = JSON.parse(recuperoStorageSerie);

    console.log(favoritosSerie);
}

let serieFav = document.querySelector("#serieFav")

//Si no hay favoritos en el Local
if (favoritosSerie.length == 0) {

    serieFav.innerHTML +=
        `
    <article>
        <h3> No hay series en tu lista de favoritos </h3>
        <a id="boton" href="./index.html"> Volver </a>
    </article>
    `
}
else {

    for (let i = 0; i < favoritosSerie.length; i++) {

        busquedaYmuestraFavoritosSerie(favoritosSerie[i]);
    }

}

//Hacemos una funcion para Series
function busquedaYmuestraFavoritosSerie(id) {
    let urlFavSerie = (`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`)

    fetch(urlFavSerie)

        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            console.log(datos)

            serieFav.innerHTML +=
                `
                <article class="divindex" >
                     <a href="./detail-serie.html?id=${datos.id}" class="titulospelicula"> ${datos.name}</a>

                     <div> <a href="./detail-serie.html?id=${datos.id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" alt="${datos.name}" class="portada"> </a> </div>

                    <p>Fecha de Estreno: ${datos.first_air_date}</p>
                </article>
       
           `


        })
}
})