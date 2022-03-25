const comida = [{nombre: "Pizza"}, {nombre: "Taco"}, {nombre: "Hamburguesa"}, {nombre: "Lasagna"}];

module.exports = class Recomendacion {
    
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }
    save() {
        comida.push(this);
        console.log(comida);
    }

    static fetchAll() {
        return comida;
    }
}