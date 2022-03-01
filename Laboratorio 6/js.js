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

let butmas5 = document.getElementById("mas5");
let butmen5 = document.getElementById("menos5");
let butmasX = document.getElementById("masX");
let butmenX = document.getElementById("menosX");
let butmasS = document.getElementById("masS");
let butmenS = document.getElementById("menosS");
let botfin = document.getElementById("botfin");

var ptotal = 0;
let cantidadPS5 = 0;
let cantidadSX = 0;
let cantidadSW = 0;
var total = 0;

var costoPS5 = 13999;
var costoSX = 13991.11;
var costoSW = 9998;

function sumaPS() {

    total = total + costoPS5;
    cantidadPS5 = cantidadPS5 + 1;
    document.getElementById("cantidadPS5").innerHTML = cantidadPS5;
    console.log(total);

}

function restaPS() {
    total = total - costoPS5;
    cantidadPS5 = cantidadPS5 - 1;
    document.getElementById("cantidadPS5").innerHTML = cantidadPS5;
    console.log(total);
    
}

function sumaSX() {

    total = total + costoSX;
    cantidadSX = cantidadSX + 1;
    document.getElementById("cantidadSX").innerHTML = cantidadSX;
    console.log(total);

}

function restaSX() {
    total = total - costoSX;
    cantidadSX = cantidadSX - 1;
    document.getElementById("cantidadSX").innerHTML = cantidadSX;
    console.log(total);
    
}

function sumaSW() {

    total = total + costoSW;
    cantidadSW = cantidadSW + 1;
    document.getElementById("cantidadSW").innerHTML = cantidadSW;
    console.log(total);

}

function restaSW() {
    total = total - costoSW;
    cantidadSW = cantidadSW - 1;
    document.getElementById("cantidadSW").innerHTML = cantidadSW;
    console.log(total);
    
}

function carrito() {
    ptotal = total + (total * 0.16);
    alert(`Precio por los productos: ${total}  IVA: 16%  Precio total: ${ptotal}`);
}

botfin.onclick = carrito;

butmas5.onclick = sumaPS;
butmen5.onclick = restaPS;

butmasX.onclick = sumaSX;
butmenX.onclick = restaSX;

butmasS.onclick = sumaSW;
butmenS.onclick = restaSW;