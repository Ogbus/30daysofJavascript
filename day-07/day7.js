// Declare a function fullName and it print out your full name.
function fullName() {
    let firstName = 'Felix';
    let lastName = 'Iroms';

    console.log(`${firstName} ${lastName}`);
}
fullName();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function full_name(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(full_name('Felix', 'Iroms'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum
}
console.log(addNumbers(12, 34));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
console.log("The area of the rectangle is " + areaOfRectangle(12, 7));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter
}
console.log('The perimeter of the rectangle is ' + perimeterOfRectangle(23, 13));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume;
}
console.log(`The volume of the rectangular prism is ${volumeOfRectPrism(12, 9, 18)}`)

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(PI, radius) {
    let area = PI * radius * radius;
    return area;
}
console.log(areaOfCircle(3.14, 15));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(PI, radius) {
    let circumference = 2 * PI * radius;
    return circumference;
}
console.log(circumOfCircle(3.14, 17));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function substanceDensity(mass, volume) {
    let density = mass / volume;
    return density
}
console.log(substanceDensity(20, 43));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of 
// time taken. Write a function which calculates a speed of a moving object, speed.
function movingObjectSpeed(distance, time) {
    let speed = distance / time;
    return speed;
}
console.log(movingObjectSpeed(123, 45));