class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
        return `${element} pushed`
    }

    pop(){
        if(this.items.length === 0) return 'Empty stack'
        return this.items.pop()
    }

    peek(){
        if(this.items.length === 0) return 'Empty stack'
        return this.items[this.items.length-1]
    }

    display(){
        if(this.items.length === 0) return 'Empty stack'
        return this.items.slice().reverse()
    }
}

const stack = new Stack()


console.log("Display: ", stack.display())
console.log("Push: ", stack.push(10))
console.log("Push: ", stack.push(40))
console.log("Push: ", stack.push(60))
console.log("Display: ", stack.display())
console.log("Pop: ", stack.pop())
console.log("Display: ", stack.display())
console.log("Peek: ", stack.peek())