// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 
// 10000 euro annual bonus, 5500 euro online courses per month.’
let person = 'Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’';
let pattern = /\d+/g;
let result = person.match(pattern)
console.log(result);

// let integers = parseInt(result);
// console.log(integers);
let annual_income = 0
for(let i=0; i<result.length; i++){
    let integers = parseInt(result[i]);
    annual_income += integers;
}
console.log(annual_income);

// Write a pattern which identify if a string is a valid JavaScript variable
// let patterns = /[^0-9][A-Za-z_]|[^0-9][A-Za-z][0-9]+/g;
// let is_valid_variable = 'first-name';
// let search = patterns.test(is_valid_variable)
// console.log(search)