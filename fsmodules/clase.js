class persona { //Clase en javascript
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, ¿como estas el dia de hoy ${this.nombre} ?`);
    }
}

const usuario = new persona("ricardo", 23);
const usuario2 = new persona("Andrea", 19);
console.log(usuario.edad);
console.log(usuario2.edad);


//Objeto instancial
// const variable = new persona("juan", 23);
// const variable = new persona("Ricardo", 23);
// console.log(variable);