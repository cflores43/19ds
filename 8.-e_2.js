let x = prompt(`por favor,introduce un numero`)
let N = parseInt(x,10)
let form = Math.exp(x)

console.log(`factorial ${form}`)

function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
let form2 = 0

for(let i = 0; i <= 9;i++){
    form2 += Math.pow(N,i)/factorial(i)

}

console.log(`exponente ${form2}`)