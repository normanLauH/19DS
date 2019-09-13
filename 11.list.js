const n = [ 5,7,6,1,3,4,8,2,6,7 ]

const repeated = ( array ) => {
    let temp = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < i; j++){
            if(array[i] === array[j]){
                temp.push(array[i]);
            }
        }
    }
    return temp;
}

console.log(repeated(n));