var n = 10;

var sum = 0;
for(var i=1; i<=10; i++){
    sum += i * i;
}
console.log('El resultado de la suma es ' + sum);

var gauss = (n * (n + 1) * ((2 * n) + 1)) / 6;

console.log('El resultado de la formula es ' + gauss);