//  Use export to Share a Code Block

    // const uppercaseString = (string) => {
    //   return string.toUpperCase();
    // }
    //
    // const lowercaseString = (string) => {
    //   return string.toLowerCase()
    // }
    //
    //
    // export { uppercaseString, lowercaseString };


//  Reuse JavaScript Code Using import

// import { uppercaseString, lowercaseString} from "./string-functions";
import * as stringFunctions from "./string-functions.js";

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");



