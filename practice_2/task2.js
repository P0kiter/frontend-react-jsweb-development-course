function isEvenArray(initialArray) {
    for (let i = 0; i < initialArray.length; i++) {
      if (initialArray[i] % 2 !== 0) {
        return "NO";
      }
    }
    return "YES";
  }
  
  console.log(isEvenArray([1, 2, 3, 9]));
  console.log(isEvenArray([2, 4, 6]));