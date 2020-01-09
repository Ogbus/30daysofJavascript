const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
// Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i <= 10; i++) {
    console.log(i)
}

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i = 10; i >= 0; i--) {
    console.log(i)
}

// while
let whilelen = 0
while(whilelen <= 10) {
    console.log(1)
    whilelen++
}

// do while
let do_while =  0
do {
    console.log(do_while)
    do_while++
} while(do_while <= 10)

// Iterate 0 to n using for loop

// Write a loop that makes the following pattern using console.log():
for(let i = 1; i <= 7; i++) {
    console.log("#", repeat(i))
}

for (let str = "#"; str.length <= 7; str += "#") {
  console.log(str);
}

// Use loop to print the following pattern:
for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}

// Using loop print the following pattern
for(let i = 0; i <=10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

// Use for loop to iterate from 0 to 100 and print only even numbers
let count = 0
for(let i = 1; i <= 100; i++) {
    if(i % 2 == 0){
        count++
        console.log(i)
    }
}
console.log(`The number of even numbers in 100 is ${count}`)

// Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i = 1; i <=100; i++) {
    if(i % 2 != 0) {
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
var primes = [];
primes.unshift(2);
for(var n=3;n<=100;n+=2) {
  if(primes.every(function(prime){return n%prime!=0})) {
    primes.push(n);
  }
}
console.log(primes);

// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.
let sum = 0;
for(let i = 1; i<=100; i++) {
    sum = sum + i
}
console.log(`The sum of all the numbers is ${sum}`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even_sum = 0
let odd_sum = 0
for(let i = 0; i<=100; i++) {
    if(i % 2 == 0) {
        even_sum = even_sum + i;
    }
    if(i % 2 != 0) {
        odd_sum = odd_sum + i;
    }
}
console.log(`The sum of all evens is ${even_sum}. And the sum of odds is ${odd_sum}`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let even_odd_arr = []
let e_sums = 0
let o_sums = 0
for (let i = 0; i<=100; i++) {
    if(i % 2 == 0) {
        e_sums = e_sums + i;
        // console.log(e_sums)
    }
    if(i % 2 != 0) {
        o_sums = o_sums + i;
    }
}
even_odd_arr.push(e_sums)
even_odd_arr.push(o_sums)
console.log(even_odd_arr)

// Develop a small script which generate array of 5 random numbers
/*let random_arr = []
let n = 6;
let random_num = Math.floor(Math.random() * n)
for(let i = 1; i<n; i++) {
    random_arr.push(random_num)
}
console.log(random_arr)
*/
// The above method gives the same set of elements in the array.

let ran_arr = [];
for(let i=0, n=6; i<n; i++) {
    ran_arr.push(Math.floor(Math.random() * n))
}
console.log(ran_arr)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let random_arr = []
let n = 6;
let random_num = Math.floor(Math.random() * n)
for(let i = 1; i<n; i++) {
    random_arr.push(random_num)
}
console.log(random_arr)

// Develop a small script which generate a six characters random id:
let gen_char = '5j2khz';
let gen_char_length = gen_char.length
let new_gen_char = '';
for(let i = 0; i<gen_char_length; i++) {
    new_gen_char += gen_char.charAt(Math.floor(Math.random() * gen_char_length))
}
console.log(new_gen_char)

// Develop a small script which generate any number of characters random id:
let random_arr = []
let n = 6;
let random_num = Math.floor(Math.random() * n)
for(let i = 1; i<n; i++) {
    random_arr.push(random_num)
}
console.log(random_arr)

// Write a script which generates a random hexadecimal number.
let hexadecimal = '0123456789ABCDEabcdef'
let hexadecimal_length = 6;
let hexadecimal_first = '#'
let hexadecimal_length_string = '';
for(let i = 0; i < hexadecimal_length; i++) {
    hexadecimal_first += hexadecimal.charAt(Math.floor(Math.random() * hexadecimal.length));
}
console.log(hexadecimal_first)

// Write a script which generates a random rgb color number.
let rgb_color = Math.floor(Math.random() * 255);
for(let i = 0; i <colorss; i++) {
    let color_rgb = 'RGB(' + rgb_color + "," + rgb_color + "," + rgb_color + ')'
    console.log(color_rgb);
}

function r() { 
    return Math.floor(Math.random() * 255) 
}
let color_rgb = 'RGB(' + r() + "," + r() + "," + r() + ')'
console.log(color_rgb)
// let rgb_color = Math.floor(Math.random() * 255);
// let color_rgb = 'RGB(' + rgb_color + "," + rgb_color + "," + rgb_color + ')'
// console.log(color_rgb)

// Using the above countries array, create the following new array.
let countries_arr = []
for (const arr of countries){
    countries_arr.push(arr.toUpperCase());
}
console.log(countries_arr);

// Using the above countries array, create an array for countries length'.
let countries_length = []
for(const arr of countries) {
    countries_length.push(arr.length)
}
console.log(countries_length)

// Use the countries array to create the following array of arrays:
/*let arr_countries = new Array(countries);
for(const arr of countries){
    console.log(`${arr_countries.push(arr.length)}, ${arr_countries[arr]}`)
}
console.log(arr_countries)
*/
// for(let i = 0; i<countries.length; i++)


//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 
//'land', print it as array. If there is no country containing the word 'land', print 'These are countries without land'.

let land_countries = []
for (let arr of countries) {
    if(arr.includes('land')) {
        console.log(land_countries.push(arr));
    }
    if (arr.includes('land') != true) {
        land_countries.push(arr);
    }
}
console.log(land_countries)
// for (let i = 0; i<countries.length; i++) {
//     if(arr.includes('land')) {
//         land_countries.push(i);
//     } else if (countries.includes('land') != true) {
//         land_countries.push(i)
//     }
// }
