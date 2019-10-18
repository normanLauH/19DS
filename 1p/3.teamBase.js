//  14/8/2019 - lista 1-10 logX     Ejercicio 3

var b = prompt("Ingrese Base");

for(var x=1; x <= 10; x++){
    console.log(x + '.  ' + (Math.log10(x) / Math.log10(b)));
}