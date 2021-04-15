// Para volver un parametro opcional solo se le debe colocar el signo de interrogacion (?) antes de los dos puntos que tipea la variable
const opcionales = (nombre: string, apellido: string, edad?: number) => {
    if (edad) {
        console.log('Se llama ' + nombre + ' su apellido es ' + apellido + ' y su edad es ' + edad)
    } else {
        console.log('Se llama ' + nombre + ' su apellido es ' + apellido)
    }
}
opcionales('Abraham', 'Lugo', 22)
