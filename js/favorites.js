const apiKey = "b8b7f0a177fd64911123a0d6c5c6618b";

//Formulario del header 

let formulario = document.querySelector ("form");
let input = document.querySelector (".campoBuscador")
let message = document.querySelector (".mensaje")

formulario.addEventListener(`submit`, function (evento){
   evento.preventDefault();
   if (input.value.length < 3 ){
       message.innerText = "Ingresar al menos 3 caracteres"
   }
   else { 
       formulario.submit()
   }
   
})

input.addEventListener ("focus", function(evento){
   console.log(evento);
   message.innerText = "";
   this.value = "";
})