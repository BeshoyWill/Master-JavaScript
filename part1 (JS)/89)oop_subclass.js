// same method in subclass
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  eat() {
    return `Modified Eat : ${this.name} is eating`;
  }

  run() {
    return `${this.name} is running at ${this.speed}kmph`;
  }
}
// object / instance
const lucky = new Dog("lucky", 3, 45);
console.log(lucky.run());
console.log(lucky.eat());

const animal1 = new Animal("sheru", 2);
console.log(animal1.eat());
