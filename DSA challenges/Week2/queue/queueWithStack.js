class QueueWithStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value){
        this.stack1.push(value)
    }

    dequeue(){
        if(this.stack1.length === 0 && this.stack2.length === 0){
            return null
        }
        if(this.stack2.length === 0){
            while(this.stack1.length){ 
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    front(){
        if(this.stack1.length === 0 && this.stack2.length === 0){
            return null
        }

        if(this.stack2.length === 0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }

    display(){ //rev of stack 2 is stack 1 like + rest of stack elements
        const fullQueue = [...this.stack2].reverse().concat(this.stack1) //spread to make the copy of stack2
        console.log(fullQueue.join('-->'))
    }
}

const queue = new QueueWithStack();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display(); 

console.log("Dequeued:", queue.dequeue()); 
queue.display();

queue.enqueue(40);
queue.display(); 

console.log("Front:", queue.front()); 