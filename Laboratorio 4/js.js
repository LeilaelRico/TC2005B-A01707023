/*
 * Cristian Leilael Rico Espinosa
 * A01707023
 */

/* Ejercicio 1 */

const ej1 = prompt ("Ingresa un n\u00Famero");
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
    document.write("<br>La respuesta de sumar " + rd1 + " + " + rd2 + " es " + res1);
    document.write("<br>Su respuesta fue " + ej2 + " y tard\u00f3 " + tiempo + " segundos.");

} else {

    let tiempo = (finTiempo - inTiempo) / 1000;
    alert("El resultado es incorrecto, tardaste " + tiempo + " segundos.");
    document.write("<br>La respuesta de sumar " + rd1 + " + " + rd2 + " es " + res1);
    document.write("<br>Su respuesta fue " + ej2 + " y tard\u00f3 " + tiempo + " segundos.");

}

/* Ejercicio 3 */

/*var rd3 = Math.floor(Math.random()*60);
var arr = [rd3];

for (let i = 0; i <= rd3; i++){

    arr[i] = Math.floor(Math.random() * 11);
    document.write("<br>" + arr[i]);
}*/

let arr = [1,2,3,4,5,6,-15,100,0,0,9,0,-3,5,5,-74,11,-7];

function contador(array) {

    let ceros = 0;
    let negativos = 0;
    let enteros = 0;

    for (let i = 0; i <= array.length; i++){

        if (array[i] == 0) {
            ceros = ceros + 1;
        } else if (array[i] < 0) {
            negativos = negativos + 1;
        } else {
            enteros = enteros + 1;
        }
    }

    let ej3 = "<br>Ceros: " + ceros + "<br>Negativos: " + negativos + "<br>Enteros: " + enteros;
    return ej3;
}

document.write(contador(arr));

/* Ejercicio 4 */

