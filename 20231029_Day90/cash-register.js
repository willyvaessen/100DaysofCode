//  Cash Register
//
// Design a cash register drawer function checkCashRegister() that accepts
// purchase price as the first argument (price), payment as the second
// argument (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// The checkCashRegister() function should always return an object with a status
// key and a change key.
//
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is
//      less than the change due, or if you cannot return the exact change.
//
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the
//      value for the key change if it is equal to the change due.
//
// Otherwise, return {status: "OPEN", change: [...]}, with the change due
// in coins and bills, sorted in highest to lowest order, as the value of
// the change key.

//  Assignment code

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  // console.log(change);
  let cidTotal = 0;
  for (let elem of cid){
    // console.log(elem);
    cidTotal += elem[1];
    // console.log(cidTotal);
  }
  if(change > cidTotal){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (change === cidTotal) {
      return {status: "CLOSED", change: cid}
  } else {
      let result = [];
      console.log(cid)
      cid = cid.reverse();
      console.log(cid);
      console.log("Change is: " + change);
      let currencyUnits = {
          "ONE HUNDRED": 100,
          "TWENTY": 20,
          "TEN": 10,
          "FIVE": 5,
          "ONE": 1,
          "QUARTER": 0.25,
          "DIME": 0.10,
          "NICKEL": 0.05,
          "PENNY": 0.01
      }
        for (let elem of cid){
            let money = [elem[0],0]
            while (change >= currencyUnits[elem[0]] && elem[1] > 0) {
                change -= currencyUnits[elem[0]];
                elem[1] -= currencyUnits[elem[0]];
                money[1] += currencyUnits[elem[0]];
            }
            if (money[1] > 0) {
                result.push(money);
            }
        } return {status: "OPEN", change: result}
  }
}


//  Tests
console.log("1: ----------------------------------------")
console.log(checkCashRegister(19.5, 20,  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log("")
console.log("2: ----------------------------------------")
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log("")
console.log("3: ----------------------------------------")
console.log(checkCashRegister(19.5, 20,  [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log("")
console.log("4: ----------------------------------------")
console.log(checkCashRegister(19.5, 20,  [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log("")
console.log("5: ----------------------------------------")
console.log(checkCashRegister(19.5, 20,  [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log("")


//  Checking rules

//  1:  checkCashRegister(19.5, 20,  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])    should return an object.
//  1:  checkCashRegister(19.5, 20,  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])    should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
//  2:  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])    should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
//  3:  checkCashRegister(19.5, 20,  [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])                  should return {status: "INSUFFICIENT_FUNDS", change: []}.
//  4:  checkCashRegister(19.5, 20,  [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])                  should return {status: "INSUFFICIENT_FUNDS", change: []}.
//  5:  checkCashRegister(19.5, 20,  [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])                   should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
