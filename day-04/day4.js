// Exercise : Conditionals
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You 
// are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.
let user_input = parseInt(prompt("Enter your age: "))
let adult_age = 18
let age_remainder = adult_age - user_input
if(user_input > 18 || user_input == 18) {
    console.log("You are old enough to drive")
} else {
    console.log(`You are left with ${age_remainder} years to drive`);
}


// Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who 
// is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let me_age = 34
let you_age = parseInt(prompt("Enter your age: "))
let youhow_old = you_age - me_age
let mehow_old = me_age - you_age
if(me_age > you_age) {
    console.log(`I am ${mehow_old} years older than you`)
} else {
    console.log(`You are ${youhow_old} years older than me`)
}


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways
let a = 4
let b = 3
// using if else
if(a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}

// ternary operator.
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

// Write a code which give grade students according to theirs scores:
let students_score = parseInt(prompt("What is your test score: "))
// 90-100, A
if (students_score >= 90 && students_score <= 100) {
    console.log("Your test score is A")
  // 70-89, B
} else if(students_score >= 70 && students_score <= 89) {
    console.log("Your test score is B")
 //  60-69, C
} else if(students_score >= 60 && students_score <= 69) {
    console.log("Your test score is C")
 // 50-59, D
} else if (students_score >= 50 && students_score <= 59) {
    console.log("Your test score is D")
 // 0 -49, F
} else if (students_score == 0 || students_score <= 49) {
    console.log("Your test score is F")
} else {
    console.log("Your mark is null and void.")
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
let type_of_season = prompt("What is the current season? ").toLowerCase()
// September, October or November, the season is Autumn.
if (type_of_season == "october" || type_of_season == "september" || type_of_season == "november") {
    console.log("The season is Autumn")
 // December, January or February, the season is Winter.
} else if (type_of_season == "december" || type_of_season == "january" || type_of_season == "february") {
    console.log("The season is Winter")
 // March, April or May, the season is Spring
} else if (type_of_season == "march" || type_of_season == "april" || type_of_season == "may") {
    console.log("The season is Spring")
 // June, July or August, the season is Summer
} else if (type_of_season == "june" || type_of_season == "july" || type_of_season == "august") {
    console.log("The season is Summer")
// default value
} else {
    console.log("The name you entered is not part of the available seasons in the program")
}

// Even numbers are divisible by 2 and the remainder is zero. 
// How do you check if a number is even or not using JavaScript?
let even_num = parseInt(prompt("Enter a number: "))
if (even_num % 2 == 0) {
    console.log(`${even_num} is an even number`)
} else {
    console.log(`${even_num} is not an even number`)
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
let what_day = prompt("What is today? ").toLowerCase()
switch (what_day) {
    case "monday":
        console.log(`${what_day} is a work day`)
        break;
    case "tuesday":
        console.log(`${what_day} is a work day`)
        break;
    case "wednesday":
        console.log(`${what_day} is a work day`)
        break;
    case "thursday":
        console.log(`${what_day} is a work day`)
        break;
    case "friday":
        console.log(`${what_day} is a work day`)
        break;
    case "saturday":
        console.log(`${what_day} is a workend day`)
        break;
    case "sunday":
        console.log(`${what_day} is a workend day`)
        break;
    default:
        console.log(`${what_day} is not a day of the week`)
}

// Write a program which tells the number days in a month.
let days_of_month = prompt("Enter a month: ").toLowerCase()
switch (days_of_month) {
    case "january", "december", "march", "may", "july", "august", "october":
        console.log(`${days_of_month} has 31 days.`)
        break;
        case "february" :
            console.log(`${days_of_month} has 28 or 29 days.`)
            break;
        case "april", "june", "setember", "november" :
            console.log(`${days_of_month} has 28 or 29 days.`)
            break;
    default:
        console.log("Enter the correct month")
}