class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar() {
        return ('Hola mi nombre es '+ this.nombre+ ' '+ this.apellido);
    }
}

class Estudiante extends Persona{
    constructor(nombre, apellido, escuela, programa){
        super(nombre, apellido);
        this.escuela = escuela;
        this.programa = programa;
    }
    estudio (){
        return ('Estudio '+ this.programa+' en la '+ this.escuela );
    }
}

var santi = new Estudiante('Santiago', 'Posada', 'Universidad Nacional', 'Ingenieria de sistemas');

console.log(santi);
console.log(santi.saludar());
console.log(santi.estudio());

