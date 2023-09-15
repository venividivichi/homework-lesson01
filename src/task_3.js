const numbers = [1, 2, 3, 4, 5];

let sumValues = 0;
let avg = 0;
let minValue = numbers[0];
let maxValue = numbers[0];

function analyzeArray(numbers) {

   for (let item of numbers) {

      sumValues += item;
      avg = (sumValues / numbers.length).toFixed(2);

      if (item < minValue) {
         minValue = item;
      }
      if (item > maxValue) {
         maxValue = item;
      }
   }

   return { sum: sumValues, average: +avg, min: minValue, max: maxValue }

}

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }