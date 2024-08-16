// how to iterate object 
const person = {
    name: "Beshoy",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
// Object.keys 

// for (let key in person) {
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key, " : ", person[key]);
// }

// console.log(Object.keys(person)); // [ 'name', 'age', 'person hobbies' ]
// console.log(typeof (Object.keys(person))); // object
// const val = Array.isArray((Object.keys(person))); // true 
// console.log(val); // true

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }