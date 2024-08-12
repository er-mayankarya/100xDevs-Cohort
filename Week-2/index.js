const fs = require("fs");

//Syn Js (Line by line executes & run)
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

//Functional Arguement

function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(doOperation(1, 2, sum))

// Asyn Js Code

  // fs.readFile()
  //const fs = require("fs");

  fs.readFile("a.txt", "utf-8", function (err, contents) {
     console.log(contents);
  });

  //setTimeout()
  function run() {
	console.log("I will run after 1s");
  }

  setTimeout(run, 1000);
  console.log("I will run immedietely");

  //
  function first() {
    console.log("First");
  }
  function second() {
    first();
    console.log("Second");
  }
  second();