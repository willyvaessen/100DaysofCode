let leftTerm = document.getElementById("leftTerm");
let rightTerm = document.getElementById("rightTerm");
const resultContainer = document.getElementById("resultOutput");
const userInputAnswer = document.getElementById("answer");
let checkForm = document.getElementById("checkUserAnswer");
let score = 0;

//  This function returns a random number from 1 to 10
function randomTerm() {
    return Math.floor((Math.random() * 10)+1);
}

//  This function creates the assignment to solve.
function createAssignment() {
    let left = randomTerm();
    let right = randomTerm();
    leftTerm.textContent = left.toString();
    rightTerm.textContent = right.toString();
    return left * right;
}
// runPuzzle();

//  The function below checks the user input against the outcome of the assignment.
function checkAnswer() {
    let result;
    if (userInputAnswer.value === assignment.toString()) {
        console.log("Dat is goed.")
        result = "Goed";
        score++;
    } else {
        console.log("Dat is helaas fout.")
        result = "Fout";
    }
    return result;
}
//  The following code handles the form submit button.
//  Function
checkForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //  Handle submit
    // checkAnswer()
    resultContainer.textContent = checkAnswer();
    if (resultContainer.textContent === "Goed") {
        resultContainer.style.color = "rgb(0,120,0)";
        resultContainer.style.fontSize = "78px";
    } else {
        resultContainer.style.color = "rgb(120,0,0)";
        resultContainer.style.fontSize = "78px";
    }
});

//  This function runs the actual puzzle.
// function runPuzzle() {
    let assignment = createAssignment();
// }


// createAssignment();
