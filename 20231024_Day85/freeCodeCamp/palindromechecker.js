const stringsToCheck = [
"eye",                              //  Should return true
"_eye",                             //  Should return true
"race car",                         //  Should return true
"not a palindrome",                 //  Should return false
"A man, a plan, a canal. Panama",   //  Should return true
"never odd or even",                //  Should return true
"nope",                             //  Should return false
"almostomla",                       //  Should return false
"My age is 0, 0 si ega ym.",        //  Should return true
"1 eye for of 1 eye.",              //  Should return false
"0_0 (: /-\ :) 0-0",                //  Should return true
"five|\_/|four"                     //  Should return false
]

//  Code from the assignment:

function palindrome(str) {
    let regExp = /[^a-zA-Z0-9]/gi;
    let alteredString = str.replaceAll(regExp, "").toLowerCase();
    let reversedString = "";
    for (let i= alteredString.length -1; i >= 0; i--) {
        reversedString += alteredString[i];
    }
    console.log(alteredString);
    console.log(reversedString);
    return alteredString === reversedString;
}

console.log(palindrome("eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));