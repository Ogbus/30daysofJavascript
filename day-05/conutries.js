const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)
let text_array = text.split(',')
console.log(text_array)
console.log(text_array.length)
console.log(text.length)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if if it has not be already added
console.log(shoppingCart.unshift("Meat"))
// add sugar at the end of you shopping cart if it has not been already added
console.log(shoppingCart.push("Sugar"))
// Remove 'Honey' if you are allergic to honey
console.log(shoppingCart.splice(4, 1))
// modify tea to 'Green Tea'
console.log(shoppingCart[3] = "Green Tea")

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries == "Ethiopia") {
    console.log("ETHIOPIA")
} else {
    countries.push("Ethiopia")
    console.log(countries)
}

countries == "Ethiopia" ? console.log("ETHIOPIA") : console.log(countries.push("Ethiopia"))

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
let ages_sort = ages.sort((a, b) => a - b)
console.log(ages_sort)
console.log(Math.max(...ages_sort))
console.log(Math.min(...ages_sort))
// Find the min age and the max age
console.log(Math.max(...ages_sort))
console.log(Math.min(...ages_sort))
// Find the median age(one middle item or two middle items divided by two)
let median_age = ages_sort.splice(4, 2)
console.log(median_age)
let adding_median_age = median_age.reduce((a, b) => a + b, 0)
let real_median_age = adding_median_age / 2
console.log(real_median_age)
// Find the average age(all items divided by number of items)
let average_age = ages_sort.slice(0, 11)
let adding_average_age = average_age.reduce((a, b) => a + b, 0)
console.log(adding_average_age)
let real_average_age = adding_average_age / ages_sort.length
console.log(real_average_age)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let divide_country = countries.splice(4, 2)
console.log(divide_country)