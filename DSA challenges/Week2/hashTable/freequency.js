function freequency(string){
    let obj = {}

    for(i=0; i<string.length; i++){
        if(!obj[string [i]]){
            obj[string[i]] = 1
        } else {
            obj[string[i]]++
        }
    }
    return obj
}

console.log(freequency("Aishu"))
console.log(freequency("Aiishuuu"))



//remove duplicate =========================================
function freequency1(string){
    let obj = {}

    for(i=0; i<string.length; i++){
        if(!obj[string [i]]){
            obj[string[i]] = 1
        } else {
            obj[string[i]]++
        }
    }
    return Object.keys(obj).join('')
}

console.log(freequency1("Aishu"))
console.log(freequency1("Aiishuuu"))
