var a = prompt(`Introduce un numero para x`)
let x = parseInt(a) 
var b = prompt(`Introduce un numero para y`)
let y = parseInt(b)

function gcd2num(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;

    x = Math.abs(x);
    y = Math.abs(y);

    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
function lcm2num(x, y) {    
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd2num(x, y));
 }

 console.log(lcm2num(x,y));
