// //  Iterate with JavaScript While Loops
// // Setup
// const myArray = [];
//
// // Only change code below this line
// let i = 5;
//
// while (i >= 0){
//     myArray.push(i);
//     i--;
// }
//


// //  Iterate with JavaScript For Loops
//
// // Setup
// const myArray = [];
//
// // Only change code below this line
// for (let i= 1; i <= 5; i++){
//     myArray.push(i);
// }
//
//

//  Iterate Odd Numbers With a For Loop

// Setup
// const myArray = [];
//
// // Only change code below this line
// for (let i = 1; i< 10; i+= 2) {
//     myArray.push(i);
// }
//-----------------------------------------------------------------------------//
//  Count Backwards With a For Loop                                            //
//-----------------------------------------------------------------------------//
// // Setup
// const myArray = [];
// //-----------------------------------------------------------------------------//
// //  Only change code below this line                                           //
// for (let i = 9; i > 0; i-=2) {
//     myArray.push(i);
// }
//
// //  Only change code above this line                                           //
// //-----------------------------------------------------------------------------//

//-----------------------------------------------------------------------------//
//  Iterate Through an Array with a For Loop                                   //
//-----------------------------------------------------------------------------//
// // Setup
// const myArr = [2, 3, 4, 5, 6];
//
// // Only change code below this line
// let total = 0;
// for (let i =0; i <myArr.length; i++) {
//     total += myArr[i];
// }
// console.log(total);
//

//--------------------//
//  Print the Array   //
//--------------------//
// console.log(myArray);


//-----------------------------------------------------------------------------//
//  Nesting For Loops                                                          //
//-----------------------------------------------------------------------------//
// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
// for (let i = 0; i < arr.length; i ++) {
//     for (let j = 0; j < arr[i].length; j ++) {
//         product *= arr[i][j];
//     }
// }
//   // Only change code above this line
//   return product;
// }
//
// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

//-----------------------------------------------------------------------------//
//  Iterate with JavaScript Do...While Loops                                   //
//-----------------------------------------------------------------------------//
// // Setup
// const myArray = [];
// let i = 10;
//
// // // Only change code below this line
// // while (i < 5) {
// //   myArray.push(i);
// //   i++;
// // }
//
// do {
//   myArray.push(i);
//   i++;
// } while (i < 5);
//
// console.log(myArray);

//-----------------------------------------------------------------------------//
//  Replace Loops using Recursion                                              //
//-----------------------------------------------------------------------------//
// function sum(arr, n) {
//   // Only change code below this line
// if  (n <= 0) {
//     return 0;
// } else {
//     return sum(arr, n-1) + arr[n-1];
// }
//   // Only change code above this line
// }
//
// console.log(sum([1], 0));
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));

//-----------------------------------------------------------------------------//
//  Profile Lookup                                                             //
//-----------------------------------------------------------------------------//

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
if (name.hasOwnProperty(prop)) {
  return contacts.name;
}
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));