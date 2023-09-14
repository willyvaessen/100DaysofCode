//  Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
    //      check if num equals 0 : if it is, return "zero", if it is not, check if num is greater than 0. It if is, return "positive", otherwise return "negative"
    return  (num === 0) ? "zero" : (num > 0)? "positive" : "negative";
}

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));