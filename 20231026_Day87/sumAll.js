//  Sum All Numbers in a Range
//
// We'll pass you an array of two numbers. Return the sum of those two
// numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
//
// For example, sumAll([4,1]) should return 10 because sum of all the
// numbers between 1 and 4 (both inclusive) is 10.

//  Assignment code:

function sumAll(arr) {
    let low;
    let high;
    //  If the first number is smaller than the last, we work from low to high.
    let sum = 0;
    let element = arr[0];
    //  The if-statement checks to see if we go from low to high and assigns values to low and high.
    if (arr[0] < arr[arr.length -1]) {
        low = arr[0];
        high = arr[arr.length -1];
    } else if (arr[0] > arr[arr.length -1]) {
        low = arr[arr.length -1];
        high = arr[0];
    }
    //  Now we can use a while loop for the sum.
    while (low <= high) {
        sum += low;
        low++
    }

  return sum;
}


//  Tests:

console.log(sumAll([1, 4]));
console.log("------------------------------")
console.log(sumAll([4, 1]));
console.log("------------------------------")
// console.log("------------------------------")
// console.log(sumAll([5, 10]));
// console.log("------------------------------")
// console.log(sumAll([10, 5]));


//
// console.log("Starting with: " + element);
//         while (element < arr.length-1) {
//             sum += element;
//             element++;