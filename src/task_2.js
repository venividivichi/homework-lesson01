let toLFT = true;

function padString(str, leng, smbl, toLFT) {

    if (leng > str.length && toLFT) {
        result = str.padStart(leng, smbl)
        return alert('Ваша нова строка: ' + result)
    } else if (leng > str.length) {
        result = str.padEnd(leng, smbl)
        return alert('Ваша нова строка: ' + result)
    } else {
        return alert('Ваша строка: ' + str)
    }
}
    
padString('Ivan', 6, '*');