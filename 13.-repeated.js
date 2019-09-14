array = [1,2,3,4,5,6,4,7,8,9,1]

function rep(re){
	let sRep = false;
	for(i=0;i<re.length;i++){
		for(n=i;n<re.length;n++){
			if(re[i]===re[n]){
				sRep = true
				break
			}
		}
	}
	return sRep
	console.log(sRep)
}
console.log("En " + array + "\n se repite algun valor??")
console.log(rep(array))
