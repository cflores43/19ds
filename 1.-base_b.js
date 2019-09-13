let res
let log = prompt('por favor, introduce la nueva base')

const log7 = (x,y)=>  Math.log10(x)/Math.log10(y) 

for (let i = 0; i <=10;i++){

    res = log7(i,log)
    console.log(`El resultado ${i} es `+ res)

}