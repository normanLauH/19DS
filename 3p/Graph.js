class Graph {
  constructor(n) {
    this.rows = n;
    this.columns = n;
    this.data = this.init();
  }

  init() {
    let temp = [];

    for (let i = 0; i < this.rows; i++) {
      temp[i] = new Array(this.rows);

      for (let j = 0; j < this.columns; j++) {
        temp[i][j] = 0;
      }
    }
    return temp;
  }

  printGraph() {
    return this.data;
  }

  addVertex() {
    this.rows++;
    this.columns++;
    this.data.length++;

    for (let i = 0; i < this.data.length - 1; i++) {
      this.data[i].length++;
    }
    for (let i = this.data.length - 1; i < this.data.length; i++) {
      this.data[i] = new Array(this.data.length - 1);

      for (let j = 0; j < this.data.length; j++) {
        this.data[i][j] = 0;
        this.data[j][i] = 0;
      }
    }
  }

  //bool para si la conexion esta dirigida o no
  addEdege(v1, v2, boolean) {
    this.data[v1][v2] = 1;
    if (boolean == true) {
      this.data[v2][v1] = 1;
    }
  }

  isComplete() {
    let temp = 0;
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[i][i] != 0) {
          return false;
        } else if (this.data[i][j] == 1) {
          temp++;
        }
      }
    }
    if (temp == this.data.length * this.data.length - this.data.length) {
      return true;
    } else {
      return false;
    }
  }

  isDirected() {
    for(let i = 0; i < this.data.length; i++) {
      for(let l = 0; l < this.data.length; l++) {
          if(this.data[i][l] != this.data[l][i])
              return true;
      }
    }
  return false;
  }

  isMultigraph() {
    let temp = 0;
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[i][i] != 0 || this.data[i][j] > 1) {
          temp++;
        }
      }
    }
    if (temp != 0) {
      return true;
    } else {
      return false;
    }
  }

  isSubgraph(g) {
    if (this.rows > g.rows || this.columns > g.rows) {
      return false;
    }
    let temp = 0;
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[i][j] <= g.data[i][j]) {
          temp++;
        }
      }
    }
    if (temp == this.data.length * this.data.length) {
      return true;
    } else {
      return false;
    }
  }

  isIsomorphic(g) {
    for(let i = 0; i < this.data.length; i++) {
      for(let l = 0; l < this.data.length; l++) {
          if(this.data[i][l] != g.data[i][l])
              return false;
      }
    }
    return true;
  }
}

let grafo1 = new Graph(4);
grafo1.addEdege(0,1,false);
grafo1.addEdege(0,2,false);
grafo1.addEdege(1,3,false);
grafo1.addEdege(2,3,false);
grafo1.addEdege(3,0,false);
console.log(grafo1.printGraph());
console.log(grafo1.isDirected());

let grafo2 = new Graph(4);
grafo2.addEdege(0,1,true);
grafo2.addEdege(0,2,true);
grafo2.addEdege(0,3,true);
grafo2.addEdege(1,3,true);
grafo2.addEdege(2,3,true);
console.log(grafo2.printGraph());
console.log(grafo2.isDirected());

console.log("Isomorphic: " + grafo1.isIsomorphic(grafo2));

let grafo3 = new Graph(2);
grafo3.addEdege(0,1,true);
console.log(grafo3.data);

let grafo4 = new Graph(2);
grafo4.addEdege(0,1,true);
console.log(grafo4.data);

console.log("Isomorphic: " + grafo3.isIsomorphic(grafo4));
