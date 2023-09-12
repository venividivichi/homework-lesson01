const originalArray = [1, 2, 3, 4, 5];
const newArr = [];

function reverseArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr
}

const reversedArray = reverseArray(originalArray);

console.log(reversedArray); // [5, 4, 3, 2, 1]