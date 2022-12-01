"use strict"
/**question 2
 * TODO
 * create a multiplication table
 */
function showMultiplicationTable(num){
    for(let i=1;i<=10;i++){
        let result = (i * num);
        let message = `${i}  X  ${num} = ${result}`;
        console.log(message);
    }
}
console.log(showMultiplicationTable(7));

/** question 3
 * TODO:
 * use a for loop to generate 10 random numbers between 20
 * and 200 and output whether each number is
 * even or odd
 */
let random = Math.floor((Math.random() * 200) + 20);
function evenOrOddRandomNum(){
    for (let i=0;i<10;i++){
        random = Math.floor((Math.random() * 200) + 20);
        if (random % 2 === 0) {
            console.log(random + " is even");
        } else if (random % 2 === 1) {
            console.log(random + " is odd");
        }
    }
}
evenOrOddRandomNum();

/**question 4
TODO:
create a for loop that uses console.log to create a
pyramid of numbers from 1 to 9 1 being 1 number and
9 having 9 ie: 1,22,333,4444,55555,666666,etc
 */

function numberPyramid() {
    let totalNumberOfRows = 9;
    let output = '';
    for (let i = 1; i <= totalNumberOfRows; i++) {
        for (let j = 1; j <= i; j++) {
            output = output + i;
        }
        output = output + '\n';
    }
    console.log(output);
}


numberPyramid();


/** question 5
 TODO:
 create a for loop that uses console.log
 to create multiples of 5, numbers decreasing from 100 ie:100, 95, 90, etc..
 */

function multiplesOfFive() {
    for (let i = 20; i >= 1; i--) {
        let result = i * 5;
        console.log(result);
    }
}
multiplesOfFive();