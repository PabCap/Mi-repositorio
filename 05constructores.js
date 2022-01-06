
function CalculadoraNPI(){
    this.array = []
    this.resultado = 0
}
var calculadora = new CalculadoraNPI();

CalculadoraNPI.prototype.agregar = function (num){
    this.array.push(num)
    return this.array
}

CalculadoraNPI.prototype.sumar = function (){
    if(this.array.length >= 2 && this.resultado == 0){
        var total = this.array.pop() + this.array.pop()
        this.resultado = total
        return this.resultado

    } else if (this.resultado !== 0){
        var total = this.resultado + this.array[0]
        this.resultado = total
        return this.resultado

    } else {
        throw "La calculadoraNPI necesita por lo menos 2 números"
    }
}

CalculadoraNPI.prototype.restar = function (){
    if(this.array.length >=2){
        var ultima = this.array.pop()
        var anteultima= this.array.pop()
        var resu = anteultima - ultima
        this.resultado = resu
        return this.resultado
    } else {   
        throw "La calculadoraNPI necesita por lo menos 2 números"
    }
}
CalculadoraNPI.prototype.multiplicar = function (){
    if (this.resultado == 0 && this.array.length >= 2){
        var ultima= this.array.pop()
        var anteultima = this.array.pop()
        var resu = anteultima * ultima
        this.resultado = resu
        return this.resultado

    } else if (this.resultado !== 0) {
        var primera = this.array[0]
        var mult = primera * this.resultado
        this.resultado = mult

    } else {
        throw "La calculadoraNPI necesita por lo menos 2 números"
    }
}

CalculadoraNPI.prototype.dividir = function (){
    if(this.array.length >=2){
        var primera = this.array.pop()
        var segunda = this.array.pop()
        var division = segunda / primera
        this.resultado = division
        return this.resultado

    } else {
        throw "La calculadoraNPI necesita por lo menos 2 números"
    }

}
CalculadoraNPI.prototype.valor = verValor

function verValor(){
    return this.resultado
}

 