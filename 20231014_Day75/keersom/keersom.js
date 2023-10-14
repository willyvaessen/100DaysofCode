let leftTerm = document.getElementById("leftTerm");
let rightTerm = document.getElementById("rightTerm");
const resultContainer = document.getElementById("resultOutput");
const userInputAnswer = document.getElementById("answer");
const checkForm = document.getElementById("checkUserAnswer");

function randomTerm() {
    return Math.floor((Math.random() * 10)+1);
}

function createAssignment() {
    let left = randomTerm();
    let right = randomTerm();
    leftTerm.textContent = left.toString();
    rightTerm.textContent = right.toString();
    return left * right;
}




checkForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //  Handle submit
    // checkAnswer()

    resultContainer.textContent = checkAnswer();
});
function checkAnswer() {
    let result;
    if (userInputAnswer.value === assignment.toString()) {
        console.log("Dat is goed.")
        result = "Goed";
    } else {
        console.log("Dat is helaas fout.")
        result = "Fout";
    }
    return result;
}

let assignment = createAssignment();
