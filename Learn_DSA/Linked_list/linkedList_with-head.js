//A blueprint for each node in a linked list. each node store value and next (initially null)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//head is the first node starts as null
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  //O(1)
  prepend(value) {
    const node = new Node(value); //here prepend the value = 10 and next = null as not mentioned
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
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
    prev.next = node;
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next; //prev.next.next  no need to store in the variable unless its required
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next; //prev.next.next  no need to store in the variable unless its required
        this.size--;
        return value;
      }
      return null;
    }
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

  reverse() {
    let prev = null;
    let curr = this.head;
    // let currOriginalHead  = this.head
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    // this.tail = currOriginalHead
  }

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
      console.log("List values", listValues);
    }
  }
}

//=========================================================
// //prepend
// const list = new LinkedList()
// console.log("Is list empty?", list.isEmpty())
// console.log("List size", list.getSize())
// list.print()
// list.prepend(10)

// list.print()

// list.prepend(20)
// list.prepend(30)

// list.print()

//=========================================================

// //append
// const list = new LinkedList()
// console.log("Is list empty?", list.isEmpty())
// console.log("List size", list.getSize())
// list.print()
// list.append(10)

// list.print()

// list.append(20)
// list.append(30)

// list.print()

//=========================================================

//insert
const list = new LinkedList();
console.log("Is list empty?", list.isEmpty());
console.log("List size", list.getSize());
list.print();

list.insert(10, 0);
list.print();

list.insert(20, 0);
list.print();

list.insert(30, 1);
list.print();

list.insert(30, 3);
list.print();
console.log(list.getSize());

// console.log(list.removeFrom(0))
// list.print()

// console.log(list.removeValue(20));
// list.print();
// console.log(list.getSize());

console.log(list.search(30));

list.reverse();
list.print();
