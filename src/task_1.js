
let userData = prompt('Введіть, будь ласка, довільну строку: ')

function doubleLetter(str) {
    let result = '';

    for(let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return alert('Продубльовані літери у Вашій строці: ' + result)
}

doubleLetter(userData);