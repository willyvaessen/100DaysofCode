// String.fromCharCode(Math.random() * 128)

//
// for (let i = 0; i < 2048; i++) {
// console.log(i + ": " + String.fromCharCode(i));
// }

// console.log(String.fromCharCode(0));

let string = 'r3c16';

console.log("The index of the C-character is: " + string.indexOf('c'))
let hCoord = string.slice(1, (string.indexOf('c')));
let vCoord= string.slice((string.indexOf('c')+1), string.length);
console.log("Horizontal Coord: "+ hCoord + ", Vertical Coord: " + vCoord);

