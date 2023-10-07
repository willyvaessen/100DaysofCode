// This program checks if a string is a palindrome
// Step 1. Get a string (either declare it or get it from user input)
// Step 2. Define a function that takes the string as an argument and
//      2a. Strips the string from spaces and non-alfanumeric characters
//      2b. Reverses the string
//      2c. Compares the original string (after removing carp) to the reversed string. Return True if they are the same.

//  Step 1. Get a string from the user.
let originalString = "htraE morf sgniteerG";
console.log("Originele String:"+ originalString);


//  Step 2b. Reverse the string
function reverseString(str) {
    let reversedString = "";
    for (let i = str.length -1; i >= 0; i--) {
        reversedString = reversedString + str[i];
        console.log(reversedString);
    } return reversedString;
}

console.log("Omgekeerde String:" + reverseString(originalString));

//  2c. Compare strings

function compareStrings(stringOriginal, stringReversed) {
    return stringOriginal === stringReversed;
}

console.log(compareStrings(originalString, reverseString(originalString)));
