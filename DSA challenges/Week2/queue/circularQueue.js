class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      return "empty queue";
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += `${this.items[i]} `;
      }
      str += `${this.items[i]}`;
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(40);
queue.enqueue(63);
queue.enqueue(45);
queue.enqueue(23);
queue.enqueue(89);

console.log(queue.isFull());

queue.print();
queue.dequeue();
console.log(queue.peek());
queue.print();
queue.enqueue(90);
queue.print();
