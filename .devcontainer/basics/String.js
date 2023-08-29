const name = "Neeraj"
const age = 23

// console.log(name + " myAge " + age  )

// console.log(`My name is ${name}  and age is ${age}`);

const gameName = new String('NewGame-PG-BG');

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.length);



// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('G'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-6,2)
// console.log(anotherString);

const newStringOne = "       Neeraj      "
console.log(newStringOne);
console.log(newStringOne.trim());  // Trim can remove extra space in the string given in starting or the end of the 

// stripped of whitespace from both its beginning  and end.
// trimStart()  --- stripped of whitespace from beginning
// trimEnd()  --- stripped of whitespace from end.

const url = "https:\\google.com/google&2HgfI9700"
console.log(url.replace('&2','-'));
// replace()  -- it can replace the word or a character in the string whatever you wants to print

console.log(url.includes('google'));

// includes() -- wants to know that it is present in the string or not

console.log(gameName.split('-'));

// split() -- The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

