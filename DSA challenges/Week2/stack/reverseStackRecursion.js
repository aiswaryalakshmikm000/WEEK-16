function RecursiveStack(stack){
    if(stack.length==0){
        return 
    }
    let top=stack.pop()
    RecursiveStack(stack)
    insertAtbottom(stack,top)
}
function insertAtbottom(stack,element){
    if(stack.length===0){
        stack.push(element)
        return
    }
    let top=stack.pop()
    insertAtbottom(stack,element)
    stack.push(top)
}

let stack=[1,2,3,4,5]
RecursiveStack(stack)
console.log(stack) //[ 5, 4, 3, 2, 1 ]


RecursiveStack(stack);

console.log(stack); // [ 1, 2, 3, 4, 5 ]


