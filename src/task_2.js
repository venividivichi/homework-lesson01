
const array1 = [1, 2, 3, 4, 4, 1, 5];
const array2 = [3, 5, 4, 5, 6, 7];

let newArr = []

function uniqueValues(arr1, arr2) {
    
    let concatArr = arr1.concat(arr2)

        for (let i = 0; i <= concatArr.length; i++) {
            if (concatArr.indexOf(concatArr[i]) == i)
             newArr.push(concatArr[i]);
        }
    return newArr
}

const uniqueValuesArray = uniqueValues(array1, array2);

console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]