function factorial(f) {
    var fact = 1;
    for(f; f > 0; f--){
        fact *= f;
    }
    return fact;
}

function euler(x) {
    var sum = 0;
    for(var i=0; i<=x; i++){
        sum += (1/factorial(i))
    }
    return sum;
}