// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const chars ={}
    let max = 0;
    let maxChar = ''

    for(let char of str){
        !chars[char] ? chars[char] = 1 : chars[char]++
        
    }

console.log(chars)

for(let c in chars){

    if(chars[c]>max){
        max=chars[c]
        maxChar = c
    }
}

return maxChar

}

module.exports = maxChar;
