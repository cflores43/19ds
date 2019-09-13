function dos1() {

    var suma=0;
    for (i = 1; i < 11; i++) {      

        suma=suma+i;
        suma = parseInt(suma);        
    }
    console.log("Resultado 1: "+suma);
}

function dosFormula(){
    var resultado=0;
    for(n=1;n<11;n++){
        resultado=(n+1)*n/2;
        
    }
    console.log("Resultado 2: "+resultado);
}
dos1();
dosFormula();