// O(f(n))

function fib(n){
    var a = 1, b = 0, temp, store = [];
  
    while (n >= 0){
      temp = a;
      a = a + b;
      b = temp;
      n--;

      store.push(b)
    }
  
    return store;
}

console.log(fib(7));