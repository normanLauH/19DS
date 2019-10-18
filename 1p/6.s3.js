const n = 10;

let sum = 0;
for(let i=1; i<=10; i++){
    sum += i * i;
}
console.log('El resultado de la suma es ' + sum);

let gauss = (n * (n + 1) * ((2 * n) + 1)) / 6;

console.log('El resultado de la formula es ' + gauss);