"use strict"
/**
 * TODO
 * Create a while loop that uses console.log()
 * to create 2 with different exponents
 */

let i = 1
while (i <= 16){
    console.log(Math.pow(2,i)) //(2**i);
    i++
}

/**
 * TODO
 * generate a random number between 50 and 100= amount of cones to sell
 * start loop and generate another random number between 1 and 5 =
 * amount of cones being bought
 * use do while loop to console log amount of cones sold
 */

const maxConeInventory = 100;
const minConeInventory = 50;
let allConeInventory = Math.floor(Math.random()* (maxConeInventory - minConeInventory + 1) + minConeInventory);

console.log(`I have ${allConeInventory} cones to sell`);
do {
    const maxConesPerSale = 5;
    const minConesPerSale = 1
    let conesSold = Math.floor(Math.random()* (maxConesPerSale -minConesPerSale + 1) + minConesPerSale);
    if (allConeInventory - conesSold > 0){
        allConeInventory -= conesSold
        console.log(`I have ${allConeInventory} cones to sell`);
    } if (allConeInventory < conesSold){
        console.log(`I cant sell ${conesSold }cones, I only have ${allConeInventory}`);
        continue;
    } if (allConeInventory - conesSold === 0){
        console.log(`Yay! I sold them all!`);
        break;
    }
} while (allConeInventory >0)