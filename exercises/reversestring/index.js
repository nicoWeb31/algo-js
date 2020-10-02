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


reverse('ypghmlfg ')


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


//------------------reduce-------------------
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15
//----------------------------------------------------

// function reverse(str) {

//     //reduce prend une colback
//     str.split('').reduce((reversed,character)=>{
//         return character + reversed
//     },'')

    
// }



module.exports = reverse;
