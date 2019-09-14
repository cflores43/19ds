let a = prompt("Introduce un numero para x")
let x = parseInt(a)
let b = prompt("Introduce un numero para y")
let y = parseInt(b)

function fact (x,y){
	var tot = 1; 
	    for (i=1; i<=x; i++){
		total = tot * i;     
	    }
	
	    let sum = x - y
	    let tot2 = 1;
	    for (i=1; i<=sum; i++){
		tot2 = tot2 * i; 
	    }

    let form = tot/tot2
	return form; 
}

console.log("El resultado 1 > " + fact(x,y))
