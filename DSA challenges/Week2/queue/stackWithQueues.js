class stackWithQueues {
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    push(value){
        this.queue1.push(value)
    }

    pop(){
        if(this.queue1.length === 0){
            console.log("empty queue")
            return null
        }
        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift())
        }
        let poppedElement = this.queue1.shift()
        while(this.queue2.length){
            this.queue1.push(this.queue2.shift())
        }
        return poppedElement
    }

    peek() {
    if (this.queue1.length === 0) {
        console.log("empty stack");
        return null;
    }
    return this.queue1[this.queue1.length - 1];
}

    display(){
        if(this.queue1.length === 0){
            console.log("empty queue")
            return null
        }
        console.log(this.queue1.join('-->'))
    }
    
}

const stack = new stackWithQueues()

stack.push(1)
stack.push(11)
stack.push(111)
stack.push(1111)
stack.display()
console.log(stack.peek())
stack.pop()
stack.display()