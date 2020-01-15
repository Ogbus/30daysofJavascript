//Display the countries array as a table
let countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries);

// Write a warning message using console.warn()
console.warn("This is a console warning message")
// Write an error message using console.error()
console.error("This is console error message")

// Check the speed difference among the following loops: while, for, for of, forEach
let array = ['felis', 'john', 'iroms', 'teddy', 'fatima', 'edward'];
console.time('This is a regular for loop');
for(let i =0; i<array.length; i++){
    console.log(array[i]);
}
console.timeEnd('This is a regular for loop');

// ======================

console.time('This is a while loop');
let i = 0;
while(i < array.length) {
    console.log(array[i]);
    i++;
}
console.timeEnd('This is a while loop');

// =======================

console.time('This is a for of loop');
for(let element of array) {
    console.log(element)
}
console.timeEnd('This is a for of loop');

// ======================

console.time('This is a forEach loop');
array.forEach((element) => {
    console.log(element)
})
console.timeEnd('This is a forEach loop')

// =======================

//  10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 is not greater than the multiplication of 2 and 10.')