const coding =["java","python","c","cpp","sql"]

// coding.forEach(function(val){
//     console.log(val);
// })

// with arrow functions 

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);



// coding.forEach((item, index,arr)=>{
//     console.log(item,index,);
// })

const myCoding =[
    {
        langname:"javascript",
        langfile:"js"
    },{
        langname:"python",
        langfile:"py"
    },{
        langname:"java",
        langfile:"java"
    }
]

myCoding.forEach((item)=>{

    console.log(item.langname);
})