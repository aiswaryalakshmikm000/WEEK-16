function reverseString (string){
    if(string.length <= 1){
        return string
    }

    return reverseString(string.slice(1))+string[0]
}

console.log(reverseString('Aishu'))



//Time Complexity: 𝑂(𝑛^2)
//Space Complexity: 𝑂(n)