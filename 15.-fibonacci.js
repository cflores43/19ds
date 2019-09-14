let n =prompt("Cuantos numeros de Fibonacci quieres ver?")
let xN = parseInt(n,10)

let a = 1
let b = 1
var c 
function fib(n){
    console.log(a)
    console.log(b)
    c   = b + a;
    console.log(c)
    for(var i = 3; i <= n-1;   i++){
         a = b;
         b = c;
         c = b + a;
         console.log(c)
     }
}

fib(n)
