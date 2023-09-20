
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSimpleNumb(arr) {
  
    for (let i = 2; arr > i; i++) {
        if (arr % i === 0) {
          return false;
        }
      }
    return arr > 1;
}

let result = array.filter(getSimpleNumb)

console.log(result); // [2, 3, 5, 7]