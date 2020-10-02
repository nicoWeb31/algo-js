// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    const strTab = str.split('');


    for (let i of strTab) {
        const strReverse = strTab.reverse()
        for (j of strReverse) {
            console.log(i,j)
            if (i !== j) {
                return false
            }else{
                return true
            }
        }
    }

}

palindrome("abcdefg")



module.exports = palindrome;
