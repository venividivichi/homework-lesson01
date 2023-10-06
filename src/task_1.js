
function summarize(num) {

  if (typeof num != 'number')
    num = 1;

  return function(n) {
    return n + num
  }
}

let summaNumb = summarize(5)

console.log(summaNumb(3));