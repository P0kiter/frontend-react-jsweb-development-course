const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
      const fullName = this.firstName + ' ' + this.lastName;
      return fullName;
    }
  };
  
  const testArgs = ['sushi', 'hiking'];
  
  let logPersonNameAndInterests = function () {
    const fullName = Person.getFullName.call(Person);
    const interests = Array.from(arguments);
    console.log(`${fullName} loves: ${interests.join(', ')}`);
  };
  
  logPersonNameAndInterests.apply(null, testArgs);
  