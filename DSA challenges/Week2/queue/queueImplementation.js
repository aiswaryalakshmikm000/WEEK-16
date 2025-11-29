//----------------------------------------------- with array -------------------------------------------------

class Queue{
    constructor(){
        this.items = []
    }

    size(){
        return this.items.length
    }

    isEmpty(){
        return this.items.length === 0
    }

    enqueue(value){
        return this.items.push(value)
    }

    dequeue(){
        if (this.items.length === 0) return "Underflow";  //isEmpty
        return this.items.shift()  //shift have linear time complexity
    }

    peek(){
        if (this.items.length === 0) return "Underflow"; //isEmpty
        return console.log(this.items[0])
    }

    display(){
        if (this.items.length === 0) return "Underflow"; //isEmpty
        console.log(this.items)
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display(); 

queue.dequeue();
queue.display();

queue.peek();  



//----------------------------------------------------- with object-------------------------------------------

class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    isEmpty(){
        return this.rear-this.front === 0 
    }
    size(){
        return this.rear-this.front
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(){
        const removedItem = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return removedItem
    }
    peek(){
        return this.items[this.front]
    }
    print(){
        console.log(this.items)
    }
}

const queue1=new Queue()
queue1.enqueue(10)
queue1.enqueue(90)
queue1.enqueue(90)
queue1.dequeue()
console.log(queue1.peek())
queue1.print()