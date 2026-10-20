// week 1 portfolio

/*
// simple calculator 

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
/**
 * Week 1 Portfolio - Sequential Arithmetic Calculator
 *
 * Performs sequential arithmetic operations.
 * Interactively asks for a number, then an operation, 
 * then a number, until the user types '='.
 *
 * Run interactively:      node arithmetic.js
 * Run with arguments:     node arithmetic.js add 10 5 2
 */

const readline = require("readline/promises");

// ---------- Core arithmetic functions ----------

function add(numbers) {
  return numbers.reduce((total, n) => total + n);
}

function subtract(numbers) {
  return numbers.reduce((total, n) => total - n);
}

function multiply(numbers) {
  return numbers.reduce((total, n) => total * n);
}

function divide(numbers) {
  return numbers.reduce((total, n) => {
    if (n === 0) throw new Error("Cannot divide by zero.");
    return total / n;
  });
}

// ---------- Helpers ----------

const operations = { add, subtract, multiply, divide };

// This maps both symbols (+, -) and words (add, subtract) to your functions
const opMapping = {
  "+": "add",       "add": "add",
  "-": "subtract",  "subtract": "subtract",
  "*": "multiply",  "multiply": "multiply",
  "/": "divide",    "divide": "divide"
};

/**
 * Validates array inputs for the command-line argument feature.
 */
function parseNumbers(inputs) {
  const numbers = inputs.filter(Boolean).map(Number);
  if (numbers.length < 2) throw new Error("Please enter at least two valid numbers.");
  if (numbers.some(isNaN)) throw new Error("All inputs must be valid numbers.");
  return numbers;
}

// ---------- Program entry points ----------

function runFromArguments(args) {
  const [operation, ...inputs] = args;
  try {
    const op = operation.toLowerCase();
    const opName = opMapping[op];
    
    if (!opName) throw new Error(`Unknown operation "${operation}".`);
    
    const numbers = parseNumbers(inputs);
    const result = operations[opName](numbers);
    console.log(`\nResult: ${result}\n`);
  } catch (error) {
    console.error(`\nError: ${error.message}\n`);
  }
}

async function runInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("\n=== Sequential Calculator ===");
  console.log("Enter a number, then an operation (+, -, *, /). Type '=' to finish.\n");

  try {
    // 1. Get the starting number
    let firstInput = await rl.question("Enter a number: ");
    let currentTotal = Number(firstInput.trim());

    if (isNaN(currentTotal)) {
      throw new Error("That is not a valid starting number.");
    }

    // 2. Loop to ask for operation, then next number
    while (true) {
      // Ask for operation
      let opInput = await rl.question("Enter operation (+, -, *, /) or '=': ");
      opInput = opInput.trim().toLowerCase();

      // If user types '=', break the loop and show the final result
      if (opInput === "=") {
        break; 
      }

      // Check if it's a valid operation
      let opName = opMapping[opInput];
      if (!opName) {
        console.log("  -> Invalid operation. Please try again.");
        continue; // Restarts the loop to ask for operation again
      }

      // Ask for the next number
      let nextInput = await rl.question("Enter next number: ");
      let nextNum = Number(nextInput.trim());

      if (isNaN(nextNum)) {
        console.log("  -> Invalid number. Let's try that step again.");
        continue;
      }

      // 3. Perform the math using your existing functions
      // We pass the current total and the new number as an array
      currentTotal = operations[opName]([currentTotal, nextNum]);
      
      console.log(`  (Running total: ${currentTotal})`);
    }

    // 4. Print the final result when loop finishes
    console.log(`\n========================`);
    console.log(`Final Result: ${currentTotal}`);
    console.log(`========================\n`);

  } catch (error) {
    console.error(`\nError: ${error.message}\n`);
  } finally {
    rl.close();
  }
}

// ---------- Execution ----------

if (process.argv.length > 2) {
  runFromArguments(process.argv.slice(2));
} else {
  runInteractive();
}
