function filterArray(initialArray) {
    const resultArray = [];
  
    for (let i = 0; i < initialArray.length; i++) {
      if (typeof initialArray[i] === 'string') {
        resultArray.push(initialArray[i]);
      }
    }
  
    return resultArray;
  }
  
  const inputArray = [2, 'string', 3, , , 'test'];
  console.log(filterArray(inputArray)); // ["string", "test"]
  