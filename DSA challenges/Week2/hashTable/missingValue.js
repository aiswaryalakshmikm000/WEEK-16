function missingArray(array){
    let hash = {}
    let result = []

    for(let a of array){
        hash[a] = true //mark as true
    }

    for(let i=1; i<=array.length; i++){
        if(!hash[i]){
            result.push(i)
        }
    }

    return result
}


console.log(missingArray([4,3,2,7,8,2,3,1,8]))