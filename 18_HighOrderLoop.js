const greeting="hello world"
for(const  greet of greeting){
    if (greet==" ") {
        continue;
    }
    // console.log(`each char is ${greet}`);
}

// const  array=[10,20,30,40,50,60,80]
// for(const num of array){
//     console.log(num);
// }


// =========== Map =-===
// it gives  only unique value 
const map =new Map()
map.set('IN', "India")
map.set('USA', "Ameriaca")
map.set('FR', "France")
// map.set('USA', "Ameriaca")
// console.log(map);

for(const [key,value]of map){
    // console.log(key ,":", value);
}



const myobj ={
    js:"javascript",
    py:"python",
    cpp:"c++",
    swift:"swift by apply"
}

for(const key in myobj){
    // console.log(`${key} shortcut is for ${myobj[key]}`);
}


const boys=["Rohit","gautami","mayur","sonu","pratik"]

for(const key in boys){
    console.log(boys[key]);
}

