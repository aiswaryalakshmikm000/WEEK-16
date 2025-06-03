//swap method
function moveZerosToEnd(array) {
    let nonZeroIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            // Swap current element with the non-zero index
            [array[nonZeroIndex], array[i]] = [array[i], array[nonZeroIndex]];
            nonZeroIndex++;
        }
    }

    return array;
}

console.log(moveZerosToEnd([13, 4, 2, 5, 0, 3, 0, 456, 0, 10, 34, 0]));


//------------------method 2--------------------------------------------------

function moveZerosToRight(arr) {
  let i = 0;
  let len = arr.length;

  while (i < len) {
    if (arr[i] === 0) {
      arr.push(0);         
      arr.splice(i, 1);    
      len--;               
    } else {
      i++;                 
    }
  }

  return arr;
}
console.log(moveZerosToRight([13, 4, 2, 5, 0, 3, 0, 456, 0, 10, 34, 0]));