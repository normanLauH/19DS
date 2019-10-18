const n = 10;
const k = 3;

let sum = 0;
for(let i=1; i<=n; i++){
    sum += Math.pow(i,k);
}
console.log('El resultado de la suma es ' + sum);

let kamasuno = k + 1;
let gauss = (1 / kamasuno) * (Math.pow(n,kamasuno));

console.log('El resultado de la formula es ' + gauss);