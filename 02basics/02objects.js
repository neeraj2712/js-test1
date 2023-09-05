// const user1 = new Object() // is a singleton object  -- a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally

const user1 = {}
// console.log(user1);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        username:{
            firstname:"Neeraj",
            lastname:"Chauhan"
        }
    }
}

// console.log(regularUser.fullname.username);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
//console.log(obj3);

const obj3 = Object.assign({},obj1,obj2)  //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// target — The target object to copy to.

//  source1 — The first source object from which to copy properties.

//  source2 — The second source object from which to copy properties.

// console.log(obj3);
// console.log(obj3 === obj1);
// console.log(obj1);

const obj4 = {...obj1,...obj2}
//console.log(obj4);

const JsUser={
    Gmail:"neeraj@gmail.com",
    lastLoggedIn:["Monday","Tuesday"],
    isLoggedIn: false
}

// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));
// console.log(Object.entries(JsUser));

// console.log(Object.hasOwnProperty('Tuesday'));

//--------- destructring the Object --------------

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructer:"Hitesh"
}

const {courseInstructer:instructor} = course
//console.log(courseInstructer);

console.log(instructor);

// {
//     "name": "Neeraj",
//     "course":"B.Tech",
//     "Branch":"CSE"
// }

[
    {},
    {},
    {}
]


