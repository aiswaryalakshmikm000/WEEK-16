
function validParenthesis(str){

    let valid = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
    }

    let stack = []

    for (char of str){
        if(valid[char]){
            stack.push(valid[char])
        } else {
            if(char !== stack.pop()){
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(validParenthesis("[{()}]"))
console.log(validParenthesis("[{(])}]"))