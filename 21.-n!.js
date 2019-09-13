function fac (n)
{
	var total = 1; 
    for (i=1; i<=n; i++)
     {
        total = total * i;    
    }
    return total
}   
console.log(fac(10))