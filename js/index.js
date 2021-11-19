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

    //Pagina Home del Sitio

    // Peliculas Populares

    //Declaramos una variable url con el endpoint 
    let url = (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)


    //Variable que posee un Query Selector que va a ser utilizado para la modificacion del DOM
    let peliculasPopulares = document.querySelector(".opciones div")

    //Creamos un fetch 
    fetch(url)

        .then(function (respuesta) {
            return respuesta.json()
        })

        //Dentro del segundo then, creamos un bucle para recorrer correctamente los datos
        .then(function (datos) {
            for (let i = 0; i <= 4; i++) {
                console.log(datos.results[i]);


                //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

                peliculasPopulares.innerHTML += `

                <article class="divindex" >
                    <a href="./detail-movie.html?id=${datos.results[i].id}" class="titulospelicula"> ${datos.results[i].title}</a>

                    <div> <a href="./detail-movie.html?id=${datos.results[i].id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}" class="portada"> </a> </div>

                    <p>Fecha de Estreno: ${datos.results[i].release_date}</p>
                </article>  
               `
            }
        })
        .catch(function (error) {
            console.log('el error fue ' + error);
        })


    //Series Populares 

    //Declaramos una variable url con el endpoint 
    let url2 = (`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)

    //Variable que posee un Query Selector que va a ser utilizado para la modificacion del DOM
    let seriesPopulares = document.querySelector(".opciones #series-populares")

    //Creamos un fetch
    fetch(url2)

        .then(function (respuesta) {
            return respuesta.json()
        })

        //Dentro del segundo then, creamos un bucle para recorrer correctamente los datos
        .then(function (datos) {
            for (let i = 0; i <= 4; i++) {
                console.log(datos.results[i]);

                //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

                seriesPopulares.innerHTML += `

                <article class="divindex">
                        <a href="./detail-serie.html?id=${datos.results[i].id}" class="titulospelicula">${datos.results[i].name}</a>
                    
                        <div > <a href="./detail-serie.html?id=${datos.results[i].id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].name}" class="portada"> </a> </div>
                    
                        <p>Fecha de Estreno:  ${datos.results[i].first_air_date}</p>
                </article>
               

                `
            }
        })
        .catch(function (error) {
            console.log('el error fue ' + error);
        })

    //Peliculas más valoradas
    let url3 = (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)

    //Variable que posee un Query Selector que va a ser utilizado para la modificacion del DOM
    let peliculasValoradas = document.querySelector(".opciones #peliculas-valoradas")

    //Creamos un fetch
    fetch(url3)

        .then(function (respuesta) {
            return respuesta.json()
        })

        //Dentro del segundo then, creamos un bucle para recorrer correctamente los datos
        .then(function (datos) {
            for (let i = 0; i <= 4; i++) {
                console.log(datos.results[i]);

                //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

                peliculasValoradas.innerHTML += `

                <article class="divindex" >
                    <a href="./detail-movie.html?id=${datos.results[i].id}" class="titulospelicula"> ${datos.results[i].title}</a>

                    <div> <a href="./detail-movie.html?id=${datos.results[i].id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}" class="portada"> </a> </div>

                    <p>Fecha de Estreno: ${datos.results[i].release_date}</p>
                </article>
                `
            }
        })
        .catch(function (error) {
            console.log('el error fue ' + error);
        })
})

