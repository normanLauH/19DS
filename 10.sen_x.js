function factorial(f) {
    let fact = 1;
    for(f; f > 0; f--){
        fact *= f;
    }
    return fact;
}

function sen(x) {
    let signo = true;
    sum = 0;

    for(let i=1; i<=x; i+=2){
        if(signo===true){
            sum += ((Math.pow(x,i)) / factorial(i));
            signo = false
        }
        else{
            sum -= ((Math.pow(x,i)) / factorial(i));
            signo = true;
        }
    }
    return (sum);
}

console.log(sen(8));