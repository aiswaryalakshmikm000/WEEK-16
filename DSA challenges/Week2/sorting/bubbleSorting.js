//best = O(n), avg, worst =O(n2)  
//space = O(1)

function bubble(arr){
    const n = arr.length
    
    for(let i=0; i<n-1; i++) {
        for(j=0; j<n-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

//in each itereation check the adjacent elements and if they arent sorted then it eill be sortedd

//method 2 : optimized

function bubbleSorting(array){
    let n = array.length

    for(let i=0; i<n-1; i++){
        let swapped = false
        for (j=0; j<n-1-i; j++){
            if(array[j]>array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                swapped = true
            }
        }
        if(!swapped) break;
    }
    return array
}

console.log( bubbleSorting([2,1,5,12,0,4,7]))