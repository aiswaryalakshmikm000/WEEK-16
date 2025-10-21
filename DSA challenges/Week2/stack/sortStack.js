
//decending order
function sortStack(originalStack) {
  let tempStack = [];

  while (originalStack.length > 0) {
    let current = originalStack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > current) { //if tempStack[tempStack.length - 1] < current then ascending order
      originalStack.push(tempStack.pop());
    }

    tempStack.push(current);
  }

  while (tempStack.length > 0) {
    originalStack.push(tempStack.pop());
  }

  return originalStack;
}

console.log(sortStack([3, 2, 6, 9, 1, 10, 0]));
//[10, 9, 6, 3, 2, 1, 0]