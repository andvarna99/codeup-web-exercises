"use strict"
console.log("Hello from external JavaScript")

alert(`Welcome to my Website!`)

let color = prompt (`What is your favorite color?`)
alert (`Wow! ${color} is my favorite color too!`)

let mermaid = prompt (`How many days did you rent The Little Mermaid for?`)
let bear = prompt (`How many days did you rent Brother Bear for?`)
let hercules = prompt (`How many days did you rent Hercules for?`)

mermaid = parseInt(mermaid)
bear = parseInt(bear)
hercules = parseInt(hercules)

//add mermaid, bear, and hercules together to get total days rented
let totalDays = mermaid + bear + hercules
let totalPrice = totalDays * 3

alert (`You will pay $${totalPrice} to rent The Little Mermaid, Brother Bear, and Hercules!`)

