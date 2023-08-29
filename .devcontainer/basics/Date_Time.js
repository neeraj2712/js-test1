// ------------------------  Dates --------------------------

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log("Date string "+ myDate.toDateString());
// console.log("ISO string "+myDate.toISOString());
// console.log("Json "+ myDate.toJSON());
// console.log("Local Time "+myDate.toLocaleTimeString());
//console.log(" -- " );

console.log(typeof myDate);  // object

let createDate = new Date(2023,0,23)
console.log(createDate.toDateString());

// let myCreateDate = new Date(2023,0,23,5,3)
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("2023-02-24")
// console.log(myCreateDate.toLocaleString());  // -- mm/dd/yy

let myCreateDate = new Date("01-14-2023")
console.log(myCreateDate.toLocaleString());  // -- dd/mm/yy

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(createDate.getTime());

//console.log(Math.floor(Date.now()/1000));  // its return in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

//`${newDate.getDate()} and the time `

newDate.toLocaleString('default',{
    weekday: "long",
    
})

