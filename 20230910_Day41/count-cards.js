//  Counting Cards

//  In the casino game Blackjack, a player can determine whether they have an advantage, on the next hand, over the house
//  by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
//
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table
// below. When the count is positive, the player should bet high. When the count is zero or negative, the player should
// bet low.

let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break
    }
    // console.log("Count is " + count)
    if (count > 0) {
        return (count + " Bet");
    } if (count <= 0) {
            return (count + " Hold");
    }

    // Only change code above this line
}


console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));