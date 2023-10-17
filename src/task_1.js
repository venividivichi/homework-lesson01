function isPalindrome(number) {
  let numString = number.toString();
  let reversedNum = numString.split("").reverse().join("");
  
  return numString === reversedNum;
}

function findLychrelNumber(startNumber) {
  let currentNumber = startNumber;
  let steps = 0;

  while (steps < 1000) { 
    let sum = 0;
    let reversedNumber = parseInt(currentNumber.toString().split("").reverse().join(""));
    //console.log(reversedNumber);
    sum = currentNumber + reversedNumber;

    currentNumber = sum;
    steps++;

    if (isPalindrome(sum)) {
      return { result: sum, steps };
    }
  }

  return { result: 'not found', steps };
}

let lychrelNumber = 312;
let findResult = findLychrelNumber(lychrelNumber);

if (findResult.result !== 'not found') {
  console.log(`Palindrome for number ${lychrelNumber} find: is ${findResult.result} in ${findResult.steps} steps.`);
} else {
  console.log(`Palindrome for number ${lychrelNumber} don\`t found after ${findResult.steps} steps.`);
}

