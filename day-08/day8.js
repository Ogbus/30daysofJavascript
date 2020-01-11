// Create an empty object called dog
let dog = {};

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'German dog';
dog.legs = 4;
dog.color = 'White';
dog.age = 3;
dog.bark = function() {
    return 'woof woof';
}
console.log(dog);

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
