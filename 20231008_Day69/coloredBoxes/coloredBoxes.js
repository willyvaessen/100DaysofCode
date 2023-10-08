let attempts = 0;

const attemptsCounter = document.querySelector("#attemptsCounter")
const boxes = document.querySelectorAll(".grid-box");
const boxesArray = [];
const redColor = "rgb(120, 0, 0)";
const blueColor = "rgb(0, 0, 120)";
let gameOver = false;

function toggleBoxColor(box) {
    let boxBGColor = window.getComputedStyle(box).backgroundColor;
    if (boxBGColor === blueColor) {
        box.style.backgroundColor = redColor;
    } else if (boxBGColor === redColor) {
        box.style.backgroundColor = blueColor;
    }
}

function multiToggle(...Boxes) {
    let boxID;
    for (let i = 0; i < Boxes.length; i++) {
        boxID = "#" + Boxes[i];
        const boxToChange = document.querySelector(boxID);
        toggleBoxColor(boxToChange);
    }
}

function checkGrid(boxesArray) {
    let boxID;
    let blueCount = 0;
    let redCount = 0;
    for (let i = 0; i < boxesArray.length; i++) {
        boxID = "#" + boxesArray[i];

        let boxToCheck = document.querySelector(boxID);
        let boxBGColor = window.getComputedStyle(boxToCheck).backgroundColor;
        if (boxBGColor === blueColor) {
            blueCount++;
        } else if (boxBGColor === redColor) {
            redCount++
        }
    }
    if ((blueCount === 0) && (redCount === 16)) {
        gameOver = true;
    }
}

function gameEnd() {
    boxes.forEach(function (box){
        box.classList.add("end-game-animation");
    });
}

//  Loop through the boxes that we have. Currently, 16 (because fixed)
boxes.forEach(function (box) {
    boxesArray.push(box.id);

    box.addEventListener("click", function (e) {

        const styles = e.currentTarget.classList;

        if (styles.contains("A1")) {
            multiToggle("A1", "B3", "C2", "D2", "D4");
        } else if (styles.contains("C1")) {
            multiToggle("C1", "A2", "A4", "B3", "B4", "D3");
        } else if (styles.contains("B3")) {
            multiToggle("C1", "D1", "B4", "B1", "C4");
        } else if (styles.contains("B4")) {
            multiToggle("B4", "A3", "B2", "B3", "C1", "C3");
        } else if (styles.contains("A2")) {
            multiToggle("A2", "B4", "D3", "C1");
        } else if (styles.contains("A3")) {
            multiToggle("A3", "B1", "C2", "D2", "C4");
        } else if (styles.contains("A4")) {
            multiToggle("C1", "D1", "B4", "B1", "C4");
        } else if (styles.contains("B1")) {
            multiToggle("B1", "D2", "D4", "B4", "A3");
        } else if (styles.contains("B2")) {
            multiToggle("B2", "A4", "C3", "A2", "D1");
        } else if (styles.contains("C2")) {
            multiToggle("C2", "A1", "D4", "B3", "D1");
        } else if (styles.contains("C3")) {
            multiToggle("B1", "A4", "D3");
        } else if (styles.contains("C4")) {
            multiToggle("A3", "B1", "C2", "D2");
        } else if (styles.contains("D1")) {
            multiToggle("C1", "B4", "B1", "C4");
        } else if (styles.contains("D2")) {
            multiToggle("D2", "A4", "B1", "C3");
        } else if (styles.contains("D3")) {
            multiToggle("D3", "A1", "B3", "C2", "A4");
        } else if (styles.contains("D4")) {
            multiToggle("D4", "A1", "A4", "B3", "C2", "D2");
        }
        // console.log("Event: "+e);
        // console.log(box);
        // toggleBoxColor(box);
        attempts++;
        attemptsCounter.textContent = attempts;
        checkGrid(boxesArray);
        console.log(gameOver);
        if (gameOver === true) {
    gameEnd();
}
    });

})

