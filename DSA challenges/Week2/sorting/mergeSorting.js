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