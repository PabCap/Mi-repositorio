
function concatenar(){
    var str = Array.prototype.slice.call(arguments)
    return str.join("")
}
concatenar("Facu ", "Velasco ", "es ","el ","profe ")


function func(){return "Me llamaron"}
function invocarFunciones() {
    var resultado = ""

    for(var i = 0; i < arguments.length; i++){
       resultado += arguments[i]()
    }
    return resultado
}

invocarFunciones (func)



function creadorDeIncrementos(a){
     return function (num){return a+num}

}
creadorDeIncrementos()





var invocacionUnica=function unica(uni){
    let resp=false
     return function(){
   if (!resp) { resp=true 
       return uni()}
     }         
}
invocacionUnica()



function objetoConClousure(){
    var objeto = {}
    var total = 0

    objeto.incremento = function(){
        total+= 1
        return total
    }

    objeto.incrementoPor10 = function (){
        total += 10
        return total
    }

    objeto.pedirValor = function (){
        return total
    }

    objeto.cambiarValor = function (valor){
        total = valor
        return total
    }

    return objeto
}

objetoConClousure()





function ListaDeFuncionesInvitados(num){
    var arregloInvitados = []
    arregloInvitados.push(function(num){
        if (num == 404){
         return "Facu"
         } else {
             return "código secreto: invalido"
         }
    },
   function(num){
       if (num == 404){
        return "Santi"
        } else {
            return "código secreto: invalido"
        }
    },
    function(num){
        if (num == 404){
         return "Toni"
         } else {
             return "código secreto: invalido"
         }
    },
    function(num){
        if (num == 404){
         return "Guille"
         } else {
             return "código secreto: invalido"
         }
    },
    function(num){
        if (num == 404){
         return "Solano"
         } else {
             return "código secreto: invalido"
         }
    },
    function(num){
        if (num == 404){
         return "Leo"
         } else {
             return "código secreto: invalido"
         }
    })

    return arregloInvitados
}


function armarListaDeInvitados(){
    var listaOficial = []
    listaOficial.push('Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo')
    return listaOficial
}
