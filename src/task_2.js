
function counter(startValue, step) {

  let startNumb = startValue;

  function increment() { 
    return  startNumb += step;
  }

  function decrement() {
    return startNumb -= step;
  }

  function reset() {
    return startNumb = startValue;
  }

  return { 
  //  increment() { return  startNumb += step;}, 
    increment,
    decrement, reset }

}

const stepper = counter(0, 2)

console.log(stepper.increment());
console.log(stepper.increment());
console.log(stepper.decrement());