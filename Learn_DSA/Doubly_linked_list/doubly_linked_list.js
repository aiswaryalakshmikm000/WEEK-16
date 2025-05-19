class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.size) {
      return this.append(value);
    }

    const node = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    node.next = prev.next;
    node.prev = prev;
    prev.next.prev = node;
    prev.next = node;
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null; // empty list
      }
    } else if (index === this.size - 1) {
      removeNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
      removeNode.next.prev = prev;
    }
    this.size--;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        // Case 1: Removing head
        if (curr === this.head) {
          this.head = this.head.next; // current.next
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null; //list is empty
          }
        } else if (curr === this.tail) {
          this.tail = this.tail.prev; //curr.prev
          this.tail.next = null;
        } else {
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
        }
        this.size--;
        return value;
      }
      curr = curr.next;
    }
    return null;
  }

 remove(value){
    if(this.size === 0){
        return null
    }
    if(this.size ===1){
        this.head = null
        this.tail = null
    } else {
        if(this.head.value === value){
            this.head = this.head.next
            return
        }
        if(this.tail.value === value){
            this.tail = this.tail.prev
            this.tail.next = null
            return
        }
        let curr = this.head
        while(curr.value !== value){
            curr = curr.next
        }
        curr.prev.next = curr.next
        curr.next.prev  = curr.prev
    }
    this.size--
 }


  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  printForward() {
    if (this.isEmpty()) {
      console.log("Is empty?", this.isEmpty());
    }
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(`List values: ${listValues},   Size: ${this.getSize()}`);
  }

  oddEven() {
    if (this.isEmpty()) {
      return null;
    } else {
      let curr = this.head;
      let odd = "";
      let even = "";
      while (curr) {
        if (curr.value % 2 === 0) {
          even += `${curr.value} `;
        } else {
          odd += `${curr.value} `;
        }
        curr = curr.next;
      }
      console.log("odd", odd);
      console.log("even", even);
    }
  }

  middleElement() {
    if (this.isEmpty()) {
      return null;
    }
    let fast = this.head
    let slow = this.head
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    console.log(slow.value)
  }
  
  printBackward() {
    if (this.isEmpty()) {
      console.log("Is empty?", this.isEmpty());
    }
    let curr = this.tail;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.prev;
    }
    console.log(`List values: ${listValues}, Size: ${this.getSize()}`);
  }
}

const doublyList = new DoublyLinkedList();
doublyList.prepend(1);
doublyList.append(20);
doublyList.insert(60, 1);
doublyList.printForward();
doublyList.middleElement();

// doublyList.removeFrom(1);
// doublyList.removeValue(60);
doublyList.remove(20)
doublyList.printForward();
// doublyList.printForward();

// doublyList.printForward();
// doublyList.printBackward();
// doublyList.printForward();
