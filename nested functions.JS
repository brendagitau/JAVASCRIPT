function nesting(){
    var i= "Old"
    var j ="Mcdonnald"
    function farm(){
        var c=i+" "+j+" "+"had a farm."
        console.log(c);

    }
    farm();
}
nesting();