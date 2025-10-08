// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str && str.split('').reverse().join('')
// }

// function reverse(str) {
//     let reverse = ''

//     for (let character of str) {
//         reverse = character + reverse
//     }

//     return reverse
// }

function reverse(str) {
    debugger
    return str.split('').reduce((rev, cha) => cha + rev, '')
}

reverse('12345')

module.exports = reverse;
