// map method 
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
    { firstName: "Beshoy", age: 23 },
    { firstName: "Tommy", age: 21 },
    { firstName: "John", age: 22 },
    { firstName: "Doe", age: 20 },
]

const userNames = users.map((user) => {
    return user.firstName;
});

console.log(userNames);