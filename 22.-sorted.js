//Este programa es del dia que estube enferma y aclaro que estaba mal pero no me lo explicaron ya
//Este programa cuenta valores de una array y los ordena ordena
//Sin valores iguales

var arrayA = [6, 2, 20, 15, 7]
var arrayB = [6, 2, 20, 15, 7]
console.log(arrayA)
for(c = 0 ; c<arrayA.length ; c++){
    var men = 0;
    for(c2= 0; c2<arrayA.length; c2++){
       if(arrayA[c]>arrayA[c2])men++
    }
     arrayB[men] = arrayA[c];
}
console.log(arrayB)

//Con valores iguales 

var array = [6, 7, 20, 7, 2]
var arrayB = [6, 7, 20, 7, 2]
console.log(array)
for(c = 0 ; c<array.length ; c++){
    var men = 0;
    var igl = -1;
    for(c2= 0; c2<array.length; c2++){
       if(array[c]>array[c2])men++
       if(array[c]==array[c2])igl++
    }
    if(igl != 0){
        for(i = igl; i !=0; i--){
            arrayB[(men+i)] = array[c];
        }
    }
    arrayB[men] = array[c];
}
console.log(arrayB)
