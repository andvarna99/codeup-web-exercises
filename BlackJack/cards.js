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
function card (value,name,suit){
    this.value = value;
    this.name = name;
    this.suit = suit;
}

function deck(){
    this.names=["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
    this.suits=["Spades","Hearts","Clubs","Diamonds"];
    let cards = [];

    for (let i = 0; i < this.suits.length; i++) {
        for (let j = 0; j < this.names.length; j++) {
            cards.push(new card(j+1, this.names[j],this.suits[i]));
        }
    }
    return cards;
}

let playerDeck = new deck();
console.log(playerDeck);

function shuffle(){
    for (let i = 0; i < 1000; i++) {
        Math.floor((Math.random()*deck.length));
    }
}