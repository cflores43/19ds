let a = prompt("Introduce un numero")
let x = parseInt(a)

function fac(fact){
    let res = 1;
    for(let i = 1 ; i <= fact ; i++){
        res = res * i;
    }
    return(res);
}
function catalan(n){
    for(let i=1; i<=n;i++){
        console.log(fac(i*2)/(fac(i+1)*fac(i)))
    }   
}

catalan(x)
