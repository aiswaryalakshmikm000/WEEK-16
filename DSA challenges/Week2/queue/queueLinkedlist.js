class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class QueueLinkedList{
    constructor(){
        this.front = null
        this.rear = null 
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.front = this.rear = node
        } else {
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            console.log(`Empty queue`)
            return null
        }
        let removedValue = this.front
        this.front = this.front.next

        if(this.isEmpty()){
            this.rear = null
        }

        return removedValue
    }

    print(){
        if(this.isEmpty()){
            console.log(`Empty queue`)
            return null
        }
        let curr = this.front
        let queueValues = []

        while(curr){
            queueValues.push(curr.value)
            curr = curr.next
        }
        console.log(queueValues)
    }
}

const newQueue = new QueueLinkedList()

newQueue.enqueue(8)
newQueue.enqueue(9)
newQueue.enqueue(7)
newQueue.print()

newQueue.dequeue()
newQueue.print()