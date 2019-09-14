function fac (n) {
	let tot = 1; 
	for (i=1; i<=n; i++) {
		tot = tot * i; 
	}
	return tot; 
}
let form = 0
let x=1

for(let i = 0; i <= 9;i++){
    form += Math.pow(x,i)/fac(i)
}
console.log("El resultado es " + form)
