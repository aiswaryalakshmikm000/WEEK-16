function frequency(str) {
    let obj = {}

    for (let ch of str) {        // obj[ch] ? obj[ch]++ : obj[ch] = 1    
        if (!obj[ch]) {
            obj[ch] = 1           
        } else {
            obj[ch]++            
        }
    }

    return obj   
}

console.log(frequency("Aishu"))
console.log(frequency("Aiishuuu"))


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
