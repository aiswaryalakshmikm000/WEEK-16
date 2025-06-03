function insertionSorting(array){
    for (let i=1; i<array.length; i++){
        let current = array[i]
        let j = i-1

        while(j >= 0 && array[j] > current){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = current  //first j will be 0-- == > -1 ...so -1+1==> 0th position    
        }
    return array
}

console.log(insertionSorting([1,4,2,5,67,7]))




