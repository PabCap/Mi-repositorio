function duplicar(num) {
    return num * 2
}

function triplicar(num) {
    return num * 3
}

function map(arr, fn) {
    var arr1 = []
    for (var i = 0; i < arr.length; i++) {
        arr1.push(fn(arr[i]))
    }
    return arr1
}



function filter(arr, fn){
    var arreglo = []
    for(var i=0; i<arr.length;i++){
        if(fn(arr[i]) === true){
            arreglo.push(arr[i])
        }
    }
    return arreglo
}

function contains(obj, num){
    if (Object.values(obj).indexOf(num) > -1) {
    return true
    } else {
        return false
    }
}

function cuentaPalabras (str){
    return str.split(" ").length
}

function cuentaPalabrasReduce (str1, i){
    return (str1 += cuentaPalabras(i))
}

function reduce (arr, num, fn){
    var resultado = num
    for(var i = 0; i < arr.length; i++){
       resultado = fn(resultado, arr[i])
    }
    return resultado
}

function suma (arr){
    function sumar (){
        let total = 0
        for(let i = 0; i < arr.length; i++){
            total += arr[i]
        }
        return total
    }
    return reduce(arr, 0, sumar)
}

function every (arr, fn){
    var arreglo= []
    var nueva= function(a,b){
        return a + b
    }
}

for(var i = 0; i < arr.length; i++){
    if (fn(arr[i]) === true){
        arreglo.push(i)
    }
}

function reduce (arr, num, fn){
    var resultado = num
    for(var i = 0; i < arr.length; i++){
       resultado = fn(resultado, arr[i])
    }
    return resultado
}


function suma (arr){
    function sumar (){
        var valor = 0
        for(var i = 0; i < arr.length; i++){
            valor += arr[i]
        }
        return valor
    }
    return reduce(arr, 0, sumar)
}


function every (arr, fn){
    var array = []
    var y = function(a,b){
        return a + b
    }

    for(var i = 0; i < arr.length; i++){
        if (fn(arr[i]) === true){
            array.push(1)
        }
    }

    if (reduce(array, 0, y) === arr.length){
        return true
    } else {
        return false
    }
}


function any (arr, fn){
    var array = []
    var y = function(a, b){
        return a + b
    }

    for(var i = 0; i < arr.length; i++){
        if (fn(arr[i]) === true){
            array.push(1)
        }
    }

    if (reduce(array, 0, y) === 0){
        return false
    } else {
        return true
    }
}