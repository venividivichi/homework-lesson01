
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function findCommonElements(arr1, arr2) {

    let result = [];

    for (let i = 0; i < arr1.length; i++) {
           
        if(arr2.indexOf(arr1[i]) !== -1){
          result.push(arr1[i]);
        }
      }

        // for (let i = 0; i < arr1.length; i++) {
        //     for (let j = 0; j < arr2.length; j++) {
        //         if (arr1[i] == arr2[j])
        //         result.push(arr1[i]);
        //     }
        // }
    return result
}

console.log(findCommonElements(array1, array2)); // [3, 4, 5]