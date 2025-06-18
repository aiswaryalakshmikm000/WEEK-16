class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    
    isEmpty(){
        return this.root === null
    }
    
    insert(value){
        const newNode = new Node(value)
        
        if(this.isEmpty()){
            this.root = newNode
            return
        }
        
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            if(curr.left === null){
                curr.left = newNode
                return
            } else {
                queue.push(curr.left)
            }
            if(curr.right === null){
                curr.right = newNode
                return
            } else {
                queue.push(curr.right)
            }
        }
    }
    
    inOrderTraversal(root){
        if(root){
            this.inOrderTraversal(root.left)
            console.log(root.value)
            this.inOrderTraversal(root.right)
        }
    }
}

const bt = new BinaryTree()

console.log(bt.isEmpty())

bt.insert(10)
bt.insert(40)
bt.insert(45)
bt.insert(-27)
bt.insert(1)
bt.insert(100)

bt.inOrderTraversal(bt.root)