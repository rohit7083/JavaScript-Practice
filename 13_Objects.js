const tinderuser = {}

tinderuser.id = "21"
tinderuser.name = "Rohit"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regulerUser = {
    city: "nashik",
    fullname: {
        username: {
            fname: "gautami",
            lname: "talkhe"
        }

    }
}

// console.log(regulerUser.fullname.username.lname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1, ...obj2}

// console.log(obj3);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));


// ================================= session end =========================================

const course ={
    cname:"python",
    price:998,
    director:"Rohit"
}

const {cname:webdevekop}=course
console.log(webdevekop);