const originalArr = [3, 6, 0, 1, 4, 6, 8, 112];
let value = 3;
let start = 0;
let end = 8;
function createNewArray(value, start, end) {
    return originalArr.fill(value, start, end);
}

console.log(createNewArray(value, start, end));

//
// console.log(createNewArray(3,0,8))
//
