// a complete binary tree satisfy the heap property, min heap all the parent node 
// will be less than or equal to the child


class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  getMin() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    // log n
    let parentIndex = this.getParentIndex(index);
    while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  isHeap(arr) {
    let n = arr.length;
    for (let i = 0; i <= Math.floor((n - 2) / 2); i++) {  //pick upto non leaf node, Leaf nodes have no children, So they automatically satisfy heap property
      let left = this.getLeftChildIndex(i);
      let right = this.getRightChildIndex(i);
      if (left < n && arr[i] > arr[left]) return false;
      if (right < n && arr[i] > arr[right]) return false;
    }
    return true;
  }

  decreaseKey(index, newVal) {
    if (index >= this.heap.length) return;
    this.heap[index] = newVal;
    this.heapifyUp(index);
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(index) {
    let smallest = index;
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);
    
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  heapSort(arr) {
    const Minheap = new MinHeap();
    let sorted = [];
    for (let val of arr) {
      Minheap.insert(val);
    }
    while (Minheap.heap.length > 0) {
      sorted.push(Minheap.extractMin());
    }
    return sorted;
  }
}

const heap = new MinHeap();
// const arr = [6, 5, 34, 12, 7, 3, 98];
// console.log(heap.heapSort(arr));
// console.log(heap.isHeap([1, 15, 10, 7, 12, 2]));

heap.insert(10);
heap.insert(4);
heap.insert(15);
heap.insert(20);
heap.insert(0);
console.log(heap.heap); // Min Heap array: [0, 10, 15, 20, 4] → after full heapify: [0, 4, 15, 20, 10]

heap.decreaseKey(3, 1); // decrease index 3 value to 1 ==> [ 0, 1, 15, 4, 10 ]
console.log(heap.heap); // [ 0, 1, 15, 4, 10 ]
console.log(heap.getMin()); // 0

console.log(heap.extractMin()); // 0
console.log(heap.heap); //  [ 1, 4, 15, 10]

const heap2 = new MinHeap();
console.log(heap2.heapSort([6, 5, 34, 12, 7, 3, 98])); // [3, 5, 6, 7, 12, 34, 98]

console.log(heap.isHeap([1, 3, 5, 7, 9, 10])); //  true
console.log(heap.isHeap([10, 3, 5])); // false
