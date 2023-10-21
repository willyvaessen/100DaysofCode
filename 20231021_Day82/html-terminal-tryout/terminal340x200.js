const rows = 10;
const cols = 32;
const terminal = document.getElementById("terminal340x200");
//  Let's start by tring to fill one line of the terminal.



function populateGrid(rows, cols) {
    //  Start of populateGrid
        terminal.textContent = '';
    let terminalContent = '';
//  This generates the row
    for (let i = 0; i < rows; i++) {
        terminalContent += `<p id="line${i}" class="terminal">`
//  This generates the column.
        for (let j = 0; j < cols; j++) {
            terminalContent += `<span id="r${i}c${j}" class = "terminal">o</span>`
        }
    }
    terminal.insertAdjacentHTML("afterbegin", terminalContent);
//  End of populateGrid

}


// console.log(terminalContent);




