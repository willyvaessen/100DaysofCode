//  Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
    console.log("Min is " + myMin);
    console.log("Max is " + myMax);
    console.log("Max - Min + 1 = ");
    console.log(myMax - myMin + 1);
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;


}


console.log(randomRange(5,15));