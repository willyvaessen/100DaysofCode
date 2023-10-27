//  Caesars Cipher
//
// One of the simplest and most widely known ciphers is a Caesar cipher,
// also known as a shift cipher. In a shift cipher the meanings of the
// letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the
// letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
//
// Write a function which takes a ROT13 encoded string as input and
// returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic
// character (i.e. spaces, punctuation), but do pass them on.

//  Assignment code:

function decryptChar(character) {
    const alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"];   //  An array with the 26 letters of the alphabet.

    let decryptedChar = "";
    let indexEncryptedChar = alphabet.indexOf(character);
    let decryptIndex = indexEncryptedChar + 13;
    // console.log(decryptIndex);
    if (decryptIndex >= alphabet.length) {
        decryptedChar = alphabet[indexEncryptedChar + 13 - alphabet.length];
    } else {
        decryptedChar = alphabet[alphabet.indexOf(character) + 13];
    }
    return decryptedChar
}

function rot13(str) {
    //  Check length of the string  //  This is pure for testing.
    // console.log(str.length);        //  This is pure for testing.

    //  Declare a variable for the translated String
    let decryptedString = "";
    //  Loop over the string, with .charAt
    for (let i = 0; i < str.length; i++) {
        //  Do something with each character.
        // console.log(str.charAt(i));
        if ((/[A-Z]/).test(str.charAt(i))) {
            // console.log("Character " + str.charAt(i) + " is a letter. Decrypting and adding it to new string.");
            decryptedString += decryptChar(str.charAt(i));

        } else {
            // console.log("Character " + str.charAt(i) + " is NOT a letter. Adding it to new string without change.");
            decryptedString += str.charAt(i);
        }
    }

    return decryptedString;
}


//  Tests:
console.log(rot13("SERR PBQR PNZC!"));                                   //  Should return   FREE CODE CAMP
console.log(rot13("SERR CVMMN!"));                                      //  Should return   FREE PIZZA!
console.log(rot13("SERR YBIR?"));                                       //  Should return   FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));     //  Should return   THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.


// console.log(decryptChar("A"));
// console.log(decryptChar("B"));
// console.log(decryptChar("C"));
// console.log(decryptChar("D"))
// console.log(decryptChar("O"));
// console.log(decryptChar("P"));
// console.log(decryptChar("Q"));
// console.log(decryptChar("R"));
//// console.log(decryptChar("A"));
// // console.log(decryptChar("K"));
// // console.log(decryptChar("L"));
// // console.log("************************");
// // console.log(decryptChar("M"));
// // console.log(decryptChar("N"));