//best = O(n), avg, worst =O(n2)  
//space = O(1)


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


// set the i iteration of element and fix a current element stored.. j will be backtracks and 
// if gt current then j+1th element becomes jth elemnt. if not then j+1 becomes curr stored element

