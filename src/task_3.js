
function camelCase(str, separator) {

    let tempSub = str.split(separator);
    let result = '';

    for(let i = 0; i < tempSub.length; i++) { 
        if (i === 0) {
            tempSub[0] = tempSub[0].charAt(0).toLowerCase() + tempSub[0].slice(1).toLowerCase();
        } else {
            tempSub[i] = tempSub[i].charAt(0).toUpperCase() + tempSub[i].slice(1).toLowerCase();
        }
    result = tempSub.join('');
    }
    return alert('Ваша строка в camelCase: ' + result)
}
    
camelCase('IvAn*ivAn*ivaN*iVan', '*');

