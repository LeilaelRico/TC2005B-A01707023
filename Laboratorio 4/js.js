/*
 * Cristian Leilael Rico Espinosa
 * A01707023
 */

/* Ejercicio 1 */

const ej1 = prompt ("Ingresa un n\u00Famero");

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
    document.write("<br>La respuesta de sumar " + rd1 + " + " + rd2 + " es " + res1+ " -->  Su respuesta fue " + ej2 + " y tard\u00f3 " + tiempo + " segundos.");

} else {

    let tiempo = (finTiempo - inTiempo) / 1000;
    alert("El resultado es incorrecto, tardaste " + tiempo + " segundos.");
    document.write("<br>Ejercicio 2 -> La respuesta de sumar " + rd1 + " + " + rd2 + " es " + res1 + " -->  Su respuesta fue " + ej2 + " y tard\u00f3 " + tiempo + " segundos.");

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

    let ej3 = "<br>Ejercicio 3: Ceros: " + ceros + " -> Negativos: " + negativos + " -> Enteros: " + enteros;
    return ej3;
}

document.write(contador(arr));

/* Ejercicio 4 */

var mt = [[15,20,35,45],[45,74,2,33],[7,41,89,12],[98,0,61,4]];

function promedios(matriz){
    
    let arrProm = new Array;
    let promedio = 0;

    for (let i = 0; i < matriz.length; i++) {

        let sumPromedio = 0;
        
        for (let j = 0; j < matriz[i].length; j++) {

            sumPromedio += matriz[i][j];  
        }
        promedio = sumPromedio / 4;
        arrProm.push((" " + promedio));
    }
    let ej4 = "<br>Ejercicio 4: " + arrProm;
    return ej4;    
}

document.write(promedios(mt));

/* Ejercicio 5 */

const ej5 = prompt ("Ingresa un n\u00Famero para invertir");
console.log(ej5);

var inverso = ej5.split('').reverse().join('');

document.write("<br>Ejercicio 5: " + inverso);

/* Ejercicio 6 */

class Tiempo {
    constructor (horas, minutos, segundos) {

        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    
      }
}


const sec = prompt ("Ingrese el tiempo en segundos");

function convierteSegundos(seg) {

    this.horas = Math.floor(seg / 3600);
    let residuo = seg % 3600;
    this.minutos = Math.floor(residuo / 60);
    this.segundos = residuo % 60;

    let ej61 = document.write("<br> Ejercicio 6.1 = Las horas son: " + this.horas + " los minutos son: " + this.minutos + " los segundos son: " + this.segundos);
    return ej61;

}
convierteSegundos(sec);

const mn = prompt ("Ingrese el tiempo en minutos");

function convierteMinutos(min) {

    this.horas = Math.floor(min / 60);
    let residuo = min % 60;
    this.minutos = residuo;
    this.segundos = residuo / 60;

    let ej62 = document.write("<br> Ejercicio 6.2 = Las horas son: " + this.horas + " los minutos son: " + residuo + " los segundos son: " + this.segundos);
    return ej62;

}

convierteMinutos(mn);