const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";

//Formulario del header 

let formulario = document.querySelector("form");
let input = document.querySelector(".campoBuscador")
let mensaje = document.querySelector(".mensaje")

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

input.addEventListener("focus", function (e) {
    console.log(e);
    mensaje.innerText = "";
    this.value = "";
})

input.addEventListener("focus", function (evento) {
    console.log(evento);
    message.innerText = "";
    this.value = "";
})

//Comenzamos con favoritos
console.log(location.search)

const queryString = location.search
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get("id");

let favoritos = []

if (localStorage.getItem("favoritos")) {

    console.log(localStorage);

    let recuperoStorage = localStorage.getItem("favoritos")

    favoritos = JSON.parse(recuperoStorage);

    console.log(favoritos);

}

const seccion = document.querySelector(".opciones div")

if (favoritos.length == 0) {

    seccion.innerHTML += `
    <article>
        <h3> No hay gif en tu lista de favoritos </h3>
        <a href="./detail-movie.html"> Volver </a>
    </article>
    `
}
else {

    for (let i = 0; i < favoritos.length; i++) {

        busquedaYmuestraFavoritosMovie(favoritos[i]);
        // busquedaYmuestraFavoritosSerie(favoritos[i]);
    }

}
function busquedaYmuestraFavoritosMovie(id) {

    let urlFav = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

    fetch(urlFav)

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
            // for (let i = 0; i < favoritos.results; i++) {

            //     seccion.innerHTML +=
            //         `
            //    <article class="divindex" >
            //         <a href="./detail-movie.html?id=${datos[i].id}" class="titulospelicula"> ${datos[i].title}</a>

            //         <div> <a href="./detail-movie.html?id=${datos[i].id}"> <img src="https://image.tmdb.org/t/p/w342/${datos[i].poster_path}" alt="${datos[i].title}" class="portada"> </a> </div>

            //         <p>Fecha de Estreno: ${datos[i].release_date}</p>
            //     </article> `

            // }






// function busquedaYmuestraFavoritosSerie(ids) {

//     let urlFavS = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`

//     fetch(urlFavS)

//         .then(function (respuesta) {
//             return respuesta.json();
//         })
//         .then(function (datos) {
//             console.log(datos)

//             // let info = datos.
//             // console.log(info);
//         })
// }