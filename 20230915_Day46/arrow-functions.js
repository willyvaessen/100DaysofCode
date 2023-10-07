//  Use Arrow Functions to Write Concise Anonymous Functions
var magic = function() {
  return new Date();
};

console.log(magic());


const magic2 = () => new Date();

console.log(magic2())


//  Write Arrow Functions with Parameters
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));