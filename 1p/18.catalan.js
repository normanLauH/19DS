function factorial(f) {
    var fact = 1;
    for(f; f > 0; f--){
        fact *= f;
    }
    return fact;
}

const catalan = (n) => { 
    return factorial(2 * n) / (factorial(n+1) * factorial(n))
}

const n = 9


for(let i = 0; i < n; i++) {
    console.log(catalan(i))
}