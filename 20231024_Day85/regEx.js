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

//  Practice: Asterisk *
//
// Use the asterisk * to write the expression that will select each word, suitable
// for the absence of the letter e in the text and the presence of one or more.

let practice07 = "dp dep deep";
let regExpPractice07 = /de*p/g;


//  Practice: Plus Sign +
//
// Write the expression using the plus sign + to select words in which the
// letter e occurs one or more times in the text.

let practice08 = "dp dep deep";
let regExpPractice08 = /de+p/g;


//  Practice: Question Mark ?
//
// Write the expression indicating that the letter n is optional in the text,
// using the question mark ?.
// Thus, both the words a and an can be selected.

let practice09 = "a, an";
let regExpPractice09 = /an?/g;


//  Practice: Curly Braces - 1
//
// Write the expression using curly braces {} that will find texts containing
// 4 numbers side by side. Remember that the range [0-9] will match a single digit.

let practice10 = "Release 10/9/2021";
let regExpPractice10 = /[0-9]{4}/g;


//  Practice: Curly Braces - 2
//
// Write the expression using curly braces {} that will find texts containing
// at least 2 numbers side by side.

let practice11 = "Release 10/9/2021";
let regExpPractice11 = /[0-9]{2,}/g;


//  Practice: Curly Braces - 3
//
// Write the expression using curly braces {} that will find texts containing
// at least 1 and at most 4 numbers side by side.

let practice12 = "Release 10/9/2021";
let regExpPractice12 = /[0-9]{1,4}/g;


//  Parentheses ( ): Grouping
//
// We can group an expression and use these groups to reference or enforce some rules.
// To group an expression, we enclose () in parentheses.
// For now just group haa below.

let text15 = "ha-ha,haa-haa";
let regExp15 = /(haa)/g;


//  Referencing a Group
//
// The words ha and haa are grouped below. The first group is used by
// writing \1 to avoid rewriting.
// Here 1 denotes the order of grouping. Type \2 at the end of the expression
// to refer to the second group.

let text16 = "ha-ha,haa-haa";
let regExp16 = /(ha)-\1,(haa)-\2/g;


//  Parentheses (?: ): Non-capturing Grouping
//
// You can group an expression and ensure that it is not captured by references.
// For example, below are two groups. However, the first group reference we
// denote with \1 actually indicates the second group, as the first is a
// non-capturing group.

let text17 = "ha-ha,haa-haa";
let regExp17 = /(?:ha)-ha,(haa)-\1/g;


//  Pipe Character |
//
// It allows to specify that an expression can be in different expressions.
// Thus, all possible statements are written separated by the pipe sign |.
// This differs from charset [abc], charsets operate at the character level.
// Alternatives are at the expression level.
// For example, the following expression would select both cat and rat.
// Add another pipe sign | to the end of the expression and type dog so
// that all words are selected.

let text18 = "cat rat dog";
let regExp18 = /(c|r)at|dog/g;


//  Escape Character \
//
// There are special characters that we use when writing regex. { } [ ] / \ + * . $^ | ?
// Before we can select these characters themselves, we need to use an escape character \.
// For example, to select the dot . and asterisk * characters in the text, let's add
// an escape character \ before it.

let text19 = "(*) Asterisk.";
let regExp19 = /(\*|\.)/g;


//  Caret Sign ^:
// Selecting by Line Start
//
// We were using [0-9] to find numbers.
// To find only numbers at the beginning of a line, prefix this expression with the ^ sign.

let text20 = "Basic Omellette Recipe\n" +
    "\n" +
    "1. 3 eggs, beaten\n" +
    "2. 1 tsp sunflower oil\n" +
    "3. 1 tsp butter";
let regExp20 = /^[0-9]/g;


//  Dollar Sign $:
// Selecting by End of Line
//
// Let's use the $ sign after the html value to find the html texts only at the end of the line.

let text21 = "https://domain.com/what-is-html.html\n" +
    "https://otherdomain.com/html-elements\n" +
    "https://website.com/html5-features.html";
let regExp = /html$/g;


//  Word Character \w: Letter, Number and Underscore
//
// The expression \w is used to find letters, numbers and underscore characters.
// Let's use the expression \w to find word characters in the text.

let text22 = "abcABC123 _.:!?";
let regExp22 = /\w/g;


//  Except Word Character \W
//
// The expression \W is used to find characters other than letters, numbers, and
// underscores.

let text23 = "abcABC123 _.:!?";
let regExp23 = /\W/g;


//  Number Character \d
//
// \d is used to find only number characters.


let text24 = "abcABC123 .:!?";
let regExp24 = /\d/g;


//  Except Number Character \D
//
// \D is used to find non-numeric characters.

let text25 = "abcABC123 .:!?";
let regExp25 = /\D/g;


//  Space Character \s
//
// \s is used to find only space characters.

let text26 = "abcABC123 .:!?";
let regExp26 = /\s/g;


//  Except Space Character \S
//
// \S is used to find non-space characters.

let text27 = "abcABC123 .:!?";
let regExp27 = /\S/g;


//  Lookarounds
//
// If we want the phrase we're writing to come before or after another phrase,
// we need to "lookaround".
// Take the next step to learn how to "lookaround".


//  Positive Lookahead: (?=)
//
// For example, we want to select the hour value in the text.
// Therefore, to select only the numerical values that have PM after them,
// we need to write the positive look-ahead expression (?=) after our expression.
// Include PM after the = sign inside the parentheses.

let text28 = "Date: 4 Aug 3PM";
let regExp28 = /\d+(?=PM)/g;


//  Negative Lookahead: (?!)
//
// For example, we want to select numbers other than the hour value in the text.
// Therefore, we need to write the negative look-ahead (?!) expression after our
// expression to select only the numerical values that do not have PM after them.
// Include PM after the ! sign inside the parentheses.

let text29 = "Date: 4 Aug 3PM";
let regExp29 = /\d+(?!PM)/g;


//  Positive Lookbehind: (?<=)
//
// For example, we want to select the price value in the text.
// Therefore, to select only the number values that are preceded by $,
// we need to write the positive lookbehind expression (?<=) before our expression.
// Add \$ after the = sign inside the parenthesis.

let text30 = "Product Code: 1064 Price: $5";
let regExp30 = /\d+(?<=$)/g;  //    /(?<=\$)\d+/g


//  Negative Lookbehind: (?<!)
//
// For example, we want to select numbers in the text other than the price value.
// Therefore, to select only numeric values that are not preceded by $,
// we need to write the negative lookbehind (?<!) before our expression.
// Add \$ after the ! inside the parenthesis.

// let text31 = "Product Code: 1064 Price: $5";
// let regExp31 = /\d+(?<!$)/g; // /(?<!\$)\d+/g

//  Flags
//
// Flags change the output of the expression.
// That's why flags are also called modifiers.
// Flags determine whether the typed expression treats text as separate lines,
// is case sensitive, or finds all matches. Continue to the next step to learn
// the flags.

//  Global Flag
//
// The global flag causes the expression to select all matches.
// If not used it will only select the first match. Now enable the global flag
// to be able to select all matches.
//  It is what comes after the last /

let text32 = "domain.com, test.com, site.com";
let regExp32 = /\w+\.com/g;

//  Multiline Flag
//
// Regex sees all text as one line.
// But we use the multiline flag to handle each line separately.
// In this way, the expressions we write to identify patterns at the end of
// lines work separately for each line.
// Now enable the multiline flag to find all matches.

let text33 = "domain.com\n" +
    "test.com\n" +
    "site.com";
let regExp33 = /\w+\.com$/gm;

//  Case-insensitive Flag
//
// In order to remove the case-sensitivity of the expression we have written,
// we must activate the case-insensitive flag.

// let text34 = "DOMAIN.COM
// TEST.COM
// SITE.COM";
// let regExp34 = /\w+\.com$/gmi;

//  Greedy Matching
//
// Regex does a greedy match by default.
// This means that the matchmaking will be as long as possible.
// Check out the example below.
// It refers to any match that ends in r and can be any character preceded by it.
// But it does not stop at the first letter r.

let text35 = "ber beer beeer beeeer";
let regExp35 = /.*r/g;

//  Lazy Matching
//
// Lazy matchmaking, unlike greedy matching, stops at the first matching.
// For example, in the example below, add a ? after * to find the first
// match that ends with the letter r and is preceded by any character.
// It means that this match will stop at the first letter r.

let text36 = "ber beer beeer beeeer";
let regExp36 = /.*?r/;

