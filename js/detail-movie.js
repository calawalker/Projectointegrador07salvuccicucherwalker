
const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";
console.log(location.search)

const queryString = location.search
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get("id");

let urlPelicula = (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)

let detallesPeliculas = document.querySelector(".maindetail")


fetch(urlPelicula) 

    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(datos){
        console.log (datos)
        
        let listaGeneros = "<p> Géneros:</p>"; 
        for (let i=0; i < datos.genres.length; i++){
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
            </div>
            `
    })

    .catch(function (error) {
        console.log('el error fue ' + error);
    });

    //Boton favoritos
    let listaFavoritos = []

    let recuperoStorage = localStorage.getItem('favoritos');
    console.log(recuperoStorage);
    
    if (recuperoStorage != null){
        listaFavoritos = json.parse(recuperoStorage);
    }
    let agregarFav = document.querySelector('#agregarFav');
    
    if (listaFavoritos.includes(id)){
        agregarFav.innerHTML +=
        ` <button>Quitar de mi playlist</button>
        <i class="fas fa-heart"></i>`
        }
        
     agregarFav.addEventListener('click', function(e){
        e.preventDefault();
       
        if (listaFavoritos.includes(id)){
           
            let quitarID = listaFavoritos.indexOf(id);
            listaFavoritos.splice(quitarID, 1);
            agregarFav.innerHTML += `
          <button>Agregar a mi playlist</button>
          <i class="far fa-heart"></i>`
          
            console.log(listaFavoritos)
        }
    
       else {
            listaFavoritos.push(id);
            document.querySelector("#agregarFav").innerHTML +=`
            <button>Quitar de mi Playlist</button>
            <i class="fas fa-heart"></i>
            `;
    
        }
        
        let trackAStorage= JSON.stringify(listaFavoritos);
        localStorage.setItem('favoritos', trackAStorage);
        console.log(localStorage);
    })