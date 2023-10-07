//  Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < result.failure.length; i++) {
      failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);

//  Original code from assignment:
//  const failureItems = [];


//  ---------------------------------------------------------------------------
//  Write Concise Object Literal Declarations Using Object Property Shorthand

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return ({
    name,
    age,
    gender
  });
  // Only change code above this line
};


//  Original code from assignment:
//  return {
//     name: name,
//     age: age,
//     gender: gender
//   };

console.log(createPerson("Zodiac Hasbro", 56, "male"));


//  ---------------------------------------------------------------------------
//  Write Concise Declarative Functions with ES6

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    // "use strict";
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);


//  Original code from assignment:
//  const bicycle = {
//   gear: 2,
//   setGear: function(newGear) {
//     this.gear = newGear;
//   }
// };

