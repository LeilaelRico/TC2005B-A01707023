/*
 * Cristian Leilael Rico Espinosa
 * A01707023
 */

/* Ejercicio 1 */

let contraInicial = document.getElementById("contraI");
let contraComprueba = document.getElementById("contraC");
let button = document.getElementById("confirma");

button.onclick = function(){

    if(contraI.value == contraC.value){

        alert("La contraseña en ambos campos coincide.");

    }else{

        alert("Los campos de contraseña no coinciden, vuelva a intentarlo.");;
        
    }
}

/* Ejercicio 2 */

