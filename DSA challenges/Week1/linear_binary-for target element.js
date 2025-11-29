console.log("-----------------------------------linear------------------------------------")
//Big(O)==> O(n)- linear
function  linearSearch(array, target){
for(i=0; i<array.length; i++){
    if (array[i] === target){
        return i
    }
}
return -1
}


console.log(linearSearch([2,-4,6,9], 2));


console.log("------------------------------------Binary-----------------------------------")
//Big(O)==> O(log n) -logarithmic   n reduces to half
function binarySearch(array, target){
    let leftIndex = 0
    let rightIndex = array.length-1
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === array[middleIndex]){
            return middleIndex
        }
        if (target < array[middleIndex]){
            rightIndex = middleIndex-1
        }else{
            leftIndex = middleIndex+1
        }
    }
    return -1
}

console.log(binarySearch([2,3,6,9], 2));



console.log("------------------------------Recursive Binary----------------------------------")
//Big(O)==> O(log n) -logarithmic   n reduces to half
function recursiveBinarySearch(array, target){
    return search(array, target, 0, array.length-1)
}

function search(array, target, leftIndex, rightIndex){
    if (leftIndex > rightIndex){
        return -1
    }
    
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (target === array[middleIndex]){
        return middleIndex
    }
    if (target < array[middleIndex]){
        return search(array, target, leftIndex, middleIndex-1)
    } else {
        return search(array, target, middleIndex+1, rightIndex)
    }

}

console.log(recursiveBinarySearch([2,3,6,9], 2));



