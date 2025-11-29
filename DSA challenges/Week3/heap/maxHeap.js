class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  getMax() {
    return this.heap[0];
  }

 // O(log n)
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let parentIndex = this.getParentIndex(index);
    while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  isHeap(arr) {
    let n = arr.length;
    for (let i = 0; i <= Math.floor((n - 2) / 2); i++) {  //The last parent node (the last node that has at least one child)
      let left = this.getLeftChildIndex(i);
      let right = this.getRightChildIndex(i);
      if (left < n && arr[i] < arr[left]) return false;
      if (right < n && arr[i] < arr[right]) return false;
    }
    return true;
  }

  decreaseKey(index, newVal) { 
    if (index >= this.heap.length) return; 
    this.heap[index] = newVal; 
    this.heapifyDown(index); // For max heap, decreasing key may need to go down 
  } 

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  heapifyDown(index) {
    let largest = index;
    let left = this.getLeftChildIndex(index);
    let right = this.getRightChildIndex(index);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  heapSort(arr) {
    const Maxheap = new MaxHeap();
    let sorted = [];
    for (let val of arr) {
      Maxheap.insert(val);
    }
    while (Maxheap.heap.length > 0) {
      sorted.push(Maxheap.extractMax());
    }
    return sorted;
  }
}

// Testing
const heap = new MaxHeap();

heap.insert(10);
heap.insert(4);
heap.insert(15);
heap.insert(20);
heap.insert(0);
console.log(heap.heap); // Should be a MaxHeap structure

heap.decreaseKey(3, 1); // Decrease a value; may go down
console.log(heap.heap);

console.log(heap.getMax()); // Should return the max value

console.log(heap.extractMax()); // Remove and return max
console.log(heap.heap);

const heap2 = new MaxHeap();
console.log(heap2.heapSort([6, 5, 34, 12, 7, 3, 98])); // [98, 34, 12, 7, 6, 5, 3] — descending

console.log(heap.isHeap([100, 50, 80, 20, 40, 60])); // true
console.log(heap.isHeap([10, 20, 30])); // false
