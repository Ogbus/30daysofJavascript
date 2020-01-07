// EXERCISE
// Declare an empty array;
let empty_array = []

// Declare an array with more than 5 number of elements
let _5elements = Array(5).fill('wedding')
console.log(_5elements)

// Find the length of your array
console.log(_5elements.length)

// Get the first item, the middle item and the last item of the array
let first_item = console.log(_5elements[0])
let last_item = _5elements.length - 1
console.log(_5elements[last_item])
let middle_item = _5elements[2]
console.log(middle_item)

// Declare an array called mixedDataTypes,put different 
// data types in your array and find length of the array. You are should size be greater than 5
let mixedDataTypes = ["felix", true, 42, "Iroms", "Nigeria", ["populated"]]
let mixedDataTypes_length = mixedDataTypes.length
console.log(mixedDataTypes_length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
let itCompanies_length = console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

// Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let one_sentence = itCompanies.join()
console.log(one_sentence)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes("amazon") ? console.log("Amazon") : console.log("The company not found")
// if (itCompanies == "facebook") {
//     console.log("Facebook")
// } else if (itCompanies == "ibm"){
//     console.log("IBM")
// }  else if (itCompanies == "microsoft"){
//     console.log("Microsoft")
// }  else if (itCompanies == "amazon"){
//     console.log("Amazon")
// }  else if (itCompanies == "google"){
//     console.log("Google")
// }  else if (itCompanies == "oracle"){
//     console.log("Oracle")
// }  else if (itCompanies == "apple"){
//     console.log("Apple")
// } else {
//     console.log("Compant not found")
// }

// Sort the array using sort() method
let itCompanies_sort = itCompanies.sort()
console.log(itCompanies_sort)

// Reverse the array using reverse() method
let itCompanies_reverse = itCompanies.reverse()
console.log(itCompanies_reverse)

// Slice out the first 3 companies from the array
let itCompanies_slice3 = itCompanies.slice(0, 4)
console.log(itCompanies_slice3)

// Slice out the last 3 companies from the array
let itCompanies_slice_last3 = itCompanies.slice(4, 4)
console.log(itCompanies_slice_last3)

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 2))

// Remove the first IT company from the array
console.log(itCompanies.shift)

// Remove the middle IT company or companies from the array
console.log(itCompanies.slice(3, 2))

// Remove the last IT company from the array
console.log(itCompanies.pop())

// Remove all IT companies
console.log(itCompanies.splice(0, 8))
