function initRandom(r,c){
    let matrix = [];
    for(let m = 0; m < r; m++){
        let array = [];
        for(let n = 0; n < c; n++){
            array.push(Math.floor(Math.random() * 10));
        }
        matrix.push(array)
    }
    return matrix;
}