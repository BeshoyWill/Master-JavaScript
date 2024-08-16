// objects inside array 
// very useful in real world applications

const users = [
    { userId: 1, firstName: 'Beshoy', gender: 'male' },
    { userId: 2, firstName: 'Tommy', gender: 'male' },
    { userId: 3, firstName: 'John', gender: 'male' },
]
for (let user of users) {
    console.log(user.firstName);
}
