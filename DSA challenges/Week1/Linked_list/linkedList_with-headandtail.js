// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Singly Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Check if list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get current size
  getSize() {
    return this.size;
  }

  // Add node at the beginning
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Add node at the end
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // Remove node from the front
  removeFromFront() {
    if (this.isEmpty()) return null;
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;

    // If list becomes empty, clear tail too
    if (this.isEmpty()) {
      this.tail = null;
    }

    return value;
  }

  // Remove node from the end
  removeFromEnd() {
    if (this.isEmpty()) return null;

    const value = this.tail.value;

    if (this.size === 1) {
      // only one node
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  // Insert at a specific index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size) {
      this.append(value);
      return;
    }

    const node = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    node.next = prev.next;
    prev.next = node;
    this.size++;
  }

  // Remove node by index
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;

    if (index === 0) return this.removeFromFront();
    if (index === this.size - 1) return this.removeFromEnd();

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    const removedValue = prev.next.value;
    prev.next = prev.next.next;
    this.size--;
    return removedValue;
  }

  // Remove by value
  removeValue(value) {
    if (this.isEmpty()) return false;

    if (this.head.value === value) {
      this.removeFromFront();
      return true;
    }

    let prev = this.head;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }

    if (prev.next) {
      if (prev.next === this.tail) {
        this.tail = prev;
      }
      prev.next = prev.next.next;
      this.size--;
      return true;
    }
    return false;
  }

  // Search for a value
  search(value) {
    if (this.isEmpty()) return -1;

    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.value === value) return index;
      curr = curr.next;
      index++;
    }
    return -1;
  }

  // Reverse the linked list
  reverse() {
    let prev = null;
    let curr = this.head;
    this.tail = this.head;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  // Print the list
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(`List: ${listValues.trim()} | Size: ${this.size}`);
      console.log(
        `Head: ${this.head.value}, Tail: ${this.tail.value}`
      );
    }
  }
}

// ---------- Example Usage ----------

const list = new LinkedList();

console.log("Is empty?", list.isEmpty());
list.append(10);
list.append(20);
list.append(30);
list.print();

list.prepend(5);
list.print();

console.log("Removed from front:", list.removeFromFront());
list.print();

console.log("Removed from end:", list.removeFromEnd());
list.print();

list.insert(15, 1);
list.print();

console.log("Search 20:", list.search(20));
console.log("Remove value 15:", list.removeValue(15));
list.print();

list.reverse();
list.print();
