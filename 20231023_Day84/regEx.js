//  I decided to have a closer look at regular expressions, since that was not
//  entirely clear to me when working through that on freeCodeCamp.org

//  On https://regexlearn.com I found lessons that seem to explain it quite well,
//  so I'll be working my way through those lessons.

//  Intro

//  Regex is short for Regular Expression. It helps to match, find or manage text.
//  Start by typing OK in the Regex field to proceed to the first step and access
//  the more detailed description..

let text01 = 'Understand? OK or NOT';
let regExp01 = /OK/g;


//  What is Regular Expressions Regex?

//  Regular Expressions are a string of characters that express a search pattern.
//  Often abbreviated as Regex or Regexp. It is especially used to find or replace
//  words in texts. In addition, we can test whether a text complies with the rules
//  we set.
//
// For example, let's say you have a list of filenames. And you only want to find
// files with the pdf extension. Following typing an expression ^\w+\.pdf$ will work.
// The meaning of the definitions in this expression will become clearer as the steps
// progress.

let text02 = "readme.md\n" +
    "document.pdf\n" +
    "image.png\n" +
    "music.mp4\n" +
    "manual.pdf"

let rexExp02 = /^\w+\.pdf$/gm;
console.log(text02);

//  Basic Matchers
//
// The character or word we want to find is written directly. It is similar to a
// normal search process.
// For example, to find the word curious in the text, type the same.

let test03 = "“I have no special talents. I am only passionately curious.” (Albert Einstein)";
let regExp03 = /curious/gm;


//  Dot .: Any Character

//  The period . allows selecting any character, including special characters and spaces.
//  Type a period . in the Regex field to proceed.

let text04 = "abcABC123 .:!?";
let regExp04 = /./g;


//  Character Sets [abc]

//  If one of the characters in a word can be various characters, we write it in square
//  brackets [] with all alternative characters. For example, to write an expression
//  that can find all the words in the text, type the characters a, e, i, o, u adjacently
//  within square brackets [].

let text05 = "bar ber bir bor bur";
let regExp05 = /b[aeiou]r/g;


//  Negated Character Sets [^abc]
//
// To find all words in the text below, except for ber and bor,
// type e and o side by side after the caret ^ character inside square brackets [].

let text06 = "bar ber bir bor bur";
let regExp06 = /b[^eo]r/g;

//  Letter Range[a-z]
//
// To find the letters in the specified range, the starting letter and the ending
// letter are written in square brackets [] with a dash between them -.
// It is case-sensitive. Type the expression that will select all lowercase letters
// between e and o, including themselves.

let text07 = "abcdefghijklmnopqrstuvwxyz";
let regExp07 = /e-o/g;


//  Number Range[0-9]
//
// To find the numbers in the specified range, the starting number and the ending number,
// are written in square brackets [] with a dash - between them. Write an expression that
// will select all numbers between 3 and 6, including themselves.

let text08 = "0123456789";
let regExp08 = /[3-6]/g;

//  Practice: Basic Matcher
//
// Write the expression that will select the words of in the text.

let practice01 = "“Every man takes the limits of his own field of vision for the limits of the world.”\n" +
    " (Arthur Schopenhauer)";
let regExpPractice01 = /of/g;


//  Practice: Any Character
//
// Type the expression to select individual letters, numbers, spaces, and special
// characters in the text. The expression you type must match any character.

let practice02 = "az AZ 09 _- = !? ., :;";
let regExpPractice02 = /./g;


//  Practice: Character Sets
//
// Write the phrase that matches each word in the text.
// The only characters that change are the initials of the words.

let practice03 = "beer deer feer";
let regExpPractice03 = /[bdf]eer/g;


//  Practice: Negated Character Sets
//
// Write down the expression that will match anything other than the
// words beor and beur in the text. Do this using the negated character set.

let practice04 = "bear beor beer beur";
let regExpPractice04 = /be[^ou]r/g;


//  Practice: Letter Range
//
// Write the expression that will select the letters from g to k in the text.
// g and k letters should also be included in this range.

let practice05 = "abcdefghijklmnopqrstuvwxyz";
let regExpPractice05 = /[g-k]/g;


//  Practice: Number Range
//
// Type an expression to select numbers from 2 to 7 in the text.
// 2 and 7 should also be included in this range.

let practice06 = "0123456789";
let regExpPractice06 = /[2-7]/g;


//  Repetitions
//
// Some special characters are used to specify how many times a character will
// be repeated in the text. These special characters are the plus +, the
// asterisk *, and the question mark ?.

//  Asterisk *
//
// We put an asterisk * after a character to indicate that the character may
// either not match at all or can match many times. For example, indicate that
// the letter e should never occur in the text, or it can occur once or more
// side by side.

let text09 = "br ber beer";
let regExp09 = /be*r/g;


//  Plus Sign +
//
// To indicate that a character can occur one or more times, we put a plus sign +
// after a character. For example, indicate that the letter e can occur one or
// more times in the text.

let text10 = "br ber beer";
let regExp10 = /be+r/g;


//  Question Mark ?
//
// To indicate that a character is optional, we put a ? question mark after a character.
// For example, indicate that the following letter u is optional.

let text11 = "color, colour";
let regExp11 = /colour/g;


//  Curly Braces - 1
//
// To express a certain number of occurrences of a character, at the end we write
// curly braces {n} along with how many times we want it to occur.
// For example, indicate that the following letter e can occur only 2 times.

let text12 = "ber beer beeer beeeer";
let regExp12 = /be{2}r/g;


//  Curly Braces - 2
//
// To express at least a certain number of occurrences of a character,
// immediately after the character we write at least how many times we
// want it to occur followed by a comma , and wrapped inside curly
// braces {n, }. For example, indicate that the following letter e
// can occur at least 3 times.

let text13 = "ber beer beeer beeeer";
let regExp13 = /be{3,}r/g;


//  Curly Braces - 3
//
// To express the occurrence of a character in a certain number range,
// we write curly braces {x,y} with the interval we want to go to the end.
// For example, indicate that the following letter e can only occur between 1 and 3.

let text14 = "ber beer beeer beeeer";
let regExp14 = /be{1,3}r/g;


//  Practice

//  Now it's time to do some practice to consolidate what we've learned.

