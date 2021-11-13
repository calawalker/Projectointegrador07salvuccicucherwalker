const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";
console.log(location.search)

const queryString = location.search
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get("id");
let nombreGenero = queryStringObj.get("nombreGenero")

let urlGeneroPeli = (`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`)



fetch(urlGeneroPeli)
.then(function(response){
    return response.json()
})

.then(function(datos){ 
    console.log(datos);

    //titulo de genero
    let titulo = document.querySelector("h2")
    nombreGenero = titulo.innerHTML

    let estructuraGenero = ""
    
    
    for (let i = 0; i < datos.results.length; i++){ 
    
    //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

        estructuraGenero += `
            
            <article class="divindex" >
                <a href="./detail-movie.html?id=${datos.results[i].id}" class="titulospelicula"> ${datos.results[i].title}</a>

                <div> <a href="./detail-movie.html?id=${datos.results[i].id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}" class="portada"> </a> </div>
            </article>  
           `
        }

        let generoPelicula = document.querySelector(".opciones div")
        generoPelicula.innerHTML = estructuraGenero  

})
.catch(function (error) {
    console.log('el error fue ' + error);
})








