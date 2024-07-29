class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptpassqword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai","chai@gmail.com","Roht10")
console.log(chai.encryptpassqword());

console.log(chai.changeUsername());