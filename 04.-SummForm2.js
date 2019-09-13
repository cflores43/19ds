function dos1() {
    var sum=0;
    for (i = 1; i < 11; i++) {      
        sum = sum + i;
        sum = parseInt(sum);        
    }
    console.log("Resultado 1: "+sum);
}
function dosFormula(){
    var res=0;
    for(n=1;n<11;n++){
        res=(n+1)*n/2;
        
    }
    console.log("Resultado 2: "+res);
}

dos1();
dosFormula();
