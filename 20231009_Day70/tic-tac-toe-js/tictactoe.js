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

function toggleActivePlayer() {
    if (activePlayer === "Player 1") {
        activePlayer = "Player 2";
    } else if (activePlayer === "Player 2") {
        activePlayer = "Player 1";
    }
    currentPlayer.textContent = activePlayer;
}

boxes.forEach(function(box){
    box.addEventListener("click", function (e) {
        const styles =e.currentTarget.classList;
        console.log("Field " + box.id + " was touched.");

        playTurn(box);
    })
})