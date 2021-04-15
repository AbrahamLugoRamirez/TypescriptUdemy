// Para volver un parametro opcional solo se le debe colocar el signo de interrogacion (?) antes de los dos puntos que tipea la variable
var opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log('Se llama ' + nombre + ' su apellido es ' + apellido + ' y su edad es ' + edad);
    }
    console.log('Se llama ' + nombre + ' su apellido es ' + apellido);
};
opcionales('Abraham', 'Lugo', 22);
