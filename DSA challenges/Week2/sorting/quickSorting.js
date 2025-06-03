// with more space complexity
// right end pivot
function quickSort(array){
    if(array.length < 2){
        return array
    }
    let pivot = array[array.length-1]
    let leftArray = []
    let rightArray = []
    
    for(let i=0; i<array.length-1; i++){
        if(array[i]<pivot){
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

//left end
function quickSort(array){
    if(array.length < 2){
        return array
    }
    let pivot = array[0]
    let leftArray = []
    let rightArray = []
    
    for(let i=1; i<array.length; i++){
        if(array[i]<pivot){
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

//middleindex pivot
function quickSort(array){
    if(array.length < 2){
        return array
    }
    let middleIndex = Math.floor(array.length/2)
    let pivot = array[middleIndex]
    let leftArray = []
    let rightArray = []
    
    for(let i=1; i<array.length; i++){
        if(i === middleIndex) continue;
        if(array[i]<pivot){
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

//random pivot
function quickSort(array){
    if(array.length < 2){
        return array
    }
    let randomIndex = Math.floor(Math.random() * array.length)
    let pivot = array[randomIndex]
    let leftArray = []
    let rightArray = []
    
    for(let i=1; i<array.length; i++){
        if(i === randomIndex) continue;
        if(array[i]<pivot){
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}





//===================================================less space complexity=============================================================
//right end
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

//left
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]]; // Move left pivot to end

  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]]; 
  return i;
}


//middle
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const mid = Math.floor((left + right) / 2);
  [arr[mid], arr[right]] = [arr[right], arr[mid]]; // Move middle pivot to end

  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}



const array = [8, 20, -2, 4, -6]
quickSort(array)
console.log(array) // [-6, -2, 4, 8, 20]