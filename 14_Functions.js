// // function addTownuum(num1,num2){
// //     console.log(num1 + num2);
// // }

// // addTownuum(5,8)

// // const result=addTownuum(5,8)
// // console.log("Result:",result);


// // function addTownum(num1,num2){
// //     return num1 + num2;
// // }

// // const result=addTownum(5,8)
// // console.log("Result:",result);


function userLoginMsz(uname){
    if (!uname) {
        console.log("please enter username");
        return
    }
    return `${uname} just logged in `
}

console.log(userLoginMsz("Rohit"));
// console.log(userLoginMsz()); 

// ====================== PART 2 =====================================

// function calculateCarPrice(...num1) // REST operator (REST and SPREAD same )
// {
//     return num1
// }
// console.log(calculateCarPrice(200,400,5200,60));


// function calculateCarPrice(val1,val2,...num1) // REST operator (REST and SPREAD same )
// {
//     return num1
// }
// console.log(calculateCarPrice(200,400,5200,60));

const user={
    uname:"audi",
    price:"15555"
}

// function handleObject(anyObject){
//     console.log(`car name is ${anyObject.uname} and car priceis ${anyObject.price} `);
// }

// handleObject(user);

// handleObject({
//     uname:"bhadi",
//     price:899898
// })


const mynewArr=[200,400,100,698]
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(mynewArr));
console.log(returnSecondValue([500,900,600,800]));