// nested destructuring 
const users = [
    { userId: 1, firstName: 'Beshoy', gender: 'male' },
    { userId: 2, firstName: 'Tommy', gender: 'male' },
    { userId: 3, firstName: 'Lisa', gender: 'female' },
]

const [ , {firstName: user2firstName, userId} , { gender: user3gender }] = users;
console.log(user2firstName);
console.log(userId);
console.log(user3gender);