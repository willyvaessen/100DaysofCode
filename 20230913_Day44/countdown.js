//  Use Recursion to Create a Countdown

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        console.log(countArray);
        return countArray;
    }
}

// console.log(countup(13));


// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countDownArray = countdown(n - 1);
        countDownArray.unshift(n);
        return countDownArray;
    }
}

// Only change code above this line


console.log(countdown(-1));
console.log(countdown(10));
console.log(countdown(5));
