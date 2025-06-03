class double{
    constructor(){
        this.stack=[]
    }
    addToFront(element){
        this.stack.unshift(element)
    }
    addToBack(element){
        this.stack.push(element)
    }
    removeFromFirst(){
        this.stack.shift()
    }
    removeFromback(){
        this.stack.pop()
    }
}

const dq = new double()

dq.addToBack(10)      // [10]
dq.addToFront(20)     // [20, 10]
dq.addToBack(30)      // [20, 10, 30]
dq.removeFromFirst()  // [10, 30]
dq.removeFromback()   // [10]

console.log(dq.stack) 