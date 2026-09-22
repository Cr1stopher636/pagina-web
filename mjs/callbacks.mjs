// CALLBACKS
function procesarUsuario(nombre, callback) {
    console.log(`Hola ${nombre}`)
    callback();
}

procesarUsuario('Ricardo', function() {

});