// classic sum function example
function sum(a, b) {
    return a + b;
}

// arrow function example
let sum2 = (a, b) => {
    return a + b
}

// arrow function example 2
let sum3 = (a, b) => a + b

// function classic example
function isPositiveNumber(number) {
    return number > 0;
}

// arrow function example 2
var isPositiveNumber2 = (number) => {
    return number > 0
}

// arrow function example 3
var isPositiveNumber3 = number => number > 0


// classic example
function randomNumber() {
    return Math.random
}

// arrow example
const randomNumber2 = () => { return Math.random }


// arrow example
const randomNumber3 = () => Math.random


// classic example
document.addEventListener('click', function () {
    console.log('Click')
})

// arrow example
document.addEventListener('click', () => {
    console.log('Click')
}) 