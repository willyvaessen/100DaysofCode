let attempts = 0;

const attemptsCounter = document.querySelector("#attemptsCounter")
const boxes = document.querySelectorAll(".grid-box");
const redColor = "rgb(120, 0, 0)";
const blueColor = "rgb(0, 0, 120)";

function toggleBoxColor(box) {
    let boxBGColor = window.getComputedStyle(box).backgroundColor;
    if (boxBGColor === blueColor) {
        box.style.backgroundColor = redColor;
    } else if (boxBGColor === redColor) {
        box.style.backgroundColor = blueColor;
    }
}
function gameMove(firstBox, ...extraBoxes) {
    let boxID;
    for (let i = 0; i < extraBoxes.length; i++) {
        boxID = "#" + extraBoxes[i];
        const boxToChange = document.querySelector(boxID);
        toggleBoxColor(boxToChange);
    }
}
//  Loop through the boxes that we have. Currently, 16 (because fixed)
boxes.forEach(function (box) {
    box.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;

        if (styles.contains("A1")) {
            gameMove("A1", "B3", "C2", "D2", "D4");
        } else if (styles.contains("C1")) {
            gameMove("C1", "A2", "A4", "B4", "D3");
        } else if (styles.contains("B3")) {
            gameMove("C1", "D1", "B4", "B1", "C4");
        } else if (styles.contains("B4")) {
            gameMove("B4", "A3", "B2", "B3", "C3");
        }
        // console.log("Event: "+e);
        console.log(box);
        toggleBoxColor(box);
        attempts++;
        attemptsCounter.textContent = attempts;
    });

})