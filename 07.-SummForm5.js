var a =1;
a = parseInt(a);
if(a!=1){
    function SF5() {
        var sum = 0;
        for (n = 0; n < 11; n++) {
            sum += Math.pow(a, n);
        }
        console.log("Resultado 1: "+sum);
    }
    function SF5f() {
        var result = 0;
        for (n = 0; n < 11; n++) {
            result = Math.pow(a,(n+1))-1/(a-1);
        }
        console.log("Resultado 2: "+result);
    }
    
    SF5();
    SF5f();
}
