const buttons = document.querySelectorAll('.btn');
const inputArea = document.querySelector('.inputArea');

const moveUpBtn = document.getElementById('btn_up');
const moveLeftBtn = document.getElementById('btn_left');
const moveRightBtn = document.getElementById('btn_right');
const moveDownBtn = document.getElementById('btn_down');
const startBtn = document.getElementById('start_btn');
const xBtn = document.getElementById('btn_X');
// const delete_btn = document.querySelector('.delete');
// const shift_btn = document.querySelector('.shift');
// const space_btn = document.querySelector('.space');

let chars = [];

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        inputArea.textContent += btn.innerText;
        chars = inputArea.textContent.split('');
        console.log(chars);
    })
})

startBtn.addEventListener('click', () => {
    console.log("Start Button clicked")

    populateGrid(10, 32);
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
    console.log("Generated Coordinate is " + setRandomCoord());



})

//
// delete_btn.addEventListener('click', () => {
//     chars.pop();
//     inputArea.textContent = chars.join('');
//     console.log(chars);
// })
//
// shift_btn.addEventListener('click', () => {
// buttons.forEach(btn => {
//     btn.classList.toggle('upper')
// })
// })
//
// space_btn.addEventListener('click', () => {
//     chars.push(' ')
//     inputArea.textContent = chars.join('');
//     console.log(chars);
// })