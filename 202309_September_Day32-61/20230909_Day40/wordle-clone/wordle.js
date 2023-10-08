const height = 6;   //  Number of guesses
const width = 5;    //  Length of the word

let row = 0;        //  Current guess (attempt #)
let col = 0;        //  Current letter for that attempt

let gameOver = false;
let word = "SQUID"

//  Using a word list:
//  const words = ["SQUID", "APPLE", "QUOTE", "DAILY", "ROUSE"];
/// word = words[i];

window.onload = function () {
    initialize();
}

function initialize() {
    //  Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            //  <span id="0-0"></span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    //  Listen for keypress
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;
        // alert(e.code);
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currentTile = document.getElementById(row.toString() + "-" + col.toString());
                if (currentTile.innerText === "") {
                    currentTile.innerText = e.code[3];
                    col += 1;
                }
            }
        } else if (e.code === "Backspace") {
            if (0 < col && col <= width) {
                col -= 1;
            }
            let currentTile = document.getElementById(row.toString() + '-' + col.toString());
            currentTile.innerText = "";
        } else if (e.code === "Enter") {
            update();
            row += 1;   //  Start new row and end current attempt.
            col = 0;    //  Start at 0 for new row.
        }

        if (!gameOver && row === height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }

    });

    function update() {
        let correct = 0;
        for (let c = 0; c < width; c++) {
            let currentTile = document.getElementById(row.toString() + '-' + c.toString());
            let letter = currentTile.innerText;

            // Is the letter in the correct position?
            if (word[c] == letter) {
                currentTile.classList.add("correct");
                correct += 1;
            } //   Is the letter in the word?
            else if (word.includes(letter)) {
                currentTile.classList.add("present");
            } //   The letter is not in the word.

            else {
                currentTile.classList.add("absent");
            }

            if (correct == width) {
                gameOver = true;
            }
        }
    }


}