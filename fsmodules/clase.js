class persona { //Clase en javascript
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, ¿como estas el dia de hoy ${this.nombre} ?`);
    }
}

//Objeto instancial
const variable = new persona("juan", 23);
// const variable = new persona("Ricardo", 23);
variable.saludar();