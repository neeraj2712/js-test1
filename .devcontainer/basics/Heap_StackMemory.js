// Stack (Primitive)     Heap(Non-Primitive)

// Whenever be use stack memory or declare we can get the copy of that variable.
// if be declare Heap memory then we get the reference of that variable if change, cahnge into orignal value

let myName = "Neeraj Chauhan"
let anotherName = myName
anotherName = "Bhati"

// console.log(myName);
// console.log(anotherName);

let userOne = {
    email: "xyz@gmail.com",
    Number: "2637899"

}

let userTwo = userOne
userTwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



