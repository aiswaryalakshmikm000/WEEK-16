class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
    }

    push(value){
        const node = new Node(value)
        node.next = this.top
        this.top = node
    }

    pop(){
        if(this.top === null) return 'empty'
        this.top = this.top.next
    }

    peek(){
        if(this.top === null) return 'empty'
        return this.top.value
    }

    display(){
        let curr = this.top
        let listValues = []

        while(curr){
            listValues.push(curr.value)
            curr = curr.next
        }
        console.log(`values: ${listValues.join(' => ')}`)
    }
}

const stack = new Stack()

stack.push(20)
stack.push(90)
stack.push(200)
stack.push(18)
stack.push(80)
stack.push(64)

stack.display()

console.log(stack.peek());          

stack.pop();
stack.display(); 