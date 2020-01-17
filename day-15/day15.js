class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person1 = new Person('Felix', 'Iroms')
  const person2 = new Person('Chucks', 'Chucks')
  const person3 = new Person('Pearl', 'Noel')
  
  console.log(person1)
  console.log(person2)
  console.log(person3)