function twoSum (array, target){
    return sum(array, target, 0, array.length-1)
}

function sum(array, target, leftIndex, rightindex){
    if(leftIndex >= rightindex){
        return -1
    }
    let result = array[leftIndex]+array[rightindex]
    if(target === result){
        return [leftIndex, rightindex]
    } 
    if(result < target ){
        return sum(array, target, leftIndex+1, rightindex)
    } else {
        return sum(array, target, leftIndex, rightindex-1)
    }
}

console.log(twoSum([1,2,3,4,5,6], 6))  //[ 0, 4 ]



// give all the pairs of the target :=====================================================


function allTwoSum(array, target) {
  let left = 0;
  let right = array.length - 1;
  let pairs = [];

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === target) {
      pairs.push([left, right]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return pairs;
}

console.log(allTwoSum([1, 2, 3, 4, 5, 6], 6)); //[ [0, 4], [1, 3] ]

