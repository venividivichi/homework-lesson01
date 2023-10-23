
function debounce(callback, delay) {

  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, delay);
  }
}

let expensiveOperation = () => console.log("Doing some job...");
let debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();