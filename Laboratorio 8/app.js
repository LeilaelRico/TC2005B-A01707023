/*
Cristian Leilael Rico Espinosa
A01707023
*/

const arreglo = [5000, 60, 90, 100, 10, 10000, 20, 0, 120, 2000, 340, 1000, 50];

function promedio(arr) {

    let acum = 0;

    for (let i = 0; i < arr.length; i++) {
        acum = acum + arr[i];
    }

    return acum / arr.length;
    
}

console.log("Ejercicio 1: " + promedio(arreglo));



const filesystem = require('fs');

ej2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida elementum. Nunc maximus, ipsum et mattis volutpat, orci orci pulvinar metus, non aliquam libero neque quis nunc. Aliquam porttitor viverra lectus quis elementum. Curabitur orci nibh, malesuada id tincidunt quis, commodo eu eros. Quisque et felis non lectus porttitor commodo ut eu elit. Aenean nec neque ipsum. Nulla ac arcu ornare, mollis mauris a, sodales nulla. Nullam imperdiet ipsum non sapien aliquam, eu consequat tellus fringilla. Nulla interdum elementum diam at pretium. Aenean dignissim libero orci, non pretium ipsum efficitur id. Vestibulum arcu nibh, facilisis in nulla sit amet, aliquam venenatis eros. Proin dapibus tellus ut dolor feugiat facilisis."

filesystem.writeFileSync('ej2.txt', ej2);


saldo = [100, 5000, 100500, 200000000];

function inversion(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);


        if (saldo[i] > 1000000) {

            console.log("Cliente excelente");
        } else if (saldo[i] <= 1000000 && saldo[i] > 100000) {
        
            console.log("Buen cliente");
        } else if (saldo[i] <= 100000 && saldo[i] > 2000) {
        
            console.log("Cliente promedio");
        } else if (saldo[i] <= 2000 && saldo[i] > 0) {
        
            console.log("Cliente con saldo insuficiente");
        }else
            console.log("¿Y tu dinero?");
        

    }
    
}

inversion(saldo);