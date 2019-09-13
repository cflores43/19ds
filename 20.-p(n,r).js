function fact (n,r)
 {
	var total = 1; 
    for (i=1; i<=n; i++)
     {
        total = total * i;     
    }
    let suma = n - r
    
    let total2 = 1;
    for (i=1; i<=suma; i++)
     {
        total2 = total2 * i; 
    }
    let form = total/total2
	return form; 
}


console.log(`El resultado 1>${fact(10,3)}`