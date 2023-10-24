function findLongestWordLength(str) {
    let split = str.split(' ');
    // console.log(split);
    // console.log(split[0].length);
    let word = split[0];
    // console.log(word);
    for (let i = 0; i < split.length; i++) {
        // console.log(split[i].length);
        if (split[i].length > word.length) {
            // console.log("Word was " + word);
            word = split[i];
            // console.log("Word will be " + word);

        }
        // console.log(word);
    }
    return word.length;
// console.log(word);
    // console.log(word.length);

    // return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//  Return Largest Numbers in Arrays
//
// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a simple for loop,
// and access each member with array syntax arr[i].

function largestOfFour(arr) {
    const largestNums = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        let num = arr[i][0];
        console.log("Highest number is now: " + num);
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > num) {
                console.log("Highest number was: " + num);
                num = arr[i][j]
                console.log("Highest number is now: " + num);
            }
        }
        largestNums.push(num);

    }
    console.log("The Largest Numbers are: " + largestNums);
    return largestNums;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//  Confirm the Ending
//
// Check if a string (first argument, str) ends with the given target string
// (second argument, target).
//
// This challenge can be solved with the .endsWith() method, which was introduced
// in ES2015. But for the purpose of this challenge, we would like you to use one
// of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    // console.log(str)
    // console.log("Last position in the string is " + (str.length-target.length));
    let subString = str.substring((str.length - target.length));
    // console.log(subString);
    // console.log(subString===target);
    return subString === target;
}

confirmEnding("Bastian", "n");


//  Repeat a String Repeat a String
//
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let repeatedString = "";
    if (num <= 0) {
        return repeatedString;
    } else {
        for (let i=1; i <= num; i++) {
            repeatedString+=str;
        }return repeatedString;
    }

}

repeatStringNumTimes("abc", 3);


//  Truncate a String
//
// Truncate a string (first argument) if it is longer than the given maximum
// string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (num < str.length) {
        return str.slice(0, num)+'...';
    } else {
        return str.slice(0, num);
    }

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


//  Finders Keepers
//
// Create a function that looks through an array arr and returns the first
// element in it that passes a 'truth test'. This means that given an element x,
// the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

function findElement(arr, func) {
    let num =0;
  for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
          return num;
      }

  }return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


//  Title Case a Sentence
//
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting
// words like the and of.

function titleCase(str) {
    const splitString = str.split(' ');
    let titleCasedString = '';
    for (let i=0;i<splitString.length;i++) {
        // console.log(splitString[i]);
        let word = splitString[i].toLowerCase()
        // console.log(word);
        titleCasedString += word.charAt(0).toUpperCase()+word.slice(1)+" ";
    }
  return titleCasedString;
}

titleCase("I'm a little tea pot");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))