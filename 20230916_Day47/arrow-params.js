//  Write Arrow Functions with Parameters

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

const myConcat2 = (arr1, arr2) => {

    return arr1.concat(arr2);
} ;
console.log(myConcat2([1, 2], [3, 4, 5]));