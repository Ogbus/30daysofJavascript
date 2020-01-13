const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
    {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
    },
    {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
    },
    {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
    },
    {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
    },
    {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
    },
    {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
    },
    {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
    }
]

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor)
// Destructure the rectangle object by its properties or keys.
let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);

// Iterate through the users array and get all the keys of the object using destructuring
for(const {name, scores, skills, age} of users) {
    console.log(name, scores,skills, age)
}

// Find the persons who have less than two skills
for(const {name, scores, skills, age} of users) {
    if(skills.length <= 2) {
        console.log(name, skills);
    }
    // console.log(name, scores, skills, age);
}

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
// Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score 
// to jsScore and React score to reactScore variable.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95], [90], 95];
let [name, skills, scores, jsScore, reactScore] = student;
console.log(name, skills, scores, jsScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(array, key)  {
    let initialValue = {};
    return array.reduce((object, items) => {
        return {
            ...object, [items[key]]: items,
        };
    }, initialValue)
}
console.log(convertArrayToObject(students));

// const convertArrayToObjects = (array, key) => {
//     const initialValue = {};
//     return array.reduce((obj, item) => {
//       return {
//         ...obj,
//         [item[key]]: item,
//       };
//     }, initialValue);
// };
// console.log(convertArrayToObjects(students));