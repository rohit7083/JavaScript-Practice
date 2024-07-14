const user={
    name:"Rohit",
    age:20,

    welcomemsz:function(){
        console.log(`${this.name},WELLCOME`);
        // console.log(this);
    }
}

// user.welcomemsz()
// user.name="sam"
// user.welcomemsz()
// console.log(this);


// function chai(){
//     let username="Siddhesh"
//     console.log(this.username); //we cant not print like this 
// }

// chai()

// ======== arrow function =========

// const chai =()=>{
//     let user="Siddehs"
//     console.log(this);

// }

// chai()


// ======= 1 basic arrow function 
// const addTwo =(num1,num2) =>{
//     return num1+num2
// }

// console.log(addTwo(3,5));


// =======   implicit method  of arrow function 

// const addTwo=(num1,num2)=>num1+num2
// console.log(addTwo(2,8));

// =======  second implicit method  of arrow function 

const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(2,8));