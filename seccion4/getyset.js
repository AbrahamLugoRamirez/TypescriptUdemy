let permiso = true;
class Persona {
    constructor(nombre_) {
        this.nombre = nombre_;
    }
    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre) {
        if (permiso) {
            this.nombre = nombre;
        }
        else {
            console.log('No tienes permisos para esto');
        }
    }
}
const objeto = new Persona('Abraham');
console.log(objeto.getNombre);
