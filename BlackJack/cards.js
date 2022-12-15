"use strict";
/** This should contain functions for creating a shuffled deck of cards
 * and drawing the top card from the deck. a card must be represented as an
 * object with rank (1-10. jack, queen, king, ace) and suit (clubs, spades,
 * hearts, diamonds). The deck of cards should stay a global in this file but
 * other files should not directly access the deck.
 */


let ranks =["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
let suits =["Spades","Hearts","Clubs","Diamonds"];

function getDeck(){
    let deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            let card={Rank: ranks[j], Suit: suits[i]};
            deck.push(card);
        }

    }
    return deck;
}

console.log(getDeck());

//hand is an array
//pop takes card from the top, shift takes card from the bottom
let myHand=[];
let drawnCard=getDeck.pop();
myHand.push(drawnCard);

console.log(getDeck);
console.log(myHand);