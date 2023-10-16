const numButtons = document.querySelectorAll('.btn');
const inputDisplay = document.querySelector('.inputDisplay');
const left_action1_btn = document.querySelector('.leftActionButtonOne')
const left_action2_btn = document.querySelector('.leftActionButtonTwo')
const delete_btn = document.querySelector('.deleteButton');
const clear_btn = document.querySelector('.clearButton');
const multi_btn = document.querySelector('.multiButton');
let chars = [];

numButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        inputDisplay.textContent += btn.innerText;
        chars = inputDisplay.textContent.split('');
        console.log(chars);
    })
})

function clearInput() {
    chars = [];
    inputDisplay.textContent = chars.join('');
    inputDisplay.style.color = "#011078";
    multi_btn.textContent = "Go";
    multi_btn.style.backgroundColor = "#011078";
    console.log(chars);
}

delete_btn.addEventListener('click', () => {
    chars.pop();
    inputDisplay.textContent = chars.join('');
    console.log(chars);
})

clear_btn.addEventListener('click', () => {
    clearInput();
})

multi_btn.addEventListener('click', () => {
    console.log("Multi Action button pressed.");
    if (inputDisplay.textContent === "") {
        console.log("No user input. Nothing to do now.");
        inputDisplay.textContent = "Actieknop ingedrukt"
        clearInput();
        // handleUserInput();
    } else if ((inputDisplay.textContent === "Goed") && (multi_btn.textContent === "Next")) {
        console.log("Going to next assignment.");
    } else if ((inputDisplay.textContent === "Fout") && (multi_btn.textContent === "Again")) {
        console.log("Next attempt");
        clearInput();
    }

    else {
        handleUserInput();
    }

})

left_action1_btn.addEventListener('click', () => {
    console.log("Left Action Button 1 clicked.");
})

left_action2_btn.addEventListener('click', () => {
    console.log("Left Action Button 2 clicked");
})
