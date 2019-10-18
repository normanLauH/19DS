const n = [ 5,7,6,1,3,4,8,2,6,7 ]

const repeated = ( array ) => {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < i; j++){
            if(array[i] === array[j]){
                return true;
            }
        }
    }

    return false;
}

console.log(repeated(n));