let leftTerm = document.getElementById("#leftTerm");
let rightTerm = document.getElementById("#rightTerm");

console.log("Left side is "+leftTerm.textContent);

function randomTerm() {
    return Math.floor(Math.random() * 10);
}
//
// function createAssignment() {
//     let left = randomTerm().toString();
//     console.log("Left term is " + left)
//     leftTerm.content = left;
//     console.log(leftTerm)
// // rightTerm.textContent = randomTerm().toString();
// }
//
// createAssignment()
