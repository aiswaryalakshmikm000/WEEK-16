function reverseString(string){
    let stack = []
    let reverse = ''

    for(let char of string){
        stack.push(char)
    }
    
    while(stack.length > 0){
    reverse += stack.pop()
}

    return reverse 
}


console.log(reverseString("aishu"))