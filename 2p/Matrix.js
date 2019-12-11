/*Matrix*/

class Matrix {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.data = this.init();
    }

    init() {
        let temp = [];

        for(let r = 0; r < this.rows; r++) {
            temp[r] = [];

            for(let c = 0; c < this.columns; c++) {
                temp[r][c] = 0;
            }
        }
        return temp;
    }

    initRandom() {
        for(let r = 0; r < this.rows; r++) {
            for(let c = 0; c < this.columns; c++) {
                this.data[r][c] = Math.floor(Math.random() * 11);
            }
        }
        return this.data;
    }

    initIdentity() {
        if (!this.isSquared()){
            return "La matriz debe de ser cuadrada";
        }else {
            for(let r = 0; r < this.rows; r++) {
                for(let c = 0; c < this.columns; c++) {
                    (r == c) ? this.data[r][c] = 1 : this.data[r][c] = 0;
                }
            }
        }
        return this.data;
    }

    getRow(r) {
        if(this.rows <= r || r < 0) {
            return 'No existe esa fila';
        }else {
            let temp = [];
            for(let c = 0; c < this.columns; c++) {
                temp[c] = this.data[r][c]
            }
            return temp;
        }
    }

    getColumn(c) {
        if(this.columns <= c || c < 0) {
            return 'No existe esa columna';
        }else {
            let temp = [];
            for(let r = 0; r < this.rows; r++) {
                temp[r] = this.data[r][c]
            }
            return temp;
        }
    }

    isSquared() {
        if(this.rows == this.columns)
            return true;
        else
            return false;
    }

    isSymetric() {
        for(let i = 0; i < this.rows; i++) {
            for(let l = 0; l < this.columns; l++) {
                if(this.data[i][l] != this.data[l][i])
                    return false;
            }
        }
        return true;
    }

    isIdentity() {
        for(let r = 0; r < this.rows; r++) {
            for(let c = 0; c < this.columns; c++) {
                if(r == c ) {
                    if(this.data[r][c] != 1)
                        return false;
                }else {
                    if(this.data[r][c] != 0)
                        return false;
                }
            }
        }
        return true;
    }

    getMatrix() {
        let newMatrix = new Matrix(this.rows, this.columns);
        for(let r = 0; r < this.rows; r++) {
            for(let c = 0; c < this.columns; c++) {
                newMatrix.data[r][c] = this.data[r][c]
            }
        }
        return newMatrix;
    }
}

(function useMatrix() {
    let mx = new Matrix(3,3);
    console.log("Identity: " + mx.initIdentity());
    console.log(mx);
    console.log("Identidad: " + mx.isIdentity());
    mx.initRandom();
    console.log(mx);
    console.log("Identidad: " + mx.isIdentity());
})()