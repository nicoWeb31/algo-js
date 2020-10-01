// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    //je split le str en tab et je le reverse  ---split decoupe---reverse change le sens ---- joint concatene les elements du tab 
    const char = str.split('').reverse()

    return char.join(''); 
}


//v2

// exemple mat
// function reverse2(str) {

//     let reversed = "";

//     //new synthax js 
//     for (let char of str){
    //m ----> a + m ----> t + am 
//         reversed = char + reversed
//     }

//     return reversed
// }



// //v3 reduce
// function reverse(str) {

//     //reduce prend une colback
//     str.split('').reduce((reversed,character)=>{
//         return character + reversed
//     },'')

    
// }



module.exports = reverse;
