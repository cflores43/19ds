let a = prompt("Introduce un numero para x")
let x = parseInt(a)
let b = prompt("Introduce un numero para y")
let y = parseInt(b)

function conv (x,y) {
	var tot = 1; 
	for (i=1; i<=x; i++) {
        tot = tot * i;         
    }
    let sum = x - y
    let tot2 = 1;
    for (i=1; i<=sum; i++) {
        tot2 = tot2 * i; 
    }
    let tot3 = 1;
    for (i=1; i<=y; i++) {
        tot3 = tot3 * i; 
    }
    let form1 = tot/tot2
    let form2 = form1 / tot3    
    return form2

}

console.log("El resultado 1 > " + conv(x,y))
