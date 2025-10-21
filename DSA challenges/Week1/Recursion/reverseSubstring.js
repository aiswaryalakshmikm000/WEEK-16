let str = "this is my brand new car. i love my new car"
let str1 = 'my'
let str2 = 'new'

function reverseSubstring(string, sub1, sub2){
    let i1 = string.indexOf(sub1)
    let i2 = string.indexOf(sub2)

    if(i1 === -1 || i2 === -1){
        return string
    }

    let reverseSub1 = sub1.split('').reverse().join('')
    let reverseSub2 = sub2.split('').reverse().join('')

    let before = string.substring(0, i1)
    let between = string.substring(i1 + sub1.length, i2)
    let after = string.substring(i2 + sub2.length)

    let reverseString = before + reverseSub1 + between + reverseSub2 + after

    return reverseSubstring(reverseString, sub1, sub2)
}

console.log(reverseSubstring(str, str1, str2))

//time and space complexity O(n)