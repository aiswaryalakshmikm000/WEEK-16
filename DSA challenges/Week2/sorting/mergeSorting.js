function mergeSort (array){
    if(array.length < 2){
        return array
    }

    let middleIndex = Math.floor(array.length/2)
    let leftArray = array.slice(0,middleIndex)
    let rightArray = array.slice(middleIndex)

    return mergeSort(mergeSort(leftArray),mergeSort(rightArray))
}

function merge(leftArray,rightArray){
    let sortedArray = []

    while(leftArray.length && rightArray.length){
        if(leftArray[0] < rightArray[0]){
            sortedArray.push(leftArray.shift())
        } else {
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
}

console.log(mergeSort([4,2,7,34,-2,45,-34]))



//============================================mergeSort string===================================================


function mergeSortString(str) {
    if (str.length < 2) {
        return str;
    }

    const middle = Math.floor(str.length / 2);
    const left = str.slice(0, middle);
    const right = str.slice(middle);

    return mergeStrings(mergeSortString(left), mergeSortString(right));
}

function mergeStrings(left, right) {
    let sorted = '';
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted += left[i];
            i++;
        } else {
            sorted += right[j];
            j++;
        }
    }

    return sorted + left.slice(i) + right.slice(j);
}

console.log(mergeSortString(input));




//===============================================reverse string by using mergesort===============================


function MergeSort(str){
    let arr = str.split('');
    if(arr.length < 2) return arr;
    
    let middle = Math.floor(arr.length / 2);
    let leftArray = arr.slice(0, middle).join('')
    let rightArray = arr.slice(middle).join('')
    
    return merge(MergeSort(leftArray), MergeSort(rightArray)).join('')
}

function merge(leftArray, rightArray){
    return [...rightArray,...leftArray]
}


let str = 'AISHU';
console.log(MergeSort(str))