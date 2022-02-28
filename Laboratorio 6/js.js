/*
 * Cristian Leilael Rico Espinosa
 * A01707023
 */

/* Ejercicio 1 */

let contraInicial = document.getElementById("contraI");
let contraComprueba = document.getElementById("contraC");
let button = document.getElementById("confirma");

button.onclick = function() {

    if(contraI.value == contraC.value){

        alert("La contraseña en ambos campos coincide.");

    }else{

        alert("Los campos de contraseña no coinciden, vuelva a intentarlo.");;
        
    }
}

/* Ejercicio 2 */

let butmas = document.getElementById("mas");
let butmen = document.getElementById("menos");

let cantidadPS5 = 0;
let cantidadSX = 0;
let cantidadOLED = 0;

function suma() {

    document.write(cantidadPS5);

}