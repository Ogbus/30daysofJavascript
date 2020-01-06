// Data types
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value 
// to it
let firstName = "Felix";
let lastName = "Iroms";
let country = "Nigeria";
let city = "Abuja";
let age = 34;
let isMarried = true;
let year = 2020

// The JavaScript typeof operator uses to check different data types. Check the data type 
// of each variables from question number 1.
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10
console.log('10' === 10)
console.log('10' == 10)

// Check if parseInt('9.8') is equal to 10
let num = parseInt('9.8');
console.log(num == 10);

// 2. Exercises: Arithmetic Operators Part
// Write a script that prompt the user to enter base and height of the triangle and calculate 
// an area of a triangle (area = 0.5 x b x h).
let base_num = parseInt(prompt("what is the base of the triangle: "));
let height_num = parseInt(prompt("what is height of the triangle: "));
let triangle_area = 0.5 * base_num * height_num;
console.log("The area of the triangle is " + triangle_area);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle 
// and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = parseInt(prompt("enter side A: "))
let sideB = parseInt(prompt("enter side B: "))
let sideC = parseInt(prompt("enter side C: "))
let triangle_perimeter = sideA + sideB + sideC
console.log("The perimeter of the rectangle is " + triangle_perimeter)

// Get length and width using prompt and calculate an area of rectangle 
// (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length_num = parseInt(prompt("enter length: "))
let width_num = parseInt(prompt("enter width: "))
let rectangle_area = length_num * width_num
console.log(rectangle_area);

let rectangle_perimeter = 2 * (length_num + width_num)
console.log(rectangle_perimeter)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
// and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14
let radius_num = parseInt(prompt("enter radius number: "))
let radius_squared = radius_num * radius_num
let circle_area = PI * radius_squared
console.log("The area of the circle is " + circle_area);

let circle_circum = 2 * PI * radius_num
console.log("The circumference of the circle is " + circle_circum)

// Writ a script that prompt a user to enters hours and rate per hour. Calculate pay of the person?
let num_hours = parseInt(prompt("number of hours you work: "))
let rate_hour = parseInt(prompt("amount you earn per hour: "))
let day_pay = num_hours * rate_hour
console.log("The amount of money you earn per day is " + day_pay);

// Write a script that prompt the user to enter number of years. Calculate 
// the number of seconds a person can live. Assume some one lives just hundred years
let day_seconds = 31536000
let hours_lived = parseInt(prompt("Your number of years lived: "))
let seconds_lived = hours_lived * day_seconds
console.log(seconds_lived);

// Exercises: Booleans Part
// Write three JavaScript statement which provide truthy value.
console.log("grape".length == "fruit".length); /* returns true */
console.log(10 > 6) /* returns true */
console.log(!false) /* returns true */

// Write three JavaScript statement which provide falsy value.
console.log("grape".length === "fruit".length); /* returns false */
console.log(10 < 6) /* returns false */
console.log(!true) /* returns false */

// Exercises: Comparison Operators
// Figure out the result of the following comparison expression 
// first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3);   /* returns true */
console.log(4 >= 3);  /* returns true */
console.log(4 < 3);   /* returns false */
console.log(4 <= 3);  /* returns false */
console.log(4 == 4);  /* returns true */
console.log(4 === 4); /* returns true */
console.log(4 != 4);  /* returns false */
console.log(4 !== 4);  /* returns false */
console.log(4 != '4');  /* returns false */
console.log(4 == '4');  /* returns true */
console.log(4 === '4');  /* returns false */

// 5. Exercises: Logical Operators
// Figure out the result of the following expressions first without using console.log(). 
// After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12);      /* returns true */
console.log(4 > 3 && 10 > 12);       /* returns false */
console.log(4 > 3 || 10 < 12);      /* returns true */
console.log(4 > 3 || 10 > 12);       /* returns true */
console.log(!(4 > 3));               /* returns false */
console.log(!(4 < 3));               /* returns true */
console.log(!(false));               /* returns true */
console.log(!(4 > 3 && 10 < 12));    /* returns false */
console.log(!(4 > 3 && 10 > 12));    /* returns true */
console.log(!(4 === '4'));           /* returns true */

// 6 Ternary Operator
// If the length of your name is greater than 7 say, your name is long else say your 
// name is short.
let first_name = "Felix"
let last_name = "Iroms"

first_name > 7 
   ? console.log(`${first_name} is longer than seven`) 
   : console.log(`${first_name} is shorter than seven`)

// Compare your first name length and your family name length and you should get this output.
console.log(`${first_name.length}`=== `${last_name.length}`)

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
let age_diff = myAge - yourAge
console.log(`I am ${age_diff} older than you`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to 
// drive if not tell the user to wait a certain amount of years.
let year_born = parseInt(prompt("Your current age: "));
year_born == 25 
   ? console.log(`You are ${year_born}. You are old enough to drive`) 
   : console.log(`Wait when you are 18 years old.`)

year_born < 18 
   ? console.log(`You are ${year_born}. You will drive when when you are old enough`) 
   : console.log(`Keep getting older`)

// 7. Exercises: Date time Object
let now = new Date()
console.log(now)
// What is the year today?
console.log(now.getFullYear())
// What is the month today as a number?
console.log(now.getMonth())
// What is the date today?
console.log(now.getDate())
// What is the day today as a number?
console.log(now.getDay())
// What is the hours now?
console.log(now.getHours())
// What is the minutes now?
console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())
// Create a human readable time format
const yearr = now.getFullYear(); // return year
const monthh = now.getMonth() + 1; // return month(0 - 11)
const datee = now.getDate(); // return date (1 - 31)
const hourss = now.getHours(); // return number (0 - 23)
const minutess = now.getMinutes();// return number (0 -59)
const seconds = now.getSeconds(); // return number (0 - 59)
// YYY-MM-DD HH:mm:ss
console.log(`${yearr}-${monthh}-${datee} ${hourss}:${minutess}:${seconds}`)
// DD-MM-YYYY HH:mm:ss
console.log(`${datee}-${monthh}-${yearr} ${hourss}:${minutess}:${seconds}`)
// DD/MM/YYY HH:mm:ss
console.log(`${datee}/${monthh}/${year} ${hourss}:${minutess}:${seconds}`)