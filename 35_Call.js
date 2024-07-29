function setUsername(username){
    //complex db calls 
    this.username=username
console.log("called");
}

function createUser(username,email,password){
    // setUsername(username) // before 
    setUsername.call(this,username) //after 
    this.email=email
    this.password=password
}

const chai =new createUser("chai","chaio@gmail.com","1256")
console.log(chai);