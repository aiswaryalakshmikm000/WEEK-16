class Stack {
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.items.length === 0) return 'empty stack'
        return this.items.pop()
    }

    peek(){
       if(this.items.length === 0) return 'empty stack' 
       return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    display(){
       if(this.items.length === 0) return 'empty stack' 
       return this.items.slice().reverse()
    }
}

function sortStack (originalStack){
    let tempStack = new Stack()

    while(!originalStack.isEmpty()){
        let current = originalStack.pop()

        while(!tempStack.isEmpty() && tempStack.peek() > current){
            originalStack.push(tempStack.pop())
        }

        tempStack.push(current)
    }

    while(!tempStack.isEmpty()){
        originalStack.push(tempStack.pop())
    }

    return originalStack
}

const stack = new Stack()

stack.push(34);
stack.push(3);
stack.push(31);
stack.push(98);
stack.push(92);
stack.push(23);

console.log(stack.display())

console.log(sortStack(stack))






//============================================== method 2==================================





class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  peek(){
    return this.stack[this.stack.length-1]
  }

  sortwithstack() {
    let tempstack = [];
    let originalStack = this.stack;

    while (originalStack.length > 0) {
      let current = originalStack.pop();
      while (tempstack.length > 0 && tempstack[tempstack.length - 1] < current) {
        originalStack.push(tempstack.pop());
      }
      tempstack.push(current);
    }
    this.stack = tempstack;
  }

  printStack() {
    console.log(this.stack.join(" -> "));
  }
}

const stack1 = new Stack();
stack1.push(5);
stack1.push(1);
stack1.push(4);
stack1.push(2);
stack1.push(3);

console.log("Before sorting:");
stack1.printStack();

stack1.sortwithstack();

console.log("After sorting:");
stack1.printStack();
