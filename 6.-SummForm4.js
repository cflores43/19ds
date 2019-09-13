var k=5;
k = parseInt(k)
function SF4() {

    var suma=0;
    var resultadoPotencia=0;
    for (i = 1; i < 11; i++) {  
        
        resultadoPotencia=Math.pow(i,k);
        suma+=resultadoPotencia;
        suma = parseInt(suma);        
    }
    console.log("Resultado 1: "+suma);
}

function SF4f(){
    var resultado=0;
    for(n=1;n<11;n++){
        resultado=(1/(k+1)*(Math.pow(n,k+1)));
        
    }
    console.log("Resultado 2: "+resultado);
}
SF4();
SF4f();