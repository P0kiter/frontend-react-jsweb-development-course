function printPowsOf2(number) {
    if (typeof number !== 'number') {
      console.log('Incorrect type');
      return;
    }
  
    if (number < 1) {
      console.log('Number should be greater than or equal to 1');
      return;
    }
  
    let power = 0;
    while (Math.pow(2, power) <= number) {
      console.log(Math.pow(2, power));
      power++;
    }
  }
  
  printPowsOf2("302");
  printPowsOf2(null);
  printPowsOf2(128);
  printPowsOf2(60);
  