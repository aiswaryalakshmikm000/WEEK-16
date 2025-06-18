function heapSort(arr) {
  let n = arr.length;

  // Step 1: Build Max Heap
  for (let i = Math.floor((n-2)/2); i >= 0; i--) {  //to get the last non leaf node
    heapify(arr, n, i);
  }

  // Step 2: Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Swap current root (largest) with end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Max Heapify function
function heapify(arr, heapSize, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  // If left child is larger
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // If root is not largest, swap and heapify again
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, heapSize, largest);
  }
}




let arr = [4, 10, 3, 5, 1];
console.log("Original:", arr);
heapSort(arr);
console.log("Sorted:", arr);
