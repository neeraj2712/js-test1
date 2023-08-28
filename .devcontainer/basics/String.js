const name = "Neeraj"
const age = 23

console.log(name + " myAge " + age  )

console.log(`My name is ${name}  and age is ${age}`);

const gameName = new String('NewGame');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.length);



console.log(gameName.charAt(3));
console.log(gameName.indexOf('G'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,2)
console.log(anotherString);