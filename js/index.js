const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";

// //Formulario del header 
// const buscador = document.querySelector("input")

// if (buscador.value.length <= 3) {
//     alert('Debe ingresar mas de tres caracteres');
// } else {
//     this.sumbit()
// };

//Pagina Home del Sitio
let url = (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)

fetch(url)

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){ 
        for (let i = 0; i <= 5; i++){ 
        console.log(datos.results[i]);
        
        //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

            document.querySelector(".divindex").innerHTML += `


                            <a href="./detail-movie.html" class="titulospelicula"> ${datos.results[i].title}</a>

                            <div> <a href="./detail-movie.html"> <img src="${datos.results[i].backdrop_path}" alt="${datos.results[i].title}" class="portada"> </a> </div>

                            <p>Fecha de Estreno: ${datos.results[i].release_date}</p>
                    `
    }
    })
    .catch(function (error) {
        console.log('el error fue ' + error);
    })