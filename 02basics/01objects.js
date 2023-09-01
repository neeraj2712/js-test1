// singleton 
//  Object.create  // object create though constructor in this singleton is created

//  ----------- object literals  -----------------

const mySymbol = Symbol("Key1")

const JsUser ={
    name: "Neeraj",
    "full name": "Neeraj Chauhan",
    [mySymbol]: "myKey",
    age: 23,
    Gmail:"neeraj@gmail.com",
    lastLoggedIn:["Monday","Tuesday"],
    isLoggedIn: false
}
// console.log(JsUser.name);
// console.log(JsUser["Gmail"]);
// console.log(JsUser[mySymbol]);
// console.log(typeof JsUser[mySymbol]);

//JsUser.age = 24 // to change the value
//Object.freeze(JsUser)  // wants to not any change in the object
//JsUser.age = 25
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello users");
}
JsUser.greetingTwo = function(){
    console.log(`Hello users ,${this.name}` );
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());