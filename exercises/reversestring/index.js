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


    console.log(char)
    const strRevser = char.join('');
    return strRevser;
}

module.exports = reverse;
