// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {

//     const strTab = str.split('');


//     for (let i of strTab) {
//         const strReverse = strTab.reverse()
//         for (j of strReverse) {

//             if (i !== j) {
//                 return false
//             }
//             return true
            
//         }
//     }

// }


function palindrome(str) {


    const reversed = str.split('').reverse().join('');
    // if(str !== reversed){
    //     return false
    // }

    // return true
    
    return str === reversed;

}


//every array proto
// function palindrome(str){
//     return str.split('').every((char,i)=>{
//         return char === str[str.length - i - 1]
//     })

// }


module.exports = palindrome;
