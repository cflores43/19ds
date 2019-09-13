var array = [6, 1, 3, 2, 6, 3, 4, 8, 2, 9];

function list(x){
    var x = x.sort(function(a, b){return a-b});
    var list = new Array
    var cont = 0;
    for(c1 = 0; c1 < x.length; c1++){
        var igl = 1;
        if(x[c1]==x[c1+1]){
            for(c2 = c1+1; c2 < x.length; c2++){
                if(x[c1]==x[c2]) igl++;
            }
        }
        list[cont] = igl;
        list[cont+1] = x[c1];
        cont = cont + 2;
        c1 = c1 + igl -1;
    }
    return list;
}

list(array)
