function addMiddle(existing, newString){
    if(existing.length <= 1){
        return existing + newString
    } 
    let first = existing[0]
    let last = existing[existing.length-1]
  
    let middle = existing.substring(1, existing.length-1)  // or can be slice

    return first + addMiddle(middle, newString) + last
}

console.log(addMiddle("aishu", "deepu"))   //aisdeepuhu
