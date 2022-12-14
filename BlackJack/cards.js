"use strict";
/** This should contain functions for creating a shuffled deck of cards
 * and drawing the top card from the deck. a card must be represented as an
 * object with rank (1-10. jack, queen, king, ace) and suit (clubs, spades,
 * hearts, diamonds). The deck of cards should stay a global in this file but
 * other files should not directly access the deck.
 */
//the card variables
// let suits = ["Spades","Hearts","Clubs","Diamonds"];
// let rank = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
// let fullDeck=suits*rank;
//
// console.log(fullDeck);

//function to create a new card object for each card



let ranks =["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
let suits =["Spades","Hearts","Clubs","Diamonds"];

function getDeck(){
    let deck = new Array();
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            let card={Rank: ranks[j], Suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
}

console.log(getDeck());

// let playerDeck = new deck();
// console.log(playerDeck);
//
// function shuffle(){
//     for (let i = 0; i < 1000; i++) {
//         Math.floor((Math.random()*deck.length));
//     }
// }