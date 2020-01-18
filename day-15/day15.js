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

// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        console.log(this);
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getLegs() {
        return this.legs;
    }
}

let animal1 = new Animal('dog', 34, 'purple', 4)
console.log(Animal);
console.log(animal1.getLegs());