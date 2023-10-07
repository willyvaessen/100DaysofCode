//  Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}

console.log("Before editing the array: " + s);
editInPlace();

console.log("After editing the array: " + s);
