function Persona(nombre, apellido, escuela, programa){
    this.nombre = nombre;
    this.apellido = apellido;
    this.escuela = escuela;
    this.programa = programa;
}

Persona.prototype.saludar = function () {
    return ('Hola soy ' + this.nombre + ' ' + this.apellido + ', estudio '+ this.programa + ' en '+ this.escuela); 
}
Persona.prototype.despedirse = function () {
    return ('Hasta luego, fue un placer conocerlos, recuerden que mi nombre es: '+ this.nombre + ' '+ this.apellido)
}

var juan = new Persona('Juan', 'Perez', 'Universidad nacional','Ingenieria de sistemas');

console.log(juan.saludar())
console.log(juan.despedirse())

