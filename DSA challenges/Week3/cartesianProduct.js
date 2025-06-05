function cartesian(arr1, arr2){
    let result = []
    for(i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            result.push([arr1[i], arr2[j]])
        }
    }
    return result
}


console.log(cartesian([1,2] , [3,4]))