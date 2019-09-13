var n = 10;
var k = 3;

var sum = 0;
for(var i=1; i<=n; i++){
    sum += Math.pow(i,k);
}
console.log('El resultado de la suma es ' + sum);

var kamasuno = k + 1;
var gauss = (1 / kamasuno) * (Math.pow(n,kamasuno));

console.log('El resultado de la formula es ' + gauss);