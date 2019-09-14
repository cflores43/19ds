let a = prompt(`Introduce un numero para x`)
let x = parseInt(a)
let b = prompt(`Introduce un numero para y`)
let y = parseInt(b)

function getBaseLog(x, y) {
   return Math.log(y) / Math.log(x);
}
getBaseLog(x,y)
