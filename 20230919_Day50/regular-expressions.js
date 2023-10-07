//  Using the Test Method

//     Regular expressions are used in programming languages to match parts of strings.
//     You create patterns to help you do that matching.
//
//     If you want to find the word "the" in the string The dog chased the cat, you could
//     use the following regular expression: /the/. Notice that quote marks are not required
//     within the regular expression.
//
//     JavaScript has multiple ways to use regexes. One way to test a regex is using
//     the .test() method. The .test() method takes the regex, applies it to a string
//     (which is placed inside the parentheses), and returns true or false if your pattern
//     finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /code/;
console.log(testRegex.test(testStr));

    // The test method here returns true.


let myString1 = "Hello, World!";
let myRegex1 = /Hello/;
let result1 = myRegex1.test(myString1); // Change this line
console.log(result1);


//  Match Literal Strings

    // In the last challenge, you searched for the word Hello using the regular
    // expression /Hello/. That regex searched for a literal match of the string
    // Hello. Here's another example searching for a literal match of the string Kevin:

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /search/; // Change this line
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);
console.log(result2)


//  Match a Literal String with Different Possibilities

    // Using regexes like /coding/, you can look for the pattern coding in another string.
    // This is powerful to search single strings, but it's limited to only one pattern.
    // You can search for multiple patterns using the alternation or OR operator: |.
    // This operator matches patterns either before or after it. For example, if you wanted
    // to match the strings yes or no, the regex you want is /yes|no/.
    // You can also search for more than just two patterns. You can do this by adding more
    // patterns with more OR operators separating them, like /yes|no|maybe/.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);
console.log(result3);


//  Ignore Case While Matching
//
//     Up until now, you've looked at regexes to do literal matches of strings.
//     But sometimes, you might want to also match case differences.
//
//     Case (or sometimes letter case) is the difference between uppercase letters
//     and lowercase letters. Examples of uppercase are A, B, and C. Examples of
//     lowercase are a, b, and c.
//
//     You can match both cases using what is called a flag. There are other flags
//     but here you'll focus on the flag that ignores case - the i flag. You can use
//     it by appending it to the regex. An example of using this flag is /ignorecase/i.
//     This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.


let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result4 = fccRegex.test(myString2);
console.log(result4);


//  Extract Matches

    // So far, you have only been checking if a pattern exists or not within a string.
    // You can also extract the actual matches you found with the .match() method.

    // To use the .match() method, apply the method on a string and pass in the regex
    // inside the parentheses.

    // Here's an example:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));

    // Here the first match would return ["Hello"] and the second would return ["expressions"].

    // Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5 = extractStr.match(codingRegex); // Change this line
console.log(result5);


//  Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line
console.log(result6);


//  Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


//  Match Single Character with Multiple Possibilities
let quoteSample1 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result7 = quoteSample1.match(vowelRegex); // Change this line
console.log(result7)

//  Match Letters of the Alphabet
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result8 = quoteSample2.match(alphabetRegex); // Change this line
console.log(result8);

//  Match Numbers and Letters of the Alphabet
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/ig; // Change this line
let result9 = quoteSample3.match(myRegex2); // Change this line
console.log(result9);

//  Match Single Characters Not Specified
let quoteSample4 = "3 blind mice.";
let myRegex3 = /[^0-9|aeiou]/gi; // Change this line
let result10 = quoteSample4.match(myRegex3); // Change this line
console.log(result10);

//  Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/g; // Change this line
let result11 = difficultSpelling.match(myRegex4);
console.log(result11);

//  Match Characters that Occur Zero or More Times
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

// let result12 = chewieQuote.match(chewieRegex);
// console.log(result12);


