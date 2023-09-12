

function sayMyName(){
console.log("N");
console.log("E");
console.log("E");
console.log("R");
console.log("A");
console.log("J");

}

// sayMyName()  // function reference and execute

// function addTwoNumber(num1,num2){
//     console.log(num1 + num2);
// }

// addTwoNumber(4,5)

// const result = addTwoNumber(4,3)

// console.log("Result: ", result);   // output: undefined

function addTwoNumber(num1,num2){
//    let result = num1 + num2
//    return result

return num1 + num2
   console.log("Neeraj"); // its does not print because function does not work after return / Unreachable code
}

 const result = addTwoNumber(4,3)
 //console.log("Result: ", result);  

 function LoginUserMessage(username = "sam"){    // the username never be undefined
   if(username === undefined)
   //if(!username)  // we can also write like this
   {
      console.log("Please enter username");
      return  // wants to not print the return username line

   }
    return `${username} just loggin `
}

 //console.log(LoginUserMessage("Neeraj"));  // if we define here username then it can oer write it
 console.log(LoginUserMessage());   //output: undefined just loggin // because here we cannot define anything



