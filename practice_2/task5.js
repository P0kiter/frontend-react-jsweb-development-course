function removeObj(arrayOfObj, keyName, value) {
    const resultArray = [];
  
    for (const obj of arrayOfObj) {
      if (!(keyName in obj) || obj[keyName] !== value) {
        resultArray.push(obj);
      }
    }
  
    return resultArray;
  }
  
  const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
  console.log(removeObj(arr, "age", 2)); // [ { age: 1 }, { year: 2 } ]
  console.log(removeObj(arr, "year", 2)); // [ { age: 1 }, { age: 2 }, { age: 2 } ]
  