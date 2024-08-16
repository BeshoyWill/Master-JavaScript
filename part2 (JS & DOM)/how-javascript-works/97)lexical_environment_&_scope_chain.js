// lexical environment, scope chain

const lastName = "William";

const printName = function () {
  const firstName = "Beshoy";
  function myFunction() {
    console.log(firstName);
    console.log(lastName);
  }
  myFunction();
};
printName();
