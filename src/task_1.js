
function sumArrayPromise (arr) {

  return  new Promise((resolve) => {
    setTimeout(() => {
       let sum = 0;  
       sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, sum);
       resolve(sum)
    }, 3000);
  });

}

sumArrayPromise([1,2,3,4,5])
  .then( (result) => {
    console.log('Array sum: ' + result);
  })