function Mamifero(nom){
     this.nombre=nom
     this.descendencia = []
}

var mono = new Mamifero("Manny")


Mamifero.prototype.saludar=function (){
  return "Hola, mi nombre es " + this.nombre
}


Mamifero.prototype.nuevoHijo = function(){
var hijo = new this.constructor(this.nombre + " Jr")
    this.descendencia.push(hijo)
    return hijo
}


function Gato(nombre, color){
    Mamifero.call(this, nombre)
    this.color = color
}

Gato.prototype=Object.create(Mamifero.prototype)

Gato.prototype.constructor=Gato


Gato.prototype.nuevoHijo = function(color){

    var nombre = new Gato(this.nombre + " Jr", color)
    this.descendencia.push(nombre)
    return nombre
}



