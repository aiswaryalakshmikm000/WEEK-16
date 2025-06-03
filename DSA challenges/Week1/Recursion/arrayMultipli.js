function multiply(arr){
    if(arr.length ===  0){
        return 1
    }
    return arr[0]*multiply(arr.slice(1))
}

console.log(multiply([1,2,3,4]))


//Time Complexity: 𝑂(𝑛)
//Space Complexity: 𝑂(n)