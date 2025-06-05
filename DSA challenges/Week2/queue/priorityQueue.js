class PriorityQueue {
    constructor() {
        this.queue = []; // stores elements as objects {element, priority}
    }

    enqueue(element, priority) {
        const newElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.queue.length; i++) {
            if (newElement.priority > this.queue[i].priority) {
                this.queue.splice(i, 0, newElement); // insert before lower priority
                added = true;
                break;
            }
        }

        if (!added) {
            this.queue.push(newElement);
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift(); //will return highest priority
        }
        return null;
    }

    peek() {
        if (this.isEmpty()) return null; 
        return this.queue[0]; //show highest priority
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        console.log(
            this.queue.map(item => `${item.element} (priority ${item.priority})`).join(", ")
        );
    }
}

const pq = new PriorityQueue();
pq.enqueue("task1", 2);
pq.enqueue("task2", 4);
pq.enqueue("task3", 2);
pq.enqueue("task5", 3);
pq.enqueue("task4", 1);
pq.print();

pq.dequeue();
pq.print();
console.log(pq.peek())