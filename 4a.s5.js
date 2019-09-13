const a = 2;
const n = 10;

sumatoria = 0;
for(let i = 0; i <= n; i++){
    sumatoria += Math.pow(a, i);
}

formula = (Math.pow(a, n + 1) - 1) / ( a - 1);

console.log('Sumatoria: ', sumatoria);
console.log('Formula: ', formula);