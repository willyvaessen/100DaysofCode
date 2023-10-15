const numButtons = document.querySelectorAll('.btn');
const inputDisplay = document.querySelector('.inputDisplay');

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


delete_btn.addEventListener('click', () => {
    chars.pop();
    inputDisplay.textContent = chars.join('');
    console.log(chars);
})

clear_btn.addEventListener('click', () => {
    chars = [];
    inputDisplay.textContent = chars.join('');
    console.log(chars);
})

multi_btn.addEventListener('click', () => {
    console.log("Multi Action button pressed.");
    inputDisplay.textContent = "Actieknop indrukt"
})

// space_btn.addEventListener('click', () => {
//     chars.push(' ')
//     textarea.value = chars.join('');
//     console.log(chars);
// })