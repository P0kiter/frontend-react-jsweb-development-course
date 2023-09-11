function uniqFn(initialArray) {
    const uniqueArray = initialArray.filter((item, index, self) => {
      return self.indexOf(item) === index;
    });
    return uniqueArray;
  }
  
  const arr = [2, 3, 1, 3, 3, 7];
  
  console.log(uniqFn(arr));
  