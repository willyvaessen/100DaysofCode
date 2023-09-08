function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
product *= i;
    }
  return product;
}

console.log(factorialize(5));









// function factorialize(num) {
//     for (let i = 1; i <= num; i++) {
//         let num = i;
//         console.log("Num is " + num)
//         console.log("Index is " + i);
//         num = num * num;
//         console.log("Number " + i + " is " + num)
//     }
//   return num;
// }
//
// factorialize(5);