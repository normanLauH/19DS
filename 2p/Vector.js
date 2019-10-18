/*Vector*/

class Vector {
    constructor(data) {
        this.data = data;
    }

    sum(b) {
        if(b.length == this.data.length) {
            let temp = [];
            for(let i = 0; i < this.data.length; i++) {
                temp[i] = this.data[i] + b[i];
            }
            return new Vector(temp);
        }else {
            console.log('Array no valido');
        }
    }

    subt(b) {
        if(b.length == this.data.length) {
            let temp = [];
            for(let i = 0; i < this.data.length; i++) {
                temp[i] = this.data[i] - b[i];
            }
            return new Vector(temp);
        }else {
            console.log('Array no valido');
        }
    }

    mul(b) {
        if(b.length == this.data.length) {
            let temp = [];
            for(let i = 0; i < this.data.length; i++) {
                temp[i] = this.data[i] * b[i];
            }
            return new Vector(temp);
        }else {
            console.log('Array no valido');
        }
    }

    getVector() {
        return new Vector(this.data);
    }
}


(function useVector () {
    let vector = new Vector([ 3, 5, 2, 8 ])
    console.log("Vector:")
    console.log(vector);
    let sumVector = vector.sum([ 5, 1, 7, 4 ])
    console.log("Suma: 2" + sumVector.data);
    let subtVector = vector.subt([ 5, 1, 7, 4 ])
    console.log("Resta: " + subtVector.data);
    let mulVector = vector.mul([ 5, 1, 7, 4 ])
    console.log("Multiplicación: " + mulVector.data);
    let getVector = vector.getVector();
    console.log("Nuevo Vector:")
    console.log(getVector);
})()