let text3 = "domain.com\n" +
    "test.com\n" +
    "site.com";
let regExp3 = /\w+\.com$/gm;

console.log("3: " + regExp3.test(text3));

//  From freeCodeCamp
//      JavaScript Algorithms and Data Structures
//      Regular Expressions course:

//  Regular expressions, often shortened to "regex" or "regexp", are patterns
//  that help programmers match, search, and replace text. Regular expressions
//  are very powerful, but can be hard to read because they use special
//  characters to make more complex, flexible matches.
//
// In this course, you'll learn how to use special characters, capture groups,
// positive and negative lookaheads, and other techniques to match any text you want.


//  31. Reuse Patterns Using Capture Groups

//  Example:
let repeatStr01 = "row row row your boat";
let repeatRegex01 = /(\w+) \1 \1/;
console.log("Test Regular Expression 01: " + repeatRegex01.test(repeatStr01)); // Returns true
console.log("Match Regular Expression 01: " + repeatStr01.match(repeatRegex01)); // Returns ["row row row", "row"]



//  Assignment:
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log("Lesson 31: "+ result);


//  32. Use Capture Groups to Search and Replace

//  Searching is useful. However, you can make searching even more powerful
//  when it also changes (or replaces) the text you match.
//
// You can search and replace text in a string using .replace() on a string.
// The inputs for .replace() is first the regex pattern you want to search for.
// The second parameter is the string to replace the match or a function to do something.

//  Example:
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

//  The replace call would return the string "The sky is blue." .
//
// You can also access capture groups in the replacement string with dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

//  The replace call would return the string Camp Code.

//  Assignment:

//  Write a regex fixRegex using three capture groups that will search for each
//  word in the string one two three.
//  Then update the replaceText variable to replace one two three with the string
//  three two one and assign the result to the result variable. Make sure you are
//  utilizing capture groups in the replacement string using the dollar sign ($)
//  syntax.

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result32 = str.replace(fixRegex, replaceText);
console.log("Result for assignment 32 is:  " + result32);


//  33. Remove Whitespace from Start and End

//  Sometimes whitespace characters around strings are not wanted but are there.
//  Typical processing of strings is to remove the whitespace at the start and end of it.

//
// Write a regex and use the appropriate string methods to remove whitespace
// at the beginning and end of strings.
//
// Note: The String.prototype.trim() method would work here, but you'll need to
// complete this challenge using regular expressions.

//  Assignment:
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result33 = hello.replace(wsRegex, ''); // Change this line

console.log(result33);