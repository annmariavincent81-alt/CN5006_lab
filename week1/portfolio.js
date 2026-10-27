// week 1 portfolio

/*
// simple calculator with the numbers already given in the code 

//numbers i want to calculate
let num1 = 5;
let num2 = 15;
//addition 
let sum = num1+num2;
//subtraction 
let subtraction = num1 - num2;
// multiplication 
let multiplication = num1 * num2;
// division 
let division = num1/num2 ;
//print result 
console.log("numbers:",num1, "and", num2 );
console.log("addition:",sum);
console.log("subtraction:", subtraction);
console.log("multiplication:", multiplication);
console.log("division:", division);
*/

// basic arthemetic calculator

//for interactive terminal input 
const prompt = require('prompt-sync')();

//functions for basic operations 
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed";
    }
    return a / b;
}
//asking name to interact with thew user 
const name = prompt("Enter your name: ");
console.log(`Hello, ${name}! Let's perform basic arithmetic calculations.\n`);

// Getting two numbers from the user 
//parseFloat converts the string input into decimal numbers 
const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));

//useing if loop to see if number 1 and 2 the user inputer is number or a charecter and if the did it prints a error message or do the mathematical operation  
//isNAN checks if the input is a number or a character
if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Invalid input. Please enter numerical values.");
} else {
    //calling functions to perfom calculations 
    //parameters (a,b) is replacesed by the numbers the user input 
    const sumResult = add(num1, num2);
    const diffResult = subtract(num1, num2);
    const prodResult = multiply(num1, num2);
    const divResult = divide(num1, num2);

    // Display the output
    console.log(`Numbers entered: ${num1} and ${num2}`);
    console.log(`Addition (${num1} + ${num2})       : ${sumResult}`);
    console.log(`Subtraction (${num1} - ${num2})    : ${diffResult}`);
    console.log(`Multiplication (${num1} * ${num2}) : ${prodResult}`);
    console.log(`Division (${num1} / ${num2})       : ${divResult}`);
}