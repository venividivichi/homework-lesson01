
let nestedArr = [1, [2,3], [4,5, [6,7], [8, 9]]];

function* flatten (arr) {

  for (let item of arr) {
    if (Array.isArray(item)) {
      yield* flatten(item);
    } else {
      yield item; 
    }
  }
}

let flattenGen = flatten(nestedArr);

console.log([...flattenGen]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]