// Declaración de variables

// personaje ----> Variable global.
// var personaje ----> Variable local que vive dentro de toda la función.
// let personaje ----> Variable local que vive dentro del apartado creado.

let personaje = "Mario";

// Tipo de mensajes que se encuentran en la consola del navegador.
console.log(personaje);
console.info(personaje);
console.warn(personaje);
console.error(personaje);


for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//console.log(i) // Al ser una constante declarada en un entorno cerrado, esta función marcará error; 
               //en caso de querer que funcione, la función "i" debería de ser declarada con "var" en lugar de "let".

// Para alerta.
alert("Esto es una alerta");

const nombre = prompt ("Nombre");
console.log(nombre);

const respuesta = confirm("¿Segur@?");
console.log(respuesta);

// Funciones

function saltar() {
    console.log("Mario salta");
}

saltar();

// Para funciones anónimas (forma moderna)

const correr = (personaje) => console.log(personaje + "corre"); // La variable correr funciona como si una función se tratase.
correr(personaje);

// Arreglos
const personajes = ["Luigi"];
personajes.push(personaje);
personajes[2] = "Yoshi";
personajes[10] = "Peach";

document.getElementById("salida").innerHTML = "Aquí cosos"