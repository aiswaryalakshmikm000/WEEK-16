//best, avg, wrst = O(n log n)
//space = O(n)

function mergeSort (array){
    if(array.length < 2){
        return array
    }

    let middleIndex = Math.floor(array.length/2)
    let leftArray = array.slice(0,middleIndex)
    let rightArray = array.slice(middleIndex)

    return merge(mergeSort(leftArray),mergeSort(rightArray))
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


// divide the array into halves and then recursively divide until it becomes one or 2 elements.. nad then 
// check if the elements are sorted at the 0th index like l[0] < r[0] .. add the element to the sorted array
// according to the ascending or decending order.   and then merge all together and return


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

console.log(mergeSortString("input"));




//===============================================reverse string by using mergesort===============================


function mergeSort(str){
    if(str.length < 2) return str;
    
    let middle = Math.floor(str.length / 2);
    let leftStr = str.slice(0, middle)
    let rightStr = str.slice(middle)
    
    return merge(mergeSort(leftStr), mergeSort(rightStr)).join('')
}

function merge(leftStr, rightStr){
    return [...rightStr,...leftStr]
}


let str = 'AISHU';
console.log(mergeSort(str))