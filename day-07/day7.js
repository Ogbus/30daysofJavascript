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

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightOfSubstance(mass, gravity) {
    let weight = mass * gravity;
    return weight;
}
console.log(weightOfSubstance(49, 9.8));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which 
// convert oC to oF convertCelciusToFahrenheit.
function celciusTemp(oC) {
    let convertCelciusToFahrenheit = (oC * 9/5) + 32;
    return convertCelciusToFahrenheit;
}
console.log(celciusTemp(100));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which 
// calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person 
// is underweight, normal, overweight or obese based the information given below.
function bodyMassIndex(weight, height) {
    let bmi = weight / (height * height);
    if(bmi >= 30) {
        console.log(`Obese: your BMI is ${bmi}`)
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log(`Overweight: your BMI is ${bmi}`)
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(`Normal weight: your BMI is ${bmi}`)
    } else {
        console.log(`Underweight: your BMI is ${bmi}`)
    }
    // return bmi
}
console.log(bodyMassIndex(64, 1.70));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let monthsInYear = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
function checkSeason(month) {
    if (month =='may' || month == 'april' || month == 'march') {
        console.log('The season is Spring');
    } else if (month == 'october' || month == 'september' || month == 'november') {
        console.log('The season is Autumn');
    } else if (month == 'december' || month == 'january' || month == 'february') {
        console.log('The season is Winter')
    } else if (month == 'june' || month == 'july' || month == 'august') {
        console.log('The season is Summer');
    } else {
        console.log('The name you entered is not part of the available seasons in the program');
    }
    return month;
}
console.log(checkSeason('joy'))

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax() {
    let arguments_length = arguments.length, maxi = - Infinity
    while(arguments_length--) {
        if(arguments[arguments_length] > maxi) {
            maxi = arguments[arguments_length];
        }
    }
    return maxi
}
// for(let i = 0; i<arguments_length; i--) {
//     if(arguments[arguments_length] > maxi) {
//         maxi = arguments[arguments_length]
//     }
// }
// return maxi
console.log(findMax(1, 3, 5));
console.log(findMax(0, -10, -2))

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    return array
}
console.log(printArray([2, 4, 6, 3, 8]))

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    let now_date = new Date()

    const yearr = now_date.getFullYear(); // return year
    const monthh = now_date.getMonth() + 1; // return month(0 - 11)
    const datee = now_date.getDate(); // return date (1 - 31)
    const hourss = now_date.getHours(); // return number (0 - 23)
    const minutess = now_date.getMinutes();// return number (0 -59)
    // const seconds = now_date.getSeconds(); // return number (0 - 59)
    console.log(`${datee}/${monthh}/${yearr} ${hourss}:${minutess}`)

}
showDateTime();

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    var t = x;
    x = y;
    y = t
    return [x, y];
}
console.log(swapValues(3,5))

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
    let new_array = [];
    for (let i = array.length; i >= 0; i--) {
        new_array.push(array[i])
    }
    return new_array;
}
console.log(reverseArray([5,3,1,3,2,7]))