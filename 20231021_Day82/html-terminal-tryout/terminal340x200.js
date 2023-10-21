// const rows = 10;
// const cols = 32;
const terminal = document.getElementById("terminal340x200");
//  Let's start by tring to fill one line of the terminal.
const coords = [];


//  Start of populateGrid function
function populateGrid(rows, cols) {
    terminal.textContent = '';
    let terminalContent = '';
//  This generates the row
    for (let i = 0; i < rows; i++) {
        terminalContent += `<p id="line${i}" class="terminal">`
//  This generates the column.
        for (let j = 0; j < cols; j++) {
            terminalContent += `<span id="r${i}c${j}" class = "terminal">o</span>`
            // console.log(`ID= r${i}c${j}`)
            coords.push(`r${i}c${j}`)
            // console.log(coords)
        }
    }
    terminal.insertAdjacentHTML("afterbegin", terminalContent);
}

//  End of populateGrid function

//  Functions for the movement buttons.
function moveUp() {
    console.log("Moving UP");
}

function moveDown() {
    console.log("Moving DOWN");
}

function moveLeft() {
    console.log("Moving LEFT");
}

function moveRight() {
    console.log("Moving Right");
}

// console.log(terminalContent);

//  The setActiveChar function will mark one character in the grid as active and give it another color.
//  I'll start building it with id="r5c11", which will later be randomized.
function setActiveChar(id) {
    const charToActive = document.getElementById(id);
    // console.log(charToActive.id);
    charToActive.textContent = 'X';
    charToActive.style.color = 'yellow';
}

function setRandomCoord() {
    // console.log("Length of the array is " + coords.length + " which means there are " + coords.length + " positions in the grid");
    let min = 0;
    let max = coords.length;
    // console.log("Generating a random number in the range of " + min + " and " + max);

    let generatedID = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
    // console.log("Generated ID is " + generatedID);
    // console.log("Generated Coordinate is " + generatedCoord);
    return coords[generatedID];
}
