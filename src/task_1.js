
function logArguments(fn) {
  
  return function (...args) {
   
    console.log('Arguments: ', args);

    return fn(...args)
  }
  
}

function sumCalc(a, b) {
  return a + b
}

let tryDecorate = logArguments(sumCalc);

console.log('Result: ', tryDecorate(2, 2));