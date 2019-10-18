// O(f(n))

function primes(n){
    var k=0;
    var count=0;
    var prime=2;
    var store = [];

    while(count<n)
    {
        for(var i=2;i<prime;i++){
            if(prime%i==0){
                k=1;
                break;
            }
            else{
                k=0;
            }
        }
        
        if(k==0){
            store.push(prime);
            count++;
        }
        prime++;
    }
    return(store);
}

console.log(primes(7));