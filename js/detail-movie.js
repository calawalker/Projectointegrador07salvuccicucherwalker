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

//DETAIL MOVIE

console.log(location.search)

const queryString = location.search
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get("id");

let urlPelicula = (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)

let detallesPeliculas = document.querySelector(".maindetail")


fetch(urlPelicula)

    .then(function (respuesta) {
        return respuesta.json()
    })

    .then(function (datos) {
        console.log(datos)

        let listaGeneros = "<p> Géneros:</p>";
        for (let i = 0; i < datos.genres.length; i++) {
            listaGeneros += `<p> <a href="./detail-genres.html?id=${datos.genres[i].id}&nombreGenero=${datos.genres[i].name}"> ${datos.genres[i].name} </a></p>`
        }
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

                <a class= "agregarFav" href="" title="Agregar a Favoritos">
                 Agregar a Favoritos 
                <span> <i class="icon-star-empty"></i> </span> 
                </a>
                
                 <a href="favorite.html" title="favoritos"> Ver Favoritos </a> 
            </div>
            `
        //Boton favoritos
        let agregarFav = document.querySelector(".agregarFav");

        console.log(agregarFav);
        let listaFavoritos = []

        let recuperoStorage = localStorage.getItem('favoritos');
        console.log(recuperoStorage);

        if (recuperoStorage && recuperoStorage != null) {
            listaFavoritos = JSON.parse(recuperoStorage);
        }

        if (listaFavoritos.includes(id)) {
            agregarFav.innerHTML =
                `  <a> Quitar de Favoritos </a>
            <span> <i class="icon-star"></i> </span>`
        }

        agregarFav.addEventListener('click', function (e) {
            e.preventDefault();

            if (listaFavoritos.includes(id)) {

                let quitarID = listaFavoritos.indexOf(id);
                listaFavoritos.splice(quitarID, 1);
                agregarFav.innerHTML = `
                <a> Agregar a favoritos </a>
                <i class="icon-star-empty"></i>`

                console.log(listaFavoritos)
            }

            else {
                listaFavoritos.push(id);
                agregarFav.innerHTML = `
                <a> Quitar de Favoritos </a>
                <i class="icon-star"></i>
                `;

            }

            let trackAStorage = JSON.stringify(listaFavoritos);
            localStorage.setItem("favoritos", trackAStorage);
            console.log(localStorage);
        })
    })

    .catch(function (error) {
        console.log('el error fue ' + error);
    });
})
