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

  sumAllNodes(root) {
    if (root === null) return 0;
    return (
      root.value + this.sumAllNodes(root.left) + this.sumAllNodes(root.right)
    );
  }

  sumLeftSubtree() {
    if (this.root === null || this.root.left === null) return 0;
    return this.sumAllNodes(this.root.left);
  }

  sumRightSubtree() {
    if (this.root === null || this.root.right === null) return 0;
    return this.sumAllNodes(this.root.right);
  }

  countAllNodes(root) {
    if (root === null) return 0;
    return 1 + this.countAllNodes(root.left) + this.countAllNodes(root.right);
  }

  countLeftSubtree() {
    if (this.root === null || this.root.left === null) return 0;
    return this.countAllNodes(this.root.left);
  }

  countRightSubtree() {
    if (this.root === null || this.root.right === null) return 0;
    return this.countAllNodes(this.root.right);
  }

  isValidBst() {
    return this.validate(this.root, -Infinity, Infinity);
  }

  validate(root, minValue, maxValue) {
    if (root === null) return true;
    if (root.value <= minValue || root.value >= maxValue) return false;
    return (
      this.validate(root.left, minValue, root.value) &&
      this.validate(root.right, root.value, maxValue)
    );
  }

  maxDepth(root) {
    if (root === null) return 0;
    let leftHeight = this.maxDepth(root.left);
    let rightHeight = this.maxDepth(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depthOfValue(value) {
    let depth = 0;
    let curr = this.root;
    while (curr) {
      if (value === curr.value) {
        return depth;
      }
      if (value < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
      depth++;
    }
    return -1;
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

  /////another way for seconf smallest
  // secondLargest() {
  //   if (this.root === null) return null;

  //   let parent = null;
  //   let curr = this.root;
  //   while (curr.right) {
  //     parent = curr;
  //     curr = curr.right;
  //   }
  //   if (curr.left !== null) {
  //     return this.max(curr.left);
  //   }
  //   return parent.value;
  // }

  secondLargest() {
    let count = 0;
    let result = null;

    const reverseInOrder = (node) => {
      if (!node || result !== null) return;
      reverseInOrder(node.right);
      count++;
      if (count === 2) {
        result = node.value;
        return;
      }
      reverseInOrder(node.left);
    };

    reverseInOrder(this.root);
    return result;
  }

  kthLargest(k) {
    let count = 0;
    let result = null;

    function reverseInOrder(node) {
      if (!node || result !== null) return;
      reverseInOrder(node.right);
      count++;
      if (count === k) {
        result = node.value;
        return;
      }
      reverseInOrder(node.left);
    }

    reverseInOrder(this.root);
    return result;
  }

  secondSmallest() {
    let count = 0;
    let result = null;

    const inOrder = (node) => {
      if (!node || result !== null) return;
      inOrder(node.left);
      count++;
      if (count === 2) {
        result = node.value;
        return;
      }
      inOrder(node.right);
    };

    inOrder(this.root);
    return result;
  }

  kthSmallest(k) {
    let count = 0;
    let result = null;

    function inOrder(node) {
      if (!node || result !== null) return;
      inOrder(node.left);
      count++;
      if (count === k) {
        result = node.value;
        return;
      }
      inOrder(node.right);
    }

    inOrder(this.root);
    return result;
  }

  closest(target) {
    if (this.root === null) return null;

    let curr = this.root;
    let close = Infinity;

    while (curr !== null) {
      if (Math.abs(curr.value - target) < Math.abs(close - target)) {
        close = curr.value;
      }

      if (curr.value < target) {
        curr = curr.right;
      } else if (curr.value > target) {
        curr = curr.left;
      } else {
        return curr.value;
      }
    }
    return close;
  }

  balanced(root) {
    return this.isBalanced(root) !== -1;
  }

  isBalanced(root) {
    if (root === null) return 0;

    let leftHeight = this.isBalanced(root.left);
    if (leftHeight === -1) return -1;
    let rightHeight = this.isBalanced(root.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
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

      const minValue = this.min(root.right);
      root.value = minValue;
      root.right = this.deleteNode(root.right, minValue);
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
bst.insert(7);
bst.insert(1);
//for unbalanced add below nodes
bst.insert(20);
bst.insert(25);
bst.insert(30);

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

console.log("IS valid BST?", bst.isValidBst());
console.log("Max depth of bst?", bst.maxDepth(bst.root));
console.log("Depth of 15?", bst.depthOfValue(15));

console.log("Second Largest element of bst?", bst.secondLargest());
console.log("Closest of 8?", bst.closest(8));
console.log("Is BST balanced?", bst.balanced(bst.root));

console.log("Total Sum:", bst.sumAllNodes(bst.root));
console.log("Sum of Left Subtree:", bst.sumLeftSubtree());
console.log("Sum of Right Subtree:", bst.sumRightSubtree());

console.log("Total Count:", bst.countAllNodes(bst.root));
console.log("Left Subtree Count:", bst.countLeftSubtree());
console.log("Right Subtree Count:", bst.countRightSubtree());

console.log("2nd Largest:", bst.kthLargest(2));
console.log("3rd Smallest:", bst.kthSmallest(3));
