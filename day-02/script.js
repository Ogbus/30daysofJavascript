let nameChallenge = "30 Days Of JavaScript";
let newSentence = "You cannot end a sentence with because because because is a conjunction";
let substrTech = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let pattern = /a/gi;
let _pattern = /s/gi;
let newString = "30 Days of ";
let loveMsg = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let exp = /love/gi;
let personExp = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let personReg = /\d+/gi;

let operandOne = 4;
let operandTwo = 3;

// String part
console.log(nameChallenge);

console.log(nameChallenge.length);
console.log(nameChallenge.toLocaleUpperCase());
console.log(nameChallenge.toLowerCase());
console.log(nameChallenge.substr(0, 1));
console.log(nameChallenge.substring(0, 3));
console.log(nameChallenge.substring(3, 21));
console.log(newSentence.substr(32,54));
console.log(nameChallenge.includes("Script"));
console.log(nameChallenge.split(''));
console.log(nameChallenge.split(','));
console.log(substrTech.substr(','))
console.log(nameChallenge.replace("JavaScript", "Python"));
console.log(nameChallenge.charAt(15));
console.log(nameChallenge.charCodeAt(12));
console.log(nameChallenge.indexOf("30"));
console.log(nameChallenge.lastIndexOf("JavaScript"));
console.log(newSentence.indexOf("because"));
console.log(newSentence.lastIndexOf("because"));
console.log(newSentence.search("because"));
console.log(' 30 Days Of JavaScript '.trim(' '));
console.log(nameChallenge.startsWith("30"));
console.log(nameChallenge.endsWith("JavaScript"));
console.log(nameChallenge.match(pattern));
console.log(newSentence.match(_pattern));
console.log(newString.concat("JavaScript"));
console.log(nameChallenge.repeat(2));
console.log(nameChallenge.match(exp));
console.log(personExp.match(personReg));

// Data type part
console.log(typeof nameChallenge);

// Arithmatic operation part
console.log(operandOne + operandTwo); 
console.log(operandOne - operandTwo);
console.log(operandOne * operandTwo);
console.log(operandOne / operandTwo);
console.log(operandOne % operandTwo)

// Boolean part
console.log("grape".length == "fruit".length); /* returns true */
console.log(10 > 6) /* returns true */
console.log(!false) /* returns true */

console.log("grape".length === "fruit".length); /* returns false */
console.log(10 < 6) /* returns false */
console.log(!true) /* returns false */


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

// Logical operators
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