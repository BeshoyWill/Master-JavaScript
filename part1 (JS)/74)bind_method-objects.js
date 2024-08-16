const user1 = {
  firstName: "Beshoy",
  age: 8,
  x: function () {
    console.log(this.age);
  },
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// don't do this mistake

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc();

const y = user1.x.bind(user1);
y();
