const box = document.querySelectorAll(".grid-box");
const boxA1 = document.querySelector("#A1");
console.log("The first box is " + boxA1.id);

boxA1.addEventListener("click", function (e) {
    const currentColor = boxA1.style.backgroundColor.valueOf();
    console.log("The current color of the box is "+currentColor);
    if (currentColor === "#000078") {
        boxA1.style.backgroundColor = "#780000";
    } else if ((currentColor === "#780000")){
        boxA1.style.backgroundColor = "#000078";
    }
})

const boxes = [];   //  Puts the ID's in an array. Should be length = 16.

//  The code below loops through the boxes and adds their ID to an array

box.forEach(function (box) {
    boxes.push(box.attributes[0].value);
});


// console.log(boxes);

// box.forEach(function(box) {
//
//     // console.log(box.attributes[0].value);
//     // console.log(box.attributes[1].value)
//     box.addEventListener("click", function (e) {
//         const boxStyle = e.currentTarget.classList;
//         const boxColor = e.currentTarget.attributes;
//         console.log("Box clicked/tapped is " + boxStyle);
//         console.log("It's attributes are" + boxColor);
//         if (boxStyle.contains("A1")) {
//             console.log("You clicked box " + boxStyle);
//             console.log(boxStyle.attributes[0].value);
//         }
//     });
// });