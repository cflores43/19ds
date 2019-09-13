function dos1() {
    var sum=0;
    var resPot=0;
    for (i = 1; i < 11; i++) {
        resPot=Math.pow(i,2);
        sum+=resPot;
        sum = parseInt(sum);        
    }
    console.log("Resultado 1: "+sum);
}
function dosFormula(){
    var res=0;
    for(n=1;n<11;n++){
        res=((n+1)*((2*n)+1)*n)/6;       
    }
    console.log("Resultado 2: "+res);
}
dos1();
dosFormula();
