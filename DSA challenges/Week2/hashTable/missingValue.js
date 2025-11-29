function missingArray(array){
    let hash = {}
    let result = []

    for(let a of array){
        hash[a] = true //mark as true
    }

    for(let i=1; i<=array.length; i++){//Math.max(...array) as the update so that the values will come till max
        if(!hash[i]){
            result.push(i)
        }
    }

    return result
}


console.log(missingArray([4,3,2,7,8,2,3,1,8]))  //[ 5, 6, 9 ]   if loop starts from i=0 then [0,5,6,9] 