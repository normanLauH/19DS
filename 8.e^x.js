function factorial(f) {
    var fact = 1;
    for(f; f > 0; f--){
        fact *= f;
    }
    return fact;
}

function e(x){
    let sum = 0;
    for(let i = 0; i <= 100; i++){
        sum += Math.pow(x, i) / factorial(i);
    }
    return sum;
}

console.log(e(10));