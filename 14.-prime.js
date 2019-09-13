//Primos

function prim(x){
    var af = false;
    for(c=x-1;c>1;c--){
        if(x%c==0) af = true;
    }
    if(af == true || x <= 1) return false;
    else return true;
}

function cuantPrim(ene){
    for(c1=0;c1<=ene;c1++){
        if(prim(c1)==false)c--;
        else console.log(c1)
    }
    do{
        
        if(prim(c1)==true)console.log(c1)
    }while(c<=5)
}
