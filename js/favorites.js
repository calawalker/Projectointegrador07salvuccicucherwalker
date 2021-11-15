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

input.addEventListener ("focus", function(evento){
   console.log(evento);
   message.innerText = "";
   this.value = "";
})

//Comenzamos con favoritos

let favoritos = []

if (localStorage.getItem("favoritos")) {

    console.log(localStorage);

let recuperoStorage = localStorage.getItem("favoritos")

favoritos = JSON.parse(recuperoStorage);

console.log(favoritos);

}

const seccion = document.querySelector(".favoritosgeneral")

if( favoritos.length == 0) {

    seccion.innerHTML += `
    <article>
        <h3> No hay gif en tu lista de favoritos </h3>
        <a href="./detail-movie.html"> Volver </a>
    </article>
    `
}
else{

for (let i = 0; i < favoritos.length; i++) {

    busquedaYmuestraFavoritosMovie (favoritos[i] );
    busquedaYmuestraFavoritosSerie (favoritos[i]);
}

}
function  busquedaYmuestraFavoritosMovie ( id ) {

    let urlFav = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

    fetch(urlFav)
    
    .then ( function(respuesta){
        return respuesta.json();
    })
    .then ( function (datos) {
        console.log(datos)

        // let info = datos.
        // console.log(info);
    })
}

function  busquedaYmuestraFavoritosSerie ( ids) {

    let urlFavS = `https://api.themoviedb.org/3/tv/${ids}?api_key=${apiKey}`

    fetch(urlFavS)
    
    .then ( function(respuesta){
        return respuesta.json();
    })
    .then ( function (datos) {
        console.log(datos)

        // let info = datos.
        // console.log(info);
    })
}