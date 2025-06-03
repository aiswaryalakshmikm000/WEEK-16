function sortQueueDescending(queue) {
  // Step 1: Convert queue to array
  let tempArray = [];

  while (queue.length > 0) {
    tempArray.push(queue.shift()); // Dequeue elements
  }

  // Step 2: Sort the array in descending order
  tempArray.sort((a, b) => b - a);

  // Step 3: Reinsert into the queue
  for (let item of tempArray) {
    queue.push(item); // Enqueue back
  }

  return queue;
}

console.log(sortQueueDescending([3, 2, 6, 9, 1, 10, 0]));
// Output: [10, 9, 6, 3, 2, 1, 0]
