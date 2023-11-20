const readline = require('readline');

// Create an interface to read user input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user to enter a number
rl.question('Enter a number: ', (input) => {
  const number = parseInt(input);

  // Check if the input is a valid number
  if (isNaN(number)) {
    console.log('Please enter a valid number.');
    rl.close();
    return;
  }

  // Generate and print the multiplication table
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }

  // Close the interface
  rl.close();
});
