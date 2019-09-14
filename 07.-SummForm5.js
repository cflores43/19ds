var a=5;
a=parseInt(a);
sum=1;
var sum=parseInt(sum);
sumEx=0;
sumEx=parseInt(sumEx);
var form=0;
form=parseInt(form);
var aprox=0;
aprox=parseInt(aprox);


    for(n=1;n<11;n++){
        sumEx=Math.pow(a,n);
        sum+=sumEx;
        form=((Math.pow(a,n+1)-1)/(a-1));
        aprox=(Math.pow(2,n+1)-1);
    }
    console.log("Result 1: "+sum);
    console.log("Result 2: "+form);
    console.log("Aprox: "+aprox);
