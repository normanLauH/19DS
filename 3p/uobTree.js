// uobTree Class//unbalanced, ordered, binary

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class UOBTree {
    constructor(node) {
      this.root = node;
    }
  
    insert(n, node = this.root) {
        if (n.data < node.data && node.left === null) {
          node.left = n;
          return node;
        } else if (n.data > node.data && node.right === null) {
          node.right = n;
          return node;
        } else if (n.data < node.data && node.left) {
          return this.insert(n, node.left);
        } else if (n.data > node.data && node.right) {
          return this.insert(n, node.right);
        }
    }
  
    remove(key, node = this.root) {
      if (node == null) {
        return null;
      }
      if (node.left.data === key) {
        node.left = null;
        return node;
      } else if (node.right.data === key) {
        node.right = null;
        return node;
      } else if (key < node.data && node.left) {
        return this.remove(n, node.left);
      } else if (key > node.data && node.right) {
        return this.remove(n, node.right);
      }
    }
  
    bft() {
      let root = this.root
      let tempArr = [];
      let print = [];
  
      tempArr.push(root);
  
      while (tempArr.length) {
        let tempNode = tempArr.shift();
  
        print.push(tempNode.data);
  
        if (tempNode.left) {
          tempArr.push(tempNode.left);
        }
  
        if (tempNode.right) {
          tempArr.push(tempNode.right);
        }
      }
  
      return print;
    }

    inOrder(node = this.root) {
      if (node.left) {
        this.inOrder(node.left);
      }

      console.log(node.data);
  
      if (node.right) {
        this.inOrder(node.right);
      }
    }
}

let root = new Node('0');

let node1 = new Node('1');
let node2 = new Node('2');
let node3 = new Node('3');
let node4 = new Node('4');
let node5 = new Node('5');
let node6 = new Node('6');
let node7 = new Node('7');
let node8 = new Node('8');
let node9 = new Node('9');

let tree = new UOBTree(root);

tree.insert(node1);
tree.insert(node2);
tree.insert(node3);
tree.insert(node4);
tree.insert(node5);
tree.insert(node6);
tree.insert(node7);
tree.insert(node8);
tree.insert(node9);

console.log(tree);

tree.bft();

console.log(tree);

tree.inOrder();
