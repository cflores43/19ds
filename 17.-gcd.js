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
gcd2num(x,y)
