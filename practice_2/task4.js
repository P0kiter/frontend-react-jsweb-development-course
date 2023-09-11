function findUser(initialObject) {
    const resultArray = [];
  
    for (const name in initialObject) {
      if (initialObject.hasOwnProperty(name)) {
        const user = initialObject[name];
        if (user.age > 18 && user.city === "London") {
          resultArray.push(name);
        }
      }
    }
  
    return resultArray;
  }
  
  const inputObject = {
    Max: { age: 23, city: "London" },
    Mike: { age: 20, city: "NY" }
  };
  
  console.log(findUser(inputObject)); // ["Max"]
  