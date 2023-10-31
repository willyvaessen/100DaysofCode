// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray
// let row = [];
//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }
//
// let matrix = zeroArray(3, 2);
// console.log(matrix);
//

//  Prevent Infinite Loops with a Valid Terminal Condition
//
// function myFunc() {
//   for (let i = 1; i <= 4; i += 2) {
//     console.log("Still going!");
//   }
// }
//
// myFunc();
//
//
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([... arr]);
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }
//
// console.log(copyMachine([true, false, true], 2));
//

// function filteredArray(arr, elem) {
//     let newArr = [];
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//         // console.log("Sub-array " + i + " is: " + arr[i]);
//         // console.log(arr[i].indexOf(elem));
//         if (arr[i].indexOf(elem) === -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     // Only change code above this line
//     return newArr;
// }

//
// console.log("1: " + filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// console.log("2: " + filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
// console.log("3: " + filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
// console.log("4: " + filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));


// if (arr.indexOf(elem) === -1) {
//     // console.log(arr[elem]);
//     newArr.push(arr[elem]);
// }
//
//
// let users1 = {
//     Alan: {
//         age: 27,
//         online: true
//     },
//     Jeff: {
//         age: 32,
//         online: true
//     },
//     Sarah: {
//         age: 48,
//         online: true
//     },
//     Ryan: {
//         age: 19,
//         online: true
//     }
// };
//
// function isEveryoneHere(userObj) {
//     // Only change code below this line
//
//     // Only change code above this line
// }
//
// console.log(isEveryoneHere(users1));

//
// const users = {
//     Alan: {
//         online: false
//     },
//     Jeff: {
//         online: true
//     },
//     Sarah: {
//         online: false
//     }
// }
//
// function countOnline(allUsers) {
//     // Only change code below this line
//     let online = 0;
//     for (const user in allUsers) {
//         if ((allUsers[user].online) === true) {
//             online++
//         }
//
//
//     }
//     return online;
//     // Only change code above this line
// }
//
// console.log(countOnline(users));
//


// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
// return Object.keys(obj);
//   // Only change code above this line
// }
//
// console.log(getArrayOfUsers(users));


let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
userObj.data.friends.push(friend);
return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));