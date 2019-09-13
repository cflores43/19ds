let x = prompt(`Introduce un numero`)
let N = parseInt(x,10)
let formA = Math.exp(x)

console.log(`fact ${formA}`)

function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
let formB = 0
for(let i = 0; i <= 9;i++){
    formB += Math.pow(N,i)/fact(i)
}
console.log(`Exponente ${formB}`)
