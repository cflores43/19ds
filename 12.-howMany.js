var array = [3,2,1];

function howMany(x){
    var x = x.sort(function(a, b){return a-b});
    var igl = 0;
    for(c1 = 0; c1 < x.length; c1++){
        if(x[c1]==x[c1+1]){
            for(c2 = c1+1; c2 < x.length; c2++){
                if(x[c1]==x[c2]) igl++;
            }
        }
        c1= c1+igl;
    }
    return igl;
}
howMany(array);
