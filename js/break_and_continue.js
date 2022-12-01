"use strict"

/**TODO
 Prompt the user for an odd number between 1 and 50.
 Use a loop and a break statement to continue prompting the user
 if they enter invalid input.
 */
/**
 * TODO
 * Use a loop and the continue statement
 * to output all the odd numbers between 1 and 50,
 * except for the number the user entered.
 */
let oddNum = 0
let valid = false;
while(!valid) {
    oddNum = prompt ("Enter an odd whole number between 1 and 50.");
    if (isNaN(oddNum)) {
        alert("Invalid input! You entered something that was not a number.");
        continue;
    }else if (oddNum % 2 === 0) {
        alert("Invalid input! You entered an even number.");
        continue;
    } else if ( oddNum > 50 ) {
        alert("Invalid input! You entered a number greater than 50.");
        continue;
    }else if (oddNum < 1) {
        alert ("Invalid input! You entered a number less than 1.");
        continue;
    }
    valid = true;
}


for (let i = 1;i < 50;i++) {
    if (i % 2 === 0) {
        continue;
    } else if (i == oddNum) {
        console.log(`Yikes! Skipping number: ${oddNum}`);
    }else {
        console.log(`Here is an odd Number: ${i}`);
    }
}