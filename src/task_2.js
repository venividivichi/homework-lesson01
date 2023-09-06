
let userData = prompt('Введіть, будь ласка, довільну строку: ')

function reverseStr(str) {
    let word = '';

    for (let i = str.length - 1; i >= 0; i--) {
        word += str[i]
    }

    return str === word
}

if (reverseStr(userData)) {
    alert('Введена строка - ' + userData + ' - є паліндромом!' );
} else {
    alert('Введена строка - ' + userData + ' - не є паліндромом!')
}
