var a=5;
a = parseInt(a)
function SF4() {
    var sum=0;
    var resPot=0;
    for (i = 1; i < 11; i++) {  
        resPot=Math.pow(i,a);
        sum+=resPot;
        sum = parseInt(sum);        
    }
    console.log("Resultado 1: "+sum);
}
function SF4f(){
    var res=0;
    for(n=1;n<11;n++){
        res=(1/(a+1)*(Math.pow(n,a+1)));   
    }
    console.log("Resultado 2: "+res);
}

SF4();
SF4f();
