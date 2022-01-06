
function crearCalculadora(num){
      var resultado=0

      var calculadora={
          valor: function(){
              return resultado
          },
          
          
          sumar : function(num1){
              return resultado +=num1
          },

          

          restar: function(num1){
              return resultado-=num1
          },


          

          reset: function(num1){
              return resultado=0
          },
          
        }
        return calculadora
}
        

 crearCalculadora(calculadora.sumar(2))       
        
