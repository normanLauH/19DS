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

const C = (n, r) => {
    return (P(n, r)) / (factorial(r));
}

console.log(C(8, 2));