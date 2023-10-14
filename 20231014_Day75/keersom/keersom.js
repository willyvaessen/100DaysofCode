let leftTerm = document.getElementById("leftTerm");
let rightTerm = document.getElementById("rightTerm");



function randomTerm() {
    return Math.floor((Math.random() * 10)+1);
}

function createAssignment() {
    let left = randomTerm();
    let right = randomTerm();
    // console.log("Left term is " + left.toString());
    // console.log("right term is " + right.toString());
    leftTerm.textContent = left.toString();
    rightTerm.textContent = right.toString();
    // console.log("The answer is "+solution);
    return left * right;
    // console.log(leftTerm)
    // leftTerm.textContent = randomTerm().toString();
// rightTerm.textContent = randomTerm().toString();
}

let assignment = createAssignment();
console.log(assignment);

let userInputAnswer = document.getElementById("answer");
let checkForm = document.getElementById("checkUserAnswer");
checkForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //  Handle submit
    checkAnswer()
});
function checkAnswer() {
    console.log("You entered "+ userInputAnswer.value.toString());
    console.log("Answer should be " + assignment);
    if (userInputAnswer === assignment) {
        console.log("Dat is goed.")
    } else {
        console.log("Dat is helaas fout.")
    }
}
// console.log(createAssignment())

// console.log("Left side is "+leftTerm.toString());
// console.log("Right side is "+leftTerm.toString());