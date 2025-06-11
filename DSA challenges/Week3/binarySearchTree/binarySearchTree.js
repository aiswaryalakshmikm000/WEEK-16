class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      root.left === null
        ? (root.left = newNode)
        : this.insertNode(root.left, newNode);
    } else {
      root.right === null
        ? (root.right = newNode)
        : this.insertNode(root.right, newNode);
    }
  }

  search(root, value) {
    if (!root) return false;
    if (value === root.value) return true;
    if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root) return null;

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) return null;
      if (!root.left) return root.right;
      if (!root.right) return root.left;
      
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }
}

const bst = new BinarySearchTree();

console.log("is Empty?", bst.isEmpty());

console.log("------------------------");

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
// bst.insert(7)

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 2));

console.log("--------preorder--------");
bst.preOrder(bst.root);
console.log("---------inorder--------");
bst.inOrder(bst.root);
console.log("--------postorder-------");
bst.postOrder(bst.root);

console.log("-----------BFS----------");

bst.levelOrder();

console.log("min value", bst.min(bst.root));
console.log("max value", bst.max(bst.root));

console.log("----------delete--------");

bst.delete(10);
bst.levelOrder();
