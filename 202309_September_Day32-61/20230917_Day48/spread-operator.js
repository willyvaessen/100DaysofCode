//  Use the Spread Operator to Evaluate Arrays In-Place

// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters
// or elements are expected.
//
// The ES5 code below uses apply() to compute the maximum value in an array:

var arr01 = [6, 89, 3, 45];
var maximus01 = Math.max.apply(null, arr01);
console.log(maximus01);

//  We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.
//  The spread operator makes this syntax much better to read and maintain.

const arr02 = [6, 89, 3, 45];
const maximus02 = Math.max(...arr02);
console.log(maximus02);


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);