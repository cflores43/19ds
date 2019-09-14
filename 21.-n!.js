function fac (x)
{
	var tot = 1; 
    for (i=1; i<=x; i++)
     {
        tot = tot * i;    
    }
    return tot
}   
console.log(fac(10))
