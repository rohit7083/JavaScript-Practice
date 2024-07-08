// // object literals

const mysym=Symbol("key1");

const user={
    name:"Rohit",
    [mysym]:"mykey1",
    email:"abc@gmail.comn",
    city:"Nashik",
    lsLoggedIn:false,
    lastLoginDat:["Monday","Saturday"]
}

console.log(user["city"]);// alter native way of user.city 
// console.log(user.city);
// console.log(user[mysym]);

// Object.freeze(user) // when u freez the objects then u  can not chnage the data 
// user.name="mayur"
// console.log(user);


// user.demo = function(){
//     console.log("hello demo");
// }

// user.demo2 = function(){
//     console.log(`hello js user ${this.name}`);
// }

// console.log(user.demo());
// console.log(user.demo2());