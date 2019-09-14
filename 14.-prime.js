//Numeros primos

let a = prompt("Pon un limite para los numeros primos quieres ver")
let x = parseInt(a)
function prim(x){
    for (n=3;n<x;n++){
     s=Math.sqrt(n);
     noFactorSoFar = true;
      for (f=2;f<=s;f++){
       r = n % f;
       if (r==0){
          noFactorSoFar = false;
          break;
       }
      }
      if (noFactorSoFar){
        console.log(n)
        console.log("<br/>");
      }
    }
}
  prim(x);
