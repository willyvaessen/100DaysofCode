//  Match Everything But Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result1 = quoteSample.match(nonAlphabetRegex).length;
console.log(result1);


//  Match All Numbers
let movieName1 = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result2 = movieName1.match(numRegex).length;
console.log(result2);

//  Match All Non-Numbers

let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result3 = movieName2.match(noNumRegex).length;
console.log(result3);
