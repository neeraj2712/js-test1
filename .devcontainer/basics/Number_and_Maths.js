const score = 100
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

// toFixed  -- it gives the fixed value afer the decimal that defined -- 100.00

const otherNumber = 836.8393
// console.log(otherNumber.toPrecision(3));

// toPrecision  -- its provide the precise value of the number  defined upto.

const num = 1000000000
// console.log(num.toLocaleString());
// console.log(num.toLocaleString('en-IN'));



//  ------------------------------------  Maths  -------------------------------------------------

// console.log(Math);
// console.log(Math.abs(-5));  // it gives the absolute value if value is -ve than its return the +ve value
// console.log(Math.round(93.8));
// console.log(Math.ceil(84.45));
// console.log(Math.floor(93.5));

// console.log("Min value "+Math.min(3,5,1,5,7));
// console.log(("Max value "+ Math.max(9,3,6,3,5,7)));

// console.log(Math.random());  // it return the random valve between 1 & 0

// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1));

const min = 1
const max = 6
console.log(Math.floor(Math.random()*(max - min + 1)) + min);