console.log(__dirname); // directory of current folder
console.log(__filename);//file name of current file

setInterval(() => {
    console.log("hello");
},[1000])

//calling global variable 

const globalName = require('./names')

console.log(globalName);