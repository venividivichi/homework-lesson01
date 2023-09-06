
let userData = prompt('Введіть, будь ласка, довільну строку: ')

function reverseStr(str) {
    let word = '';

    for (let i = str.length - 1; i >= 0; i--) {
        word += str[i];
    }

    return alert('Ваша строка в оберненому вигляді виглядає так: ' + word)
}

reverseStr(userData);