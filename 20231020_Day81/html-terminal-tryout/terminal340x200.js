const rows = 10;
const cols = 32;
const terminal = document.getElementById("terminal340x200");
//  Let's start by tring to fill one line of the terminal.

let terminalContent = '';

//  This generates the row
for (let i=0; i<rows; i++){
    terminalContent += `<p id="line${i}" class="terminal">`
//  This generates the column.
for (let j = 0; j < cols; j++){
    terminalContent += `<span id="r${i}c${j}" class = "terminal">o</span>`
}
}




console.log(terminalContent);

terminal.insertAdjacentHTML("afterbegin", terminalContent);