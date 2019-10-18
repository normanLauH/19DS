/*Factorial*/

class Factorial {
    constructor(k) {
        this.k = k;
    }

    value() {
        const fac = (n) => n>0 ? n*fac(n-1) : 1;
        return fac(this.k);
    }
}

(function useFactorial() {
    let factorial = new Factorial(5);
    console.log("Value: " + factorial.value());
})()