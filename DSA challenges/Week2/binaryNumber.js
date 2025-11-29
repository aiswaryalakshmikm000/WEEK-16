function binaryNumber(n) {
  let queue = ["1"];
  let result = [];

  for (i = 0; i < n; i++) {
    let front = queue.shift();
    result.push(front);
    queue.push(front + "0");
    queue.push(front + "1");
  }
  return result
}

console.log(binaryNumber(10))