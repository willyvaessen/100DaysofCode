// //  Build JavaScript Objects
// const myDog = {
//   // Only change code below this line
// "name": "Nova",
// "legs": 4,
// "tails": 1,
// "friends": ["Loki", "Teun"]
//
//
//   // Only change code above this line
// };
//
//
// //  Accessing Object Properties with Dot Notation
//
// // Setup
// const testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };
//
// // Only change code below this line
// const hatValue = testObj.hat;      // Change this line
// const shirtValue = testObj.shirt;    // Change this line
//
//
// //  Accessing Object Properties with Bracket Notation
//
// // Setup
// const testObj = {
//   "an entree": "hamburger",
//   "my side": "veggies",
//   "the drink": "water"
// };
//
// // Only change code below this line
// const entreeValue = testObj["an entree"];   // Change this line
// const drinkValue = testObj["the drink"];    // Change this line
//
//
// //  Accessing Object Properties with Variables
//
// // Setup
// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };
//
// // Only change code below this line
// const playerNumber = 16;  // Change this line
// const player = testObj[playerNumber];   // Change this line
//
//
// //  Updating Object Properties
//
// // Setup
// const myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };
//
// // Only change code below this line
// myDog.name = "Happy Coder";
//
//
// //  Add New Properties to a JavaScript Object
//
// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };
//
// myDog.bark = "woof";
//
//
// //  Delete Properties from a JavaScript Object
//
// // Setup
// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"],
//   "bark": "woof"
// };
//
// // Only change code below this line
// delete myDog.tails;
//

//  Using Objects for Lookups

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
result=lookup[val];
  // Only change code above this line

  return result;
}

console.log(phoneticLookup("charlie"));


//  Testing Objects for Properties

function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}