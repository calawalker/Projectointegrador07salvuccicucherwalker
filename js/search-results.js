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
let busqueda = queryStringObj.get("q");

let urlSearch = (`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${busqueda}`)

let searchResults = document.querySelector(".searchresultarticle")

fetch(urlSearch) 

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){
        //console.log(datos)
        if (datos.results.length > 0) {
            let resultadoBusqueda = document.querySelector(".titulosearch");
                resultadoBusqueda.innerHTML += `${busqueda}`
            console.log(datos)
            for(let i = 0; i <data.results.length; i++) {
                if(data.results[i]) {

                }
            }
        }

});
