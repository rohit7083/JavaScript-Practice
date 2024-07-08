const name="hitesh"
const count=99

// console.log(name+ count + "value") // this is not good practice

console.log(`Hello my name is ${name} and my number is ${count}`); //this is good practice

const gameName= new String ('freeFire')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

// both are same but differance is

const str1=gameName.substring(-5 ,5); //always strating from 0
console.log(str1);

const str2=gameName.slice(-5,5) //this can starting from -ve  
console.log(str2);


const a="  Mother "
console.log(a);
console.log(a.trim()); //when u dont want to print space then use trim method

const repa="Rohit32dada"
console.log(repa.replace('32','-'));

console.log(repa.includes("Rohit"));

console.log(repa.split('-'));