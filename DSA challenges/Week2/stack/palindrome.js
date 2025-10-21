function palindrome(string){

    let stack = []

    for(let char of string){
        stack.push(char)
    }

    for (let char of string){
        if(char !== stack.pop()) return false
    }
    
    return true
}

console.log(palindrome("malayalam"))
console.log(palindrome("aishu"))