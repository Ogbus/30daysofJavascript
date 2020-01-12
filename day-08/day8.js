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

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'German Breed';
dog.getDogInfo = function() {
    let dogs_name = this.name;
    let dogs_age = this.age;
    let dogs_color = this.color;
    let dogs_func = this.bark();
    
    let dogs_info = `The name of my dog is ${dogs_name}, it is ${dogs_age} years old. It's color is ${dogs_color} and it barks ${dogs_func}.`;
    return dogs_info;
}
console.log(dog.getDogInfo());

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, 
// totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and 
// expenses is a set of incomes and its description.
let personAccount = {
    firstName : 'Felis',
    lastName : 'Iroms',
    incomes : 10000,
    expenses : 6250,

    addIncome : function() {
        let add_incomes = 7000;
        return add_incomes;
    },

    addExpense : function() {
        let add_expenses = 4760;
        return add_expenses
    },
    
    totalIncome : function() {
        return this.incomes + this.addIncome();
    },

    totalExpenses : function() {
        return this.expenses + this.addExpense();
    },
    
    accountBalance : function() {
        return this.totalIncome() - this.totalExpenses();
    },
    accountInfo : function() {
        let account_info = `Mr. ${this.firstName} ${this.lastName}, you had income of ${this.totalIncome()} and expenses of ${this.totalExpenses()} for last month. Therefore, your account balance is ${this.accountBalance()}.`;
        return account_info;
    },

}
console.log(personAccount)
console.log(personAccount.accountInfo());

// Count logged in users,count users having greater than equal to 50 points from the following object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
console.log(users.Alex.age)

// let isLoggedIn_count = 0;
// console.log(Object.entries(users))
// for(const [key, value] of Object.entries(users)){
//     for(const [key, value] of Object.entries(users))
//     console.log(`${key}, ${value}`)
// }