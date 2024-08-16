function about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName: 'Beshoy',
    age: 8
};

const user2 = {
    firstName: 'Tommy',
    age: 18
};

//apply
about.apply(user1, ['guitar', 'jason']);
about.apply(user2, ['guitar', 'cloud']);
const func = about.bind(user2, 'guitar', 'boom');
func();