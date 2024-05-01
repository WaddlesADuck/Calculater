// Create a function to add two numbers
function add(a, b) {
  return a + b;
}

// Create a function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Create a function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Create a function to divide two numbers
function divide(a, b) {
  return a / b;
}

// Create a function to get the user's input
function getInput() {
  const input = prompt("Enter an expression:");
  return input;
}

// Create a function to evaluate the user's input
function evaluate(input) {
  // Split the input into an array of numbers and operators
  const tokens = input.split(" ");

  // Create a stack to store the operands
  const stack = [];

  // Iterate over the tokens
  for (const token of tokens) {
    // If the token is a number, push it onto the stack
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    }

    // If the token is an operator, pop the last two operands from the stack and perform the operation
    else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = eval(`${operand1} ${token} ${operand2}`);
      stack.push(result);
    }
  }

  // Return the result at the top of the stack
  return stack.pop();
}

// Create a function to display the result
function displayResult(result) {
  console.log(result);
}

// Get the user's input
const input = getInput();

// Evaluate the user's input
const result = evaluate(input);

// Display the result
displayResult(result);
