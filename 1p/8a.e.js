function factorial(f) {
    let fact = 1;
    for(f; f > 0; f--){
        fact *= f;
    }
    return fact;
}

function euler(x) {
    let sum = 0;
    for(let i=0; i<=x; i++){
        sum += (1/factorial(i))
    }
    return sum;
}

console.log(euler(7));