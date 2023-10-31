//  Telephone Number Validator
//
// Return true if the passed string looks like a valid US phone number.
//
// The user may fill out the form field any way they choose as long as it has
// the format of a valid US number.
// The following are examples of valid formats for US numbers (refer to the
// tests below for other variants):


        // 555-555-5555
        // (555)555-5555
        // (555) 555-5555
        // 555 555 5555
        // 5555555555
        // 1 555 555 5555

//  For this challenge you will be presented with a string such as 800-692-7753
//  or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone
//  number based on any combination of the formats provided above.
//  The area code is required. If the country code is provided,
//  you must confirm that the country code is 1. Return true if the string is
//  a valid US phone number; otherwise return false.


//  The assignment code:

function telephoneCheck(str) {
  regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/gm;
  //      /^(1\s?)?   (\d{3}|\(\d{3}\))   [\-\s]?   \d{3}   [\-\s]?   \d{4}$ /gm    --> Correct
  //      /^(1\s?)?   (\d{3}|\(\(\d{3}\)) [\-\s]?   \d{3}   [\-\s]?   (\d{4})$ /gm  --> Incorrect
  //  (1\s?)?(\d{3}|\(\(\d{3}\))(\s?|-?)(\d{3})(\s?|-?)(\d{4})
  console.log("Outcome for phone number " + str + " is: " + regExp.test(str));
  return regExp.test(str);
}



//  Tests

console.log("Phone number is: " +telephoneCheck("5555555555"));



// //  Other tests

telephoneCheck("555-555-5555") 			//	    should return a boolean.
console.log("----------  Below should return true ---------- ")
telephoneCheck("1 555-555-5555") 		//		should return true.
telephoneCheck("1 (555) 555-5555") 		//	    should return true.
telephoneCheck("5555555555") 			//	    should return true.
telephoneCheck("555-555-5555") 			//	    should return true.
telephoneCheck("(555)555-5555") 		//		should return true.
telephoneCheck("1(555)555-5555") 		//		should return true.
telephoneCheck("1 555 555 5555") 		//		should return true.
telephoneCheck("1 456 789 4444") 		//      should return true.
console.log("----------  Below should return false ---------- ")
telephoneCheck("555-5555");   			//      should return false.
telephoneCheck("5555555"); 				//	    should return false.
telephoneCheck("1 555)555-5555"); 		//		should return false.
telephoneCheck("123**&!!asdf#"); 		//		should return false.
telephoneCheck("55555555"); 			//	    should return false.
telephoneCheck("(6054756961)"); 		//	    should return false.
telephoneCheck("2 (757) 622-7382"); 	//	    should return false.
telephoneCheck("0 (757) 622-7382"); 	//	    should return false.
telephoneCheck("-1 (757) 622-7382"); 	//		should return false.
telephoneCheck("2 757 622-7382"); 		//		should return false.
telephoneCheck("10 (757) 622-7382"); 	//		should return false.
telephoneCheck("27576227382"); 			//	    should return false.
telephoneCheck("(275)76227382"); 		//		should return false.
telephoneCheck("2(757)6227382"); 		//		should return false.
telephoneCheck("2(757)622-7382"); 		//		should return false.
telephoneCheck("555)-555-5555"); 		//		should return false.
telephoneCheck("(555-555-5555"); 		//		should return false.
telephoneCheck("(555)5(55?)-5555");		//	    should return false.
telephoneCheck("55 55-55-555-5"); 		//		should return false.
telephoneCheck("11 555-555-5555"); 		//  	should return false.



//  555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
//
// // True
// 1 555-555-5555
// 1 (555) 555-5555
// 555-555-5555
// (555)555-5555
// 1(555)555-5555
//
// 1 555 555 5555
// 1 456 789 4444
//
//
// // False
// 555-5555")
// 5555555")
// 1 555)555-5555
// 123**&!!asdf#
// 5555555
// (6054756961)
// 2 (757) 622-7382
// 0 (757) 622-7382
// -1 (757) 622-7382
// 2 757 622-7382
// 10 (757) 622-7382
// 27576227382
// (275)76227382
// 2(757)6227382
// 2(757)622-7382
// 555)-555-5555
// (555-555-5555"
// (555)5(55?)-5555")
// 55 55-55-555-5")
// 11 555-555-5555")