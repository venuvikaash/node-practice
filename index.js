// console.log(__dirname); // directory of current folder
// console.log(__filename); //file name of current file

// setInterval(() => {
//   console.log("hello");
// }, [1000]);

//calling global variable

// const globalName = require("./names");
// const { hello } = require("./names");

// console.log(globalName);
// console.log(hello);

//calling array and object

const { arrayItems } = require("./arraysObjects");
console.log(arrayItems);

const { objectName } = require("./arraysObjects");
console.log(objectName);
