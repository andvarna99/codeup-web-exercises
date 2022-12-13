"use strict";
/** This should contain functions for creating a shuffled deck of cards
 * and drawing the top card from the deck. a card must be represented as an
 * object with rank (1-10. jack, queen, king, ace) and suit (clubs, spades,
 * hearts, diamonds). The deck of cards should stay a global in this file but
 * other files should not directly access the deck.
 */
//the card variables
let suits = ["Spades","Hearts","Clubs","Diamonds"];
let rank = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
let fullDeck=suits*rank;

console.log(fullDeck);


