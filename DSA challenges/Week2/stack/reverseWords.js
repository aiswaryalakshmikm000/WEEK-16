function reverseWords(string){
    let splitwords = string.split('')
    let stack = []
    let reverse = ''

    for (let word of splitwords){
        stack.push(word)
    }
    
    while(stack.length){
        reverse += stack.pop()
    }

    return reverse
}

console.log(reverseWords("aishu is a good girl"))