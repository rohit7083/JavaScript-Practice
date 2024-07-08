const mheros=["Rohit" ,"raja"]
const wheros=["gautami","shreya","smrti"]

// mheros.push(wheros)
// console.log(mheros);
// console.log(mheros[0][4]); // name , word(index)


// const allheros= mheros.concat(wheros)
// console.log(allheros);

// spread operator ========

const allheros=[...mheros ,...wheros]
console.log(allheros);

// const anotherArr=[1,2,3,[5,6],5,[1,5,9,[7,0]]]
// const myarr=anotherArr.flat(Infinity)
// console.log(myarr);


// console.log(Array.isArray("Rohit"));
// console.log(Array.from("Rohit"));

// console.log(Array.from({name:"rohit"}));

// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3));