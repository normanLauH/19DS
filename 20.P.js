function factorial(f) {
    var fact = 1;
    for(f; f > 0; f--){
        fact *= f;
    }
    return fact;
}

const P = (n, r) => {
    return (factorial(n)) / (factorial(n - r));
}

console.log(P(8, 2));