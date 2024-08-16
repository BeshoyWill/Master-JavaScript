// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"]; // [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
// console.log(newArray); // [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// const newObject = { ...obj2, ...obj1, key69: "value69" }; // { key1: 'value1', key2: 'value2', key69: 'value69', key3: 'value3', key4: 'value4' }
// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);
