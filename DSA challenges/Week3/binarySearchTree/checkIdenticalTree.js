function TreeNode(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function isIdentical(r1, r2) {
    if(r1 === null && r2 === null) return true
    if(r1 === null || r2 === null) return false
    if(r1.value !== r2.value)  return false

    return (
        isIdentical(r1.left, r2.left) &&
        isIdentical(r2.right, r2.right)
    ); 
}

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))


const tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))
const tree4 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))


console.log(isIdentical(tree1, tree2))
console.log(isIdentical(tree3, tree4))
console.log(isIdentical(tree1, tree3))