const countries = ['Sweden', 'Finland', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]

const callback = function(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    return arr;
}
console.log(callback(numbers))

// forRach under the hood ======= this is how foreach works without the foreach method keyword
const for_each = function(arr) {
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}
console.log(for_each(countries));

// Use forEach to console.log each country in the countries array. =>=>=>=>=> using forEach keyword
const just_foreach = countries.forEach((num => console.log(num)));

// Use forEach to console.log each name in the names array.
const name_foreach = names.forEach((name => console.log(name)));

// Use forEach to console.log each number in the numbers array.
const numbers_foreach = numbers.forEach((number => console.log(number)));

// MAPPING WITHOUT MAP METHOD KEYWORD
function mapping(arr) {
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].toUpperCase());
    }
    return arr;
}
console.log(mapping(names))

function mappings(arr) {
    for(let i=0; i<arr.length; i++){
        console.log(arr[i] * arr[i]);
    }
    return arr;
}
console.log(mappings(numbers))

// Use map to create a new array by changing each country to uppercase in the countries array.
const map_uppercase = countries.map((country => console.log(country.toUpperCase())));

// Use map to create an array of countries length from countries array.
const length_map = countries.map((len => len.length));
console.log(length_map);

// Use map to create a new array by changing each number to square in the numbers array
const square_map = numbers.map((square => square * square));
console.log(square_map);

// Use map to change to each name to uppercase in the names array
const uppercase_map = names.map((str => console.log(str.toUpperCase())));

// Use filter to filter out countries containing land.
let newArray = []
function filterArr(array) {
    for(let i=0; i<array.length; i++){
        // console.log(array[i])
        if(array[i].includes('land')){
            newArray.push(array[i]);
        }
    }
    return newArray
}
console.log(filterArr(countries))

// Use filter to filter out countries containing land.
let filterout_countries = countries.filter((country => country.includes('land')));
console.log(filterout_countries);

// Use filter to filter out countries having six character.
let filter_sixChar = countries.filter((country => country.length == 6));
console.log(filter_sixChar);

// Use filter to filter out countries containing six letters and more in the country array.
let filter_more_sixChar = countries.filter((country => country.length > 6));
console.log(filter_more_sixChar);

// Use filter to filter out country start with 'E';
let filter_start = countries.filter((start => start.startsWith('E')));
console.log(filter_start);

// Use filter to filter out only prices with values.
let filter_price = products.filter((prices => prices.price != '' && prices.price != ' '))
console.log(filter_price)

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// function getStringLists(array) {
//     for(let i=0; i<array.length; i++){
//         array[i].filter((char => char.startsWith('')));
//         console.log(array[i])
//     }
    // let fiter_arr = ;
    // console.log(fiter_arr)
//     return array;
// }
// let arrays = ['cdfr', 'test', 76, 8];
// console.log(getStringLists(arrays))
