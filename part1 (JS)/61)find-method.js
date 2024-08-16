// find method 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    { userId: 1, userName: "Beshoy" },
    { userId: 2, userName: "John" },
    { userId: 3, userName: "Lisa" },
    { userId: 4, userName: "Tommy" },
    { userId: 5, userName: "Doe" },
];

const myUser = users.find((user) => user.userId === 3);
console.log(myUser);
console.log(myUser.userName);