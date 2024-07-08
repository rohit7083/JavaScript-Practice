let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate);

// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// console.log(typeof mydate);
// let MyCreatedDate=new  Date(2023 , 0 ,23)
// console.log(MyCreatedDate);

// let MyCreatedDate=new  Date(2023 , 0 ,23 ,5,3)
// console.log(MyCreatedDate.toLocaleString());

// let myTimeStamp =Date.now();
// console.log(MyCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})