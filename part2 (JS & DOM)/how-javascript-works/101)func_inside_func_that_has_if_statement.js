function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hi You Called me");
      counter++;
    } else {
      console.log("Don't Call Again!");
    }
  };
}

const myFunc = func();
myFunc();
myFunc();
