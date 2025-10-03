let contador = 10;
let boton = document.getElementById("btnbajar");
let numero = document.getElementById("conteo");

boton.addEventListener("click", function(){
    if(contador <0){
    alert("llegaste al mínimo")
    }else{
    contador--;
    numero.textContent = contador;
    }
});