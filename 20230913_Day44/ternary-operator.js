//  Use the Conditional (Ternary) Operator
//  The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
//
// The syntax is a ? b : c, where
//      a is the condition,
//      b is the code to run when the condition returns true, and
//      c is the code to run when the condition returns false.
//
// The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}

function findGreaternary(a, b) {
    return a > b ? "a is greater":"b is greater";
}
console.log(findGreater(7,6));
console.log(findGreaternary(7,6));


function checkEqual(a, b) {
return a === b? "Equal":"Not Equal";
}

console.log(checkEqual(1, 2));
console.log(checkEqual(1, 1));
console.log(checkEqual(1, -1));
