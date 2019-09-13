function conv (n,r) {
	var tot = 1; 
	for (i=1; i<=n; i++) {
        tot = tot * i;         
    }
    let sum = n - r
    let tot2 = 1;
    for (i=1; i<=sum; i++) {
        tot2 = tot2 * i; 
    }
    let tot3 = 1;
    for (i=1; i<=r; i++) {
        tot3 = tot3 * i; 
    }
    let form1 = tot/tot2
    let form2 = form1 / tot3    
    return form2

}

console.log(`El resultado 1>${conv(10,3)}`)
