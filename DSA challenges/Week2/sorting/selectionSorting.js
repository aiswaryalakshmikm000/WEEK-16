function selectionSorting(array){
    let n = array.length
    for (let i=0; i<n-1; i++){
        let minIndex = i

        for(let j = i+1; j<n; j++){
            if(array[j] < array[minIndex]){
            minIndex = j
            }
        }

        if(minIndex != i){
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
            }
        }
    return array
}

console.log(selectionSorting([1, 3, 0, 6, 2]))


//finding the smallest from the each iteratin and bringing it to the first by comparing with i if the min changed from initial declaired i value