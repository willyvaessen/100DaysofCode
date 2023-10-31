//  Falsy Bouncer
//
// Remove all falsy values from an array. Return a new array; do not mutate the original array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
// Hint: Try converting each value to a Boolean.


function bouncer(arr) {
    let remainingArray = [];
    for (let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        if (arr[i]) remainingArray.push(arr[i]);
    }



  return remainingArray;
}


console.log(bouncer([7, "ate", "", false, 9]));                 //  Should return   [7, "ate", 9]
console.log(bouncer(["a", "b", "c"]));                          //  Should return   ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""]));     //  Should return   []
console.log(bouncer([null, NaN, 1, 2, undefined]));             //  Should return   [1, 2]
