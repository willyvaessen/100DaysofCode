//  Use class Syntax to Define a Constructor Function

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor
class Rocket {
  launch() {
    console.log("To the moon and back!");
  }
}

const zeus = new SpaceShuttle('Jupiter2');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();


// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//  ---------------------------------------------------------------------------
//  Use getters and setters to Control Access to an Object

//  You can obtain values from an object and set the value of a property within
//  an object.
//
// These are classically called getters and setters.
//
// Getter functions are meant to simply return (get) the value of an object's
// private // variable to the user without the user directly accessing the
// private variable.
//
// Setter functions are meant to modify (set) the value of an object's private
// variable based on the value passed into the setter function. This change
// could involve calculations, or even overwriting the previous value completely.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

//  The console would display the strings anonymous and newAuthor.
//
// Notice the syntax used to invoke the getter and setter. They do not even
// look like functions. Getters and setters are important because they hide
// internal implementation details.
//
// Note: It is convention to precede the name of a private variable with an
// underscore (_). However, the practice itself does not make a variable private.

// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  //  getter
  get temperature() {
    return (5/9) * (this._fahrenheit - 32);
  }


  //  setter
set temperature(celsius) {
    return this._fahrenheit = (celsius * 9.0) / 5 + 32;
}
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(`Temperature is ${temp}`);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(`Temperature is ${temp}`);