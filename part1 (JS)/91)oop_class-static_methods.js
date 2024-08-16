// static methods and properties
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  static classInfo() {
    return "this is person class";
  }
  static desc = "static property";
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
  eat() {
    return `${this.firstName} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

const person1 = new Person("Beshoy", "William", 8);
person1.desc = "hello Beshoy";
// // console.log(person1.eat());
const info = Person.classInfo();
console.log(Person.desc);
console.log(person1.desc);
console.log(info);
