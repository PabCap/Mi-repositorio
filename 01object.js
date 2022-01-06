var obj={}
function setPropsOnObj(obj1) {
    obj1.p=5
    obj1.plataforma=5
    obj1.proximo=function (num) {return  num + 1}

  obj1.la = { clave: { secreta: { es: 404 } } }
  
}


let array =[]
function setPropsOnArr(arr) {
  
  
  arr.hola=function(){return "Hola!"} 
  arr.river = "plate"
  arr[0] = 5
  arr.doble = function (num){
      return num * 2
  }

}

setPropsOnArr(array)

function functionObject() {
    return "Soy una función con propiedades!";
}

var date=new Date()

function setPropsOnFunc(obj) {
  obj.year=date.getFullYear() 
  obj.mitad=function(num) {return num/2}
  obj.prototype.helloWorld=function() {
    return "Hello World"
  }
  
}
setPropsOnFunc(object)
