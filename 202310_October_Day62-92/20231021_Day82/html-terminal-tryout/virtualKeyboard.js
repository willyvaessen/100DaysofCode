const buttons = document.querySelectorAll('.btn');
const inputArea = document.querySelector('.inputArea');

const moveUpBtn = document.getElementById('btn_up');
const moveLeftBtn = document.getElementById('btn_left');
const moveRightBtn = document.getElementById('btn_right');
const moveDownBtn = document.getElementById('btn_down');
const startBtn = document.getElementById('start_btn');
const xBtn = document.getElementById('btn_X');


let chars = [];

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        updateInputField(btn)
    })
})

startBtn.addEventListener('click', () => {
    console.log("Start Button clicked")
    clearInputField()
    populateGrid(rows, cols );
    setActiveChar(setRandomCoord());
})

moveUpBtn.addEventListener('click', () => {
    console.log("Button UP pressed");
    moveUp();

})

moveDownBtn.addEventListener('click', () => {
    console.log("Button DOWN pressed");
    moveDown();
})

moveLeftBtn.addEventListener('click', () => {
    console.log("Button LEFT pressed");
    moveLeft();
})

moveRightBtn.addEventListener('click', () => {
    console.log("Button RIGHT pressed");
    moveRight();
})

xBtn.addEventListener('click', () => {
    getCurrenPosition(currentChar);

})

function updateInputField(btn) {
    inputArea.textContent += btn.innerText;
    chars = inputArea.textContent.split('');
    console.log(chars);
}

function clearInputField() {
    inputArea.textContent = '';
}
