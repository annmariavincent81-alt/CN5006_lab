//example 1
console.log("example 1 ");
console.log("This is my first program");
console.log("Welcome John your monthly salary is 50000");

console.log("_____________________________________________")


//example2
console.log("example 2");
const num1 = 5;
const num2 = 3;
//addition 
const sum = num1 + num2;
//display
console.log('The sum is ' + num1 + ' and ' + num2 + ' is ' + sum );

console.log("_____________________________________________")
//example 3 
console.log("example 3 ");
const prompt = require('prompt-sync')();//essential line 
console.log("starting");
const name = prompt('Enter your name: ');
console.log('Hello, ' + name);
//This program checks if the number is positive, negative or zero
// input from the user 
const number = parseInt(prompt("Enter a number: "));  
// check if number is greater than 0 
if (number > 0) {    
     console.log("The number is positive"); }  
// check if number is 0 
else if (number == 0) {  
     console.log("The number is zero"); }  
// if number is less than 0 
else {      console.log("The number is negative");}