
const arr = [5,4,3,2,1]
const myName = ["Neeraj","Ameya","Faizan",""]

const arr2 = new Array(5,4,3,2,1)

//console.log(arr[0]);

// Array method

// arr.push(6)  // to add the value into array // its add the value in the array at last 
// arr.pop()   // to remove the value from the array but it always remove the value from last

// arr.unshift(7) // its add the element/value in the starting of the array
arr.shift()   // it remove the element/value from the starting of the array 

// console.log(arr);

const myArr = [13,11,7,5,3,1]
// console.log(myArr.includes(9));  // to find the element in the array that it is present or not
// console.log(myArr.indexOf(9));  // to find the index of the element in which position it lies in the array
   //  if that is element/value is not present the arraythen it return the -1 means dont know.

   const newArr = myArr.join() //  Adds all the element of an array into a string, separated by a specified separator string

//    console.log(myArr);
//    console.log(newArr);
//    console.log(typeof newArr);

//  slice  ,  splice
// slice ---- return a copy of a section of a array

console.log("A " , myArr);

const myNew1 = myArr.slice(1,3)
//console.log(myNew1);

console.log("B ",myNew1);

const myNew2 = myArr.splice(1,3)
//  Splice -- it manipulate the original array
console.log("c",myArr);

console.log("D",myNew2);
