function memoize(fn) {
 
  const cache = new Map();

  return function (num) {

    const key = num;

    if (cache.has(key)) {
      console.log('Data from cache');
      return cache.get(key);
    }

    const result = fn(num);
    cache.set(key, result);
    console.log('Data calculating');
    
    return result;
  };


}

// Example usage:
function add(num) {
  console.log(`Calculating multiplication for ${num}`);
  return num * 2;
}

const memoizedMTPL = memoize(add);

console.log(memoizedMTPL(2));
console.log(memoizedMTPL(12)); // Returns cached result (10) without recalculation
console.log(memoizedMTPL(12));