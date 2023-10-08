//  Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
      return [];
  } else {
      const rangedArray = rangeOfNumbers(startNum, endNum -1);
      rangedArray.push(endNum);
      return rangedArray;
  }
}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));



//
// function countdown(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         console.log("N is now: "+ n);
//         // const countDownArray = countdown(n - 1);
//         const countDownArray =[];
//         console.log("Countdown Array before unshift " + countDownArray);
//         countDownArray.unshift(n);
//         console.log("Countdown Array after unshift " + countDownArray);
//         return countDownArray;
//     }
// }
//
// console.log(countdown(11));