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

//normal

function check(str) {
    
    for(let i=0; i<str.length/2; i++){
        if(str[i] !== str[str.length-1-i]) return false
    }
    return true
}

console.log(check('malayalam'))
console.log(check('aishu'))