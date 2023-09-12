
function calculateCartPrice(...num1){   // ... -- its both called rest or spread operator on their useses
    return num1

}
console.log(calculateCartPrice(200,300,400));  // all the vale should be in an array // this is the way how to pass the parameter 

function calculateCartPrice1(val1,val2,...num2){
    return num2
}
console.log(calculateCartPrice1(23,4,5,3,4));  // output: [5,3,4] because 23,4 goes into val1,val2


const user = {
    username: "Neeraj",
    age: 23
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

//handleObject(user)

handleObject(
    {
        username:"Sam",
        age: 22
    }
)

const myNewArray = [23,4,5,36,50]

function handleArray(getArray){
    return getArray[2]
}
//console.log(handleArray(myNewArray));
console.log(handleArray([283,26,23,54]));