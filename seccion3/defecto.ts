//Parametros por defecto

const mostrar = (nombre:string, apellido:string, edad:number = 23):string =>{
    return 'Se llama ' + nombre + ' su apellido es ' + apellido + 'y su edad es '+edad
}
console.log(mostrar('Abraham', 'Lugo'))