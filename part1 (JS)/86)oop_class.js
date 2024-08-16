// 2015 / es6
// class keyword
// class are fake

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "la la la la ";
  }
}

const user1 = new CreateUser(
  "Beshoy",
  "William",
  "beshoy.eins@gmail.com",
  9,
  "my address"
);
const user2 = new CreateUser(
  "Tommy",
  "William",
  "beshoy.eins@gmail.com",
  19,
  "my address"
);
const user3 = new CreateUser(
  "John",
  "William",
  "beshoy.eins@gmail.com",
  17,
  "my address"
);

const user4 = ["John", "William", "beshoy.eins@gmail.com", 17, "my address"];

const user4Instance = new CreateUser(...user4);

console.log(Object.getPrototypeOf(user1));
console.log(user1);
console.log(user4Instance);
