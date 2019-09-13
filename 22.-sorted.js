
//ordenar valores

//Sin valores iguales
var array = [6, 2, 20, 15, 7]
var array2 = [6, 2, 20, 15, 7]
console.log(array)
for(c = 0 ; c<array.length ; c++){
    var menores = 0;
    for(c2= 0; c2<array.length; c2++){
       if(array[c]>array[c2])menores++
    }
     array2[menores] = array[c];
}
console.log(array2)


//Con valores iguales 
var array = [6, 7, 20, 7, 2]
var array2 = [6, 7, 20, 7, 2]
console.log(array)
for(c = 0 ; c<array.length ; c++){
    var menores = 0;
    var iguales = -1;
    for(c2= 0; c2<array.length; c2++){
       if(array[c]>array[c2])menores++
       if(array[c]==array[c2])iguales++
    }
    if(iguales != 0){
        for(i = iguales; i !=0; i--){
            array2[(menores+i)] = array[c];
        }
    }
    array2[menores] = array[c];
}
console.log(array2)