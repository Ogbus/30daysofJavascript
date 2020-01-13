const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const union_a_b = [...a, ...b]
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslob']]

// create an empty set
let empty_set = new Set();
console.log(empty_set)

// Create a set containing 0 to 10 using loop
let zero_to_ten = [0, 1, 2, 3, 4, 5, 7, 9, 8, 6, 10];
const set_loop = new Set();
for(let loop_set of zero_to_ten) {
    set_loop.add(loop_set);
}
console.log(set_loop);

// Remove an element from a set
console.log(set_loop.delete(5));

// Clear a set
console.log(set_loop.clear());

// Create a set of 5 string elements from array
let string_element = ['java', 'ruby', 'python', 'javascript', 'c-shap'];
const second_set = new Set(string_element);
console.log(second_set);
// Create a map of countries and number of characters of a country
let create_map = new Map(countries);
console.log(create_map);

// Find a union b
let setA = new Set(a);
let setB = new Set(b);
let setC = new Set(union_a_b);
console.log(setC);

// Find a intersection b
let set_intersect = a.filter(num => setB.has(num));
let set_intersect_result = new Set(set_intersect);
console.log(set_intersect_result);

// Find a with b
let set_difference = a.filter(num => !setB.has(num));
let set_difference_result = new Set(set_difference);
console.log(set_difference_result);
