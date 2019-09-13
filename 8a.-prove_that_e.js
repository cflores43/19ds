function fac (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
let form = 0
let x=1

for(let i = 0; i <= 9;i++){
    form += Math.pow(x,i)/fac(i)

}

console.log(`El resultado es ${form}`)