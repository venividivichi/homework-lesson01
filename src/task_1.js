
function* fibonacci(count) {

  let a = 0;
  let b = 1;

  yield a;

    while (b <= count) {
      yield b;
      [a, b] = [b, a + b];
    }
} 

let fibGen = fibonacci(10);

console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);

