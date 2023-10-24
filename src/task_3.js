
function sequenceAsync(asyncFunctions) {
  
  let result;

  return  new Promise( async (resolve) => {
    for (let asyncFunction of asyncFunctions) {
      result = await asyncFunction(result);
    }
    resolve(result)
  })
}

let tempalteFunctions = [
  async () => {
    return 'I`m';
  },
  async (prevResult) => {
    return prevResult + ' learning';
  },
  async (prevResult) => {
    return prevResult + ' JavaScript';
  },
  async (prevResult) => {
    return prevResult + '!';
  },
];

sequenceAsync(tempalteFunctions)
  .then( (result) => {
    console.log(result);
  })