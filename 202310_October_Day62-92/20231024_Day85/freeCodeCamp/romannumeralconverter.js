//  Convert the given number into a roman numeral.

// The numbers:


// console.log(romans.M);

let num = 3999;

//  Assignment code:

function convertToRoman(num) {
      const romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let romanString = '';

for (const key  in romans) {
  const numericValue = romans[key];
  while (numericValue <= num) {
    romanString += key;
    num -= numericValue;
  }
}
 return romanString;
}

console.log(convertToRoman(num));