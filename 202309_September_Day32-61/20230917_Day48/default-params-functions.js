//  Set Default Parameters for Your Functions

// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line


//  Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

const incrementWithDefParam = (number, value = 1) => number + value;


//  Use the Rest Parameter with Function Parameters

//  Example:
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3],5, { }));




const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}


const sumRest = (...args) => {
    let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

    return total;
}

console.log(sumRest(1,2,3,4,5,6,7));