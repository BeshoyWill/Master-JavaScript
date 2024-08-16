// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "Beshoy",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "Tommy",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "John",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

