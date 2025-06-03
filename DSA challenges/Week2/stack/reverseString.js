function reverseString(string){
    let stack = []
    let reverse = ''

    for(let char of string){
        stack.push(char)
    }

    // for(let i=stack.length-1; i>0; i--){
    //     reverse += stack.pop()
    // }
    
    while(stack.length > 0){
    reverse += stack.pop()
}

    return reverse 
}


console.log(reverseString("aishu"))