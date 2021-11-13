const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";
console.log(location.search)

const queryString = location.search
const queryStringObj = new URLSearchParams(queryString);
const id = queryStringObj.get("id");

let urlGeneroPeli = (`https://api.themoviedb.org/3/genre/movie/${id}?api_key=${apiKey}`)

fetch(urlGeneroPeli)
.then(function(response){
    return response.json()
})

.then(function(datos){
    console.log(datos)
});







