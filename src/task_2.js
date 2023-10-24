
  function concurrentPromises (promiseArr, count) {

    return  new Promise( async (resolve) => {
      let promise_arr_paralel = [];
      let promise_arr_other = [];

      for (let i = 0; i < promiseArr.length; i++) {
        if (i < count) {
          let promise = promiseArr[i];
          let result = await promise;
          promise_arr_paralel.push(result);
        } else {
          let promise = promiseArr[i];
          let result = await promise;
          promise_arr_other.push(result);
        } 
      }

      resolve({paralel_promise: promise_arr_paralel, other_promise: promise_arr_other})
      })
  }

  concurrentPromises([
    new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('Promise 2'), 500)),
    new Promise(resolve => setTimeout(() => resolve('Promise 3'), 800)),
    new Promise(resolve => setTimeout(() => resolve('Promise 4'), 1500))
  ],2)
    .then( (result) => {
      console.log(result.paralel_promise);
      console.log(result.other_promise)
    });
