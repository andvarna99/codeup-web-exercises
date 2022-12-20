"use strict";
/** This should contain functions for creating a shuffled deck of cards
 * and drawing the top card from the deck. a card must be represented as an
 * object with rank (1-10. jack, queen, king, ace) and suit (clubs, spades,
 * hearts, diamonds). The deck of cards should stay a global in this file but
 * other files should not directly access the deck.
 */


let ranks =[2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"];
let suits =["Spades","Hearts","Clubs","Diamonds"];
let deck = [];

function getDeck(){
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            let card={
                Rank: ranks[j],
                Suit: suits[i],
            };
            deck.push(card);
        }
    }
    return deck;
}
getDeck();

//borrowed code from programiz.com to shuffle
for(let i = deck.length -1; i > 0; i--){
    let j = Math.floor(Math.random()*i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

var humanHand = [];
var computerHand = [];

function dealDeck() {
    humanHand.push(deck.pop()); humanHand.push(deck.pop());
    console.log(humanHand);
    computerHand.push(deck.pop()); computerHand.push(deck.pop());
    console.log(computerHand);
}
dealDeck();

function handTotal(arr){
    var total = 0
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i].Rank);
        if (arr[i].Rank === "Jack" ||arr[i].Rank === "Queen" ||arr[i].Rank === "King"){
            arr[i].Rank
            total += 10
        } else if (arr[i].Rank === "Ace" ){
            arr[i].Rank
            total += 11
        }else{
            total += arr[i].Rank
        }
    }
    console.log(total);
}

handTotal(humanHand);


// console.log('Your cards are:');
// console.log(deck.pop());
// console.log(deck.pop());
//
//
//
// console.log(`Computer's cards are:`);
// console.log(deck.pop());
// console.log(deck.pop());


//hand is an array
//pop takes card from the top, shift takes card from the bottom
// let myHand=[];
// let drawnCard= deck.pop();
// myHand.push(drawnCard);
//
// console.log(getDeck);
// console.log(myHand);