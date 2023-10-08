// function reusableFunction() {
//   console.log("Hi World");
// }
//
// reusableFunction()
//
// function functionWithArgs(arg1, arg2) {
//     console.log(arg1 + arg2);
// }
//
// functionWithArgs (1, 2)
//
// function myLocalScope() {
//   // Only change code below this line
//
//   console.log('inside myLocalScope', myVar);
// }
// myLocalScope();
//
// // Run and check the console
// // myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);

// // Setup
// let sum = 0;
//
// function addThree() {
//   sum = sum + 3;
// }
//
// // Only change code below this line
// function addFive() {
//     sum = sum + 5
// }
//
// // Only change code above this line
//
// addThree();
// addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);