
let total=1
function factorialIterativo(n) {
    
   for (let i = 1; i <= n; i++) {
    total*=i   
       
   } 
   return total
}


function factorial(n){
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}

function fib(n){
    if (n <= 1) return 1
    return fib(n - 1) + fib (n - 2)
}

function factores(n) {
    var arreglo = []
    for (let i = 2; i <= n ;i++) {
      while (n % i === 0) {
        arreglo.push(i);
        n/= i;
        factores(n);
      }
    }
    return arreglo;
  } 
