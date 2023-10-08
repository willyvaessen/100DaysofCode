let attempts = 0;

const attemptsCounter = document.querySelector("#attemptsCounter")
const boxes = document.querySelectorAll(".grid-box");
function toggleBoxColor(box) {
    let boxBGColor = window.getComputedStyle(box).backgroundColor;
    if (boxBGColor === "rgb(0, 0, 120)") {
        box.style.backgroundColor = "rgb(120, 0, 0)";
    } else if (boxBGColor === "rgb(120, 0, 0)"){
        box.style.backgroundColor = "rgb(0, 0, 120)";
    }
}

//  Loop through the boxes that we have. Currently, 16 (because fixed)
boxes.forEach(function (box) {
    box.addEventListener("click", function (e) {
        console.log(box);
        toggleBoxColor(box);
        attempts++;
        attemptsCounter.textContent = attempts;
    })
})