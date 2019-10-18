function factorial(f) {
    var fact = 1;
    for(f; f > 0; f--){
        fact *= f;
    }
    return fact;
}

console.log(factorial(5));

module.exports = factorial;