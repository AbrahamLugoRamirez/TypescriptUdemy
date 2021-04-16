let permiso:boolean = true
class Persona{
    public nombre:string
    constructor(nombre_:string){
        this.nombre = nombre_
    }
    get getNombre():string{
        return this.nombre
    }
    set setNombre(nombre:string){
        if(permiso){
            this.nombre = nombre
        }else{
        console.log('No tienes permisos para esto')
        }
    }
}

const objeto = new Persona('Abraham')
console.log(objeto.getNombre)
