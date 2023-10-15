//  declare variables, linked to content on the application site.
const leftTerm = document.getElementById("leftTerm");
const rightTerm = document.getElementById("rightTerm");
const scoreContainer = document.getElementById("score");
const userInputAnswer = document.getElementById("inputDisplay");
const currentRoundContainer = document.getElementById('currentRound');
const maxRoundContainer = document.getElementById('maxRounds');
const gameHistory = {round: '', attempts: '', assignment: ''}
let score =0;
let currentRound = 0;
const maxRounds = 5;
let solution;
let attempts;

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
    return left * right;
}

function updateScoreBoard() {
    scoreContainer.textContent = score.toString();
    currentRoundContainer.textContent = currentRound.toString();
    maxRoundContainer.textContent = maxRounds.toString();
}

function resetScores() {
    console.log("Resetting scores");
    let score = 0;
    let currentRound = 0;
    const maxRounds = 5;
    let solution = 0;
    let attempts = 0;
    updateScoreBoard();
    clearInput();
}

function startNewGame() {   //  Starts a new game. Load when site is opened.
    currentRound++
    console.log("Starting round #" + currentRound);
    updateScoreBoard();
    solution = createAssignment();  //  Creates a puzzle and fills the html placeholders
    clearInput();   //  Clears the input field.
}

//  Now that the game is running, it's time to let the user enter a solution, and tap the GO button.
function handleUserInput() {
    let answerToCheck = userInputAnswer.textContent;
    attempts++;
    if (answerToCheck === solution.toString()) {
        console.log("Dat antwoord is goed.");
        handleCorrectAnswer();
    } else {
        console.log("Dat antwoord is niet goed.");
        handleIncorrectAnswer();
    }
}

function handleCorrectAnswer() {
    console.log("Correct solution entered");
    //  Add code to continue after a correct answer.
    inputDisplay.textContent = "Goed";
    inputDisplay.style.color = "green";
    inputDisplay.style.fontSize = "64px"
    multi_btn.textContent = "Next";
    multi_btn.style.backgroundColor = "green";
    score++;
    console.log(score);
    console.log(currentRound);
    if (currentRound < maxRounds) {
        startNewGame();
    } else if (currentRound === maxRounds) {
        endGame();
    }

}

function handleIncorrectAnswer() {
    console.log("Incorrect solution entered")
    //  Add code to continue after an incorrect answer.
    inputDisplay.textContent = "Fout";
    inputDisplay.style.color = "red";
    inputDisplay.style.fontSize = "64px"
    multi_btn.textContent = "Again";
    multi_btn.style.backgroundColor = "red";
    // clearInput()
    console.log("Number of attempts: " + attempts);
}

function nextPuzzle() {
    console.log("Starting next puzzle");
    currentRound++
}

function endGame() {
    console.log("That was the last round.")
    resetScores();
}

// resetScores();
startNewGame(); //  Starts a new game.