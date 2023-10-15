let leftTerm = document.getElementById("leftTerm");
let rightTerm = document.getElementById("rightTerm");
const resultContainer = document.getElementById("resultOutput");
const scoreContainer = document.getElementById("score");
const userInputAnswer = document.getElementById("answer");
let checkForm = document.getElementById("checkUserAnswer");
let continueButton = document.getElementById("nextButton");
let score = 0;
let assignment = createAssignment();

//  This function returns a random number from 1 to 10
function randomTerm() {
    return Math.floor((Math.random() * 10) + 1);
}

//  This function creates the assignment to solve.
function createAssignment() {
    let left = randomTerm();
    let right = randomTerm();
    leftTerm.textContent = left.toString();
    rightTerm.textContent = right.toString();
    // userInputAnswer.focus();
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
        scoreContainer.textContent = score.toString();
        document.querySelector("#checkButton").disabled = true;
        document.querySelector("#nextButton").disabled = false;
        document.querySelector("#nextButton").focus();
    } else {
        console.log("Dat is helaas fout.")
        result = "Fout";
    }
    return result;
}

//  The following code handles the form submit button.


//  The following handles the nextButton


//  This function runs the actual puzzle.
function runPuzzle() {
    // createAssignment();

}

// do {
//     runPuzzle();
// } while (score < 10);

// createAssignment();
runPuzzle();
