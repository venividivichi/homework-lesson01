
const words = ["apple", "banaNA", "kiWi", "ORANGE"];

function capitalizeStrings(words) {
  
        let result = [];

        for(let i = 0; i < words.length; i++) { 
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
            result.push(words[i])
        }
    return result

}

console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]