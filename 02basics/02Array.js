const Name = ["Ramesh","Suresh","Ram"]

const C_Name = ["DU","UPTU","IP"]

// Name.push(C_Name)   // It push array into an array
// console.log(Name);

// const new_arr = Name.concat(C_Name)
// console.log(new_arr);

const all_new_arr = [...Name,...C_Name]      //Spread -- it add the array
// console.log(all_new_arr);

const another_arr = [1,2,3,[4,5],6,[7,8,[6,7]]]
const real_another_arr = another_arr.flat(Infinity)
// flat --- Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(real_another_arr);

console.log(Array.isArray("Neeraj"));  // Toidentify the the given value/element is array or not.

console.log(Array.from("Neeraj"));  // it can convert a value it should be an object,string or nay into an array  // Creates an array from an iterable object.

console.log(Array.from({name:"Neeraj"}));  // it give an empty array because cant convert or understand name:, it cannot convert it directly, firstly be define that is key or a value be converted into array.

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));  // Returns a new array from a set of elements.