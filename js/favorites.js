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