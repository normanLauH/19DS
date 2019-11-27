/*Fibonacci*/

class Fibonacci {
    constructor(k) {
        this.k = k;
    }

    value() {
        const fib = (n) => {
            n>0 ? fib(n-1) + fib(n-2) : 1};
        return fib(this.k);
    }

    cost() {
        
    }
}

(function useFibonacci() {
    let fibonacci = new Fibonacci(6);
    console.log("Value: " + fibonacci.value());
})()