
const ej1 = prompt ("Ingresa un número");
console.log(ej1);

for (let i = 1; i <= ej1; i++) {
    document.write(i + " ");
}

var rd1 = Math.floor(Math.random()*101);
var rd2 = Math.floor(Math.random()*101);

var res1 = rd1 + rd2;

const ej2 = prompt ("Suma " + rd1 + " + " + rd2);

if (res1 == ej2) {
    alert("El resultado es correcto");
} else {
    alert("El resultado es incorrecto");
}

function contador ()