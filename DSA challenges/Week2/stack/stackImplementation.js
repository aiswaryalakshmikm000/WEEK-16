//===============================================stack with array========================================

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


//===============================================stack with object========================================


class Stack {
    constructor(){
        this.items = {}
        this.top = 0
    }

    isEmpty(){
        return this.top === 0
    }

    push(value){
        this.items[this.top] = value 
        this.top++  //here the top is the next key where we can add the new value... so the last key is actually this.top-1
        return `${value} pushed`; 
    }

    pop(){
        if (this.isEmpty()) return 'Empty stack';
        const popped = this.items[this.top-1];
        delete this.items[this.top-1]
        this.top--
        return popped;
    }

    peek(){
        if (this.isEmpty()) return 'Empty stack';
        return this.items[this.top-1]
    }

    display(){
        if (this.isEmpty()) return 'Empty stack';
        let result = []
        for(let i=this.top-1; i>=0; i--){
            result.push(this.items[i])
        }
        return result
    }
}


const stack1 = new Stack();

console.log("Display:", stack1.display());            // Empty stack1
console.log("Push:", stack1.push(10));                // 10 pushed
console.log("Push:", stack1.push(40));                // 40 pushed
console.log("Push:", stack1.push(60));                // 60 pushed
console.log("Display:", stack1.display());            // [60, 40, 10]
console.log("Pop:", stack1.pop());                    // 60
console.log("Display:", stack1.display());            // [40, 10]
console.log("Peek:", stack1.peek());                  // 40
