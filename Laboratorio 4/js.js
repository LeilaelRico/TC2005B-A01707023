/*
 * Cristian Leilael Rico Espinosa
 * A01707023
 */

/* Ejercicio 1 */

const ej1 = prompt ("Ingresa un número");
console.log(ej1);

for (let i = 1; i <= ej1; i++) {
    document.write(i + " ");
}

/* Ejercicio 2 */

var rd1 = Math.floor(Math.random()*101);
var rd2 = Math.floor(Math.random()*101);

var res1 = rd1 + rd2;

var inTiempo = Date.now();
const ej2 = prompt ("Suma " + rd1 + " + " + rd2);
var finTiempo = Date.now();

if (res1 == ej2) {

    let tiempo = (finTiempo - inTiempo) / 1000;
    alert("El resultado es correcto, tardaste " + tiempo + " segundos.");
    document.write("<br>El resultado es correcto, tardaste " + tiempo + " segundos.");

} else {

    let tiempo = (finTiempo - inTiempo) / 1000;
    alert("El resultado es incorrecto, tardaste " + tiempo + " segundos.");
    document.write("<br>El resultado es incorrecto, tardaste " + tiempo + " segundos.");

}

/* Ejercicio 3 */