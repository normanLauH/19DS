class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let rootNode = new Node('root');
let node1 = new Node('node1');
let node2 = new Node('node2');
let node3 = new Node('node3');
let node4 = new Node('node4');

rootNode.left = node1;
rootNode.right = node2;
node2.left = node3;
node2.right= node4;

function inOrder(node) {
    if(node.left) inOrder(node.left);
    console.log(node.data);
    if(node.right) inOrder(node.right);
}

inOrder(rootNode);