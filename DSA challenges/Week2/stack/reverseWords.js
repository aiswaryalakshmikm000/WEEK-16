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

console.log(reverseWords("MY NAME IS AISHU"))  // UHSIA SI EMAN YM


//===================================================inplace reverse==================================================

function reverseStringInPlace(string){
    let reverse =''
    let stack = []
    
    for(let char of string+" "){    //'MY NAME IS AISHU '
        if(char !== " "){
            stack.push(char)
        } else {
            while(stack.length > 0){
                reverse += stack.pop()
            }
            reverse += " "  // add space after each words in the senctance
        }
    }
    return reverse.trim() ///trim space after aishu
}

console.log(reverseStringInPlace("MY NAME IS AISHU"))  //YM EMAN SI UHSIA