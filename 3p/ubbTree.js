class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class ubbTree {
    constructor(rootNode) {
        this.rootNode = rootNode,
        this.height = 0,
        this.levelNodes = [
            [rootNode]
        ]
    }

    insert(node) {
        let l = this.levelNodes[this.height].length;
        for(let i = 0; i < l; i++) {
            if(this.levelNodes[this.height][i].left == null) {
                this.levelNodes[this.height][i].left = node;
                return;
            }
            if(this.levelNodes[this.height][i].right == null) {
                this.levelNodes[this.height][i].right = node;
                return;
            }
        }
        this.levelNodes.push([]);
        this.height ++;
        this.insert(node);
    }
}

let rootNode = new Node('root');
let node1 = new Node('node1');
let node2 = new Node('node2');
let node3 = new Node('node3');
let node4 = new Node('node4');

let ubbTree1 = new ubbTree(rootNode);