let activePlayer = "Player 1";
let marker = "X";
const currentPlayer = document.querySelector("#playerID");
const boxes = document.querySelectorAll(".playGridBox");
currentPlayer.textContent = activePlayer;

function playTurn(box) {
    if (activePlayer === "Player 1") {
        marker = "X";
    } else if (activePlayer === "Player 2") {
        marker = "O";
    }
    box.textContent = marker;
    toggleActivePlayer();
}

const square01 = document.getElementById("A1");
const square02 = document.getElementById("A2");
const square03 = document.getElementById("A3");
const square04 = document.getElementById("B1");
const square05 = document.getElementById("B2");
const square06 = document.getElementById("B3");
const square07 = document.getElementById("C1");
const square08 = document.getElementById("C2");
const square09 = document.getElementById("C3");

function checkWin() {
    let winner;
    //  Check first row
    if ((square01.textContent === square02.textContent) && (square02.textContent === square03.textContent)) {
        winner = activePlayer;
        // square01.backgroundColor.value = "green";
        // square02.backgroundColor.value = "green";
        // square03.backgroundColor.value = "green";
    } else if ((square04.textContent === square04.textContent) && (square04.textContent === square05.textContent)) {
        winner = activePlayer;
    } else if ((square07.textContent === square08.textContent) && (square08.textContent === square09.textContent)) {
        winner = activePlayer;
    } //    Now check the columns
    else if ((square01.textContent === square04.textContent) && (square04.textContent === square07.textContent)) {
        winner = activePlayer;
    } else if ((square02.textContent === square05.textContent) && (square05.textContent === square08.textContent)) {
        winner = activePlayer;
    } else if ((square03.textContent === square06.textContent) && (square06.textContent === square09.textContent)) {
        winner = activePlayer;
    } //    And finally check the diagonals
    else if ((square01.textContent === square05.textContent) && (square05.textContent === square09.textContent)) {
        winner = activePlayer;
    } else if ((square03.textContent === square05.textContent) && (square05.textContent === square07.textContent)) {
        winner = activePlayer;
    }
    console.log(winner + " wins the game.")
    // return winner;
}

function toggleActivePlayer() {
    if (activePlayer === "Player 1") {
        activePlayer = "Player 2";
    } else if (activePlayer === "Player 2") {
        activePlayer = "Player 1";
    }
    currentPlayer.textContent = activePlayer;
}

boxes.forEach(function (box) {
    box.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        console.log("Field " + box.id + " was touched.");

        playTurn(box);
        checkWin();

    })
})

