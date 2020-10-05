// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9




//Math.sign renvoi 1 pour un positif ou -1 pour un negatif

function reverseInt(n) {
    const numberReverse =  parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
    console.log(numberReverse);
    return numberReverse
}

module.exports = reverseInt;
